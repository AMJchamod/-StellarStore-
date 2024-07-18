document.addEventListener('DOMContentLoaded', () => {
  
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

  // Function to handle search
  const handleSearch = () => {
    const searchInput = document.getElementById('search').value.trim().toLowerCase();
    
    // Example switch case for navigation based on search input
    switch(searchInput) {
      case 'login':
        window.location.href = 'loginpage.html';
        break;
      case 'item2':
        window.location.href = 'item2.html';
        break;
      // Add more cases for other items/pages as needed
      default:
        alert('No matching item found.');
        break;
    }
  };

  // Event listener for search form submission
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    handleSearch(); // Call handleSearch function
  });

  // Directly inject navbar because generic injection function can't display username correctly
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

  // Inject pagination
  injectHTML('pagination.html', 'paginationcontainer');

  // Inject function bar
  injectHTML('functionbar.html', 'functionContainer');
  injectHTML('navbar.html','navbarcontainer');

});
