// --- Data ---
const projectsData = {
    'forecasting': {
        title: 'Property Price Forecast',
        fullDescription: `
            <p class="mb-4 text-slate-600">
              <strong>Tech Stack:</strong> Python, Pandas, Scikit-learn, SQL
            </p>
            <p class="mb-4 text-slate-600">
              Developed an end-to-end time-series forecasting pipeline to predict property prices. 
              Engineered features from raw transaction data and implemented ensemble models (Random Forest, XGBoost) to inform short-term pricing strategies in a volatile market.
            </p>
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-6">
              <h4 class="font-semibold text-sm text-ink mb-2">Key Highlights</h4>
              <ul class="list-disc list-inside space-y-1 text-sm text-slate-500">
                <li>Reduced error margin by 12% compared to baseline heuristic.</li>
                <li>Implemented modular feature generation pipeline for scalability.</li>
                <li>Deployed as a reproducible Jupyter notebook suite for team use.</li>
              </ul>
            </div>
            <p>
              <a href="https://github.com/HtunNaing-bit/forecasting-model" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 font-medium transition-colors">
                View Repository 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </p>
        `
    },
    'dashboard': {
        title: 'Sales BI Dashboard',
        fullDescription: `
            <p class="mb-4 text-slate-600">
              <strong>Tech Stack:</strong> Tableau, Power BI, SQL
            </p>
            <p class="mb-4 text-slate-600">
              Designed and deployed interactive dashboards to consolidate weekly KPIs and inventory metrics. 
              The solution streamlined data reporting and provided real-time visibility for sales leadership.
            </p>
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-6">
              <h4 class="font-semibold text-sm text-ink mb-2">Key Impact</h4>
              <ul class="list-disc list-inside space-y-1 text-sm text-slate-500">
                <li>Reduced manual reporting effort by approx. 14 hours/week.</li>
                <li>Unified disparate data sources into a single source of truth.</li>
              </ul>
            </div>
            <p>
              <a href="https://github.com/HtunNaing-bit" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 font-medium transition-colors">
                View Related Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </p>
        `
    },
    'data-quality': {
        title: 'Data Quality Toolkit',
        fullDescription: `
            <p class="mb-4 text-slate-600"><strong>Tech:</strong> SQL, Python</p>
            <p class="mb-4 text-slate-600">Created a suite of reusable SQL checks and Python scripts to validate new imports. This toolkit acts as a gatekeeper for the data warehouse, preventing common ETL errors and ensuring high data fidelity.</p>
            <p>
              <a href="https://github.com/HtunNaing-bit" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 font-medium transition-colors">
                View Scripts
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </p>
        `
    },
    'etl': {
        title: 'ETL Helpers',
        fullDescription: `
            <p class="mb-4 text-slate-600"><strong>Tech:</strong> Bash, Cron, DevOps</p>
            <p class="mb-4 text-slate-600">Automated critical backup and import jobs with monitoring alerts. Scripts were designed for reliability and simple recovery, minimizing downtime in case of failure.</p>
        `
    },
    'pricing': {
        title: 'Pricing Analysis',
        fullDescription: `
            <p class="mb-4 text-slate-600"><strong>Tech:</strong> R, Statistics</p>
            <p class="mb-4 text-slate-600">Conducted statistical analysis and cohort segmentation to recommend price adjustments. Analyzed performance by region and listing age to optimize revenue.</p>
        `
    },
    'dashboard-2': {
        title: 'Inventory Heatmap',
        fullDescription: `
             <p class="mb-4 text-slate-600"><strong>Tech:</strong> GIS, Python, Viz</p>
             <p class="mb-4 text-slate-600">Developed geospatial analysis and heatmap visualizations to identify under-served neighborhoods and inventory concentration, aiding in strategic acquisition planning.</p>
        `
    }
};

// --- DOM Elements ---
const header = document.getElementById('main-header');
const headerContainer = document.getElementById('header-container');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const projectCards = document.querySelectorAll('.project-card');
const navLinks = document.querySelectorAll('.nav-link');

// --- Functions ---

// 1. Smooth Scroll with Easing
function smoothScrollTo(e, targetId) {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;

    const headerOffset = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    const startPosition = window.scrollY;
    const distance = offsetPosition - startPosition;
    const duration = 800;
    let start = null;

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// 2. Header Scroll Effect
function handleScroll() {
    if (window.scrollY > 50) {
        headerContainer.classList.remove('bg-white/60', 'shadow-black/5');
        headerContainer.classList.add('bg-white', 'shadow-xl', 'shadow-slate-900/5', 'ring-slate-900/5');
    } else {
        headerContainer.classList.add('bg-white/60', 'shadow-black/5');
        headerContainer.classList.remove('bg-white', 'shadow-xl', 'shadow-slate-900/5', 'ring-slate-900/5');
    }
}

// 3. Modal Logic
function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalBody.innerHTML = project.fullDescription;
    
    modalBackdrop.classList.remove('hidden');
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalBackdrop.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    setTimeout(() => {
        modalBackdrop.classList.add('hidden');
        modalTitle.textContent = '';
        modalBody.innerHTML = '';
        document.body.style.overflow = '';
    }, 300); // Match transition duration
}

// --- Event Listeners ---

// Scroll
window.addEventListener('scroll', handleScroll);

// Nav Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            smoothScrollTo(e, href);
        }
    });
});

// Project Cards
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openModal(id);
    });
    // Accessibility
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const id = card.getAttribute('data-id');
            openModal(id);
        }
    });
});

// Modal Close
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
        closeModal();
    }
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) {
        closeModal();
    }
});

// Initial check
handleScroll();