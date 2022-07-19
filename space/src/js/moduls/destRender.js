import { getDestination } from './getDestination.js';

export const destRender = () => {
    if (location.pathname === '/destination.html') {
        if (!window.localStorage.getItem("destData") || window.localStorage.getItem("destData") === 'undefined') {
            getDestination().then(data => {
                window.localStorage.setItem("destData", JSON.stringify(data));
                destRender();
            })
        }else {
            const destBox = document.getElementById('dest-box');
            const textbox = destBox.querySelector('.textbox');
            const img = destBox.querySelector('.destination__image');
            
            const destData = JSON.parse(window.localStorage.getItem("destData"));
    
            destBox.addEventListener('click', (e) => {
                const target = e.target;
                
                if (target.classList.contains('list__button')) {
                    const active = destBox.querySelector('.list__button_active');
                    
                    if (active !== target) {
                        active.classList.remove('list__button_active');
                        target.classList.add('list__button_active');
                        
                        const dest = destData.filter((data) => {
                            return data.name === target.textContent;
                        })
    
                        const {name, images, description, distance, travel} = dest[0];
                        
                        img.src = images.webp;
                        
                        textbox.innerHTML = '';
                        
                        const content = `
                            <h2 class="h2 textbox__heading">${name}</h2>
                            <p class="textbox__text">
                                ${description}
                            </p>
                            <div class="textbox__info info">
                                <div class="info__distance">
                                    <h6 class="sh2 info__heading">AVG. DISTANCE</h6>
                                    <p class="sh1 info__text">${distance}</p>   
                                </div>
                                <div class="info__time">
                                    <h6 class="sh2 info__heading">Est. travel time</h6>
                                    <p class="sh1 info__text">${travel}</p>   
                                </div>
                            </div>
                        `;

                        textbox.insertAdjacentHTML('afterbegin', content);
                        
                    
                        // getDestination(target.textContent).then(data => {
                        //     const {name, image, description, distance, travel} = data[0];
                        //     // const    = dataObj
                        //     header.textContent = name;
                        //     text.textContent = description;
                        //     distanceText.textContent = distance;
                        //     time.textContent = travel;
                        // })
                    }
                }
            })
        }
        
    }
}