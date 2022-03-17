
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const price = document.querySelector("#price").value.trim();
  const description = document.querySelector("#description").value.trim();
  const image_link = document.querySelector("#image_link").value.trim();
  console.log(name)

  if (name && price && description && image_link) {
    const response = await fetch(`/api/profile`, {
      method: "POST",
      body: JSON.stringify({ name, price, description, image_link }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create product");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/profile/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("api/profile");
    } else {
      alert("Failed to delete product");
    }
  }
};

const updateFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector(".name").value.trim();
  const price = document.querySelector(".price").value.trim();
  const description = document.querySelector(".description").value.trim();
  const image_link = document.querySelector(".image_link").value.trim();

  if (name && price && description && image_link) {
    // if (event.target.hasAttribute("data-id")) {
    //   const id = event.target.getAttribute("data-id");

      const response = await fetch(`/api/profile/`, {
        method: "PUT",
        body: JSON.stringify({ name, price, description, image_link }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to delete product");
      }
    }
  
};

const returnToHome = async (event) => {
  event.preventDefault();
  document.location.replace("/");
};

document.querySelector("#confirm").addEventListener("click", newFormHandler);
// document.querySelector(".update").addEventListener("click", updateFormHandler);
// document.querySelector(".delete").addEventListener("click", delButtonHandler);
// document.querySelector(".returnToHome").addEventListener("click", returnToHome);

// delete button, update button, add item button, return to homepage Button,
