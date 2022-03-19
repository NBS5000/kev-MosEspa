
// Get the modal
var modal3 = document.getElementById("myModal3");

// The button that opens the modal

const modalBtn3s = document.querySelectorAll('.itemViewBtn');
modalBtn3s.forEach(btn => {
    btn.addEventListener('click', async (event) => {
        const att = event.target.getAttribute("data-value");
        const vImg = "imgH_" + att;
        const vName = "nameH_" + att;
        const vPrice = "priceH_" + att;
        const vDesc = "descH_" + att;
        // console.log(document.getElementById(vImg).src)
        document.getElementById("name3").innerHTML = document.getElementById(vName).innerHTML;
        document.getElementById("price3").innerHTML = document.getElementById(vPrice).innerHTML;
        document.getElementById("description3").innerHTML = document.getElementById(vDesc).innerHTML;
        document.getElementById("image_link3").src = document.getElementById(vImg).src;

        modal3.style.display = "block";
    });
});
// When the user clicks the "Cancel" button, close the modal and clear fields

var canxBtn3 = document.getElementById("canx3");
canxBtn3.addEventListener("click",function(){
    modal3.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {    
        modal3.style.display = "none";
    }
}
