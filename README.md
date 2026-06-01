<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jorge Enrique Solano Jiménez | Enterprise Cloud Architect Portfolio</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- FontAwesome para Iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        body { font-family: 'Inter', sans-serif; }
        .tech-gradient {
            background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #020617 100%);
        }
        .glow-effect:hover {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
            border-color: rgba(59, 130, 246, 0.6);
        }
    </style>
</head>
<body class="tech-gradient text-slate-100 min-h-screen selection:bg-blue-500 selection:text-white antialiased">

    <!-- NAV BAR (Glassmorphism + Selector de Idioma) -->
    <nav class="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/60">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div class="flex flex-col">
                <span class="text-lg font-bold tracking-tight text-white">Jorge Enrique Solano Jiménez</span>
                <span class="text-xs text-blue-400 font-mono tracking-widest uppercase" data-i18n="nav-subtitle">Enterprise Cloud Architect & IT Systems Program Manager</span>
            </div>
            
            <div class="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide text-slate-300">
                <a href="#perfil" class="hover:text-blue-400 transition-colors duration-200" data-i18n="nav-profile">Perfil</a>
                <a href="#competencias" class="hover:text-blue-400 transition-colors duration-200" data-i18n="nav-skills">Competencias</a>
                <a href="#proyectos" class="hover:text-blue-400 transition-colors duration-200" data-i18n="nav-portfolio">Portafolio</a>
                <a href="#contacto" class="hover:text-blue-400 transition-colors duration-200" data-i18n="nav-contact">Contacto</a>
            </div>

            <!-- Botón i18n -->
            <div class="flex items-center gap-4">
                <button id="lang-toggle" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-blue-500 text-xs font-mono font-semibold text-blue-400 transition-all shadow-md">
                    <i class="fa-solid fa-language text-sm"></i>
                    <span id="lang-text">EN</span>
                </button>
                <div class="lg:hidden">
                    <button id="mobile-menu-btn" class="text-slate-400 hover:text-white focus:outline-none">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden lg:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3">
            <a href="#perfil" class="block text-slate-300 hover:text-blue-400 text-sm" data-i18n="nav-profile">Perfil</a>
            <a href="#competencias" class="block text-slate-300 hover:text-blue-400 text-sm" data-i18n="nav-skills">Competencias</a>
            <a href="#proyectos" class="block text-slate-300 hover:text-blue-400 text-sm" data-i18n="nav-portfolio">Portafolio</a>
            <a href="#contacto" class="block text-slate-300 hover:text-blue-400 text-sm" data-i18n="nav-contact">Contacto</a>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <header id="perfil" class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

        <div class="max-w-5xl relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-6 uppercase tracking-wider">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Orlando, FL Area
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight" data-i18n="hero-title">
                Enterprise Cloud Architect & <br>
                <span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">IT Systems Program Manager</span>
            </h1>
            <p class="text-base sm:text-lg text-slate-400 font-light max-w-4xl leading-relaxed mb-8" data-i18n="hero-desc">
                Líder tecnológico empresarial y arquitecto de soluciones con más de 25 años de trayectoria impulsando transformaciones digitales, integraciones de sistemas de alto volumen y migraciones seguras a la nube. Trayectoria demostrada en la dirección de programas empresariales de misión crítica, orquestación de arquitecturas de microservicios escalables y establecimiento de modelos robustos de gobernanza automatizada de entrega de TI que alinean la modernización de la infraestructura directamente con los resultados corporativos estratégicos.
            </p>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl pt-4">
                <div class="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                    <span class="block text-3xl font-bold text-white font-mono" data-target="25">0</span>
                    <span class="text-xs text-slate-400 uppercase tracking-wider" data-i18n="kpi-1">Años de Trayectoria</span>
                </div>
                <div class="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                    <span class="block text-3xl font-bold text-blue-400 font-mono" data-target="45">0</span>
                    <span class="text-xs text-slate-400 uppercase tracking-wider" data-i18n="kpi-2">Integraciones Core en Nube</span>
                </div>
                <div class="bg-slate-900/50 border border-slate-800 p-4 rounded-xl col-span-2 sm:col-span-1">
                    <span class="block text-3xl font-bold text-emerald-400 font-mono">100%</span>
                    <span class="text-xs text-slate-400 uppercase tracking-wider" data-i18n="kpi-3">Éxito de Entrega de Proyectos</span>
                </div>
            </div>
        </div>
    </header>

    <!-- CORE COMPETENCIES -->
    <section id="competencias" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
        <div class="mb-12">
            <h2 class="text-xs text-blue-400 font-mono tracking-widest uppercase mb-2" data-i18n="skills-pre">// Habilidades de Ingeniería Superior</h2>
            <p class="text-3xl font-bold text-white" data-i18n="skills-title">Technical Core Competencies</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
            <div class="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/80 transition-all duration-300 group">
                <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-lg mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <i class="fa-solid fa-cloud"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-3">Cloud & Infrastructure</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Microsoft Azure</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Azure DevOps (CI/CD)</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Microservices Architecture</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Server Hardening</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">SharePoint Online Governance</span>
                </div>
            </div>
            <div class="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/80 transition-all duration-300 group">
                <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-lg mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <i class="fa-solid fa-sitemap"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-3">Methodologies & Governance</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Scrum</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Agile Project Management</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">TOGAF Enterprise Architecture</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">HOPEX System Modeling</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">ITIL</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">QA & IT Audit Compliance</span>
                </div>
            </div>
            <div class="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/80 transition-all duration-300 group">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <i class="fa-solid fa-network-wired"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-3">Enterprise Systems</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">VUCE 2.0 (Foreign Trade)</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">SICOP Interoperability</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Financial Payment Integration</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Liquidation Engines</span>
                </div>
            </div>
        </div>
    </section>

    <!-- PORTFOLIO / PROYECTOS -->
    <section id="proyectos" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
                <h2 class="text-xs text-blue-400 font-mono tracking-widest uppercase mb-2" data-i18n="port-pre">// Casos de Éxito de Ingeniería Coorporativa</h2>
                <p class="text-3xl font-bold text-white" data-i18n="port-title">Project Portfolio (Last 5 Years)</p>
            </div>
            <div class="flex flex-wrap gap-2 text-xs font-mono">
                <button onclick="filterProjects('all')" class="filter-btn px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold shadow-md transition-all" data-i18n="btn-all">Todos</button>
                <button onclick="filterProjects('cloud')" class="filter-btn px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-all" data-i18n="btn-cloud">Cloud & DevOps</button>
                <button onclick="filterProjects('integration')" class="filter-btn px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-all" data-i18n="btn-int">Integraciones & Finanzas</button>
                <button onclick="filterProjects('governance')" class="filter-btn px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-all" data-i18n="btn-gov">Gobernanza & Seguridad</button>
            </div>
        </div>

        <!-- Inyección dinámica de las tarjetas -->
        <div id="projects-grid" class="grid gap-6 md:grid-cols-2"></div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="max-w-4xl mx-auto px-4 py-20 text-center border-t border-slate-800/60">
        <h2 class="text-3xl font-bold text-white mb-4" data-i18n="contact-title">¿Conectamos para su próxima iniciativa de Ingeniería Cloud?</h2>
        <p class="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed mb-10" data-i18n="contact-desc">
            Abierto a evaluar consultorías arquitectónicas estratégicas, optimizaciones de TI de alta envergadura o liderazgos globales de infraestructura de TI.
        </p>
        
        <div class="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
            <a href="mailto:josolano09@gmail.com" class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all group">
                <i class="fa-solid fa-envelope text-blue-400 text-lg mb-2 group-hover:scale-110 transition-transform"></i>
                <span class="block text-xs text-slate-400" data-i18n="c-mail">Correo Directo</span>
                <span class="text-sm font-medium text-white">josolano09@gmail.com</span>
            </a>
            <a href="tel:+17863306020" class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group">
                <i class="fa-solid fa-phone text-emerald-400 text-lg mb-2 group-hover:scale-110 transition-transform"></i>
                <span class="block text-xs text-slate-400" data-i18n="c-phone">Llamar / Móvil</span>
                <span class="text-sm font-medium text-white">+1 (786) 330-6020</span>
            </a>
            <a href="https://www.linkedin.com/in/jorge-solano-jimenez-9438b963/" target="_blank" rel="noopener noreferrer" class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all group">
                <i class="fa-brands fa-linkedin text-indigo-400 text-lg mb-2 group-hover:scale-110 transition-transform"></i>
                <span class="block text-xs text-slate-400">Perfil Profesional</span>
                <span class="text-sm font-medium text-white">LinkedIn /jorge-solano</span>
            </a>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-slate-950/80 border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>&copy; 2026 Jorge Enrique Solano Jiménez. <span data-i18n="rights">Todos los derechos reservados.</span></p>
        <p class="mt-1 text-slate-600" data-i18n="footer-tech">Construido con estándares modernos en HTML5, Tailwind CSS y Vanilla JS. Desplegado en GitHub Pages.</p>
    </footer>

    <!-- INTERACTIVIDAD & DICCIONARIO INTEGRAL BILINGÜE -->
    <script>
        let currentLang = 'es';

        // 1. Diccionario Estático
        const translations = {
            es: {
                "nav-subtitle": "Enterprise Cloud Architect & IT Systems Program Manager",
                "nav-profile": "Perfil",
                "nav-skills": "Competencias",
                "nav-portfolio": "Portafolio",
                "nav-contact": "Contacto",
                "hero-title": "Enterprise Cloud Architect & <br><span class='bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent'>IT Systems Program Manager</span>",
                "hero-desc": "Líder tecnológico empresarial y arquitecto de soluciones con más de 25 años de trayectoria impulsando transformaciones digitales, integraciones de sistemas de alto volumen y migraciones seguras a la nube. Trayectoria demostrada en la dirección de programas empresariales de misión crítica, orquestación de arquitecturas de microservicios escalables y establecimiento de modelos robustos de gobernanza automatizada de entrega de TI que alinean la modernización de la infraestructura directamente con los resultados corporativos estratégicos.",
                "kpi-1": "Años de Trayectoria",
                "kpi-2": "Integraciones Core en Nube",
                "kpi-3": "Éxito de Entrega de Proyectos",
                "skills-pre": "// Habilidades de Ingeniería Superior",
                "skills-title": "Technical Core Competencies",
                "port-pre": "// Casos de Éxito de Ingeniería Corporativa",
                "port-title": "Project Portfolio (Last 5 Years)",
                "btn-all": "Todos",
                "btn-cloud": "Cloud & DevOps",
                "btn-int": "Integraciones & Finanzas",
                "btn-gov": "Gobernanza & Seguridad",
                "contact-title": "¿Conectamos para su próxima iniciativa de Ingeniería Cloud?",
                "contact-desc": "Abierto a evaluar consultorías arquitectónicas estratégicas, optimizaciones de TI de alta envergadura o liderazgos globales de infraestructura de TI.",
                "c-mail": "Correo Directo",
                "c-phone": "Llamar / Móvil",
                "rights": "Todos los derechos reservados.",
                "footer-tech": "Construido con estándares modernos en HTML5, Tailwind CSS y Vanilla JS. Desplegado en GitHub Pages."
            },
            en: {
                "nav-subtitle": "Enterprise Cloud Architect & IT Systems Program Manager",
                "nav-profile": "Profile",
                "nav-skills": "Skills",
                "nav-portfolio": "Portfolio",
                "nav-contact": "Contact",
                "hero-title": "Enterprise Cloud Architect & <br><span class='bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent'>IT Systems Program Manager</span>",
                "hero-desc": "Enterprise Technology Leader and Solutions Architect with 25+ years of experience driving digital transformations, high-volume systems integrations, and secure cloud migrations. Proven track record directing mission-critical enterprise programs, orchestrating scalable microservices architectures, and establishing robust automated IT delivery governance models that align infrastructure modernization directly with strategic corporate outcomes.",
                "kpi-1": "Years of Experience",
                "kpi-2": "Cloud Core Integrations",
                "kpi-3": "Project Delivery Success",
                "skills-pre": "// High-Tier Engineering Expertise",
                "skills-title": "Technical Core Competencies",
                "port-pre": "// Corporate Engineering Success Cases",
                "port-title": "Project Portfolio (Last 5 Years)",
                "btn-all": "All",
                "btn-cloud": "Cloud & DevOps",
                "btn-int": "Integrations & Finance",
                "btn-gov": "Governance & Security",
                "contact-title": "Let's Connect for Your Next Cloud Engineering Initiative",
                "contact-desc": "Available for strategic architectural consultancies, high-scale IT optimizations, or global enterprise technical leadership roles.",
                "c-mail": "Direct Email",
                "c-phone": "Mobile / Call",
                "rights": "All rights reserved.",
                "footer-tech": "Built with modern industry standards using HTML5, Tailwind CSS, and Vanilla JS. Hosted on GitHub Pages."
            }
        };

        // 2. Fusión Absoluta de Proyectos (10 de 10 incluidos con métricas intactas)
        const projectsData = [
            {
                id: 1,
                category: "cloud",
                meta: "2025 | 1,124 Hours",
                status: "100% Completed",
                title: {
                    es: "1. Enterprise BizTalk to Azure Cloud Migration Program",
                    en: "1. Enterprise BizTalk to Azure Cloud Migration Program"
                },
                desc: {
                    es: "Diseñó y dirigió la estrategia de modernización en la nube migrando más de 45 integraciones transaccionales centrales de misión crítica desde la infraestructura heredada de BizTalk hacia microservicios nativos de Microsoft Azure (Azure Functions, Logic Apps, Service Bus). Además, estableció pipelines de despliegue de CI/CD robustos utilizando Azure DevOps para automatizar completamente la gobernanza ambiental y el staging de aplicaciones.",
                    en: "Architected and directed the cloud modernization strategy migrating 45+ core mission-critical transactional integrations from legacy BizTalk infrastructure to Microsoft Azure cloud-native microservices (Azure Functions, Logic Apps, Service Bus). Established robust CI/CD deployment pipelines utilizing Azure DevOps pipelines to fully automate environmental governance and application staging."
                },
                outcome: {
                    es: "Mejoró drásticamente la escalabilidad sistémica y la resiliencia de las aplicaciones, logrando una reducción inmediata del 25% en los costos operativos de ejecución (runtime overhead).",
                    en: "Enhanced systemic scalability and application resilience while capturing an immediate 25% reduction in runtime operational overhead costs."
                }
            },
            {
                id: 2,
                category: "integration",
                meta: "2025 | 1,970 Hours",
                status: "100% Completed",
                title: {
                    es: "2. Core Systems Integration & Microservices Modernization",
                    en: "2. Core Systems Integration & Microservices Modernization"
                },
                desc: {
                    es: "Encabezó la reestructuración técnica y refactorización de frameworks de procesamiento backend monolíticos hacia arquitecturas de microservicios de alto rendimiento. Se optimizaron los modelos de registro de telemetría y mapas de trazabilidad a través de los múltiples canales de datos.",
                    en: "Spearheaded the technical refactoring of monolithic backend processing frameworks into high-throughput microservices architectures, optimizing telemetry logging models and traceability maps across data channels."
                },
                outcome: {
                    es: "Aumentó el rendimiento de la plataforma base y el desempeño de la comunicación en un 40%, disminuyó los incidentes activos de integración en un 30% e introdujo un modelo de soporte arquitectónico altamente confiable.",
                    en: "Boosted baseline platform throughput and communication performance by 40%, decreased active integration incidents by 30%, and introduced a reliable architectural support model."
                }
            },
            {
                id: 3,
                category: "integration",
                meta: "2025 | 1,620 Hours",
                status: "100% Completed",
                title: {
                    es: "3. Transactional Payment Module & Financial Reconciliation Engine",
                    en: "3. Transactional Payment Module & Financial Reconciliation Engine"
                },
                desc: {
                    es: "Lideró la revisión de ingeniería y la refactorización segura de módulos transaccionales heredados, introduciendo motores de cálculo de múltiples divisas completamente automatizados y algoritmos de conciliación para libros contables digitales.",
                    en: "Led the engineering overhaul and secure refactoring of legacy transactional modules, introducing fully automated multi-currency calculation engines and digital ledger reconciliation algorithms."
                },
                outcome: {
                    es: "Mejoró la velocidad del procesamiento de liquidación financiera de extremo a extremo y redujo con éxito los errores de cálculo sistémicos en un 30%.",
                    en: "Improved end-to-end financial settlement processing speed and successfully reduced systemic calculation errors by 30%."
                }
            },
            {
                id: 4,
                category: "governance",
                meta: "2024-2025 | 644 Hours",
                status: "100% Completed",
                title: {
                    es: "4. Institutional Enterprise Architecture Governance (HOPEX Alignment)",
                    en: "4. Institutional Enterprise Architecture Governance (HOPEX Alignment)"
                },
                desc: {
                    es: "Orquestó la definición, modelado y mapeo profundo de los procesos de negocio institucionales y topologías de aplicaciones distribuidas dentro de la plataforma HOPEX, asegurando una alineación operativa completa con los estándares de arquitectura empresarial TOGAF.",
                    en: "Orchestrated the definition, modeling, and deep mapping of institutional business processes and distributed application topologies within the HOPEX platform, ensuring complete operational alignment with TOGAF enterprise architecture standards."
                },
                outcome: {
                    es: "Creó un mapa azul (blueprint) centralizado de la huella de TI corporativa global, lo que permite al liderazgo ejecutivo realizar planes de costos técnicos precisos y decisiones de inversión con riesgos mitigados.",
                    en: "Created a centralized blueprint of the global corporate IT footprint, enabling executive leadership to perform precise, risk-mitigated technical cost planning and investment decisions."
                }
            },
            {
                id: 5,
                category: "governance",
                meta: "2024 | 297 Hours",
                status: "100% Completed",
                title: {
                    es: "5. UX/UI Standardization & Institutional Total Experience (TX) Framework",
                    en: "5. UX/UI Standardization & Institutional Total Experience (TX) Framework"
                },
                desc: {
                    es: "Creó y desplegó patrones integrales de activos digitales institucionales, estándares de usabilidad centrales y frameworks de maquetación interactiva enfocados fuertemente en el cumplimiento regulatorio, estándares de accesibilidad y estilo de interfaces intuitivas.",
                    en: "Authored and deployed comprehensive institutional digital asset patterns, core usability standards, and interactive mock frameworks focused heavily on compliance, accessibility standards, and intuitive interface styling."
                },
                outcome: {
                    es: "Unificó la apariencia visual (front-end) y los comportamientos de interacción en todas las soluciones corporativas, mejorando drásticamente la ergonomía de la plataforma digital y la consistencia del diseño.",
                    en: "Unified front-end appearance and interaction behaviors across all corporate solutions, drastically improving digital platform ergonomics and layout consistency."
                }
            },
            {
                id: 6,
                category: "cloud",
                meta: "2020-2024",
                status: "100% Completed",
                title: {
                    es: "6. National Single Window Platform Evolution & Infrastructure Hardening",
                    en: "6. National Single Window Platform Evolution & Infrastructure Hardening"
                },
                desc: {
                    es: "Dirigió el mantenimiento continuo, las migraciones de componentes estructurales y el endurecimiento de la seguridad arquitectónica de la plataforma a escala nacional VUCE 2.0 (Ventanilla Única de Comercio Exterior) utilizando capas de microservicios altamente resilientes en la nube.",
                    en: "Directed continuous maintenance, structural component migrations, and architectural security hardening of the national-scale VUCE 2.0 (Single Window for Foreign Trade) platform utilizing highly resilient cloud microservices tiers."
                },
                outcome: {
                    es: "Aseguró la continuidad absoluta del negocio para arquitecturas de comercio exterior multimillonarias, mejorando significativamente la agilidad en las transacciones.",
                    en: "Ensured absolute business continuity for multi-billion dollar foreign trade architectures while significantly improving transaction agility."
                }
            },
            {
                id: 7,
                category: "integration",
                meta: "2022",
                status: "100% Completed",
                title: {
                    es: "7. SICOP National Procurement System Interoperability Integration",
                    en: "7. SICOP National Procurement System Interoperability Integration"
                },
                desc: {
                    es: "Diseñó y desplegó capas seguras de servicios web y middleware de comunicación multiplataforma para lograr la interoperabilidad entre los módulos de software internos centrales y el sistema oficial de compras públicas de Costa Rica (SICOP).",
                    en: "Designed and deployed secure web service layers and cross-platform communication middleware to achieve interoperability between core internal software modules and Costa Rica's official public procurement system (SICOP)."
                },
                outcome: {
                    es: "Eliminó con éxito las prácticas de entrada manual interna mediante la automatización del procesamiento entre agencias, aplicando transparencia absoluta en los registros de adquisiciones financieras regulados por el gobierno.",
                    en: "Successfully eliminated manual internal entry practices by automating cross-agency processing, enforcing absolute transparency on government-regulated financial procurement logs."
                }
            },
            {
                id: 8,
                category: "governance",
                meta: "2021",
                status: "100% Completed",
                title: {
                    es: "8. Enterprise IT Governance Framework & Operational Audit Remediation",
                    en: "8. Enterprise IT Governance Framework & Operational Audit Remediation"
                },
                desc: {
                    es: "Ejecutó una revisión interna exhaustiva de los estándares corporativos de entrega de tecnología de la información, mapeando las arquitecturas de software contra los marcos internacionales de gobernanza de TI y estándares de seguridad globales.",
                    en: "Executed an internal review of corporate information technology delivery standards, mapping software architectures against international corporate IT governance frameworks and security standards."
                },
                outcome: {
                    es: "Restructuró los flujos de trabajo de entrega internos, remedió vulnerabilidades e instituyó un modelo de entrega operativo alineado con los estrictos requisitos de auditoría institucional.",
                    en: "Restructured internal delivery workflows, remediated vulnerabilities, and instituted an operational delivery model aligned with strict institutional audit requirements."
                }
            },
            {
                id: 9,
                category: "governance",
                meta: "2021",
                status: "100% Completed",
                title: {
                    es: "9. Corporate Digital Workspaces Modernization (SharePoint Migration)",
                    en: "9. Corporate Digital Workspaces Modernization (SharePoint Migration)"
                },
                desc: {
                    es: "Diseñó la taxonomía estratégica de activos corporativos, los esquemas de permisos y la hoja de ruta de implementación para migrar documentos distribuidos y archivos compartidos hacia un tenant unificado de Microsoft SharePoint Online.",
                    en: "Designed the strategic corporate asset taxonomy, permission schemas, and implementation roadmap for migrating distributed documents and file shares into a unified Microsoft SharePoint Online tenant."
                },
                outcome: {
                    es: "Eliminó la fricción del almacenamiento físico de documentos y mejoró los flujos de trabajo de colaboración modernos y seguros en tiempo real entre los segmentos comerciales internos funcionales cruzados.",
                    en: "Eliminated physical document storage friction and enhanced modern secure real-time collaboration workflows across cross-functional internal business segments."
                }
            },
            {
                id: 10,
                category: "governance",
                meta: "2021",
                status: "100% Completed",
                title: {
                    es: "10. Information Security Perimeter Hardening & Vulnerability Remediation",
                    en: "10. Information Security Perimeter Hardening & Vulnerability Remediation"
                },
                desc: {
                    es: "Supervisó escaneos de penetración sistemáticos, evaluaciones de riesgo y parches de vulnerabilidad dirigidos en sistemas de producción, estableciendo pautas de endurecimiento de servidores (server hardening) para todos los hosts de transacciones orientados al público.",
                    en: "Supervised systematic penetrative scans, risk assessments, and targeted vulnerability patches across production systems, establishing server hardening guidelines for all public-facing transaction hosts."
                },
                outcome: {
                    es: "Maximizó la resiliencia de las barreras del sistema frente a amenazas cibernéticas externas sofisticadas y aseguró el estado de cumplimiento en todas las pautas de revisión de seguridad exigidas por el estado.",
                    en: "Maximized systemic barrier resiliency against sophisticated external cyber threats and secured compliant status across state-mandated security review guidelines."
                }
            }
        ];

        // 3. Render de Tarjetas de Proyectos
        function renderProjects() {
            const grid = document.getElementById('projects-grid');
            grid.innerHTML = '';

            projectsData.forEach(p => {
                const card = document.createElement('div');
                card.className = `project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect`;
                card.setAttribute('data-category', p.category);
                
                card.innerHTML = `
                    <div>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">${p.meta}</span>
                            <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">${p.status}</span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">${p.title[currentLang]}</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-6">${p.desc[currentLang]}</p>
                    </div>
                    <div class="border-t border-slate-800/80 pt-4 mt-auto">
                        <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">${currentLang === 'es' ? 'Resultado Estratégico:' : 'Strategic Outcome:'}</span>
                        <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                            <i class="fa-solid fa-chart-line mr-1.5"></i> ${p.outcome[currentLang]}
                        </p>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // 4. Mecanismo Switch I18N
        function toggleLanguage() {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.innerHTML = translations[currentLang][key];
                }
            });

            document.getElementById('lang-text').innerText = currentLang === 'es' ? 'EN' : 'ES';
            renderProjects();
        }

        document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);

        // 5. Filtrado de Tarjetas
        function filterProjects(category) {
            const cards = document.querySelectorAll('.project-card');
            const buttons = document.querySelectorAll('.filter-btn');

            buttons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
            });
            event.currentTarget.classList.add('bg-blue-600', 'text-white');
            event.currentTarget.classList.remove('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');

            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Menú Móvil
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

        // 6. Init e Incremento de Contadores
        document.addEventListener('DOMContentLoaded', () => {
            renderProjects();

            const counters = document.querySelectorAll('[data-target]');
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const speed = 40;
                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target + "+";
                    }
                };
                updateCount();
            });
        });
    </script>
</body>
</html>
