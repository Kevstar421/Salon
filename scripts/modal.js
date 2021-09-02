const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    // Function to display modal when button is clicked
    $("#myBtn").addEventListener("click", () => {
        $("#myBtnModal").style.display = "block";
    });

    // Function to close modal when "x" is clicked
    $(".closeBtn").addEventListener("click", () => {
        $("#myBtnModal").style.display = "none";
    });

    // Function to close modal when clicked outside
    $("#myBtnModal").addEventListener("click", pointer => {
        if ( pointer.target == $("#myBtnModal") ) {
            $("#myBtnModal").style.display = "none";
        }
    });
});



