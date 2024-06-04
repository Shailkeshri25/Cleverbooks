// Tab functionality for Features Section
function openTab(event, featureName) {
    var i, tabcontent, tabbuttons;
    
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove active class from all buttons
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    
    // Show the current tab content and add active class to the button
    document.getElementById(featureName).style.display = "block";
    event.currentTarget.className += " active";
}
