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
      'nav.dutch':       'Dutch',

      'hero.label':       'DB2 LUW · Data Engineering · AI Practitioner',
      'hero.statement':   'Fourteen years ensuring the data is available. Now making sure it thinks.',
      'hero.location':    'Netherlands',
      'hero.status':      'Open to opportunities',
      'hero.btn.contact': 'Get in touch',

      'stats.years':    'Years of Experience',
      'stats.countries':'Countries Worked In',
      'stats.mba':      'Data Science & AI',
      'stats.azure':    'Azure Certified',
      'stats.db2certs': 'IBM DB2 Certs',

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
      'about.interests':    'Personal Interests',
      'hobby.photography':  'Photography',
      'hobby.poetry':       'Poetry',
      'hobby.kayaking':     'Kayaking',
      'hobby.camping':      'Camping',
      'hobby.painting':     'Painting',
      'hobby.art':          'Art',
      'hobby.newcultures':  'New Cultures',
      'hobby.philosophy':   'Philosophy',

      'exp.title':        'Work Experience',
      'exp.ntt.role':     'Database Consultant · Utrecht, Netherlands',
      'exp.ntt.period':   '2021 — Present',
      'exp.ntt.badge':    'Current',
      'exp.ntt.desc':     'Supporting SAP DB2/DB6 production databases in a cross-country team across the Netherlands, Germany, Mexico, and India. Primary technical contact for database reliability, performance, and escalation in large-scale enterprise SAP environments.',
      'exp.nordea.role':  'Senior Database Administrator · Warsaw, Poland',
      'exp.nordea.period':'2018 — 2021',
      'exp.nordea.desc':  'DB2 production and development database support for a pan-Scandinavian banking group (Poland, Finland, Sweden, Denmark). Led DB2 LUW maintenance, upgrades, fixpacking, and audit implementation. Primary technical contact for all database projects.',
      'exp.ibm.role':     'DB2 LUW Database IT Specialist · Wrocław, Poland',
      'exp.ibm.period':   'Nov 2016 — Apr 2018',
      'exp.ibm.desc':     'Supporting IBM customers across Europe from a Polish team based in Wrocław. Responsible for DB2 LUW database maintenance, incident troubleshooting, change implementation, and compliance activities. Tasks included backup and recovery, runstats and reorg, HADR, replication, and upgrades/fixpacking across Linux, Unix, and Windows platforms.',
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
      'proj.bej.label':    'Geospatial · Data Visualization · Civic Tech · Personal Project',
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

      'proj.aially.label': 'AI & Data Engineering · Market Intelligence · Personal Project',
      'proj.aially.link':  'View live ↗',
      'proj.aially.title': 'AIAlly Hub',
      'proj.aially.desc':  'Global intelligence platform for the AI & Data Engineering economy, with a focus on the Netherlands market. Aggregates live data across job listings, startup funding, and industry news — synced every 24 hours via AI and Supabase.',

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

      'rec.title':  'Recommendations',

      'rec.tapio.role': 'Database Reliability Engineering Team Lead @ Nordcloud',
      'rec.tapio.date': 'February 2026 · worked together at Nordea Bank',
      'rec.tapio.text': 'I had the pleasure of working closely with Luyza at Nordea from 2018 to 2021, where we collaborated on several critical Db2 initiatives in a multinational environment spanning teams in Poland, Finland, Sweden, and Denmark.<br><br>One standout contribution was her work on the Db2 Audit project, where Luyza took ownership of designing and implementing the solution end-to-end. Her technical expertise in DB2 LUW, combined with a deep understanding of compliance requirements, ensured the project was delivered successfully, enhancing our audit capabilities while maintaining high standards of data integrity and security in production environments.<br><br>Beyond her strong technical skills — spanning maintenance (backups, restores, runstats, reorgs), HADR, replication, and advanced recovery — Luyza consistently demonstrated professionalism, reliability, and a calm, approachable demeanor that made her a true team player. She was always genuine, supportive, and focused on delivering quality work, even under tight deadlines or complex incidents.<br><br>Luyza is an exceptional DBA who brings both expertise and a positive attitude to every project. I highly recommend her for any role involving Db2 administration, database projects, or cross-functional team environments — she would be a valuable asset to any organization.',

      'rec.hans.role': 'Db2 for SAP Development @ IBM Deutschland Research & Development GmbH',
      'rec.hans.date': 'January 2026 · worked with Luyza at different companies',
      'rec.hans.text': 'I had the pleasure of working with Luyza on a large and highly complex joint project, in which she proved to be an exceptionally skilled and dedicated expert in both SAP and Db2. Her contributions were critical to the success of this project, which involved a huge SAP on Db2 landscape with many very large databases. This landscape had previously been moved from an AIX-based, on-premises environment to Linux on a major hyperscaler. In addition to handling daily Db2 operations and optimization, Luyza planned and managed a successful major Db2 version upgrade for the many Db2 databases in this complex landscape. This project also included Db2 HADR and Pacemaker cluster automation, which added to the overall complexity. The successful completion of the upgrades on time is a perfect proof point of Luyza\'s professionalism and her excellent skills in SAP and Db2. I enjoyed working with Luyza and highly value her expertise and her team spirit.',

      'rec.regina.role': 'Professor of Statistics · MBA Data Science & AI (FIAP) · Survey Methodologist',
      'rec.regina.date': 'February 2025 · Regina was Luyza\'s teacher',
      'rec.regina.text': 'Luyza was my student in the Applied Statistics course within the MBA Data Science & Artificial Intelligence — FIAP. Throughout nine classes, she constantly stood out due to her regular attendance and active participation, both in theoretical lectures and hands-on practical exercises. Luyza demonstrated strong execution skills, supported by a solid foundation in Python and Statistics. She is a curious and proactive professional, always eager to learn more and expand her knowledge — an essential quality for a data scientist. Beyond her technical abilities, Luyza exhibits a high level of dedication and commitment to learning, which undoubtedly makes her an excellent candidate for any position in the Data Science field. I confidently recommend her for any opportunities in this area.',

      'rec.dennis.role': 'Oracle DBA Sênior · RAC | Data Guard | RMAN | Performance Tuning',
      'rec.dennis.date': 'January 2025 · Dennis was Luyza\'s mentor',
      'rec.dennis.text': 'I had the pleasure of working with Luyza on a university project and exchanging valuable experiences in the professional environment as well. She has extensive knowledge in database administration and shows a great passion for data-related fields, such as Data Engineering and Data Science. Currently, she is specializing in Data Science, continuously investing in her development.',

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
      'nav.dutch':       'Holandês',

      'hero.label':       'DB2 LUW · Engenharia de Dados · IA',
      'hero.statement':   'Catorze anos garantindo a disponibilidade dos dados. Agora garantindo que eles pensem.',
      'hero.location':    'Países Baixos',
      'hero.status':      'Aberta a oportunidades',
      'hero.btn.contact': 'Entre em contato',

      'stats.years':     'Anos de Experiência',
      'stats.countries': 'Países Trabalhados',
      'stats.mba':       'Ciência de Dados & IA',
      'stats.azure':     'Azure Certificada',
      'stats.db2certs':  'Certs IBM DB2',

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
      'about.interests':    'Interesses Pessoais',
      'hobby.photography':  'Fotografia',
      'hobby.poetry':       'Poesia',
      'hobby.kayaking':     'Caiaque',
      'hobby.camping':      'Camping',
      'hobby.painting':     'Pintura',
      'hobby.art':          'Arte',
      'hobby.newcultures':  'Novas Culturas',
      'hobby.philosophy':   'Filosofia',

      'exp.title':        'Experiência Profissional',
      'exp.ntt.role':     'Consultora de Banco de Dados · Utrecht, Países Baixos',
      'exp.ntt.period':   '2021 — Presente',
      'exp.ntt.badge':    'Atual',
      'exp.ntt.desc':     'Suporte a bancos de dados SAP DB2/DB6 em produção em uma equipe multinacional nos Países Baixos, Alemanha, México e Índia. Principal contato técnico para confiabilidade, desempenho e escalonamento de bancos de dados em ambientes SAP corporativos de grande escala.',
      'exp.nordea.role':  'Administradora Sênior de BD · Varsóvia, Polônia',
      'exp.nordea.period':'2018 — 2021',
      'exp.nordea.desc':  'Suporte a bancos de dados DB2 em produção e desenvolvimento para um grupo bancário pan-escandinavo (Polônia, Finlândia, Suécia, Dinamarca). Responsável pela manutenção, upgrades, fixpacks e implementação de auditoria do DB2 LUW. Principal contato técnico para todos os projetos de banco de dados.',
      'exp.ibm.role':     'Especialista em TI DB2 LUW · Wrocław, Polônia',
      'exp.ibm.period':   'Nov 2016 — Abr 2018',
      'exp.ibm.desc':     'Apoio a clientes IBM em toda a Europa a partir de uma equipe polonesa com sede em Wrocław. Responsável por manutenção de banco de dados DB2 LUW, resolução de incidentes, implementação de mudanças e atividades de conformidade. Tarefas incluíam backup e recuperação, runstats e reorg, HADR, replicação e upgrades/fixpacks em plataformas Linux, Unix e Windows.',
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
      'proj.bej.label':    'Geoespacial · Visualização de Dados · Tecnologia Cívica · Projeto Pessoal',
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

      'proj.aially.label': 'IA & Engenharia de Dados · Inteligência de Mercado · Projeto Pessoal',
      'proj.aially.link':  'Ver projeto ↗',
      'proj.aially.title': 'AIAlly Hub',
      'proj.aially.desc':  'Plataforma de inteligência global para a economia de IA & Engenharia de Dados, com foco no mercado holandês. Agrega dados em tempo real sobre vagas de emprego, financiamento de startups e notícias do setor — sincronizado a cada 24 horas via IA e Supabase.',

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

      'rec.title':  'Recomendações',

      'rec.tapio.role': 'Database Reliability Engineering Team Lead @ Nordcloud',
      'rec.tapio.date': 'Fevereiro 2026 · trabalharam juntos no Nordea Bank',
      'rec.tapio.text': 'Tive o prazer de trabalhar de perto com Luyza no Nordea de 2018 a 2021, onde colaboramos em diversas iniciativas críticas de Db2 em um ambiente multinacional abrangendo equipes na Polônia, Finlândia, Suécia e Dinamarca.<br><br>Uma contribuição marcante foi seu trabalho no projeto de Auditoria Db2, onde Luyza assumiu a responsabilidade pelo design e implementação da solução de ponta a ponta. Sua expertise técnica em DB2 LUW, combinada com um profundo entendimento dos requisitos de conformidade, garantiu que o projeto fosse entregue com sucesso, aprimorando nossas capacidades de auditoria e mantendo altos padrões de integridade de dados e segurança nos ambientes de produção.<br><br>Além de suas fortes habilidades técnicas — abrangendo manutenção (backups, restores, runstats, reorgs), HADR, replicação e recuperação avançada — Luyza demonstrou consistentemente profissionalismo, confiabilidade e uma postura calma e acessível que a tornava uma verdadeira jogadora de equipe. Ela sempre foi genuína, solidária e focada em entregar trabalho de qualidade, mesmo sob prazos apertados ou incidentes complexos.<br><br>Luyza é uma DBA excepcional que traz expertise e uma atitude positiva para cada projeto. Recomendo-a de forma efusiva para qualquer função envolvendo administração de Db2, projetos de banco de dados ou ambientes de equipe multifuncionais — ela seria um recurso valioso para qualquer organização.',

      'rec.hans.role': 'Db2 para Desenvolvimento SAP @ IBM Deutschland Research & Development GmbH',
      'rec.hans.date': 'Janeiro 2026 · trabalharam em empresas diferentes',
      'rec.hans.text': 'Tive o prazer de trabalhar com Luyza em um projeto conjunto grande e altamente complexo, no qual ela provou ser uma especialista excepcionalmente qualificada e dedicada em SAP e Db2. Suas contribuições foram críticas para o sucesso deste projeto, que envolvia uma enorme paisagem SAP no Db2 com muitos bancos de dados muito grandes. Esta paisagem havia sido migrada anteriormente de um ambiente AIX on-premises para Linux em um grande hyperscaler. Além de lidar com as operações e otimizações diárias do Db2, Luyza planejou e gerenciou um upgrade de versão principal bem-sucedido do Db2 para os muitos bancos de dados nesta paisagem complexa. Este projeto também incluiu HADR do Db2 e automação de cluster Pacemaker, o que aumentou a complexidade geral. A conclusão bem-sucedida dos upgrades no prazo é uma prova perfeita do profissionalismo de Luyza e de suas excelentes habilidades em SAP e Db2. Gostei de trabalhar com Luyza e valorizo muito sua expertise e seu espírito de equipe.',

      'rec.regina.role': 'Professora de Estatística · MBA Ciência de Dados & IA (FIAP) · Metodologista de Pesquisa',
      'rec.regina.date': 'Fevereiro 2025 · Regina foi professora de Luyza',
      'rec.regina.text': 'Luyza foi minha aluna na disciplina de Applied Statistics do MBA Data Science & Artificial Intelligence da FIAP. Ao longo das 9 aulas da disciplina, ela se destacou pela sua presença constante e participação ativa, tanto nas aulas teóricas quanto nos exercícios práticos (hands-on). Luyza demonstrou excelentes habilidades de execução, combinadas com um sólido conhecimento em Python e Estatística. Ela é uma profissional curiosa, sempre buscando aprender mais e aprimorar seus conhecimentos, uma característica fundamental para um cientista de dados. Além de suas habilidades técnicas, Luyza tem uma grande dedicação e um compromisso com o aprendizado que, sem dúvida, a torna uma excelente candidata para atuar na área de Ciência de Dados. Recomendo-a com confiança para qualquer oportunidade nessa área.',

      'rec.dennis.role': 'Oracle DBA Sênior · RAC | Data Guard | RMAN | Performance Tuning',
      'rec.dennis.date': 'Janeiro 2025 · Dennis foi mentor de Luyza',
      'rec.dennis.text': 'Tive o prazer de trabalhar com Luyza em um projeto universitário e de trocar experiências valiosas no ambiente profissional também. Ela tem um amplo conhecimento em administração de banco de dados e demonstra grande paixão pelas áreas relacionadas a dados, como Engenharia de Dados e Ciência de Dados. Atualmente, está se especializando em Ciência de Dados, investindo continuamente em seu desenvolvimento.',

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
      'nav.dutch':       'Nederlands',

      'hero.label':       'DB2 LUW · Data Engineering · AI-practitioner',
      'hero.statement':   'Veertien jaar zorgen dat de data beschikbaar is. Nu zorgen dat het denkt.',
      'hero.location':    'Nederland',
      'hero.status':      'Open voor kansen',
      'hero.btn.contact': 'Neem contact op',

      'stats.years':     'Jaar Ervaring',
      'stats.countries': 'Landen Gewerkt',
      'stats.mba':       'Data Science & AI',
      'stats.azure':     'Azure Gecertificeerd',
      'stats.db2certs':  'IBM DB2-certs',

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
      'about.interests':    'Persoonlijke interesses',
      'hobby.photography':  'Fotografie',
      'hobby.poetry':       'Poëzie',
      'hobby.kayaking':     'Kajakken',
      'hobby.camping':      'Kamperen',
      'hobby.painting':     'Schilderen',
      'hobby.art':          'Kunst',
      'hobby.newcultures':  'Nieuwe Culturen',
      'hobby.philosophy':   'Filosofie',

      'exp.title':        'Werkervaring',
      'exp.ntt.role':     'Database Consultant · Utrecht, Nederland',
      'exp.ntt.period':   '2021 — Heden',
      'exp.ntt.badge':    'Huidig',
      'exp.ntt.desc':     'Ondersteuning van SAP DB2/DB6 productiedatabases in een internationaal team in Nederland, Duitsland, Mexico en India. Primaire technische contactpersoon voor databasebetrouwbaarheid, prestaties en escalatie in grootschalige enterprise SAP-omgevingen.',
      'exp.nordea.role':  'Senior Databasebeheerder · Warschau, Polen',
      'exp.nordea.period':'2018 — 2021',
      'exp.nordea.desc':  'DB2 productie- en ontwikkelingsdatabaseondersteuning voor een pan-Scandinavische bankgroep (Polen, Finland, Zweden, Denemarken). Leidde DB2 LUW onderhoud, upgrades, fixpacks en auditimplementatie. Primaire technische contactpersoon voor alle databaseprojecten.',
      'exp.ibm.role':     'DB2 LUW Database IT Specialist · Wrocław, Polen',
      'exp.ibm.period':   'Nov 2016 — Apr 2018',
      'exp.ibm.desc':     'Ondersteuning van IBM-klanten in heel Europa vanuit een Pools team gevestigd in Wrocław. Verantwoordelijk voor DB2 LUW databaseonderhoud, incidentoplossing, wijzigingsimplementatie en compliance-activiteiten. Taken omvatten back-up en herstel, runstats en reorg, HADR, replicatie en upgrades/fixpacks op Linux-, Unix- en Windows-platforms.',
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
      'proj.bej.label':    'Geospatiaal · Datavisualisatie · Civieke Technologie · Persoonlijk Project',
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

      'proj.aially.label': 'AI & Data Engineering · Marktintelligentie · Persoonlijk Project',
      'proj.aially.link':  'Bekijk live ↗',
      'proj.aially.title': 'AIAlly Hub',
      'proj.aially.desc':  'Globaal intelligentieplatform voor de AI & Data Engineering-economie, met focus op de Nederlandse markt. Aggregeert live data over vacatures, startup-financiering en branchenieuws — elke 24 uur gesynchroniseerd via AI en Supabase.',

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

      'rec.title':  'Aanbevelingen',

      'rec.tapio.role': 'Database Reliability Engineering Team Lead @ Nordcloud',
      'rec.tapio.date': 'Februari 2026 · samen gewerkt bij Nordea Bank',
      'rec.tapio.text': 'Ik had het genoegen nauw samen te werken met Luyza bij Nordea van 2018 tot 2021, waar we samenwerkten aan verschillende kritieke Db2-initiatieven in een multinationaal team met Polen, Finland, Zweden en Denemarken.<br><br>Een opvallende bijdrage was haar werk aan het Db2 Audit-project, waarbij Luyza verantwoordelijkheid nam voor het end-to-end ontwerp en de implementatie van de oplossing. Haar technische expertise in DB2 LUW, gecombineerd met een diep begrip van compliance-vereisten, zorgde ervoor dat het project succesvol werd opgeleverd, onze auditcapaciteiten werden verbeterd en hoge standaarden voor gegevensintegriteit en beveiliging in productieomgevingen werden gehandhaafd.<br><br>Naast haar sterke technische vaardigheden — waaronder onderhoud (back-ups, herstel, runstats, reorgs), HADR, replicatie en geavanceerd herstel — toonde Luyza consistent professionaliteit, betrouwbaarheid en een rustige, toegankelijke houding die haar een echte teamspeler maakte. Ze was altijd oprecht, ondersteunend en gefocust op het leveren van kwaliteitswerk, zelfs onder krappe deadlines of complexe incidenten.<br><br>Luyza is een uitzonderlijke DBA die zowel expertise als een positieve houding meebrengt naar elk project. Ik beveel haar ten zeerste aan voor elke rol met betrekking tot Db2-beheer, databaseprojecten of cross-functionele teamomgevingen — ze zou een waardevolle aanwinst zijn voor elke organisatie.',

      'rec.hans.role': 'Db2 voor SAP-ontwikkeling @ IBM Deutschland Research & Development GmbH',
      'rec.hans.date': 'Januari 2026 · werkten bij verschillende bedrijven',
      'rec.hans.text': 'Ik had het genoegen om met Luyza te werken aan een groot en zeer complex gezamenlijk project, waarbij ze bewees een uitzonderlijk bekwame en toegewijde expert te zijn in zowel SAP als Db2. Haar bijdragen waren cruciaal voor het succes van dit project, dat een enorm SAP op Db2-landschap omvatte met veel zeer grote databases. Dit landschap was eerder verplaatst van een AIX-gebaseerde on-premises omgeving naar Linux op een grote hyperscaler. Naast het uitvoeren van dagelijkse Db2-operaties en -optimalisaties, plande en beheerde Luyza een succesvolle grote Db2-versie-upgrade voor de vele Db2-databases in dit complexe landschap. Dit project omvatte ook Db2 HADR en Pacemaker clusterautomatisering, wat de algehele complexiteit vergrootte. De succesvolle afronding van de upgrades op tijd is een perfect bewijs van Luyza\'s professionaliteit en haar uitstekende vaardigheden in SAP en Db2. Ik werkte graag samen met Luyza en waardeer haar expertise en teamgeest.',

      'rec.regina.role': 'Professor Statistiek · MBA Data Science & AI (FIAP) · Onderzoeksmethodoloog',
      'rec.regina.date': 'Februari 2025 · Regina was de docent van Luyza',
      'rec.regina.text': 'Luyza was mijn studente in de cursus Applied Statistics binnen de MBA Data Science & Artificial Intelligence — FIAP. Gedurende negen lessen viel ze consequent op door haar regelmatige aanwezigheid en actieve participatie, zowel in theoretische colleges als in hands-on praktische oefeningen. Luyza toonde sterke uitvoeringsvaardigheden, ondersteund door een solide basis in Python en Statistiek. Ze is een nieuwsgierige en proactieve professional, altijd bereid om meer te leren en haar kennis uit te breiden — een essentiële kwaliteit voor een data scientist. Naast haar technische vaardigheden vertoont Luyza een hoog niveau van toewijding en inzet voor leren, wat haar ongetwijfeld een uitstekende kandidaat maakt voor elke positie in het Data Science-vakgebied. Ik beveel haar vol vertrouwen aan voor elke kans in dit gebied.',

      'rec.dennis.role': 'Oracle DBA Sênior · RAC | Data Guard | RMAN | Performance Tuning',
      'rec.dennis.date': 'Januari 2025 · Dennis was de mentor van Luyza',
      'rec.dennis.text': 'Ik had het genoegen om met Luyza samen te werken aan een universitair project en ook waardevolle ervaringen uit te wisselen in de professionele omgeving. Ze heeft uitgebreide kennis van databasebeheer en toont een grote passie voor datagerelateerde vakgebieden, zoals Data Engineering en Data Science. Momenteel specialiseert ze zich in Data Science en blijft ze continu investeren in haar ontwikkeling.',

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
