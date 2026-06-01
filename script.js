// ===================================
// NAVIGATION MOBILE
// ===================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.flexDirection = 'column';
    navLinks.style.background = 'rgba(10, 14, 39, 0.99)';
    navLinks.style.padding = '20px';
    navLinks.style.borderBottom = '1px solid var(--border-color)';
    navLinks.style.gap = '20px';
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// ===================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// ANIMACIÓN DE SCROLL PARA ELEMENTOS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos animables
document.querySelectorAll('.project-card, .skill-category, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ===================================
// CONTADOR DE ESTADÍSTICAS
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Iniciar contadores cuando estén visibles
const statCards = document.querySelectorAll('.info-item .number');
let countersStarted = false;

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            statCards.forEach(card => {
                const value = parseInt(card.textContent);
                animateCounter(card, value);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statCards.length > 0) {
    counterObserver.observe(statCards[0].closest('.info-item'));
}

// ===================================
// FORMULARIO DE CONTACTO
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensaje = this.querySelector('textarea').value;
        
        // Validar campos
        if (nombre && email && mensaje) {
            // Crear mailto link
            const mailtoLink = `mailto:josolano09@gmail.com?subject=Nuevo Mensaje de ${encodeURIComponent(nombre)}&body=${encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`)}`;
            
            // Abrir cliente de correo
            window.location.href = mailtoLink;
            
            // Mostrar mensaje de éxito
            showNotification('Mensaje enviado. Se abrirá tu cliente de correo.', 'success');
            
            // Limpiar formulario
            this.reset();
        } else {
            showNotification('Por favor completa todos los campos.', 'error');
        }
    });
}

// ===================================
// NOTIFICACIONES
// ===================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#00d97e' : type === 'error' ? '#ff6b35' : '#0066ff'};
        color: white;
        border-radius: 8px;
        font-size: 14px;
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar animaciones CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// EFECTO PARALLAX
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero::before');
    
    // Efecto de movimiento en background
    document.querySelectorAll('.hero::before, .hero::after').forEach((el, index) => {
        if (index === 0) {
            el.style.transform = `translateY(${scrolled * 0.5}px)`;
        } else {
            el.style.transform = `translateY(${scrolled * -0.5}px)`;
        }
    });
});

// ===================================
// PRELOADER
// ===================================
window.addEventListener('load', () => {
    // Agregar clase de carga completada
    document.body.classList.add('loaded');
});

// ===================================
// TEMA OSCURO/CLARO (OPCIONAL)
// ===================================
function initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Inicializar tema
initThemeToggle();

// ===================================
// VERIFICAR ACTIVIDAD DE SCROLL
// ===================================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===================================
// LAZY LOADING PARA IMÁGENES (FUTURO)
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// ===================================
// INICIALIZACIÓN
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portafolio cargado exitosamente');
    
    // Agregar efectos adicionales aquí
    addHoverEffects();
});

// Funciones de efectos adicionales
function addHoverEffects() {
    const cards = document.querySelectorAll('.project-card, .skill-category, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}