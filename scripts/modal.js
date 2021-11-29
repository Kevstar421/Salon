"use strict";

const $ = selector => document.querySelector(selector);
const everyElement = document.querySelectorAll("*");
const modalLinkElements = document.querySelectorAll("#myBtnContainer p a");

const animationFinished = () => $("#myBtnModal").style.display = "none";

const closeModal = evt => {
    if ( evt.target == $("#myBtnModal") || evt.target == $(".closeBtn") ) {
        // Prevents  setTimeout delay from resetting due to spam clicking outside the modal
        $("#myBtnModal").removeEventListener("click", closeModal);

        $("#myBtnModal").style.backgroundColor = "transparent";

        // Closing animation
        $(".modalBtnContent").style.webkitAnimationName = "animatebottom";
        $(".modalBtnContent").style.animationName = "animatebottom";

        setTimeout(animationFinished, 395);

        // Allows tab access
        for ( let i = 0; i < everyElement.length; i++ ) {
            everyElement[i].setAttribute("tabindex", "");
        }

        // Allows page to be scrollable
        $("body").style.overflow = "initial";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Function to display modal when button is clicked
    $("#myBtn").addEventListener("click", () => {
        $("#myBtnModal").addEventListener("click", closeModal);

        $("#myBtnModal").style.backgroundColor = "rgba(0, 0, 0, 0.4)";

        $("#myBtnModal").style.display = "block";
        
        // Opening animation
        $(".modalBtnContent").style.webkitAnimationName = "animatetop";
        $(".modalBtnContent").style.animationName = "animatetop";

        // Prevents tab access to every element
        for ( let i = 0; i < everyElement.length; i++ ) {
            everyElement[i].setAttribute("tabindex", "-1");
        }

        // Prevents page from being scrollable inside the modal
        $("body").style.overflow = "hidden";

        // Allows elements in modal to be tab accessible
        for ( let i = 0; i < modalLinkElements.length; i++ ) {
            $(".closeBtn").setAttribute("tabindex", "0");
            modalLinkElements[i].setAttribute("tabindex", "0");
        }
    });

    // Function to close modal when "x" is clicked
    $(".closeBtn").addEventListener("click", closeModal);

    // Function to close modal when clicked outside
    $("#myBtnModal").addEventListener("click", closeModal);

    // Allows modal to be closed via keyboard
    $(".closeBtn").addEventListener("keyup", evt => {
        if ( evt.keyCode == 13 || evt.keyCode == 32 ) {
            closeModal(evt);
        }
    });
});