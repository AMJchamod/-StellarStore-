 // Function to inject the navbar HTML
 const injectNavbar = () => {
    fetch('navbar.html') // Load the navbar HTML
      .then(response => response.text())
      .then(data => {
        const navbarContainer = document.getElementById('navbarContainer');
        navbarContainer.innerHTML = data; // Inject the HTML into navbarContainer

        // Additional scripts from navbar.html, if any
        const scripts = navbarContainer.getElementsByTagName('script');
        for (let script of scripts) {
          eval(script.innerText); // Execute any inline scripts in the injected HTML
        }
      })
      .catch(error => console.error('Error loading navbar:', error));
  };
