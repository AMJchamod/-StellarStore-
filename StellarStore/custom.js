                   //Navbar//
 // Check if a username is stored in localStorage
 const username = localStorage.getItem('username');
    
 // If a username exists, display it in the navbar
 if (username) {
   document.getElementById('usernameDisplay').textContent = `Welcome, ${username}`;
 }
 //login//