 const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });

        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = 'none';
            });
        });

        const colorDots = document.querySelectorAll('.color-dot');
        colorDots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                const siblings = dot.parentElement.querySelectorAll('.color-dot');
                siblings.forEach(s => s.style.borderColor = '#ddd');
                dot.style.borderColor = '#2c5f5d';
                dot.style.borderWidth = '2px';
            });
        });

        const ctaBtns = document.querySelectorAll('.cta-btn');
        ctaBtns.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
            });
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });

        const promoCards = document.querySelectorAll('.promo-card');
        promoCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = 'none';
            });
        });

        const giftCards = document.querySelectorAll('.gift-card');
        giftCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = 'none';
            });
        });

        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
            }
        });

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

        document.querySelectorAll('.product-card, .collection-item, .gift-card, .testimonial').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
        
         document.getElementById("logo").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });