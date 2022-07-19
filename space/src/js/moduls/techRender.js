import { getTech } from "./getTech.js";

export const techRender = () => {
    if (location.pathname === '/technology.html') {
        
        if (!window.localStorage.getItem("techData") || window.localStorage.getItem("techData") === 'undefined') {
            getTech().then(data => {
                window.localStorage.setItem("techData", JSON.stringify(data));
                techRender();
            })
        } else {
            const swiper = document.getElementById('swiper-tech');

            const techData = JSON.parse(window.localStorage.getItem("techData"));
            
            const tech = techData.map(( technology ) => {
                return `
                    <div class="swiper-slide slide">
                        <div class="slide__box">
                            <div class="slide__content">
                                <h5 class="h5 slide__subtitle">THE TERMINOLOGY…</h5>
                                <h3 class="h3 slide__title">${ technology.name }</h3>
                                <p class="slide__text">
                                    ${ technology.description }
                                </p>
                                
                            </div>
                            <div class="swiper-pagination swiper-pagination-mobile"></div>
                            <img src="${ ( window.screen.availHeight >= 900 && window.screen.availWidth >= 1100 ) ? technology.images.portrait : technology.images.landscape }" alt="image" class="slide__img">
                        </div>
                    </div>
                `
            }).join('')

            swiper.innerHTML = '';

            swiper.insertAdjacentHTML('afterbegin', tech);
        }
    }
}