(function () {
  'use strict';

  var T = {
    en: {
      'nav.about':       'About',
      'nav.experience':  'Experience',
      'nav.skills':      'Skills',
      'nav.projects':    'Projects',
      'nav.credentials': 'Credentials',
      'nav.contact':     'Contact',

      'hero.label':       'Database Expert · Data Engineer · AI Practitioner',
      'hero.location':    'Netherlands',
      'hero.status':      'Open to opportunities',
      'hero.btn.contact': 'Get in touch',

      'stats.years':    'Years of Experience',
      'stats.countries':'Countries Worked In',
      'stats.mba':      'Data Science & AI — 2025',
      'stats.azure':    'Certified',

      'about.title': 'Profile',
      'about.p1': 'I am a database professional with over 14 years of enterprise experience at global organisations including HSBC Bank, Nordea Bank, and NTT Data Business Solutions. My deep expertise lies in IBM DB2 LUW production environments, system reliability, and large-scale database management across financial services and consulting sectors.',
      'about.p2': 'Since 2021, I have been actively building a second layer of skills in modern data engineering, cloud computing, and artificial intelligence. I completed an MBA in Data Science & Artificial Intelligence (FIAP, 2025), earned Microsoft Azure certifications, and am working through the Databricks Data Engineer learning path. My aim is a role where deep technical foundations meet modern data infrastructure challenges.',
      'about.p3': 'I am based in Utrecht and fully committed to a long-term career in the Netherlands. Having lived and worked in four countries — Brazil, Poland, Bulgaria, and the Netherlands — I bring a multicultural perspective that makes me effective in the international, diverse teams that define Dutch tech environments.',
      'about.highlights.title': 'Key highlights',
      'about.h1': '14+ years enterprise DBA at HSBC, Nordea & NTT Data',
      'about.h2': 'MBA in Data Science & AI — FIAP (2025)',
      'about.h3': 'Microsoft Azure Certified (AZ-900 & Data Fundamentals)',
      'about.h4': '5 active IBM DB2 LUW certifications',
      'about.h5': 'Based in Utrecht — permanent resident, NL',
      'about.h6': 'Trilingual: Portuguese · English · Dutch (learning)',
      'about.interests': 'Interests',
      'hobby.photography': 'Photography',
      'hobby.poetry':      'Poetry',
      'hobby.kayaking':    'Kayaking',
      'hobby.camping':     'Camping',
      'hobby.painting':    'Painting',
      'hobby.art':         'Art',
      'hobby.newcultures': 'New Cultures',

      'exp.title':        'Work Experience',
      'exp.ntt.role':     'Database Consultant · Utrecht, Netherlands',
      'exp.ntt.period':   '2021 — Present',
      'exp.ntt.badge':    'Current',
      'exp.ntt.desc':     'Supporting SAP DB2/DB6 production databases in a cross-country team across the Netherlands, Germany, Mexico, and India. Primary technical contact for database reliability, performance, and escalation in large-scale enterprise SAP environments.',
      'exp.nordea.role':  'Senior Database Administrator · Warsaw, Poland',
      'exp.nordea.period':'2018 — 2021',
      'exp.nordea.desc':  'DB2 production and development database support for a pan-Scandinavian banking group (Poland, Finland, Sweden, Denmark). Led DB2 LUW maintenance, upgrades, fixpacking, and audit implementation. Primary technical contact for all database projects.',
      'exp.hsbc.role':    'Senior Database Administrator · São Paulo, Brazil',
      'exp.hsbc.period':  '2013 — 2015',
      'exp.hsbc.desc':    'Member of a 24/7 global DB2 LUW production support rotation across US, UK, Brazil, India, and China. Responsible for incident management, troubleshooting, backup and recovery, change management, and root cause analysis for global banking infrastructure.',
      'exp.more':         'Additional experience in Brazil 2008–2013',
      'exp.more.link':    'full history on LinkedIn ↗',

      'skills.title':    'Skills',
      'skills.database': 'Database',
      'skills.dataeng':  'Data Engineering',
      'skills.datasci':  'Data Science & AI',
      'skills.cloud':    'Cloud & Tools',
      'skills.soft':     'Soft Skills',

      'projects.title':    'Selected Projects',
      'proj.bej.label':    'Geospatial · Data Visualization · Civic Tech',
      'proj.bej.link':     'View live ↗',
      'proj.bej.title':    'Brasil em Jogo — Povos Indígenas',
      'proj.bej.desc':     'Interactive geospatial platform mapping indigenous territories and villages across Brazil, built on official FUNAI and IBGE government data. Features territory and village visualization, a historical rights timeline from colonization to the 2022 Census, and full bilingual (PT/EN) navigation.',
      'proj.db2.label':    'Enterprise Database · Production · Cross-country',
      'proj.db2.title':    'DB2 LUW Major Version Upgrade — 10.5 to 11.5',
      'proj.db2.desc':     'Technical leader for a mission-critical DB2 LUW upgrade spanning production environments across Mexico, the Netherlands, Germany, and India. Designed the upgrade procedure, coordinated distributed teams across time zones, and delivered with zero critical downtime in a HADR (High Availability Disaster Recovery) production environment.',
      'proj.audit.label':  'Enterprise Database · Audit & Compliance · Banking',
      'proj.audit.title':  'DB2 LUW Audit — Design & Implementation',
      'proj.audit.desc':   'Technical owner of the end-to-end design and implementation of a DB2 LUW Audit solution at Nordea Bank, across a multinational environment spanning Poland, Finland, Sweden, and Denmark. Combined deep DB2 LUW expertise with compliance requirements to enhance audit capabilities while maintaining data integrity and security in production environments.',

      'proj.qf.label':     'Fintech · Machine Learning · MBA',
      'proj.qf.link':      'Notebooks ↗',
      'proj.qf.title':     'Quantum Finance',
      'proj.qf.desc':      'End-to-end data science solution for a fintech use case, developed during the MBA programme at FIAP. The repository contains selected notebooks from the project.',

      'proj.phil.label':   'Philosophy · Ideas · Personal Project',
      'proj.phil.link':    'View live ↗',
      'proj.phil.title':   'Philosphere',
      'proj.phil.desc':    'A Universe of Ideas — an interactive web platform that brings philosophy to life, exploring thinkers, concepts, and schools of thought through an accessible and visually engaging experience.',

      'cred.title':         'Education & Certifications',
      'cred.education':     'Education',
      'cred.certifications':'Certifications',
      'edu.mba.title':      'MBA in Data Science & Artificial Intelligence',
      'edu.mba.inst':       'FIAP · Brazil',
      'edu.mba.note':       'Applied fintech project (Quantum Finance) · Leading Technology Transformation · Disruptive Innovation & Mindset',
      'edu.postgrad.title': 'Postgraduate: Database Administration',
      'edu.postgrad.spec':  'DB2 & Oracle specialisation',
      'edu.bs.title':       'B.S. Computer Information Systems',
      'edu.esl.title':      'English for Academic Purposes — ESL',
      'edu.esl.inst':       'Silicon Valley, California · USA',
      'cert.cloud.label':   'Cloud · Microsoft Azure',
      'cert.db2.label':     'IBM DB2',
      'cert.other.label':   'Data Engineering & Other',
      'cert.az900':         'Azure Fundamentals (AZ-900)',
      'cert.azdata':        'Azure Data Fundamentals',
      'cert.az104':         'Azure Administrator AZ-104 — training completed',
      'cert.dp305':         'Azure Data Infrastructure DP-305 — training completed',
      'cert.db2adv':        'DB2 LUW V11.x Advanced DBA (Badge)',
      'cert.db2dba':        'DB2 LUW V11.x DBA (Badge)',
      'cert.db2assoc':      'IBM Certified DB2 Database Associate (000-730)',
      'cert.db2luw':        'IBM Certified DB2 LUW DBA (000-731)',
      'cert.db2v10':        'IBM Certified DB2 LUW 10 Associate (000-610)',
      'cert.databricks':    'Databricks Data Engineer path — ongoing',
      'cert.azuresql':      'Azure SQL + Power BI — 98h course — ongoing',
      'cert.ibmedx':        'Data Engineering Fundamentals — IBM EDX',
      'cert.itil':          'ITIL Foundations',
      'cert.azureai':       'Azure AI & OpenAI Services — 20h',

      'refs.title': 'References',

      'contact.eyebrow':       'Get in touch',
      'contact.title':         "Let's work together<br>in the Netherlands.",
      'contact.sub':           'Actively looking for data engineering and data science roles across the Netherlands.',
      'contact.email.label':   'Email',
      'contact.linkedin.label':'LinkedIn',
      'contact.phone.label':   'Phone',

      'footer.copy': '© 2026 Luyza Alexandre · Utrecht, Netherlands'
    },

    pt: {
      'nav.about':       'Sobre',
      'nav.experience':  'Experiência',
      'nav.skills':      'Habilidades',
      'nav.projects':    'Projetos',
      'nav.credentials': 'Credenciais',
      'nav.contact':     'Contato',

      'hero.label':       'Especialista em BD · Engenheira de Dados · IA',
      'hero.location':    'Países Baixos',
      'hero.status':      'Aberta a oportunidades',
      'hero.btn.contact': 'Entre em contato',

      'stats.years':     'Anos de Experiência',
      'stats.countries': 'Países Trabalhados',
      'stats.mba':       'Ciência de Dados & IA — 2025',
      'stats.azure':     'Certificada',

      'about.title': 'Perfil',
      'about.p1': 'Sou uma profissional de banco de dados com mais de 14 anos de experiência corporativa em organizações globais, incluindo HSBC Bank, Nordea Bank e NTT Data Business Solutions. Minha profunda expertise está em ambientes de produção IBM DB2 LUW, confiabilidade de sistemas e gestão de bancos de dados em larga escala nos setores de serviços financeiros e consultoria.',
      'about.p2': 'Desde 2021, estou construindo ativamente uma segunda camada de habilidades em engenharia de dados moderna, computação em nuvem e inteligência artificial. Concluí um MBA em Ciência de Dados & Inteligência Artificial (FIAP, 2025), obtive certificações Microsoft Azure e estou percorrendo o caminho de aprendizado Databricks Data Engineer. Meu objetivo é uma função onde fundamentos técnicos sólidos encontram os desafios da infraestrutura de dados moderna.',
      'about.p3': 'Estou baseada em Utrecht e totalmente comprometida com uma carreira de longo prazo nos Países Baixos. Tendo vivido e trabalhado em quatro países — Brasil, Polônia, Bulgária e Países Baixos — trago uma perspectiva multicultural que me torna eficaz nas equipes internacionais e diversas que definem os ambientes de tecnologia holandeses.',
      'about.highlights.title': 'Destaques',
      'about.h1': '14+ anos como DBA corporativa no HSBC, Nordea e NTT Data',
      'about.h2': 'MBA em Ciência de Dados & IA — FIAP (2025)',
      'about.h3': 'Certificada Microsoft Azure (AZ-900 & Data Fundamentals)',
      'about.h4': '5 certificações ativas IBM DB2 LUW',
      'about.h5': 'Baseada em Utrecht — residente permanente, NL',
      'about.h6': 'Trilíngue: Português · Inglês · Holandês (em aprendizado)',
      'about.interests': 'Interesses',
      'hobby.photography': 'Fotografia',
      'hobby.poetry':      'Poesia',
      'hobby.kayaking':    'Caiaque',
      'hobby.camping':     'Camping',
      'hobby.painting':    'Pintura',
      'hobby.art':         'Arte',
      'hobby.newcultures': 'Novas Culturas',

      'exp.title':        'Experiência Profissional',
      'exp.ntt.role':     'Consultora de Banco de Dados · Utrecht, Países Baixos',
      'exp.ntt.period':   '2021 — Presente',
      'exp.ntt.badge':    'Atual',
      'exp.ntt.desc':     'Suporte a bancos de dados SAP DB2/DB6 em produção em uma equipe multinacional nos Países Baixos, Alemanha, México e Índia. Principal contato técnico para confiabilidade, desempenho e escalonamento de bancos de dados em ambientes SAP corporativos de grande escala.',
      'exp.nordea.role':  'Administradora Sênior de BD · Varsóvia, Polônia',
      'exp.nordea.period':'2018 — 2021',
      'exp.nordea.desc':  'Suporte a bancos de dados DB2 em produção e desenvolvimento para um grupo bancário pan-escandinavo (Polônia, Finlândia, Suécia, Dinamarca). Responsável pela manutenção, upgrades, fixpacks e implementação de auditoria do DB2 LUW. Principal contato técnico para todos os projetos de banco de dados.',
      'exp.hsbc.role':    'Administradora Sênior de BD · São Paulo, Brasil',
      'exp.hsbc.period':  '2013 — 2015',
      'exp.hsbc.desc':    'Membro da rotação global 24/7 de suporte DB2 LUW em produção nos EUA, Reino Unido, Brasil, Índia e China. Responsável por gerenciamento de incidentes, solução de problemas, backup e recuperação, gestão de mudanças e análise de causa raiz para a infraestrutura bancária global.',
      'exp.more':         'Experiência adicional no Brasil 2008–2013',
      'exp.more.link':    'histórico completo no LinkedIn ↗',

      'skills.title':    'Habilidades',
      'skills.database': 'Banco de Dados',
      'skills.dataeng':  'Engenharia de Dados',
      'skills.datasci':  'Ciência de Dados & IA',
      'skills.cloud':    'Cloud & Ferramentas',
      'skills.soft':     'Habilidades Interpessoais',

      'projects.title':    'Projetos Selecionados',
      'proj.bej.label':    'Geoespacial · Visualização de Dados · Tecnologia Cívica',
      'proj.bej.link':     'Ver projeto ↗',
      'proj.bej.title':    'Brasil em Jogo — Povos Indígenas',
      'proj.bej.desc':     'Plataforma geoespacial interativa mapeando territórios e aldeias indígenas em todo o Brasil, construída com dados oficiais do governo FUNAI e IBGE. Conta com visualização de territórios e aldeias, uma linha do tempo histórica de direitos desde a colonização até o Censo 2022 e navegação bilíngue completa (PT/EN).',
      'proj.db2.label':    'Banco de Dados Corporativo · Produção · Multinacional',
      'proj.db2.title':    'Upgrade DB2 LUW Versão Principal — 10.5 para 11.5',
      'proj.db2.desc':     'Líder técnica em um upgrade crítico do DB2 LUW abrangendo ambientes de produção no México, Países Baixos, Alemanha e Índia. Projetou o procedimento de upgrade, coordenou equipes distribuídas em diferentes fusos horários e entregou com zero tempo de inatividade crítico em um ambiente de produção HADR (High Availability Disaster Recovery).',
      'proj.audit.label':  'Banco de Dados Corporativo · Auditoria & Conformidade · Banking',
      'proj.audit.title':  'DB2 LUW Auditoria — Design & Implementação',
      'proj.audit.desc':   'Responsável técnica pelo design e implementação ponta a ponta de uma solução de auditoria DB2 LUW no Nordea Bank, em um ambiente multinacional abrangendo Polônia, Finlândia, Suécia e Dinamarca. Combinou profundo conhecimento em DB2 LUW com requisitos de conformidade para aprimorar capacidades de auditoria, mantendo integridade dos dados e segurança em produção.',

      'proj.qf.label':     'Fintech · Aprendizado de Máquina · MBA',
      'proj.qf.link':      'Notebooks ↗',
      'proj.qf.title':     'Quantum Finance',
      'proj.qf.desc':      'Solução de ciência de dados ponta a ponta para um caso de uso fintech, desenvolvida durante o programa MBA na FIAP. O repositório contém notebooks selecionados do projeto.',

      'proj.phil.label':   'Filosofia · Ideias · Projeto Pessoal',
      'proj.phil.link':    'Ver projeto ↗',
      'proj.phil.title':   'Philosphere',
      'proj.phil.desc':    'Um Universo de Ideias — plataforma web interativa que dá vida à filosofia, explorando pensadores, conceitos e correntes de pensamento por meio de uma experiência acessível e visualmente envolvente.',

      'cred.title':         'Educação & Certificações',
      'cred.education':     'Educação',
      'cred.certifications':'Certificações',
      'edu.mba.title':      'MBA em Ciência de Dados & Inteligência Artificial',
      'edu.mba.inst':       'FIAP · Brasil',
      'edu.mba.note':       'Projeto aplicado fintech (Quantum Finance) · Liderando Transformação Tecnológica · Inovação Disruptiva & Mindset',
      'edu.postgrad.title': 'Pós-graduação: Administração de Banco de Dados',
      'edu.postgrad.spec':  'Especialização em DB2 & Oracle',
      'edu.bs.title':       'Bacharelado em Sistemas de Informação',
      'edu.esl.title':      'Inglês para Fins Acadêmicos — ESL',
      'edu.esl.inst':       'Silicon Valley, Califórnia · EUA',
      'cert.cloud.label':   'Cloud · Microsoft Azure',
      'cert.db2.label':     'IBM DB2',
      'cert.other.label':   'Engenharia de Dados & Outros',
      'cert.az900':         'Azure Fundamentals (AZ-900)',
      'cert.azdata':        'Azure Data Fundamentals',
      'cert.az104':         'Azure Administrator AZ-104 — treinamento concluído',
      'cert.dp305':         'Azure Data Infrastructure DP-305 — treinamento concluído',
      'cert.db2adv':        'DB2 LUW V11.x Advanced DBA (Badge)',
      'cert.db2dba':        'DB2 LUW V11.x DBA (Badge)',
      'cert.db2assoc':      'IBM Certificada DB2 Database Associate (000-730)',
      'cert.db2luw':        'IBM Certificada DB2 LUW DBA (000-731)',
      'cert.db2v10':        'IBM Certificada DB2 LUW 10 Associate (000-610)',
      'cert.databricks':    'Databricks Data Engineer path — em andamento',
      'cert.azuresql':      'Azure SQL + Power BI — curso de 98h — em andamento',
      'cert.ibmedx':        'Data Engineering Fundamentals — IBM EDX',
      'cert.itil':          'ITIL Foundations',
      'cert.azureai':       'Azure AI & OpenAI Services — 20h',

      'refs.title': 'Referências',

      'contact.eyebrow':       'Entre em contato',
      'contact.title':         'Vamos trabalhar juntos<br>nos Países Baixos.',
      'contact.sub':           'Buscando ativamente vagas em engenharia de dados e ciência de dados nos Países Baixos.',
      'contact.email.label':   'E-mail',
      'contact.linkedin.label':'LinkedIn',
      'contact.phone.label':   'Telefone',

      'footer.copy': '© 2026 Luyza Alexandre · Utrecht, Países Baixos'
    },

    nl: {
      'nav.about':       'Over',
      'nav.experience':  'Ervaring',
      'nav.skills':      'Vaardigheden',
      'nav.projects':    'Projecten',
      'nav.credentials': 'Kwalificaties',
      'nav.contact':     'Contact',

      'hero.label':       'Database Expert · Data Engineer · AI-practitioner',
      'hero.location':    'Nederland',
      'hero.status':      'Open voor kansen',
      'hero.btn.contact': 'Neem contact op',

      'stats.years':     'Jaar Ervaring',
      'stats.countries': 'Landen Gewerkt',
      'stats.mba':       'Data Science & AI — 2025',
      'stats.azure':     'Gecertificeerd',

      'about.title': 'Profiel',
      'about.p1': 'Ik ben een database professional met meer dan 14 jaar enterprise-ervaring bij wereldwijde organisaties, waaronder HSBC Bank, Nordea Bank en NTT Data Business Solutions. Mijn diepgaande expertise ligt in IBM DB2 LUW productieomgevingen, systeembetrouwbaarheid en grootschalig databasebeheer in de financiële dienstverlening en consultancy.',
      'about.p2': 'Sinds 2021 bouw ik actief een tweede laag vaardigheden op in moderne data engineering, cloud computing en kunstmatige intelligentie. Ik heb een MBA in Data Science & Artificial Intelligence afgerond (FIAP, 2025), Microsoft Azure-certificeringen behaald en doorloop het Databricks Data Engineer leerpad. Mijn doel is een rol waarbij diepgaande technische fundamenten samenkomen met moderne data-infrastructuuruitdagingen.',
      'about.p3': 'Ik woon in Utrecht en ben volledig toegewijd aan een langdurige carrière in Nederland. Omdat ik in vier landen heb geleefd en gewerkt — Brazilië, Polen, Bulgarije en Nederland — breng ik een multicultureel perspectief mee dat mij effectief maakt in de internationale, diverse teams die de Nederlandse tech-omgevingen kenmerken.',
      'about.highlights.title': 'Hoogtepunten',
      'about.h1': '14+ jaar enterprise DBA bij HSBC, Nordea & NTT Data',
      'about.h2': 'MBA in Data Science & AI — FIAP (2025)',
      'about.h3': 'Microsoft Azure Gecertificeerd (AZ-900 & Data Fundamentals)',
      'about.h4': '5 actieve IBM DB2 LUW certificeringen',
      'about.h5': 'Gevestigd in Utrecht — permanent inwoner, NL',
      'about.h6': 'Drietalig: Portugees · Engels · Nederlands (in leer)',
      'about.interests': 'Interesses',
      'hobby.photography': 'Fotografie',
      'hobby.poetry':      'Poëzie',
      'hobby.kayaking':    'Kajakken',
      'hobby.camping':     'Kamperen',
      'hobby.painting':    'Schilderen',
      'hobby.art':         'Kunst',
      'hobby.newcultures': 'Nieuwe Culturen',

      'exp.title':        'Werkervaring',
      'exp.ntt.role':     'Database Consultant · Utrecht, Nederland',
      'exp.ntt.period':   '2021 — Heden',
      'exp.ntt.badge':    'Huidig',
      'exp.ntt.desc':     'Ondersteuning van SAP DB2/DB6 productiedatabases in een internationaal team in Nederland, Duitsland, Mexico en India. Primaire technische contactpersoon voor databasebetrouwbaarheid, prestaties en escalatie in grootschalige enterprise SAP-omgevingen.',
      'exp.nordea.role':  'Senior Databasebeheerder · Warschau, Polen',
      'exp.nordea.period':'2018 — 2021',
      'exp.nordea.desc':  'DB2 productie- en ontwikkelingsdatabaseondersteuning voor een pan-Scandinavische bankgroep (Polen, Finland, Zweden, Denemarken). Leidde DB2 LUW onderhoud, upgrades, fixpacks en auditimplementatie. Primaire technische contactpersoon voor alle databaseprojecten.',
      'exp.hsbc.role':    'Senior Databasebeheerder · São Paulo, Brazilië',
      'exp.hsbc.period':  '2013 — 2015',
      'exp.hsbc.desc':    'Lid van een 24/7 globale DB2 LUW productieondersteuningsrotatie in de VS, VK, Brazilië, India en China. Verantwoordelijk voor incidentbeheer, probleemoplossing, back-up en herstel, wijzigingsbeheer en rootcauseanalyse voor wereldwijde bankinfrastructuur.',
      'exp.more':         'Aanvullende ervaring in Brazilië 2008–2013',
      'exp.more.link':    'volledige geschiedenis op LinkedIn ↗',

      'skills.title':    'Vaardigheden',
      'skills.database': 'Database',
      'skills.dataeng':  'Data Engineering',
      'skills.datasci':  'Data Science & AI',
      'skills.cloud':    'Cloud & Tools',
      'skills.soft':     'Zachte Vaardigheden',

      'projects.title':    'Geselecteerde Projecten',
      'proj.bej.label':    'Geospatiaal · Datavisualisatie · Civieke Technologie',
      'proj.bej.link':     'Bekijk live ↗',
      'proj.bej.title':    'Brasil em Jogo — Povos Indígenas',
      'proj.bej.desc':     'Interactief geospatiaal platform dat inheemse gebieden en dorpen in heel Brazilië in kaart brengt, gebouwd op officiële FUNAI- en IBGE-overheidsgegevens. Bevat territorie- en dorpsvisualisatie, een historische tijdlijn van rechten van de kolonisatie tot de volkstelling van 2022 en volledige tweetalige (PT/EN) navigatie.',
      'proj.db2.label':    'Enterprise Database · Productie · Internationaal',
      'proj.db2.title':    'DB2 LUW Grote Versie-upgrade — 10.5 naar 11.5',
      'proj.db2.desc':     'Technisch leider voor een bedrijfskritische DB2 LUW-upgrade over productieomgevingen in Mexico, Nederland, Duitsland en India. Ontwierp de upgradeprocedure, coördineerde gedistribueerde teams in verschillende tijdzones en leverde met nul kritieke downtime in een HADR (High Availability Disaster Recovery) productieomgeving.',
      'proj.audit.label':  'Enterprise Database · Audit & Compliance · Banking',
      'proj.audit.title':  'DB2 LUW Audit — Ontwerp & Implementatie',
      'proj.audit.desc':   'Technisch verantwoordelijk voor het end-to-end ontwerp en de implementatie van een DB2 LUW Audit-oplossing bij Nordea Bank, in een multinationale omgeving in Polen, Finland, Zweden en Denemarken. Combineerde diepgaande DB2 LUW-expertise met compliance-vereisten om auditcapaciteiten te verbeteren met behoud van data-integriteit en beveiliging in productieomgevingen.',

      'proj.qf.label':     'Fintech · Machine Learning · MBA',
      'proj.qf.link':      'Notebooks ↗',
      'proj.qf.title':     'Quantum Finance',
      'proj.qf.desc':      'End-to-end data science oplossing voor een fintech use case, ontwikkeld tijdens het MBA-programma aan FIAP. Het repository bevat geselecteerde notebooks van het project.',

      'proj.phil.label':   'Filosofie · Ideeën · Persoonlijk Project',
      'proj.phil.link':    'Bekijk live ↗',
      'proj.phil.title':   'Philosphere',
      'proj.phil.desc':    'Een Universum van Ideeën — een interactief webplatform dat filosofie tot leven brengt door denkers, concepten en stromingen te verkennen via een toegankelijke en visueel aantrekkelijke ervaring.',

      'cred.title':         'Opleiding & Certificeringen',
      'cred.education':     'Opleiding',
      'cred.certifications':'Certificeringen',
      'edu.mba.title':      'MBA in Data Science & Kunstmatige Intelligentie',
      'edu.mba.inst':       'FIAP · Brazilië',
      'edu.mba.note':       'Toegepast fintech project (Quantum Finance) · Leidende Technologische Transformatie · Disruptieve Innovatie & Mindset',
      'edu.postgrad.title': 'Postdoctoraal: Databasebeheer',
      'edu.postgrad.spec':  'DB2 & Oracle specialisatie',
      'edu.bs.title':       'Bachelor Informatica',
      'edu.esl.title':      'Engels voor Academische Doeleinden — ESL',
      'edu.esl.inst':       'Silicon Valley, Californië · VS',
      'cert.cloud.label':   'Cloud · Microsoft Azure',
      'cert.db2.label':     'IBM DB2',
      'cert.other.label':   'Data Engineering & Overig',
      'cert.az900':         'Azure Fundamentals (AZ-900)',
      'cert.azdata':        'Azure Data Fundamentals',
      'cert.az104':         'Azure Administrator AZ-104 — training voltooid',
      'cert.dp305':         'Azure Data Infrastructure DP-305 — training voltooid',
      'cert.db2adv':        'DB2 LUW V11.x Advanced DBA (Badge)',
      'cert.db2dba':        'DB2 LUW V11.x DBA (Badge)',
      'cert.db2assoc':      'IBM Gecertificeerd DB2 Database Associate (000-730)',
      'cert.db2luw':        'IBM Gecertificeerd DB2 LUW DBA (000-731)',
      'cert.db2v10':        'IBM Gecertificeerd DB2 LUW 10 Associate (000-610)',
      'cert.databricks':    'Databricks Data Engineer pad — lopend',
      'cert.azuresql':      'Azure SQL + Power BI — 98u cursus — lopend',
      'cert.ibmedx':        'Data Engineering Fundamentals — IBM EDX',
      'cert.itil':          'ITIL Foundations',
      'cert.azureai':       'Azure AI & OpenAI Services — 20u',

      'refs.title': 'Referenties',

      'contact.eyebrow':       'Neem contact op',
      'contact.title':         'Laten we samenwerken<br>in Nederland.',
      'contact.sub':           'Actief op zoek naar data engineering en data science functies in Nederland.',
      'contact.email.label':   'E-mail',
      'contact.linkedin.label':'LinkedIn',
      'contact.phone.label':   'Telefoon',

      'footer.copy': '© 2026 Luyza Alexandre · Utrecht, Nederland'
    }
  };

  function setLang(lang) {
    if (!T[lang]) return;
    var t = T[lang];

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (v !== undefined) el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-html')];
      if (v !== undefined) el.innerHTML = v;
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
    });

    localStorage.setItem('lang', lang);
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
  });

  setLang(localStorage.getItem('lang') || 'en');
})();
