document.addEventListener('DOMContentLoaded', () => {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbarContainer').innerHTML = data;
      // Handle username display if needed
      const username = localStorage.getItem('username');
      if (username) {
        document.getElementById('usernameDisplay').textContent = `Welcome, ${username}`;
      }
    })
    .catch(error => {
      console.error('Error fetching navbar:', error);
    });

  fetch('functionbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('functionContainer').innerHTML = data;
      // Handle username display if needed
      const username = localStorage.getItem('username');
      if (username) {
        document.getElementById('usernameDisplay').textContent = `Welcome, ${username}`;
      }
    })
    .catch(error => {
      console.error('Error fetching function bar:', error);
    });
});
