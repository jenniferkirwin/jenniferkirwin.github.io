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

const portfolio = [{
    "projectName":"Password Generator",
    "projectOver":"Creates a password with lowercase, uppercase, numeric, and special characters.",
    "projectDescr":"Creates a password with lowercase, uppercase, numeric, and special characters.",
    "projectURL":"https://jenniferkirwin.github.io/password-generator2/",
    "githubURL":"https://github.com/jenniferkirwin/password-generator2",
    "imgSrc":"images/pass-gen.jpg",
    "dataAttr":"0"
}]

$( document ).ready(function() {

    const $overlayDiv = $(`.overlay-div`);
    const $overlayX = $(`.overlay-x`);
    const $portfolioCont = $(`.portfolio-card-container`);

    const $overlayImg = $(`.overlay-img`);
    const $overlayTitle = $(`.overlay-title`);
    const $overlayDescr = $(`.overlay-descr`);
    const $projectURL = $(`.project-url`);
    const $githubURL = $(`.github-url`);

// Hiding & showing portfolio div

    $(`.test`).on(`click`, function() {
        const projectData =  portfolio[$(this).attr(`data-project`)];
        $overlayTitle.text(projectData.projectName);
        $overlayDescr.text(projectData.projectDescr);
        $projectURL.attr(`href`, projectData.projectURL);
        $githubURL.attr(`href`, projectData.githubURL);
        $overlayImg.attr(`src`, projectData.imgSrc);
        $overlayDiv.removeClass(`fadeOutUp hidden-div`).addClass(`fadeInDown`);
    });

    $overlayX.on(`click`, function() {
        $overlayDiv.removeClass(`fadeOutUp`).addClass(`fadeOutUp`);
    });
});