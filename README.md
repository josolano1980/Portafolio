<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jorge Enrique Solano Jiménez | Enterprise Cloud Architect Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
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
        .hidden-lang { display: none; }
        .lang-toggle { cursor: pointer; }
    </style>
</head>
<body class="tech-gradient text-slate-100 min-h-screen selection:bg-blue-500 selection:text-white antialiased">

    <nav class="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/60">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div class="flex flex-col">
                <span class="text-lg font-bold tracking-tight text-white">Jorge E. Solano J.</span>
                <span class="text-xs text-blue-400 font-mono tracking-widest uppercase">Cloud Architect</span>
            </div>
            <div class="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-slate-300">
                <a href="#perfil" class="hover:text-blue-400 transition-colors duration-200 nav-perfil">Perfil</a>
                <a href="#competencias" class="hover:text-blue-400 transition-colors duration-200 nav-competencias">Competencias</a>
                <a href="#proyectos" class="hover:text-blue-400 transition-colors duration-200 nav-proyectos">Portafolio</a>
                <a href="#contacto" class="hover:text-blue-400 transition-colors duration-200 nav-contacto">Contacto</a>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex gap-2 text-xs font-mono">
                    <button id="lang-es" class="lang-toggle px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold transition-all">ES</button>
                    <button id="lang-en" class="lang-toggle px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 font-semibold transition-all">EN</button>
                </div>
                <div class="md:hidden">
                    <button id="mobile-menu-btn" class="text-slate-400 hover:text-white focus:outline-none">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3">
            <a href="#perfil" class="block text-slate-300 hover:text-blue-400 text-sm nav-perfil">Perfil</a>
            <a href="#competencias" class="block text-slate-300 hover:text-blue-400 text-sm nav-competencias">Competencias</a>
            <a href="#proyectos" class="block text-slate-300 hover:text-blue-400 text-sm nav-proyectos">Portafolio</a>
            <a href="#contacto" class="block text-slate-300 hover:text-blue-400 text-sm nav-contacto">Contacto</a>
        </div>
    </nav>

    <header id="perfil" class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>

        <div class="max-w-4xl relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-6 uppercase tracking-wider">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Orlando, FL Area
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-none">
                <span class="lang-es">Arquitecto de Nube Empresarial & <br><span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Gestor de Programas de Sistemas TI</span></span>
                <span class="lang-en hidden-lang">Enterprise Cloud Architect & <br><span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">IT Systems Program Manager</span></span>
            </h1>
            <p class="text-lg sm:text-xl text-slate-400 font-light max-w-3xl leading-relaxed mb-8">
                <span class="lang-es">Líder tecnológico empresarial y arquitecto de soluciones con más de 25 años de trayectoria impulsando transformaciones digitales, integraciones de sistemas de alto volumen y migraciones empresariales estratégicas.</span>
                <span class="lang-en hidden-lang">Enterprise technology leader and solutions architect with over 25 years of track record driving digital transformations, high-volume system integrations, and strategic enterprise migrations.</span>
            </p>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl pt-4">
                <div class="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                    <span class="block text-3xl font-bold text-white font-mono" data-target="25">0</span>
                    <span class="text-xs text-slate-400 uppercase tracking-wider">
                        <span class="lang-es">Años de Experiencia</span>
                        <span class="lang-en hidden-lang">Years Experience</span>
                    </span>
                </div>
                <div class="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                    <span class="block text-3xl font-bold text-blue-400 font-mono" data-target="45">0</span>
                    <span class="text-xs text-slate-400 uppercase tracking-wider">
                        <span class="lang-es">Integraciones Core Migradas</span>
                        <span class="lang-en hidden-lang">Core Integrations Migrated</span>
                    </span>
                </div>
                <div class="bg-slate-900/50 border border-slate-800 p-4 rounded-xl col-span-2 sm:col-span-1">
                    <span class="block text-3xl font-bold text-emerald-400 font-mono">100%</span>
                    <span class="text-xs text-slate-400 uppercase tracking-wider">
                        <span class="lang-es">Éxito de Entrega (Últimos 5 Años)</span>
                        <span class="lang-en hidden-lang">Delivery Success (Last 5 Yrs)</span>
                    </span>
                </div>
            </div>
        </div>
    </header>

    <section id="competencias" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
        <div class="mb-12">
            <h2 class="text-xs text-blue-400 font-mono tracking-widest uppercase mb-2">
                <span class="lang-es">// Habilidades de Ingeniería Superior</span>
                <span class="lang-en hidden-lang">// Advanced Engineering Skills</span>
            </h2>
            <p class="text-3xl font-bold text-white">Technical Core Competencies</p>
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
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">SharePoint Online</span>
                </div>
            </div>
            <div class="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/80 transition-all duration-300 group">
                <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-lg mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <i class="fa-solid fa-sitemap"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-3">Methodologies & Governance</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">TOGAF Architecture</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">HOPEX System Modeling</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Agile Project Management</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Scrum</span>
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
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Financial Payment Engines</span>
                    <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-mono">Liquidation Integration Engines</span>
                </div>
            </div>
        </div>
    </section>

    <section id="proyectos" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
                <h2 class="text-xs text-blue-400 font-mono tracking-widest uppercase mb-2">
                    <span class="lang-es">// Casos de Éxito Reales</span>
                    <span class="lang-en hidden-lang">// Real Success Cases</span>
                </h2>
                <p class="text-3xl font-bold text-white"><span class="lang-es">Portafolio de Proyectos</span><span class="lang-en hidden-lang">Project Portfolio</span> (Last 5 Years)</p>
            </div>
            <div class="flex flex-wrap gap-2 text-xs font-mono">
                <button onclick="filterProjects('all')" class="filter-btn px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold shadow-md transition-all">
                    <span class="lang-es">Todos</span>
                    <span class="lang-en hidden-lang">All</span>
                </button>
                <button onclick="filterProjects('cloud')" class="filter-btn px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-all">Cloud & DevOps</button>
                <button onclick="filterProjects('integration')" class="filter-btn px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-all">
                    <span class="lang-es">Integraciones Core</span>
                    <span class="lang-en hidden-lang">Core Integration</span>
                </button>
                <button onclick="filterProjects('governance')" class="filter-btn px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-all">
                    <span class="lang-es">Gobernanza</span>
                    <span class="lang-en hidden-lang">Governance</span>
                </button>
            </div>
        </div>

        <div id="projects-grid" class="grid gap-6 md:grid-cols-2">
            
            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="cloud">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2025 | 1,124 Hrs</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            <span class="lang-es">100% Completado</span>
                            <span class="lang-en hidden-lang">100% Completed</span>
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">1. Enterprise BizTalk to Azure Cloud Migration Program</h3>
                    <p class="text-slate-400 text-sm leading-relaxed space-y-2 mb-6">
                        <strong><span class="lang-es">Estrategia:</span><span class="lang-en hidden-lang">Strategy:</span></strong> 
                        <span class="lang-es">Arquitecturó y dirigió la migración de 45+ integraciones transaccionales de misión crítica desde BizTalk heredado hacia microservicios nativos en Azure.</span>
                        <span class="lang-en hidden-lang">Architected and led migration of 45+ mission-critical transactional integrations from legacy BizTalk to native Azure microservices.</span>
                        <br>
                        <strong>CI/CD:</strong> 
                        <span class="lang-es">Estableció pipelines robustos de despliegue automatizado mediante Azure DevOps para gobernanza ambiental.</span>
                        <span class="lang-en hidden-lang">Established robust automated deployment pipelines via Azure DevOps for environmental governance.</span>
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        <span class="lang-es">Resultado Estratégico:</span>
                        <span class="lang-en hidden-lang">Strategic Outcome:</span>
                    </span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> 
                        <span class="lang-es">Mayor escalabilidad sistémica y resiliencia con una reducción inmediata del 25% en costos operativos de runtime.</span>
                        <span class="lang-en hidden-lang">Enhanced system scalability and resilience with immediate 25% reduction in runtime operational costs.</span>
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="integration">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2025 | 1,970 Hrs</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            <span class="lang-es">100% Completado</span>
                            <span class="lang-en hidden-lang">100% Completed</span>
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">2. Core Systems Integration & Microservices Modernization</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong><span class="lang-es">Estrategia:</span><span class="lang-en hidden-lang">Strategy:</span></strong> 
                        <span class="lang-es">Encabezó la reestructuración técnica de frameworks de procesamiento backend monolíticos hacia arquitecturas de microservicios de alto rendimiento.</span>
                        <span class="lang-en hidden-lang">Led technical restructuring of monolithic backend processing frameworks to high-performance microservices architectures.</span>
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        <span class="lang-es">Resultado Estratégico:</span>
                        <span class="lang-en hidden-lang">Strategic Outcome:</span>
                    </span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> 
                        <span class="lang-es">Rendimiento de la plataforma aumentado en un 40%, incidentes de integración reducidos en un 30%.</span>
                        <span class="lang-en hidden-lang">Platform performance increased 40%, integration incidents reduced 30%.</span>
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="integration">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2025 | 1,620 Hrs</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            <span class="lang-es">100% Completado</span>
                            <span class="lang-en hidden-lang">100% Completed</span>
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">3. Transactional Payment Module & Financial Reconciliation Engine</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong><span class="lang-es">Estrategia:</span><span class="lang-en hidden-lang">Strategy:</span></strong> 
                        <span class="lang-es">Dirigió la reingeniería y el refactor seguro de módulos transaccionales heredados.</span>
                        <span class="lang-en hidden-lang">Led re-engineering and safe refactoring of legacy transactional modules.</span>
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        <span class="lang-es">Resultado Estratégico:</span>
                        <span class="lang-en hidden-lang">Strategic Outcome:</span>
                    </span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> 
                        <span class="lang-es">Aceleración integral en los tiempos de procesamiento de liquidación financiera.</span>
                        <span class="lang-en hidden-lang">Comprehensive acceleration in financial settlement processing times.</span>
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="governance">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2024-2025 | 644 Hrs</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            <span class="lang-es">100% Completado</span>
                            <span class="lang-en hidden-lang">100% Completed</span>
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">4. Institutional Enterprise Architecture Governance (HOPEX Alignment)</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong><span class="lang-es">Estrategia:</span><span class="lang-en hidden-lang">Strategy:</span></strong> 
                        <span class="lang-es">Orquestó la definición, modelado y mapeo profundo de procesos de negocio institucionales.</span>
                        <span class="lang-en hidden-lang">Orchestrated definition, modeling, and deep mapping of institutional business processes.</span>
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        <span class="lang-es">Resultado Estratégico:</span>
                        <span class="lang-en hidden-lang">Strategic Outcome:</span>
                    </span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> 
                        <span class="lang-es">Creación de un plano centralizado de la huella global de TI corporativa.</span>
                        <span class="lang-en hidden-lang">Created centralized blueprint of corporate IT global footprint.</span>
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="governance">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2024 | 297 Hrs</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            <span class="lang-es">100% Completado</span>
                            <span class="lang-en hidden-lang">100% Completed</span>
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">5. UX/UI Standardization & Institutional Total Experience (TX) Framework</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong><span class="lang-es">Estrategia:</span><span class="lang-en hidden-lang">Strategy:</span></strong> 
                        <span class="lang-es">Diseñó y desplegó patrones globales de activos digitales y estándares de usabilidad.</span>
                        <span class="lang-en hidden-lang">Designed and deployed global digital asset patterns and usability standards.</span>
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        <span class="lang-es">Resultado Estratégico:</span>
                        <span class="lang-en hidden-lang">Strategic Outcome:</span>
                    </span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> 
                        <span class="lang-es">Unificación de la apariencia visual frontend en todas las soluciones corporativas.</span>
                        <span class="lang-en hidden-lang">Unified frontend visual appearance across all corporate solutions.</span>
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="cloud">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2020-2024</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            <span class="lang-es">100% Completado</span>
                            <span class="lang-en hidden-lang">100% Completed</span>
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">6. National Single Window Platform Evolution & Infrastructure Hardening</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong><span class="lang-es">Estrategia:</span><span class="lang-en hidden-lang">Strategy:</span></strong> 
                        <span class="lang-es">Dirigió el mantenimiento continuo, migraciones y endurecimiento de seguridad arquitectónico.</span>
                        <span class="lang-en hidden-lang">Led continuous maintenance, migrations, and architectural security hardening.</span>
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        <span class="lang-es">Resultado Estratégico:</span>
                        <span class="lang-en hidden-lang">Strategic Outcome:</span>
                    </span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> 
                        <span class="lang-es">Continuidad absoluta del negocio para arquitecturas multimillonarias.</span>
                        <span class="lang-en hidden-lang">Absolute business continuity for multi-million dollar architectures.</span>
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="integration">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2022</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            <span class="lang-es">100% Completado</span>
                            <span class="lang-en hidden-lang">100% Completed</span>
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">7. SICOP National Procurement System Interoperability Integration</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong><span class="lang-es">Estrategia:</span><span class="lang-en hidden-lang">Strategy:</span></strong> 
                        <span class="lang-es">Diseñó y desplegó capas seguras de servicios web para lograr interoperabilidad.</span>
                        <span class="lang-en hidden-lang">Designed and deployed secure web service layers to achieve interoperability.</span>
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        <span class="lang-es">Resultado Estratégico:</span>
                        <span class="lang-en hidden-lang">Strategic Outcome:</span>
                    </span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> 
                        <span class="lang-es">Eliminación de entrada manual de datos mediante automatización.</span>
                        <span class="lang-en hidden-lang">Eliminated manual data entry through automation.</span>
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="governance">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2021</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            <span class="lang-es">100% Completado</span>
                            <span class="lang-en hidden-lang">100% Completed</span>
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">8. Enterprise IT Governance Framework & Operational Audit Remediation</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong><span class="lang-es">Estrategia:</span><span class="lang-en hidden-lang">Strategy:</span></strong> 
                        <span class="lang-es">Ejecutó revisión exhaustiva de estándares de entrega de TI corporativos.</span>
                        <span class="lang-en hidden-lang">Executed comprehensive review of corporate IT delivery standards.</span>
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        <span class="lang-es">Resultado Estratégico:</span>
                        <span class="lang-en hidden-lang">Strategic Outcome:</span>
                    </span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> 
                        <span class="lang-es">Reestructuración total de flujos de entrega internos.</span>
                        <span class="lang-en hidden-lang">Total restructuring of internal delivery workflows.</span>
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="governance">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2021</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            <span class="lang-es">100% Completado</span>
                            <span class="lang-en hidden-lang">100% Completed</span>
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">9. Corporate Digital Workspaces Modernization (SharePoint Migration)</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong><span class="lang-es">Estrategia:</span><span class="lang-en hidden-lang">Strategy:</span></strong> 
                        <span class="lang-es">Diseñó taxonomía de activos corporativos y esquemas de permisos avanzados.</span>
                        <span class="lang-en hidden-lang">Designed corporate asset taxonomy and advanced permission schemes.</span>
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        <span class="lang-es">Resultado Estratégico:</span>
                        <span class="lang-en hidden-lang">Strategic Outcome:</span>
                    </span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> 
                        <span class="lang-es">Eliminación de fricción de almacenamiento físico.</span>
                        <span class="lang-en hidden-lang">Eliminated physical storage friction.</span>
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="cloud">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2021</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            <span class="lang-es">100% Completado</span>
                            <span class="lang-en hidden-lang">100% Completed</span>
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">10. Information Security Perimeter Hardening & Vulnerability Remediation</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong><span class="lang-es">Estrategia:</span><span class="lang-en hidden-lang">Strategy:</span></strong> 
                        <span class="lang-es">Supervisó escaneos de penetración y aplicación de parches de vulnerabilidades.</span>
                        <span class="lang-en hidden-lang">Supervised penetration scans and vulnerability patch applications.</span>
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        <span class="lang-es">Resultado Estratégico:</span>
                        <span class="lang-en hidden-lang">Strategic Outcome:</span>
                    </span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> 
                        <span class="lang-es">Maximización de la resiliencia frente a amenazas cibernéticas.</span>
                        <span class="lang-en hidden-lang">Maximized resilience against cyber threats.</span>
                    </p>
                </div>
            </div>

        </div>
    </section>

    <section id="contacto" class="max-w-4xl mx-auto px-4 py-20 text-center border-t border-slate-800/60">
        <h2 class="text-3xl font-bold text-white mb-4">
            <span class="lang-es">¿Conectamos para su próxima iniciativa de Ingeniería Cloud?</span>
            <span class="lang-en hidden-lang">Let's Connect for Your Next Cloud Engineering Initiative</span>
        </h2>
        <p class="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed mb-10">
            <span class="lang-es">Abierto a evaluar consultorías arquitectónicas estratégicas, optimizaciones de TI de alta envergadura o liderazgos globales de infraestructura de TI.</span>
            <span class="lang-en hidden-lang">Open to strategic architectural consulting, high-impact IT optimization, or global IT infrastructure leadership opportunities.</span>
        </p>
        
        <div class="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
            <a href="mailto:josolano09@gmail.com" class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all group">
                <i class="fa-solid fa-envelope text-blue-400 text-lg mb-2 group-hover:scale-110 transition-transform"></i>
                <span class="block text-xs text-slate-400">
                    <span class="lang-es">Correo Directo</span>
                    <span class="lang-en hidden-lang">Direct Email</span>
                </span>
                <span class="text-sm font-medium text-white">josolano09@gmail.com</span>
            </a>
            <a href="tel:+17863306020" class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group">
                <i class="fa-solid fa-phone text-emerald-400 text-lg mb-2 group-hover:scale-110 transition-transform"></i>
                <span class="block text-xs text-slate-400">
                    <span class="lang-es">Llamar / Móvil</span>
                    <span class="lang-en hidden-lang">Call / Mobile</span>
                </span>
                <span class="text-sm font-medium text-white">+1 (786) 330-6020</span>
            </a>
            <a href="https://www.linkedin.com/in/jorge-solano-jiménez-9438b963/" target="_blank" rel="noopener noreferrer" class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all group">
                <i class="fa-brands fa-linkedin text-indigo-400 text-lg mb-2 group-hover:scale-110 transition-transform"></i>
                <span class="block text-xs text-slate-400">
                    <span class="lang-es">Perfil Profesional</span>
                    <span class="lang-en hidden-lang">Professional Profile</span>
                </span>
                <span class="text-sm font-medium text-white">LinkedIn /jorge-solano</span>
            </a>
        </div>
    </section>

    <footer class="bg-slate-950/80 border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p><span class="lang-es">&copy; 2026 Jorge Enrique Solano Jiménez. Todos los derechos reservados.</span><span class="lang-en hidden-lang">&copy; 2026 Jorge Enrique Solano Jiménez. All rights reserved.</span></p>
        <p class="mt-1 text-slate-600">
            <span class="lang-es">Construido con estándares modernos en HTML5, Tailwind CSS y Vanilla JS. Alojamientos en la nube redundantes.</span>
            <span class="lang-en hidden-lang">Built with modern HTML5, Tailwind CSS, and Vanilla JS standards. Redundant cloud hosting.</span>
        </p>
    </footer>

    <script>
        // Language translations
        const translations = {
            es: {
                "nav-perfil": "Perfil",
                "nav-competencias": "Competencias",
                "nav-proyectos": "Portafolio",
                "nav-contacto": "Contacto"
            },
            en: {
                "nav-perfil": "Profile",
                "nav-competencias": "Skills",
                "nav-proyectos": "Portfolio",
                "nav-contacto": "Contact"
            }
        };

        // Language switching functionality
        function setLanguage(lang) {
            // Update HTML lang attribute
            document.documentElement.lang = lang;

            // Toggle language classes
            const langElements = document.querySelectorAll('[class*="lang-"]');
            langElements.forEach(el => {
                el.classList.add('hidden-lang');
            });
            document.querySelectorAll('.lang-' + lang).forEach(el => {
                el.classList.remove('hidden-lang');
            });

            // Update language buttons
            document.getElementById('lang-es').classList.toggle('bg-blue-600 text-white', lang === 'es');
            document.getElementById('lang-es').classList.toggle('bg-slate-800 text-slate-300 hover:bg-slate-700', lang !== 'es');
            document.getElementById('lang-en').classList.toggle('bg-blue-600 text-white', lang === 'en');
            document.getElementById('lang-en').classList.toggle('bg-slate-800 text-slate-300 hover:bg-slate-700', lang !== 'en');

            // Update nav links text if needed
            document.querySelectorAll('.nav-perfil').forEach(el => {
                if (!el.querySelector('.lang-es') && !el.querySelector('.lang-en')) {
                    el.textContent = translations[lang]["nav-perfil"];
                }
            });

            // Save preference
            localStorage.setItem('preferredLanguage', lang);
        }

        // Event listeners for language buttons
        document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
        document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

        // Load saved language preference
        const savedLang = localStorage.getItem('preferredLanguage') || 'es';
        setLanguage(savedLang);

        // 1. Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // 2. Project filter logic
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
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 200);
                }
            });
        }

        // 3. Animated counter effect
        document.addEventListener('DOMContentLoaded', () => {
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
