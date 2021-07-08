import 'regenerator-runtime'; /* for async await transpile */
import '../styles/navigation-drawer.css';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-to-content.css';
import '../styles/hamburger.css';

console.log('Hello Coders! :)');

fetch('../DATA.json')
  .then(response => response.json())
  .then(data => getRestaurants(data));

function getRestaurants(data) {
  let restaurantHTML = "";
  data.restaurants.forEach(function (restaurant, index) {
    // console.log(restaurant);
    restaurantHTML += `
      <div tabindex="0" class="cards-section">
        <div class="card">
          <button  class="card-rating">${restaurant.rating}</button>
          <img tabindex="0" class="img-res" alt="${restaurant.name}" src="${restaurant.pictureId}"/>
          
          <p  class="card-city">${restaurant.city}</p>
          <div tabindex="0" class="in-card">
            <p tabindex="0" class="card-title">${restaurant.name}</p>
            <p class="card-content-title">Description :</p>
            <p class="truncate">${restaurant.description}</p>
            <p class="read-more">Read More ...</p>
          </div>
        </div>
      </div>  
      `;
  });

  document.getElementById("resto-list").innerHTML = restaurantHTML;
}