const $ = (selector) => {
  return document.querySelector(selector);
};

// Function to display modal when button is clicked
const displayModal = () => {
  document.querySelector("#myBtnModal").style.display = "block";
};
$("#myBtn").addEventListener("click", displayModal);


// Function to close modal when "x" is clicked
const closeModal = () => {
  document.querySelector("#myBtnModal").style.display = "none";
};
$(".closeBtn").addEventListener("click", closeModal);

// Function to close modal when clicked outside
const closeModalOutside = (target) => {
  document.querySelector("#myBtnModal").style.display = "none";
};
$("#myBtnModal").addEventListener("click", closeModalOutside);