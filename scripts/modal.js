"use strict";

const $ = selector => document.querySelector(selector);
const everyElement = document.querySelectorAll("*");
const modalLinkElements = document.querySelectorAll("#myBtnContainer p a");

document.addEventListener("DOMContentLoaded", () => {
    // Function to display modal when button is clicked
    $("#myBtn").addEventListener("click", () => {
        $("#myBtnModal").style.display = "block";

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
    $(".closeBtn").addEventListener("click", () => {
        $("#myBtnModal").style.display = "none";

        // Allows tab access
        for ( let i = 0; i < everyElement.length; i++ ) {
            everyElement[i].setAttribute("tabindex", "");
        }

        // Allows page to be scrollable
        $("body").style.overflow = "initial";
    });

    // Function to close modal when clicked outside
    $("#myBtnModal").addEventListener("click", evt => {
        if ( evt.target == $("#myBtnModal") ) {
            $("#myBtnModal").style.display = "none";

            // Allows tab access
            for ( let i = 0; i < everyElement.length; i++ ) {
                everyElement[i].setAttribute("tabindex", "");
            }

            // Allows page to be scrollable
            $("body").style.overflow = "initial";
        }
    });

    // Allows modal to be closed via keyboard
    $(".closeBtn").addEventListener("keyup", evt => {
        if ( evt.keyCode == 13 || evt.keyCode == 32 ) {
            $("#myBtnModal").style.display = "none";
            
            // Allows tab access
            for ( let i = 0; i < everyElement.length; i++ ) {
                everyElement[i].setAttribute("tabindex", "");
            }

            // Allows page to be scrollable
            $("body").style.overflow = "initial";
        }
    });
});



