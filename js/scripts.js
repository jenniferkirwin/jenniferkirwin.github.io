// ---------------------------------------------------------------------------
// Portfolio JSON Object
// ---------------------------------------------------------------------------

const portfolio = [
    {
        "projectName":"Password Generator",
        "projectOver":"Creates a password with lowercase, uppercase, numeric, and special characters.",
        "projectDescr":"Creates a password with lowercase, uppercase, numeric, and special characters.",
        "projectURL":"https://jenniferkirwin.github.io/password-generator2/",
        "githubURL":"https://github.com/jenniferkirwin/password-generator2",
        "imgSrc":"images/pass-gen.jpg",
        "builtWith":"html css"
    },
    {
        "projectName":"JavaScript Quiz",
        "projectOver":"A short 4 question timed quiz testing JavaScript fundamentals and allows the user to store their score to local storage.",
        "projectDescr":"A short 4 question timed quiz testing JavaScript fundamentals and allows the user to store their score to local storage.",
        "projectURL":"https://jenniferkirwin.github.io/code-quiz/",
        "githubURL":"https://github.com/jenniferkirwin/code-quiz",
        "imgSrc":"images/quiz.jpg",
        "builtWith":"html css javascript jquery"
    },
    {
        "projectName":"Day Planner",
        "projectOver":"A simple day planner that takes user input and stores it into local storage.",
        "projectDescr":"A simple day planner that takes user input and stores it into local storage.",
        "projectURL":"https://jenniferkirwin.github.io/scheduling-app/",
        "githubURL":"https://github.com/jenniferkirwin/scheduling-app",
        "imgSrc":"images/scheduler.jpg",
        "builtWith":"html css javascript jquery"
    },
    {
        "projectName":"SuperEats",
        "projectOver":"An application to help you meal plan for any holiday. Developed as a group, with myself as team lead.",
        "projectDescr":"An application to help you meal plan for any holiday. Developed as a group, with myself as team lead.",
        "projectURL":"https://nwsanfor24.github.io/holiday-meal-planner//",
        "githubURL":"https://github.com/nwsanfor24/holiday-meal-planner",
        "imgSrc":"images/supereats.jpg",
        "builtWith":"html css javascript jquery"
    }
]

$( document ).ready(function() {

    const $overlayDiv = $(`.overlay-div`);
    const $overlayX = $(`.overlay-x`);
    const $portfolioCont = $(`.portfolio-card-container`);

    const $overlayImg = $(`.overlay-img`);
    const $overlayTitle = $(`.overlay-title`);
    const $overlayDescr = $(`.overlay-descr`);
    const $projectURL = $(`.project-url`);
    const $githubURL = $(`.github-url`);

// ---------------------------------------------------------------------------
// Handling Portfolio on Website
// ---------------------------------------------------------------------------

// Populating each project card

portfolio.forEach(function(item, index) {

    $(`.portfolio-card-container`).append(
        `<div class="filterShow ${item.builtWith}">
            <div class="col s12 m3 l4">
                <div class="card portfolio-margin project-card" data-project="${index}">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img src="${item.imgSrc}" alt="${item.projectName}">
                    </div>
                    <div class="card-content">
                    <span class="card-title grey-text text-darken-4">${item.projectName} <i
                        class="fas fa-arrow-alt-circle-right"></i></span>
                    </div>
                </div>
            </div>
        </div>`
    )
});

// Hiding & showing portfolio div

    $(`.project-card`).on(`click`, function() {
        console.log($(this).attr(`data-project`))
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


// ---------------------------------------------------------------------------
// portfolio filter
// ---------------------------------------------------------------------------


    // adding .filter-show and removing .filter-show on div
    // filterSelection("all")
    // function filterSelection(c) {
    //     var x, i;
    //     x = document.getElementsByClassName("filterHide");
    //     if (c == "all") c = "";
    //     for (i = 0; i < x.length; i++) {
    //         removeClass(x[i], "filterShow");
    //         if (x[i].className.indexOf(c) > -1) addClass (x[i], "filterShow")
    //     }
    // }

    // // function to show filtered divs

    // function addClass(element, name) {
    //     var i, arr1, arr2;
    //     arr1 = element.className.split(" ");
    //     arr2 = name.split(" ");
    //     for (i = 0; i < arr2.length; i++) {
    //         if (arr1.indexOf(arr2[i]) == -1) {
    //             element.className += " " + arr2[i];
    //         }
    //     }
    // }

    // // function to hide remaining divs

    // function removeClass(element, name) {
    //     var i, arr1, arr2;
    //     arr1 = element.className.split(" ");
    //     arr2 = name.split(" ");
    //     for (i = 0; i < arr2.length; i++) {
    //         while (arr1.indexOf(arr2[i]) > -1) {
    //             arr1.splice(arr1.indexOf(arr2[i]), 1);
    //         }
    //     }
    //     element.className = arr1.join(" ");
    // }

});