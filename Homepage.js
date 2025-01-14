var jsondata = {"field1": "xyz","field2": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://interactivedev-50c1.restdb.io/rest/dncck",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "<677cd0c883015363bfcc1d47>",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  const Types = ["Pouch", "Wallet", "Shoulder Bag","Handbag"];

  // Function to fetch data by type
  function fetchDataBytype(type) {
    fetch(`/rest/dncck?q={"type":"${type}"}`) 
      .then(response => response.json())
      .then(data => {
        // Process the data and display it on the webpage
        console.log(data); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  
  // Call the function for each type
  categories.forEach(type => {
    fetchDataBytype(type);
  });

  const Brands = ["Chanel", "Balenciaga"];

  // Function to fetch data by type
  function fetchDataBytype(Brand) {
    fetch(`/rest/dncck?q={"type":"${Brand}"}`) 
      .then(response => response.json())
      .then(data => {
        // Process the data and display it on the webpage
        console.log(data); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  
  // Call the function for each type
  categories.forEach(Brand => {
    fetchDataBytype(Brand);
  });

  // Function to fetch products based on price range
function fetchProductsByPriceRange(minPrice, maxPrice) {
    let query = {};
  
    if (minPrice !== undefined && maxPrice !== undefined) {
      query = { "price": { "$gte": minPrice, "$lte": maxPrice } };
    } else if (minPrice !== undefined) {
      query = { "price": { "$gte": minPrice } }; 
    } else if (maxPrice !== undefined) {
      query = { "price": { "$lte": maxPrice } }; 
    }
  
    const url = `/rest/dncck?q=${JSON.stringify(query)}`; 
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Process and display the fetched products
        console.log(data); 
        // Update the UI with the filtered products
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  
  // Example Usage:
  // S$0-1000
  fetchProductsByPriceRange(0, 1000); 
  
  // S$1000-3000
  fetchProductsByPriceRange(1000, 3000); 
  
  // S$3000-5000
  fetchProductsByPriceRange(3000, 5000); 
  
  // S$5000-10000
  fetchProductsByPriceRange(5000, 10000); 
  
  // Over S$10000
  fetchProductsByPriceRange(10000, undefined);


  fetch(`/rest/dncck?`)
  .then(response => response.json())
  .then(data => {
    // Process the data and display it on the webpage
    const categories = data; 

    // Create HTML elements to display the categories
    const categoryList = document.createElement('ul'); 

    categories.forEach(category => {
      const listItem = document.createElement('li');
      const imageUrl = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`; 
      listItem.textContent = category.name; // Display category name

      // Optionally, add description and image
      if (category.description) {
        const description = document.createElement('p');
        description.textContent = category.description;
        listItem.appendChild(description); 
      }

      if (category.image) {
        const image = document.createElement('img');
        image.src = imageUrl; 
        listItem.appendChild(image); 
      }

      categoryList.appendChild(listItem); 
    });

    // Append the category list to the desired element in your HTML
    document.getElementById('category-container').appendChild(categoryList); 
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });