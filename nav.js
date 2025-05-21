// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Navigation categories
  const categories = document.querySelectorAll("nav .left ul li");

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      const selectedCategory = category.textContent.trim();
      alert(`Navigating to ${selectedCategory} section (not implemented yet)`);
      // Optionally: window.location.href = `/category/${selectedCategory.toLowerCase()}`;
    });

    // Optional: Hover highlight
    category.addEventListener("mouseenter", () => {
      category.style.color = "#ff3f6c";
    });

    category.addEventListener("mouseleave", () => {
      category.style.color = "";
    });
  });

  // Search bar functionality
  const searchBar = document.querySelector(".desktop-searchBar");
  searchBar.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const query = searchBar.value.trim();
      if (query !== "") {
        alert(`Searching for: ${query}`);
        // Optionally: window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }
    }
  });

  // Icons click handling
  document.querySelector(".profile").addEventListener("click", () => {
    alert("Go to Profile (not implemented yet)");
  });

  document.querySelector(".wish").addEventListener("click", () => {
    alert("Go to Wishlist (not implemented yet)");
  });

  document.querySelector(".bag").addEventListener("click", () => {
    alert("Go to Bag (not implemented yet)");
  });
});
