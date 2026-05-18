/* Vercel serverless function — proxies text to ElevenLabs TTS
   Required env var: ELEVENLABS_API_KEY
   Optional env var: ELEVENLABS_VOICE_ID  (defaults to Liam — multilingual male)
*/

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body || {};

  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return res.status(400).json({ error: 'text is required' });
  }

  if (text.length > 5000) {
    return res.status(400).json({ error: 'text exceeds 5000 characters' });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'TTS service not configured' });
  }

  /* Liam — TX3LPaxmHKxFdv7VOQHJ — natural male, excellent multilingual v2 Dutch
     Override by setting ELEVENLABS_VOICE_ID in Vercel env vars */
  const voiceId = process.env.ELEVENLABS_VOICE_ID || 'TX3LPaxmHKxFdv7VOQHJ';

  let elResponse;
  try {
    elResponse = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
          'Accept': 'audio/mpeg',
        },
        body: JSON.stringify({
          text: text.trim(),
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.45,
            similarity_boost: 0.80,
            style: 0.20,
            use_speaker_boost: true,
          },
        }),
      }
    );
  } catch (err) {
    console.error('ElevenLabs fetch failed:', err);
    return res.status(502).json({ error: 'Could not reach TTS service' });
  }

  if (!elResponse.ok) {
    const body = await elResponse.text().catch(() => '');
    console.error('ElevenLabs error', elResponse.status, body);
    return res.status(elResponse.status).json({ error: 'TTS service error' });
  }

  const audio = await elResponse.arrayBuffer();

  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Cache-Control', 'no-store');
  res.send(Buffer.from(audio));
};
