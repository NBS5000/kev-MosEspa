// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("profileList");

// Get the <span> element that closes the modal
var canx = document.getElementById("canx");

// When the user clicks the "Begin"  button, open the modal 

var modalBtn = document.getElementById("profileList");
modalBtn.addEventListener("click",function(){
    modal.style.display = "block";
});

// var modalBtnAss = document.getElementById("modalBtnAssess");
// modalBtnAss.addEventListener("click",function(){
//     var dateUrl = "./date.html?open=yes";
//     document.location.href = dateUrl;
// });

// When the user clicks the "Cancel" button, close the modal and clear fields

var canxBtn = document.getElementById("canx");
canxBtn.addEventListener("click",function(){
    // document.getElementById("search").value = "";
    // document.getElementById("datePicker").value = "";
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}