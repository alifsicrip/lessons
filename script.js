// Global variables
let currentZoom = 100;
const zoomStep = 10;
const minZoom = 50;
const maxZoom = 200;

// UE Data Structure
const ueData = {
    'ue1-1': {
        title: 'UE 1.1 - Psychologie, Sociologie, Anthropologie',
        description: 'Comprendre les dimensions psychologiques, sociologiques et anthropologiques de l\'être humain et de la santé.',
        credits: '3 ECTS',
        semester: 'S1',
        icon: '👥',
        documents: [
            { name: 'Introduction à la psychologie', type: 'pdf', size: '2.4 MB' },
            { name: 'Sociologie de la santé', type: 'pdf', size: '3.1 MB' },
            { name: 'Anthropologie médicale', type: 'pdf', size: '1.8 MB' }
        ]
    },
    'ue1-2': {
        title: 'UE 1.2 - Santé publique et Économie de la santé',
        description: 'Analyser les systèmes de santé et comprendre les enjeux économiques.',
        credits: '2 ECTS',
        semester: 'S2',
        icon: '⚖️',
        documents: []
    },
    'ue1-3': {
        title: 'UE 1.3 - Législation, Éthique, Déontologie',
        description: 'Connaître le cadre législatif et les principes éthiques de la profession infirmière.',
        credits: '2 ECTS',
        semester: 'S1',
        icon: '⚖️',
        documents: []
    },
    'ue2-1': {
        title: 'UE 2.1 - Biologie fondamentale',
        description: 'Acquérir les connaissances de base en biologie cellulaire, génétique et biochimie.',
        credits: '3 ECTS',
        semester: 'S1',
        icon: '🧬',
        documents: []
    },
    'ue2-2': {
        title: 'UE 2.2 - Cycles de la vie et grandes fonctions',
        description: 'Comprendre l\'anatomie et la physiologie des grandes fonctions du corps humain.',
        credits: '2 ECTS',
        semester: 'S1',
        icon: '❤️',
        documents: []
    },
    'ue2-3': {
        title: 'UE 2.3 - Santé, maladie, handicap, accidents',
        description: 'Appréhender les concepts de santé, maladie et handicap dans une approche globale.',
        credits: '2 ECTS',
        semester: 'S2',
        icon: '🏥',
        documents: []
    },
    'ue2-4': {
        title: 'UE 2.4 - Processus traumatiques',
        description: 'Comprendre les mécanismes physiopathologiques des traumatismes.',
        credits: '1 ECTS',
        semester: 'S2',
        icon: '🚑',
        documents: []
    },
    'ue2-5': {
        title: 'UE 2.5 - Processus inflammatoires et infectieux',
        description: 'Étudier les processus inflammatoires et les maladies infectieuses.',
        credits: '2 ECTS',
        semester: 'S3',
        icon: '🦠',
        documents: []
    },
    'ue2-6': {
        title: 'UE 2.6 - Processus dégénératifs et défaillances organiques',
        description: 'Comprendre les pathologies dégénératives et les défaillances d\'organes.',
        credits: '2 ECTS',
        semester: 'S2',
        icon: '💔',
        documents: []
    },
    'ue2-7': {
        title: 'UE 2.7 - Défaillances organiques et processus dégénératifs',
        description: 'Approfondir l\'étude des défaillances organiques.',
        credits: '2 ECTS',
        semester: 'S4',
        icon: '🫀',
        documents: []
    },
    'ue2-8': {
        title: 'UE 2.8 - Processus obstructifs',
        description: 'Étudier les pathologies obstructives des différents systèmes.',
        credits: '2 ECTS',
        semester: 'S3',
        icon: '🫁',
        documents: []
    },
    'ue2-9': {
        title: 'UE 2.9 - Processus tumoraux',
        description: 'Comprendre les mécanismes de la cancérologie et les traitements.',
        credits: '1 ECTS',
        semester: 'S5',
        icon: '🎗️',
        documents: []
    },
    'ue2-10': {
        title: 'UE 2.10 - Infectiologie, Hygiène',
        description: 'Maîtriser les principes d\'hygiène et de prévention des infections.',
        credits: '2 ECTS',
        semester: 'S1',
        icon: '🧼',
        documents: []
    },
    'ue2-11': {
        title: 'UE 2.11 - Pharmacologie et Thérapeutiques',
        description: 'Connaître les médicaments, leurs effets et leur administration.',
        credits: '3 ECTS',
        semester: 'S1, S3, S5',
        icon: '💊',
        documents: []
    },
    'ue3-1': {
        title: 'UE 3.1 - Raisonnement et démarche clinique',
        description: 'Développer le raisonnement clinique infirmier.',
        credits: '2 ECTS',
        semester: 'S1, S2',
        icon: '🧠',
        documents: []
    },
    'ue3-2': {
        title: 'UE 3.2 - Projet de soins infirmiers',
        description: 'Élaborer et conduire un projet de soins individualisé.',
        credits: '2 ECTS',
        semester: 'S2, S3',
        icon: '📋',
        documents: []
    },
    'ue3-3': {
        title: 'UE 3.3 - Rôles infirmiers, organisation',
        description: 'Comprendre les rôles infirmiers et l\'organisation des soins.',
        credits: '2 ECTS',
        semester: 'S3',
        icon: '👩‍⚕️',
        documents: []
    },
    'ue3-4': {
        title: 'UE 3.4 - Initiation à la démarche de recherche',
        description: 'S\'initier à la méthodologie de recherche en soins infirmiers.',
        credits: '1 ECTS',
        semester: 'S4',
        icon: '🔬',
        documents: []
    },
    'ue3-5': {
        title: 'UE 3.5 - Encadrement des professionnels de soins',
        description: 'Développer les compétences d\'encadrement et de coordination.',
        credits: '2 ECTS',
        semester: 'S6',
        icon: '👥',
        documents: []
    },
    'ue4-1': {
        title: 'UE 4.1 - Soins de confort et bien-être',
        description: 'Réaliser des soins de confort et de bien-être de la personne.',
        credits: '1 ECTS',
        semester: 'S1',
        icon: '🛁',
        documents: []
    },
    'ue4-2': {
        title: 'UE 4.2 - Soins relationnels',
        description: 'Développer une communication thérapeutique avec le patient.',
        credits: '2 ECTS',
        semester: 'S2, S5',
        icon: '💬',
        documents: []
    },
    'ue4-3': {
        title: 'UE 4.3 - Soins d\'urgence',
        description: 'Gérer les situations d\'urgence et de détresse vitale.',
        credits: '1 ECTS',
        semester: 'S2, S4',
        icon: '🚨',
        documents: []
    },
    'ue4-4': {
        title: 'UE 4.4 - Thérapeutiques et contribution au diagnostic',
        description: 'Mettre en œuvre des thérapeutiques et contribuer au diagnostic médical.',
        credits: '2 ECTS',
        semester: 'S2, S5',
        icon: '💉',
        documents: []
    },
    'ue4-5': {
        title: 'UE 4.5 - Soins infirmiers et gestion des risques',
        description: 'Identifier et gérer les risques liés aux soins.',
        credits: '1 ECTS',
        semester: 'S4',
        icon: '⚠️',
        documents: []
    },
    'ue4-6': {
        title: 'UE 4.6 - Soins éducatifs et préventifs',
        description: 'Éduquer et prévenir pour promouvoir la santé.',
        credits: '2 ECTS',
        semester: 'S3, S4',
        icon: '📚',
        documents: []
    },
    'ue4-7': {
        title: 'UE 4.7 - Soins palliatifs et fin de vie',
        description: 'Accompagner une personne en fin de vie et son entourage.',
        credits: '1 ECTS',
        semester: 'S5',
        icon: '🕊️',
        documents: []
    },
    'ue4-8': {
        title: 'UE 4.8 - Qualité des soins, évaluation des pratiques',
        description: 'Évaluer et améliorer la qualité des soins infirmiers.',
        credits: '1 ECTS',
        semester: 'S6',
        icon: '📊',
        documents: []
    },
    'ue5-1': {
        title: 'UE 5.1 - Accompagnement de la personne',
        description: 'Accompagner la personne dans la réalisation de ses soins quotidiens.',
        credits: '1 ECTS',
        semester: 'S1',
        icon: '🤝',
        documents: []
    },
    'ue5-2': {
        title: 'UE 5.2 - Communication et conduite de projet',
        description: 'Communiquer et conduire une relation dans un contexte de soins.',
        credits: '2 ECTS',
        semester: 'S2, S3',
        icon: '📢',
        documents: []
    },
    'ue5-3': {
        title: 'UE 5.3 - Information et traitement',
        description: 'Rechercher et traiter des données professionnelles et scientifiques.',
        credits: '1 ECTS',
        semester: 'S3',
        icon: '💾',
        documents: []
    },
    'ue5-4': {
        title: 'UE 5.4 - Analyse de pratiques professionnelles',
        description: 'Analyser la qualité des soins et améliorer sa pratique professionnelle.',
        credits: '1 ECTS',
        semester: 'S4, S5',
        icon: '🔍',
        documents: []
    },
    'ue5-5': {
        title: 'UE 5.5 - Mise en œuvre des thérapeutiques',
        description: 'Initier et adapter l\'administration des thérapeutiques.',
        credits: '1 ECTS',
        semester: 'S3, S5',
        icon: '💊',
        documents: []
    },
    'ue5-6': {
        title: 'UE 5.6 - Analyse de la qualité',
        description: 'Analyser la qualité et traiter les données scientifiques et professionnelles.',
        credits: '1 ECTS',
        semester: 'S6',
        icon: '📈',
        documents: []
    },
    'ue5-7': {
        title: 'UE 5.7 - Optionnelle',
        description: 'Unité d\'enseignement optionnelle selon le projet professionnel.',
        credits: '2 ECTS',
        semester: 'S6',
        icon: '🎯',
        documents: []
    },
    'ue5-8': {
        title: 'UE 5.8 - Stage et Travaux',
        description: 'Stages cliniques et travail de fin d\'études.',
        credits: '60 ECTS',
        semester: 'S1-S6',
        icon: '🏥',
        documents: []
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
    initializeSidebar();
    loadContent('accueil');
});

// Sidebar toggle for mobile
function initializeSidebar() {
    const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const navItems = document.querySelectorAll('.nav-item');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        navItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const section = item.closest('.nav-section');
            
            if (text.includes(searchTerm)) {
                item.style.display = 'flex';
                if (section) section.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        // Hide empty sections
        document.querySelectorAll('.nav-section').forEach(section => {
            const visibleItems = section.querySelectorAll('.nav-item[style="display: flex"]');
            if (visibleItems.length === 0 && searchTerm !== '') {
                section.style.display = 'none';
            }
        });
    });
}

// Load content based on selection
function loadContent(contentId) {
    const contentBody = document.getElementById('contentBody');
    const breadcrumb = document.getElementById('breadcrumb');
    
    // Update active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (contentId === 'accueil') {
        breadcrumb.innerHTML = '<i class="fas fa-home"></i> Accueil';
        contentBody.innerHTML = getWelcomeContent();
    } else if (contentId === 'ressources') {
        breadcrumb.innerHTML = '<i class="fas fa-home"></i> Accueil / Ressources';
        contentBody.innerHTML = getResourcesContent();
        document.querySelector('[onclick="loadContent(\'ressources\')"]').classList.add('active');
    } else if (ueData[contentId]) {
        const ue = ueData[contentId];
        breadcrumb.innerHTML = `<i class="fas fa-home"></i> Accueil / ${ue.title}`;
        contentBody.innerHTML = getUEContent(contentId);
        document.querySelector(`[onclick="loadContent('${contentId}')"]`).classList.add('active');
    }
    
    // Scroll to top
    contentBody.scrollTop = 0;
    
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
    }
}

// Get welcome content
function getWelcomeContent() {
    return `
        <div class="welcome-screen">
            <div class="welcome-header">
                <h1>🎓 Bienvenue sur votre espace IFSI</h1>
                <p class="welcome-subtitle">Formation en soins infirmiers - Promotion 2025</p>
            </div>
            
            <div class="info-cards">
                <div class="info-card">
                    <div class="info-card-icon">📚</div>
                    <h3>Organisation</h3>
                    <p>Tous vos cours organisés par Unités d'Enseignement</p>
                </div>
                <div class="info-card">
                    <div class="info-card-icon">🔍</div>
                    <h3>Recherche</h3>
                    <p>Trouvez rapidement vos documents avec la barre de recherche</p>
                </div>
                <div class="info-card">
                    <div class="info-card-icon">📱</div>
                    <h3>Responsive</h3>
                    <p>Accédez à vos cours depuis n'importe quel appareil</p>
                </div>
            </div>

            <div class="quick-start">
                <h2>🚀 Démarrage rapide</h2>
                <ol>
                    <li>Utilisez le menu latéral pour naviguer entre les UE</li>
                    <li>Cliquez sur une UE pour voir son contenu</li>
                    <li>Utilisez la recherche pour trouver rapidement un document</li>
                    <li>Utilisez les outils de zoom pour ajuster l'affichage</li>
                </ol>
            </div>

            <div class="stats-container">
                <div class="stat-box">
                    <div class="stat-number">6</div>
                    <div class="stat-label">Catégories d'UE</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number">40+</div>
                    <div class="stat-label">Unités d'Enseignement</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number">180</div>
                    <div class="stat-label">ECTS</div>
                </div>
            </div>
        </div>
    `;
}

// Get UE content
function getUEContent(ueId) {
    const ue = ueData[ueId];
    
    let documentsHTML = '';
    if (ue.documents.length > 0) {
        documentsHTML = ue.documents.map(doc => `
            <div class="document-item">
                <div class="document-icon">${getDocIcon(doc.type)}</div>
                <div class="document-info">
                    <div class="document-name">${doc.name}</div>
                    <div class="document-meta">${doc.type.toUpperCase()} • ${doc.size}</div>
                </div>
                <div class="document-actions">
                    <button class="doc-btn" onclick="viewDocument('${doc.name}', '${doc.type}')">
                        <i class="fas fa-eye"></i> Voir
                    </button>
                    <button class="doc-btn" onclick="downloadDocument('${doc.name}')">
                        <i class="fas fa-download"></i> Télécharger
                    </button>
                </div>
            </div>
        `).join('');
    } else {
        documentsHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
                <i class="fas fa-folder-open" style="font-size: 48px; margin-bottom: 16px; display: block;"></i>
                <p>Aucun document disponible pour le moment</p>
                <p style="font-size: 14px; margin-top: 8px;">Les documents seront ajoutés au fur et à mesure du semestre</p>
            </div>
        `;
    }
    
    return `
        <div class="ue-page">
            <div class="ue-header">
                <h1 class="ue-title">${ue.icon} ${ue.title}</h1>
                <p class="ue-description">${ue.description}</p>
                <div class="ue-meta">
                    <div class="ue-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${ue.semester}</span>
                    </div>
                    <div class="ue-meta-item">
                        <i class="fas fa-award"></i>
                        <span>${ue.credits}</span>
                    </div>
                    <div class="ue-meta-item">
                        <i class="fas fa-file-alt"></i>
                        <span>${ue.documents.length} document(s)</span>
                    </div>
                </div>
            </div>
            
            <div class="documents-section">
                <h2><i class="fas fa-folder"></i> Documents</h2>
                <div class="document-list">
                    ${documentsHTML}
                </div>
            </div>
        </div>
    `;
}

// Get resources content
function getResourcesContent() {
    return `
        <div class="ue-page">
            <div class="ue-header">
                <h1 class="ue-title">📁 Ressources</h1>
                <p class="ue-description">Documents et outils complémentaires pour votre formation</p>
            </div>
            
            <div class="documents-section">
                <h2><i class="fas fa-link"></i> Liens utiles</h2>
                <div class="document-list">
                    <div class="document-item">
                        <div class="document-icon">🌐</div>
                        <div class="document-info">
                            <div class="document-name">Ordre National des Infirmiers</div>
                            <div class="document-meta">Site officiel de l'ONI</div>
                        </div>
                        <div class="document-actions">
                            <button class="doc-btn" onclick="window.open('https://www.ordre-infirmiers.fr', '_blank')">
                                <i class="fas fa-external-link-alt"></i> Visiter
                            </button>
                        </div>
                    </div>
                    <div class="document-item">
                        <div class="document-icon">📖</div>
                        <div class="document-info">
                            <div class="document-name">Guide de l'étudiant IFSI</div>
                            <div class="document-meta">PDF • En cours de création</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Helper function to get document icon
function getDocIcon(type) {
    const icons = {
        'pdf': '📄',
        'doc': '📝',
        'docx': '📝',
        'xls': '📊',
        'xlsx': '📊',
        'ppt': '📽️',
        'pptx': '📽️',
        'jpg': '🖼️',
        'jpeg': '🖼️',
        'png': '🖼️',
        'gif': '🖼️',
        'svg': '🎨',
        'md': '📋',
        'txt': '📃'
    };
    return icons[type.toLowerCase()] || '📁';
}

// Zoom functions
function zoomIn() {
    if (currentZoom < maxZoom) {
        currentZoom += zoomStep;
        applyZoom();
    }
}

function zoomOut() {
    if (currentZoom > minZoom) {
        currentZoom -= zoomStep;
        applyZoom();
    }
}

function resetZoom() {
    currentZoom = 100;
    applyZoom();
}

function applyZoom() {
    const contentBody = document.getElementById('contentBody');
    contentBody.style.fontSize = `${currentZoom}%`;
}

// Document actions (placeholders)
function viewDocument(name, type) {
    alert(`Visualisation de: ${name}\n\nCette fonctionnalité affichera le document ${type.toUpperCase()} dans un visualiseur intégré.`);
}

function downloadDocument(name) {
    alert(`Téléchargement de: ${name}\n\nCette fonctionnalité lancera le téléchargement du fichier.`);
}
