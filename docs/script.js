// Fetch data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.container'); // Select container div

    data.forEach(item => {
      // Create a div for each product
      const productDiv = document.createElement('div');
      productDiv.classList.add('flex');

      // Add product content
      productDiv.innerHTML = `
        <img src="${item.image.desktop}" alt="${item.name}">
        <button><img id='cartImg' src=${'./assets/images/icon-add-to-cart.svg'}> Add to Cart</button>
        <p>${item.category}</p>
        <span>${item.name}</span>
        <p>$${item.price.toFixed(2)}</p>
      `;

      // Append product div to the container
      container.appendChild(productDiv);
    });
  })
  .catch(error => console.error('Error loading data:', error));
