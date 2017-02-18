"use strict";

(function () {

    const onDomLoad = () => {

        const formTab = document.querySelectorAll(".form__tab");
        const formContent = document.querySelectorAll(".form__content");

        const manageAttribute = function ( item ) {
            if ( this.getAttribute("data-tab") == item.getAttribute("data-tab") ) {
                item.classList.add("active")
            } else {
                item.classList.remove("active")
            }
        };

        const addClickListener = tab => {
            tab.addEventListener('click', function () {
                Array.from(formTab).forEach(manageAttribute.bind(this));
                Array.from(formContent).forEach(manageAttribute.bind(this));
            });
        };

        Array.from(formTab).forEach(addClickListener);
    };

    document.addEventListener("DOMContentLoaded", onDomLoad);
})();