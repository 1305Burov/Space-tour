import * as flsFunc from './moduls/webp.js';
import { destRender } from './moduls/destRender.js';
import { crewRender } from './moduls/crewRender.js';
import { techRender } from './moduls/techRender.js';
import { burger } from './moduls/burger.js';

flsFunc.isWebp();
destRender();
crewRender();
techRender();
burger()

if (location.pathname === '/crew.html') {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        lazy: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
    });
}

if (location.pathname === '/technology.html') {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        lazy: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    });
}