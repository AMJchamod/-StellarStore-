
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
  