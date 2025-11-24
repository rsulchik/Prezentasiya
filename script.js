// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми секциями
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Анимация отправки формы
    const form = document.querySelector('.order-form');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    form.addEventListener('submit', function(e) {
        // Показываем лоадер
        btnText.style.opacity = '0';
        btnLoader.style.display = 'block';
        submitBtn.disabled = true;
        
        // Имитация отправки (в реальном проекте удалить этот таймаут)
        setTimeout(() => {
            btnText.style.opacity = '1';
            btnLoader.style.display = 'none';
            submitBtn.disabled = false;
        }, 2000);
    });

    // Плавный скролл для якорей
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

    // Динамическое изменение тени хедера при скролле
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.textShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.textShadow = 'none';
        }
    });
});