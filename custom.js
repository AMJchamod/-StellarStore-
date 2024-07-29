document.addEventListener('DOMContentLoaded', () => {
 
 //Directly inject navbar  becourse  generic injection function cant to display username  correct
  fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbarContainer').innerHTML = data;
    // After injecting navbar, execute script to display username
    const usernameDisplay = document.getElementById('usernameDisplay');
    const username = localStorage.getItem('username');
    if (username) {
      usernameDisplay.textContent = `Welcome, ${username}`;
    }
  })
  .catch(error => {
    console.error('Error fetching or injecting navbar:', error);
  });
  // Function to fetch and inject HTML content
  const injectHTML = (url, containerId) => {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
       
      })
      .catch(error => {
        console.error(`Error fetching ${url}:`, error);
      });
  };

  
  injectHTML('pagination.html' , 'paginationcontainer');
  // Inject function bar
  injectHTML('functionbar.html', 'functionContainer');



// Event listener for search form submission
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  handleSearch(); // Call handleSearch function
});

});
//Search funtion

