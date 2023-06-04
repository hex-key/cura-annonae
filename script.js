function toggleView() {
    var mapView = document.getElementById("map-view");
    var readerView = document.getElementById("reader-view");
    var button = document.querySelector(`[id^="view-toggle"]`);

    if (button.id == "view-toggle to-reader") {
        mapView.style.display = "none";
        readerView.style.display = "block";

        button.id = "view-toggle to-map";
        button.innerHTML = "View Map";

    } else if (button.id == "view-toggle to-map") {
        mapView.style.display = "block";
        readerView.style.display = "none";

        button.id = "view-toggle to-reader";
        button.innerHTML = "View Reading Pane";
    }
}

function toggleMapPhase(name) {
    // change subtitle and displayed image 
}

function toggleReaderMode() {
    var window = document.getElementById("reader-window");
    var button = document.querySelector(`[id^="reader-toggle"]`);
    if (button.id == "reader-toggle to-essay") {
        window.src = "./assets/essay.html"
    
        button.id = "reader-toggle to-translation";
        button.onclick = function() { toggleReaderMode("translation"); };
        button.innerHTML = "View Translation";

    } else if (button.id == "reader-toggle to-translation") {
        window.src = "./assets/translation.html"

        button.id = "reader-toggle to-essay";
        button.onclick = function() { toggleReaderMode("essay"); };
        button.innerHTML = "View Essay";
    }
}