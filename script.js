function openTab(tabName, clickedTab) {

    // Get all tab contents
    const contents = document.querySelectorAll(".tab-content");

    // Hide all contents
    contents.forEach(function(content) {
        content.classList.remove("active-content");
    });


    // Get all tab buttons
    const tabs = document.querySelectorAll(".tab");

    // Remove active class
    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });


    // Show selected content
    document
        .getElementById(tabName)
        .classList.add("active-content");


    // Highlight selected tab
    clickedTab.classList.add("active");
}