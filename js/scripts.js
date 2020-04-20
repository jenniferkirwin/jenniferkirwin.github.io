// ---------------------------------------------------------------------------
// Portfolio JSON Object
// ---------------------------------------------------------------------------

$(document).ready(function () {

  const $overlayDiv = $(`.overlay-div`);
  const $overlayX = $(`.overlay-x`);

  const $overlayImg = $(`.overlay-img`);
  const $overlayTitle = $(`.overlay-title`);
  const $overlayDescr = $(`.overlay-descr`);
  const $projectURL = $(`.project-url`);
  const $githubURL = $(`.github-url`);

  const portfolio = [];

  // ---------------------------------------------------------------------------
  // Handling Portfolio on Website
  // ---------------------------------------------------------------------------

  // Populating each project card

  $.getJSON("js/portfolio.json", function (data) {

    data.forEach(function (item, index) {

      portfolio.push(item);

      console.log(portfolio);

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

  });

  // Hiding & showing portfolio div

  $(document).on(`click`, `.project-card`, function () {
    console.log($(this).attr(`data-project`))
    const projectData = portfolio[$(this).attr(`data-project`)];
    $overlayTitle.text(projectData.projectName);
    $overlayDescr.text(projectData.projectDescr);
    $projectURL.attr(`href`, projectData.projectURL);
    $githubURL.attr(`href`, projectData.githubURL);
    $overlayImg.attr(`src`, projectData.imgSrc);
    $overlayDiv.removeClass(`fadeOutUp hidden-div`).addClass(`fadeInDown`);
  });

  $overlayX.on(`click`, function () {
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