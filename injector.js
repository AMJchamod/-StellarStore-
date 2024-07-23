// inject.js

// Utility function defined outside of DOMContentLoaded
function navigateToPage(filterType) {
    switch (filterType) {
      case 'latest':
        window.location.href = 'latesthome.html';
        break;
      case 'most-rated':
        window.location.href = 'mostratedhome.html'; 
      
      default:
      
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
    
    // Navigate
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
  