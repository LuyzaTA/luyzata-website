/* Vercel serverless function — proxies text to Google Cloud Text-to-Speech
   Required env var: GOOGLE_TTS_API_KEY
   Voice: nl-NL-Wavenet-D (native Dutch male, WaveNet)
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

  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'TTS service not configured' });
  }

  let gResponse;
  try {
    gResponse = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text: text.trim() },
          voice: {
            languageCode: 'nl-NL',
            name: 'nl-NL-Wavenet-D',
          },
          audioConfig: {
            audioEncoding: 'MP3',
            speakingRate: 0.90,
            pitch: 0.0,
          },
        }),
      }
    );
  } catch (err) {
    console.error('Google TTS fetch failed:', err);
    return res.status(502).json({ error: 'Could not reach TTS service' });
  }

  if (!gResponse.ok) {
    const body = await gResponse.text().catch(() => '');
    console.error('Google TTS error', gResponse.status, body);
    return res.status(gResponse.status).json({ error: 'TTS service error' });
  }

  const data = await gResponse.json();
  const audioBuffer = Buffer.from(data.audioContent, 'base64');

  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Cache-Control', 'no-store');
  res.send(audioBuffer);
};
