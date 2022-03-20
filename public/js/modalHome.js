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
        const vSeller = "seller_" + att;
        document.getElementById("name3").innerHTML = document.getElementById(vName).innerHTML;
        document.getElementById("price3").innerHTML = document.getElementById(vPrice).innerHTML;
        document.getElementById("description3").innerHTML = document.getElementById(vDesc).innerHTML;
        document.getElementById("image_link3").src = document.getElementById(vImg).src;
        document.getElementById("addToCart").setAttribute("data_value",att);

        document.getElementById("itemSeller").textContent = document.getElementById(vSeller).getAttribute("data_value");
        document.getElementById("sellerP").setAttribute("data_value",document.getElementById(vSeller).getAttribute("data_id"));
        
        // console.log(logged_in, uSessId);
        // const uSessId = req.session.user_id;
        // const log = req.session.logged_in;
        modal3.style.display = "block";
        // if(logged_in && att == uSessId){
        //     document.getElementById("addToCart").style.display = "none"; 
        // }else{
        //     document.getElementById("addToCart").style.display = "block";
        // }
    });


});
// When the user clicks the "Cancel" button, close the modal and clear fields

var canxBtn3 = document.getElementById("canx3");
canxBtn3.addEventListener("click", function () {
    modal3.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
};

const addToCart = async (event) => {
    console.log("hi");
    // if (event.target.hasAttribute("data-value")) {
        const product_id = event.target.getAttribute("data_value");
        console.log(product_id);
        const response = await fetch(`/api/addToCart/${product_id}`, {
            method: "POST",
        });

        if (response.ok) {
        document.location.replace("/");
        } else {
        alert("Failed to add product to cart");
        }
    // }
};

document.querySelector("#addToCart").addEventListener("click", addToCart);
