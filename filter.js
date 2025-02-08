let products = {
    data: [
        {
            productName: "High-Performance Gaming PC",
            category: "Computer & Tech",
            Price: "200",
            Usage: "Lightly Used",
            image: "images/laptop1.jpg",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Latest Smartphone",
            category: "Mobile Phones & Gadgets",
            Price: "500",
            Usage: "Lightly Used",
            image: "images/laptop1.jpg",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Next-Gen Gaming Console",
            category: "Video gamings",
            Price: "400",
            Usage: "Lightly Used",
            image: "images/laptop1.jpg",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Smart TV",
            category: "TV and home application",
            Price: "600",
            Usage: "Lightly Used",
            image: "images/laptop1.jpg",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Wireless Mechanical Keyboard",
            category: "Computer & Tech",
            Price: "100",
            Usage: "Lightly Used",
            image: "images/laptop1.jpg",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Wireless Earbuds",
            category: "Mobile Phones & Gadgets",
            Price: "150",
            Usage: "Lightly Used",
            image: "images/laptop1.jpg",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "VR Headset",
            category: "Video gamings",
            Price: "300",
            Usage: "Lightly Used",
            image: "images/laptop1.jpg",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Soundbar",
            category: "TV and home application",
            Price: "250",
            Usage: "Lightly Used",
            image: "images/laptop1.jpg",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "27-inch 4K Monitor",
            category: "Computer & Tech",
            Price: "350",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Tablet",
            category: "Mobile Phones & Gadgets",
            Price: "450",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Gaming Controller",
            category: "Video gamings",
            Price: "70",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Streaming Device",
            category: "TV and home application",
            Price: "80",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Gaming Mouse",
            category: "Computer & Tech",
            Price: "50",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Smartwatch",
            category: "Mobile Phones & Gadgets",
            Price: "200",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Racing Wheel",
            category: "Video gamings",
            Price: "250",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Robot Vacuum",
            category: "TV and home application",
            Price: "300",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "RAM Upgrade Kit",
            category: "Computer & Tech",
            Price: "120",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Phone Case",
            category: "Mobile Phones & Gadgets",
            Price: "20",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Gaming Headset",
            category: "Video gamings",
            Price: "90",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        },
        {
            productName: "Smart Thermostat",
            category: "TV and home application",
            Price: "150",
            Usage: "Lightly Used",
            image: "Dress.png",
            likeCount: 100,
            likeImage: "Images/heart(likes).svg"
        }
    ]
};
  for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category.replace(/ /g, "-").toLowerCase(), "hide"); // Replace spaces with dashes for class names

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", i.productName); // Add alt text for accessibility
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Add product name
    let productName = document.createElement("h5");
    productName.textContent = i.productName;
    card.appendChild(productName);

    let Price = document.createElement("h6");
    Price.innerText = "$" + i.Price;
    card.appendChild(Price);

    //usage
    let Usage =   document.createElement("h5");
    Usage.textContent = i.Usage;
    card.appendChild(Usage);

    // Add like section
    let likeDiv = document.createElement("div");
    let likeImage = document.createElement("img");
    likeImage.src = i.likeImage;
    likeImage.alt = "Likes";
    likeImage.classList.add("like");

    let likeCountSpan = document.createElement("span");
    likeCountSpan.textContent = i.likeCount;
    likeDiv.appendChild(likeImage);
    likeDiv.appendChild(likeCountSpan);
    card.appendChild(likeDiv);

    // Add click event listener for like image
    likeImage.addEventListener("click", () => {
        i.likeCount++;
        likeCountSpan.textContent = i.likeCount;
        likeImage.classList.toggle("liked");
    });
    
    document.getElementById("products").appendChild(card);
}
function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let cards = document.querySelectorAll(".card"); // Select all cards
    cards.forEach((card) => {
      if (value === "all" || card.classList.contains(value.replace(/ /g, "-").toLowerCase())) {
        card.classList.remove("hide"); // Show the card
      } else {
        card.classList.add("hide"); // Hide the card
      }
    });
  }
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase(); // Convert search input to uppercase
    let cards = document.querySelectorAll(".card"); // Select all cards

    cards.forEach((card) => {
        let productName = card.querySelector("h5").innerText.toUpperCase(); // Get product name and convert to uppercase
        if (productName.includes(searchInput)) {
            card.classList.remove("hide"); // Show the card if it matches the search
        } else {
            card.classList.add("hide"); // Hide the card if it doesn't match
        }
    });
});
window.onload = () =>{
    filterProduct("all");
};