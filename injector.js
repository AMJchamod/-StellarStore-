// inject.js

// Utility function defined outside of DOMContentLoaded
function navigateToPage(filterType) {
    switch (filterType) {
      case 'latest':
        window.location.href = 'loginpage.html'; // Example page name
        break;
      case 'most-rated':
        window.location.href = 'most_rated_tools.html'; // Example page name
        break;
      // Add more cases for other filters if needed
      default:
        // Handle default case or no filter selected
        break;
    }
  }
  
  // Function to handle filtering
  function filter() {
    const latestRadio = document.getElementById('latest');
    const mostRatedRadio = document.getElementById('most-rated');
  
    let filterType = '';
    if (latestRadio.checked) {
      filterType = 'latest';
    } else if (mostRatedRadio.checked) {
      filterType = 'most-rated';
    }
    
    // Navigate to the appropriate page based on filterType
    navigateToPage(filterType);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch and inject HTML content
    const injectHTML = (url, containerId) => {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          document.getElementById(containerId).innerHTML = data;
          
          // After injecting, attach event listener for the filter button
          document.getElementById('filterButton').onclick = filter;
        })
        .catch(error => {
          console.error(`Error fetching ${url}:`, error);
        });
    };
  
    // Inject the function bar
    injectHTML('functionbar.html', 'functionContainer');
    injectHTML('pagination.html', 'paginationcontainer');
  });
  