(() => {
    const featuresToggleBtn = document.querySelectorAll('.main_protection_container_item_features_btn');
    
    function featuresToggle() {
        document.body.addEventListener('click', evt => {
            if(evt.target.matches('.main_protection_container_item_features_btn')) {
                evt.target.parentElement.classList.toggle('open')
            }
        });
    };

    featuresToggle();

    function initEvents() {

        const mainContainers = {
            about: document.querySelector('#main-about'),
            services: document.querySelector('#main-services'),
            reviews: document.querySelector('#main-reviews'),
            protection: document.querySelector('#main_protection'),
            contact: document.querySelector('#main-contact')
        };
    
        const headerBtns = {
            about: document.querySelector('#about-btn'),
            reviews: document.querySelector('#reviews-btn'),
            price: document.querySelector('#price-btn'),
            support: document.querySelector('#support-btn')
        };
    
        const footerBtns = {
            about: document.querySelector('#footer-about-btn'),
            reviews: document.querySelector('#footer-reviews-btn'),
            price: document.querySelector('#footer-price-btn'),
            support: document.querySelector('#footer-support-btn')
        };

        const eventsHeader = {
            to_about: headerBtns.about.addEventListener('click', () => { mainContainers.about.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_reviews: headerBtns.reviews.addEventListener('click', () => { mainContainers.reviews.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_price: headerBtns.price.addEventListener('click', () => { mainContainers.protection.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_support: headerBtns.support.addEventListener('click', () => { mainContainers.contact.scrollIntoView({block: "center", behavior: "smooth"}) })
        };

        const eventsFooter = {
            to_about: footerBtns.about.addEventListener('click', () => { mainContainers.about.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_reviews: footerBtns.reviews.addEventListener('click', () => { mainContainers.reviews.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_price: footerBtns.price.addEventListener('click', () => { mainContainers.protection.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_support: footerBtns.support.addEventListener('click', () => { mainContainers.contact.scrollIntoView({block: "center", behavior: "smooth"}) })
        };
    }

    initEvents();

    const languageContainer = document.querySelector('#language-container');

    function toggleLanguage() {
        languageContainer.addEventListener('click', evt => {
            let container = evt.target.parentElement;
            console.log(container);
            if (container.classList.contains('open')) {
                openLanguage(evt.target);
                container.classList.remove('open');
                let img  = document.querySelector('#language-img');
                let lang = evt.target.dataset.lang;
                console.log(lang);
                img.setAttribute('src', 'images/' + lang + '.jpg');
            } else if(evt.target.matches('button')) {
                container.classList.toggle('open');
            }
        });
        
        function openLanguage(button) {
            console.log('start');
            let container =  button.parentElement;
            console.log(container);
            let selected  = container.removeChild(button);
            console.log(selected);
            container.prepend(selected);
        }
    }

    languageContainer && toggleLanguage();
})();