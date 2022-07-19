import { getCrew } from './getCrew.js';

export const crewRender = () => {
    if (location.pathname === '/crew.html') {
        
        
        if (!window.localStorage.getItem("crewData") || window.localStorage.getItem("crewData") === 'undefined') {
            getCrew().then(data => {
                window.localStorage.setItem("crewData", JSON.stringify(data));
                crewRender();
            })
        } else {
            const swiper = document.getElementById('swiper');

            const crewData = JSON.parse(window.localStorage.getItem("crewData"));
            
            const crew = crewData.map((crewMember) => {
                return `<div class="swiper-slide">
                    <div class="slide__content">
                        <h4 class="h4 slide__post">${crewMember.role}</h4>
                        <h3 class="h3 slide__name">${crewMember.name}</h3>
                        <p class="slide__text">
                            ${crewMember.bio}
                        </p>    
                    </div>
                    <div class="swiper-pagination swiper-pagination-mobile"></div>
                    <img src="${crewMember.images.webp}" alt="Hurry up" class="slide__img">
                </div>
                `
            }).join('')

            swiper.innerHTML = '';

            swiper.insertAdjacentHTML('afterbegin', crew);
        }
    }
}