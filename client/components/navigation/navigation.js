"use strict";

const onDomLoad = ( event ) => {

    const burgerButton = document.querySelector(".navigation__icon--burger");
    const closeButton = document.querySelector(".navigation__icon--close");
    const mainMenu = document.querySelector(".navigation__menu");

    burgerButton.addEventListener("click", function ( event ) {
        mainMenu.classList.add("navigation__menu--active");
    });

    closeButton.addEventListener("click", function ( event ) {
        mainMenu.classList.remove("navigation__menu--active");
    });

};

document.addEventListener("DOMContentLoaded", onDomLoad);