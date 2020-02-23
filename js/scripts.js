// adding .filter-show and removing .filter-show on div
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterHide");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "filterShow");
        if (x[i].className.indexOf(c) > -1) addClass (x[i], "filterShow")
    }
}

// function to show filtered divs

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// function to hide remaining divs

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// ---------------------------------------------------------------------------
// Hide and Show Portfolio Overlay Div
// things to do:
// dynamically populate HTML
// create overlay on popup
// ---------------------------------------------------------------------------

const portfolio = {
    "projectName":"Password Generator",
    "projectOver":"Creates a password with lowercase, uppercase, numeric, and special characters.",
    "projectDesc":"xxx",
    "url":"xxx",
    "github":"xxx",
    "img":"xxx"
}

$( document ).ready(function() {

    const $overlayDiv = $(`.overlay-div`);
    const $overlayX = $(`.overlay-x`);

    $(`.test`).on(`click`, function() {
        $overlayDiv.removeClass(`fadeOutUp hidden-div`).addClass(`fadeInDown`);
    });

    $overlayX.on(`click`, function() {
        $overlayDiv.removeClass(`fadeOutUp`).addClass(`fadeOutUp`);
    });
});