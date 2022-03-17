// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");


// Get the <span> element that closes the modal
var canx = document.getElementById("canx");
var canx2 = document.getElementById("canx2");


// The button that opens the modal
var modalBtn = document.getElementById("profileList");
modalBtn.addEventListener("click",function(){
    modal.style.display = "block";
});
var modalBtn2 = document.querySelector("updateBtn");
modalBtn2.addEventListener("click",function(){
    modal2.style.display = "block";
});

// When the user clicks the "Cancel" button, close the modal and clear fields

var canxBtn = document.getElementById("canx");
canxBtn.addEventListener("click",function(){
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image_link").value = "";
    modal.style.display = "none";
});

var canxBtn2 = document.getElementById("canx");
canxBtn2.addEventListener("click",function(){
    modal2.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {    
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("description").value = "";
        document.getElementById("image_link").value = "";
        modal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modal2) {    
        modal2.style.display = "none";
    }
}