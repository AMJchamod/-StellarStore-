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

  // Inject navbar
  injectHTML('pagination.html' , 'paginationcontainer');
  // Inject function bar
  injectHTML('functionbar.html', 'functionContainer');


});
//Search funtion


    // Function to handle form submission
    function search() {
      // Prevent default form submission
      event.preventDefault();

      // Get the search input value
      var searchQuery = document.getElementById("search").value.toLowerCase().trim();

      // Switch statement to navigate based on search query
      switch (searchQuery) {
          case "page":
              window.location.href = "index.html";
              break;
          case "page2":
              window.location.href = "page2.html";
              break;
          case "page3":
              window.location.href = "page3.html";
              break;
          default:
              // Redirect to a default page or display a message if no match found
              alert("No matching page found for '" + searchQuery + "'");
              break;
      }
  }

  // Event listener for form submission
  document.getElementById("searchForm").addEventListener("submit", search);

