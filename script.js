function toggleMapPhase(name) {
    var textBox = document.getElementById(name + "-para");
    if (textBox.hidden) {
        textBox.hidden = false;
    } else {
        textBox.hidden = true;
    }
}

function toggleReaderView() {
    var window = document.getElementById("reader-window");
    var button = document.querySelector(`[id^="reader-toggle"]`);
    console.log(button.id);
    if (button.id == "reader-toggle to-essay") {
        window.src = "./assets/essay.html"
    
        button.id = "reader-toggle to-translation";
        button.onclick = function() { toggleReaderView("translation"); };
        button.innerHTML = "View Translation";

    } else if (button.id == "reader-toggle to-translation") {
        window.src = "./assets/translation.html"

        button.id = "reader-toggle to-essay";
        button.onclick = function() { toggleReaderView("essay"); };
        button.innerHTML = "View Essay";
    }
}