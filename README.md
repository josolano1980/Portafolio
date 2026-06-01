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
                <a href="#perfil" class="hover:text-blue-400 transition-colors duration-200">Perfil</a>
                <a href="#competencias" class="hover:text-blue-400 transition-colors duration-200">Competencias</a>
                <a href="#proyectos" class="hover:text-blue-400 transition-colors duration-200">Portafolio</a>
                <a href="#contacto" class="hover:text-blue-400 transition-colors duration-200">Contacto</a>
            </div>
            <div class="md:hidden">
                <button id="mobile-menu-btn" class="text-slate-400 hover:text-white focus:outline-none">
                    <i class="fa-solid fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3">
            <a href="#perfil" class="block text-slate-300 hover:text-blue-400 text-sm">Perfil</a>
            <a href="#competencias" class="block text-slate-300 hover:text-blue-400 text-sm">Competencias</a>
            <a href="#proyectos" class="block text-slate-300 hover:text-blue-400 text-sm">Portafolio</a>
            <a href="#contacto" class="block text-slate-300 hover:text-blue-400 text-sm">Contacto</a>
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
                Enterprise Cloud Architect & <br>
                <span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">IT Systems Program Manager</span>
            </h1>
            <p class="text-lg sm:text-xl text-slate-400 font-light max-w-3xl leading-relaxed mb-8">
                Líder tecnológico empresarial y arquitecto de soluciones con más de 25 años de trayectoria impulsando transformaciones digitales, integraciones de sistemas de alto volumen y migraciones seguras a la nube. Experto en dirigir programas de misión crítica y orquestar arquitecturas de microservicios escalables.
            </p>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl pt-4">
                <div class="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                    <span class="block text-3xl font-bold text-white font-mono" data-target="25">0</span>
                    <span class="text-xs text-slate-400 uppercase tracking-wider">Años de Experiencia</span>
                </div>
                <div class="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                    <span class="block text-3xl font-bold text-blue-400 font-mono" data-target="45">0</span>
                    <span class="text-xs text-slate-400 uppercase tracking-wider">Integraciones Core Migradas</span>
                </div>
                <div class="bg-slate-900/50 border border-slate-800 p-4 rounded-xl col-span-2 sm:col-span-1">
                    <span class="block text-3xl font-bold text-emerald-400 font-mono">100%</span>
                    <span class="text-xs text-slate-400 uppercase tracking-wider">Éxito de Entrega (Últimos 5 Años)</span>
                </div>
            </div>
        </div>
    </header>

    <section id="competencias" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/60">
        <div class="mb-12">
            <h2 class="text-xs text-blue-400 font-mono tracking-widest uppercase mb-2">// Habilidades de Ingeniería Superior</h2>
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
                <h2 class="text-xs text-blue-400 font-mono tracking-widest uppercase mb-2">// Casos de Éxito Reales</h2>
                <p class="text-3xl font-bold text-white">Project Portfolio (Last 5 Years)</p>
            </div>
            <div class="flex flex-wrap gap-2 text-xs font-mono">
                <button onclick="filterProjects('all')" class="filter-btn px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold shadow-md transition-all">Todos</button>
                <button onclick="filterProjects('cloud')" class="filter-btn px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-all">Cloud & DevOps</button>
                <button onclick="filterProjects('integration')" class="filter-btn px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-all">Integraciones Core</button>
                <button onclick="filterProjects('governance')" class="filter-btn px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-all">Gobernanza e Infraestructura</button>
            </div>
        </div>

        <div id="projects-grid" class="grid gap-6 md:grid-cols-2">
            
            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="cloud">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2025 | 1,124 Hrs</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">100% Completed</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">1. Enterprise BizTalk to Azure Cloud Migration Program</h3>
                    <p class="text-slate-400 text-sm leading-relaxed space-y-2 mb-6">
                        <strong>Estrategia:</strong> Arquitecturó y dirigió la migración de 45+ integraciones transaccionales de misión crítica desde BizTalk heredado hacia microservicios nativos en Azure (Azure Functions, Logic Apps, Service Bus).<br><br>
                        <strong>CI/CD:</strong> Estableció pipelines robustos de despliegue automatizado mediante Azure DevOps para gobernanza ambiental.
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Strategic Outcome:</span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> Mayor escalabilidad sistémica y resiliencia con una reducción inmediata del 25% en costos operativos de runtime.
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="integration">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2025 | 1,970 Hrs</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">100% Completed</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">2. Core Systems Integration & Microservices Modernization</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong>Estrategia:</strong> Encabezó la reestructuración técnica de frameworks de procesamiento backend monolíticos hacia arquitecturas de microservicios de alto rendimiento, optimizando el logging de telemetría y mapas de trazabilidad a través de canales de datos.
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Strategic Outcome:</span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> Rendimiento de la plataforma aumentado en un 40%, incidentes de integración reducidos en un 30% y un modelo de soporte altamente confiable.
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="integration">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2025 | 1,620 Hrs</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">100% Completed</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">3. Transactional Payment Module & Financial Reconciliation Engine</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong>Estrategia:</strong> Dirigió la reingeniería y el refactor seguro de módulos transaccionales heredados, implementando motores de cálculo multimoneda completamente automatizados y algoritmos de conciliación para libros contables digitales.
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Strategic Outcome:</span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> Aceleración integral en los tiempos de procesamiento de liquidación financiera y disminución de errores de cálculo sistémicos en un 30%.
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="governance">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2024-2025 | 644 Hrs</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">100% Completed</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">4. Institutional Enterprise Architecture Governance (HOPEX Alignment)</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong>Estrategia:</strong> Orquestó la definición, modelado y mapeo profundo de procesos de negocio institucionales y topologías de aplicaciones distribuidas dentro de la plataforma HOPEX, asegurando el alineamiento total con los estándares de arquitectura empresarial TOGAF.
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Strategic Outcome:</span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> Creación de un plano centralizado de la huella global de TI corporativa, habilitando decisiones de inversión de capital y planificación de costos con riesgo mitigado.
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="governance">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2024 | 297 Hrs</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">100% Completed</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">5. UX/UI Standardization & Institutional Total Experience (TX) Framework</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong>Estrategia:</strong> Diseñó y desplegó patrones globales de activos digitales, estándares clave de usabilidad y maquetación interactiva enfocada estrictamente en cumplimiento, accesibilidad y estilizado de interfaces intuitivas.
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Strategic Outcome:</span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> Unificación de la apariencia visual frontend y comportamientos de interacción en todas las soluciones de la corporación, mejorando la ergonomía de la plataforma.
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="cloud">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2020-2024</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">100% Completed</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">6. National Single Window Platform Evolution & Infrastructure Hardening</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong>Estrategia:</strong> Dirigió el mantenimiento continuo, las migraciones de componentes estructurales y el endurecimiento de seguridad (hardening) arquitectónico de la plataforma de escala nacional VUCE 2.0 (Ventanilla Única de Comercio Exterior) utilizando capas de microservicios en la nube altamente resilientes.
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Strategic Outcome:</span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> Continuidad absoluta del negocio para arquitecturas de comercio exterior multimillonarias junto con una agilidad de transacciones significativamente optimizada.
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="integration">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2022</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">100% Completed</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">7. SICOP National Procurement System Interoperability Integration</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong>Estrategia:</strong> Diseñó y desplegó capas seguras de servicios web y middleware de comunicación multiplataforma para lograr la interoperabilidad entre los módulos internos de software y el sistema oficial de compras públicas de Costa Rica (SICOP).
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Strategic Outcome:</span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> Eliminación de prácticas de entrada manual de datos mediante la automatización del procesamiento entre agencias, garantizando transparencia absoluta en los registros de adquisiciones.
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="governance">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2021</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">100% Completed</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">8. Enterprise IT Governance Framework & Operational Audit Remediation</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong>Estrategia:</strong> Ejecutó una revisión interna exhaustiva de los estándares de entrega de TI corporativos, mapeando las arquitecturas de software contra marcos internacionales de gobernanza de TI y estándares de seguridad.
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Strategic Outcome:</span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> Reestructuración total de los flujos de entrega internos, remediación de vulnerabilidades criticas y adopción de un modelo operativo alineado con estrictas auditorías institucionales.
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="governance">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2021</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">100% Completed</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">9. Corporate Digital Workspaces Modernization (SharePoint Migration)</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong>Estrategia:</strong> Diseñó la taxonomía de activos corporativos estratégicos, esquemas de permisos avanzados y la hoja de ruta de implementación para migrar documentos distribuidos e infraestructuras de servidores de archivos hacia un tenant unificado de Microsoft SharePoint Online.
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Strategic Outcome:</span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> Eliminación definitiva de la fricción de almacenamiento documental físico e impulso de flujos modernos y seguros de colaboración en tiempo real para múltiples segmentos internos.
                    </p>
                </div>
            </div>

            <div class="project-card bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 glow-effect" data-category="cloud">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">2021</span>
                        <span class="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">100% Completed</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">10. Information Security Perimeter Hardening & Vulnerability Remediation</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        <strong>Estrategia:</strong> Supervisó escaneos sistemáticos de penetración (pentesting), evaluaciones de riesgo estructurales y la aplicación de parches de vulnerabilidades específicos en sistemas productivos; estableciendo lineamientos de hardening para servidores transaccionales públicos.
                    </p>
                </div>
                <div class="border-t border-slate-800/80 pt-4 mt-auto">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Strategic Outcome:</span>
                    <p class="text-sm text-emerald-400 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
                        <i class="fa-solid fa-chart-line mr-1.5"></i> Maximización de la resiliencia de las barreras perimetrales frente a amenazas cibernéticas externas sofisticadas y logro de estado de cumplimiento ante revisiones estatales.
                    </p>
                </div>
            </div>

        </div>
    </section>

    <section id="contacto" class="max-w-4xl mx-auto px-4 py-20 text-center border-t border-slate-800/60">
        <h2 class="text-3xl font-bold text-white mb-4">¿Conectamos para su próxima iniciativa de Ingeniería Cloud?</h2>
        <p class="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed mb-10">
            Abierto a evaluar consultorías arquitectónicas estratégicas, optimizaciones de TI de alta envergadura o liderazgos globales de infraestructura de TI.
        </p>
        
        <div class="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
            <a href="mailto:josolano09@gmail.com" class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all group">
                <i class="fa-solid fa-envelope text-blue-400 text-lg mb-2 group-hover:scale-110 transition-transform"></i>
                <span class="block text-xs text-slate-400">Correo Directo</span>
                <span class="text-sm font-medium text-white">josolano09@gmail.com</span>
            </a>
            <a href="tel:+17863306020" class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group">
                <i class="fa-solid fa-phone text-emerald-400 text-lg mb-2 group-hover:scale-110 transition-transform"></i>
                <span class="block text-xs text-slate-400">Llamar / Móvil</span>
                <span class="text-sm font-medium text-white">+1 (786) 330-6020</span>
            </a>
            <a href="www.linkedin.com/in/jorge-solano-jiménez-9438b963" target="_blank" class="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all group">
                <i class="fa-brands fa-linkedin text-indigo-400 text-lg mb-2 group-hover:scale-110 transition-transform"></i>
                <span class="block text-xs text-slate-400">Perfil Profesional</span>
                <span class="text-sm font-medium text-white">LinkedIn /jorge-solano</span>
            </a>
        </div>
    </section>

    <footer class="bg-slate-950/80 border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>&copy; 2026 Jorge Enrique Solano Jiménez. Todos los derechos reservados.</p>
        <p class="mt-1 text-slate-600">Construido con estándares modernos en HTML5, Tailwind CSS y Vanilla JS. Alojamientos en la nube redundantes.</p>
    </footer>

    <script>
        // 1. Menú móvil interactivo
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // 2. Lógica Dinámica de Filtrado de Proyectos
        function filterProjects(category) {
            const cards = document.querySelectorAll('.project-card');
            const buttons = document.querySelectorAll('.filter-btn');

            // Actualizar apariencia del botón activo
            buttons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
            });
            event.currentTarget.classList.add('bg-blue-600', 'text-white');
            event.currentTarget.classList.remove('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');

            // Mostrar u ocultar tarjetas con animación suave
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

        // 3. Efecto de Contadores Numéricos Animados en el Hero (KPIs)
        document.addEventListener('DOMContentLoaded', () => {
            const counters = document.querySelectorAll('[data-target]');
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const speed = 40; // velocidad de incremento
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
