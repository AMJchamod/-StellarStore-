document.addEventListener('DOMContentLoaded', function() {
  // Fetch and insert navbar.html content
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbarContainer').innerHTML = data;
      //Fetch and insert cards.html content
      // Handle username display if needed
      const username = localStorage.getItem('username');
      if (username) {
        document.getElementById('usernameDisplay').textContent = `Welcome, ${username}`;
      }
    })
    .catch(error => {
      console.error('Error fetching navbar:', error);
    });






      // Select the container where you want to inject the cards
      const cardContainer = document.getElementById('cardContainer');

      // Fetch the HTML content of your card component file
      
});
