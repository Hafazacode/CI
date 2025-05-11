// Get the modal
var modal = document.getElementById("ModalProfile");

// Get the image that opens the modal
var img = document.getElementById("gmbarprofile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that closes the modal
var closeModalBtn = document.getElementById("closeModalBtn");

// When the user clicks the image, open the modal 
img.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks the close button inside the modal, close it
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}