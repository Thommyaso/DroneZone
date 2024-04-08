const setHamburger = () => {
    const hamburgerBtn = document.querySelector('.nav__hamburger-button');
    const menu = document.querySelector('.nav__menu');
    const menuLinks = document.querySelectorAll('.nav__link');

    const toggle = () => {
        menu.classList.toggle('nav__menu--visible');
        hamburgerBtn.classList.toggle('nav__hamburger-clicked');
    };

    menuLinks.forEach((el) => {
        el.onclick = toggle;
    });

    hamburgerBtn.addEventListener('click', toggle);
};

export default setHamburger;
