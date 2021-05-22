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

    function initEvents() {
        const eventsHeader = {
            to_about: headerBtns.about.addEventListener('click', () => { mainContainers.about.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_reviews: headerBtns.reviews.addEventListener('click', () => { mainContainers.reviews.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_price: headerBtns.price.addEventListener('click', () => { mainContainers.protection.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_support: headerBtns.support.addEventListener('click', () => { mainContainers.contact.scrollIntoView({block: "center", behavior: "smooth"}) })
        }

        const eventsFooter = {
            to_about: footerBtns.about.addEventListener('click', () => { mainContainers.about.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_reviews: footerBtns.reviews.addEventListener('click', () => { mainContainers.reviews.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_price: footerBtns.price.addEventListener('click', () => { mainContainers.protection.scrollIntoView({block: "center", behavior: "smooth"}) }),
            to_support: footerBtns.support.addEventListener('click', () => { mainContainers.contact.scrollIntoView({block: "center", behavior: "smooth"}) })
        }
    }

    mainContainers && initEvents();
})();