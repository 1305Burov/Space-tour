export const burger = () => {
    if (window.screen.availWidth < 576) {
        const burger = document.getElementById('burger');
        const menu = document.getElementById('menu');

        burger.addEventListener('click', (e) => {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('nav__list_active');
        })
    }
}