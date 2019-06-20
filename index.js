/*var btn = document.querySelector("button");
var dropdown = document.querySelector(".dropdown-options");
var optionLinks = document.querySelectorAll(".option a");


btn.addEventListener('click', function (e) {
  e.preventDefault()
  dropdown.classList.toggle('open')
})

var searchBoxes;
var clickFn = function (e) {
  e.preventDefault();
  dropdown.classList.remove("open");
  btn.innerHTML = this.text;
  var activeLink = document.querySelector(".option .active");
  searchBoxes = parseInt(this.id);
  inputFieldHTML = [];
  conditions = [];

  createFields()

  buttonSetter()

  setButtonListners()

  initializeLinks()

  if (activeLink) {
    activeLink.classList.remove('active')
  }

this.classList.add('active')
}

for (var i = 0; i < optionLinks.length; i++) {
   optionLinks[i].addEventListener('mousedown', clickFn, false);
}

let createFields = function () {
  return new Promise (function (resolve, reject) {
    for(i=0; i<searchBoxes; i++) {
      //j = i +1;
      inputFieldHTML.push('<div class="inputBox"><input placeholder="Enter Camera/Lens Model" class="Box" type="text" list="inv_list" id="gearInput' + i + '"' + "/></div>" + '<div class="ccontainer"><div class="cdropdown"><button class="ctitle" id="button' + i + '"' + '><span class="cselectorText">Select Item Condition ▾</span></button><ul class="cdropdown-options" id="cc' + i + '">' + '<li class="coption" id="copt1' + i + '"' + '><a id="cl1' + i + '"' + ' href="#">Pre-owned Mint</a></li> <li class="coption" id="copt2' + i + '"' + '><a id="cl2' + i + '"' + 'href="#">Used Light Wear</a></li><li class="coption" id="copt3' + i + '"' + '><a id="cl3' + i + '"' + 'href="#">Used Moderate Wear</a></li><li class="coption" id="copt4' + i + '"' + '><a id="cl4' + i + '"' + 'href="#">Used Heavy Wear</a></li><li class="coption" id="copt5' + i + '"' + '><a id="cl5' + i + '"' + 'href="#">Used Semi-functional</a></li></ul></div></div>');
      //conditions.push('')
    }
    document.getElementById("inputBoxes").innerHTML = inputFieldHTML.join("");
    //document.getElementById('myConditions').innerHTML = conditions.join("");
  });
}
var cdropdownOptions = [];
var cButtons = [];

let buttonSetter = function () {
  return new Promise (function (resolve, reject) {

      for(i=0; i<searchBoxes; ++i) {
        cdropdownOption = "#cc" + i;
        cButton ="#button" + i;
        cbtn = document.querySelector(cButton);

        cdropdown = document.querySelector(cdropdownOption);

        cdropdownOptions.push(cdropdown);
        cButtons.push(cbtn);

      }

  });
}

let setButtonListners = function () {
  return new Promise (function (resolve, reject) {
    cButtons[0].addEventListener("click", function (e) {
        e.preventDefault();
        cdropdownOptions[0].classList.toggle("open");
    });

    cButtons[1].addEventListener("click", function (e) {
        e.preventDefault();
        cdropdownOptions[1].classList.toggle("open");
    });

    cButtons[2].addEventListener("click", function (e) {
        e.preventDefault();
        cdropdownOptions[2].classList.toggle("open");
    });

    cButtons[3].addEventListener("click", function (e) {
        e.preventDefault();
        cdropdownOptions[3].classList.toggle("open");
    });

    cButtons[4].addEventListener("click", function (e) {
      e.preventDefault();
      cdropdownOptions[4].classList.toggle("open");
    });

    cButtons[5].addEventListener("click", function (e) {
      e.preventDefault();
      cdropdownOptions[5].classList.toggle("open");
    });

    cButtons[6].addEventListener("click", function (e) {
      e.preventDefault();
      cdropdownOptions[6].classList.toggle("open");
    });

    if (cbtn != null) {
      resolve("cbtn is " + cbtn);
    } else {
      reject("cbtn is rejected and is " + cbtn);
    }
  });
}

var initializeOnClick = function (e) {

  e.preventDefault();
  cdropdown.classList.remove("open");

  var cactiveLink = document.querySelector(".coption .cactive");
  if (cactiveLink) {
    cactiveLink.classList.remove("cactive");
  }

  switch (e.currentTarget) {
    case cl10:
      cButtons[0].innerHTML = this.text;
      cdropdownOptions[0].classList.remove("open");
      this.classList.add("cactive");
      cdropdown.classList.remove("open");
      break;

    case cl20:
      cButtons[0].innerHTML = this.text;
      cdropdownOptions[0].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl30:
      cButtons[0].innerHTML = this.text;
      cdropdownOptions[0].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl40:
      cButtons[0].innerHTML = this.text;
      cdropdownOptions[0].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl50:
      cButtons[0].innerHTML = this.text;
      cdropdownOptions[0].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl11:
      cButtons[1].innerHTML = this.text;
      cdropdownOptions[1].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl21:
      cButtons[1].innerHTML = this.text;
      cdropdownOptions[1].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl31:
      cButtons[1].innerHTML = this.text;
      cdropdownOptions[1].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl41:
      cButtons[1].innerHTML = this.text;
      cdropdownOptions[1].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl51:
      cButtons[1].innerHTML = this.text;
      cdropdownOptions[1].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl12:
      cButtons[2].innerHTML = this.text;
      cdropdownOptions[2].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl22:
      cButtons[2].innerHTML = this.text;
      cdropdownOptions[2].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl32:
      cButtons[2].innerHTML = this.text;
      cdropdownOptions[2].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl42:
      cButtons[2].innerHTML = this.text;
      cdropdownOptions[2].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl52:
      cButtons[2].innerHTML = this.text;
      cdropdownOptions[2].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl13:
      cButtons[3].innerHTML = this.text;
      cdropdownOptions[3].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl23:
      cButtons[3].innerHTML = this.text;
      cdropdownOptions[3].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl33:
      cButtons[3].innerHTML = this.text;
      cdropdownOptions[3].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl43:
      cButtons[3].innerHTML = this.text;
      cdropdownOptions[3].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl53:
      cButtons[3].innerHTML = this.text;
      cdropdownOptions[3].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl14:
      cButtons[4].innerHTML = this.text;
      cdropdownOptions[4].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl24:
      cButtons[4].innerHTML = this.text;
      cdropdownOptions[4].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl34:
      cButtons[4].innerHTML = this.text;
      cdropdownOptions[4].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl44:
      cButtons[4].innerHTML = this.text;
      cdropdownOptions[4].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl54:
      cButtons[4].innerHTML = this.text;
      cdropdownOptions[4].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl15:
      cButtons[5].innerHTML = this.text;
      cdropdownOptions[5].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl25:
      cButtons[5].innerHTML = this.text;
      cdropdownOptions[5].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl35:
      cButtons[5].innerHTML = this.text;
      cdropdownOptions[5].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl45:
      cButtons[5].innerHTML = this.text;
      cdropdownOptions[5].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl55:
      cButtons[5].innerHTML = this.text;
      cdropdownOptions[5].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl16:
      cButtons[6].innerHTML = this.text;
      cdropdownOptions[6].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl26:
      cButtons[6].innerHTML = this.text;
      cdropdownOptions[6].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl36:
      cButtons[6].innerHTML = this.text;
      cdropdownOptions[6].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl46:
      cButtons[6].innerHTML = this.text;
      cdropdownOptions[6].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl56:
      cButtons[6].innerHTML = this.text;
      cdropdownOptions[6].classList.remove("open");
      this.classList.add("cactive");
      break;

    case cl17:
      cButtons[7].innerHTML = this.text;
      this.classList.add("cactive");
      break;

    case cl27:
      cButtons[7].innerHTML = this.text;
      this.classList.add("cactive");
      break;

    case cl37:
      cButtons[7].innerHTML = this.text;
      this.classList.add("cactive");
      break;

    case cl47:
      cButtons[7].innerHTML = this.text;
      this.classList.add("cactive");
      break;

    case cl57:
      cButtons[7].innerHTML = this.text;
      this.classList.add("cactive");
      break;
  }
}

let initializeLinks = function () {
  return new Promise (function (resolve, reject) {
    setTimeout(function () {

      switch (searchBoxes) {
        case 1:
          var pom = document.getElementById("cl10");
          var ulw = document.getElementById("cl20");
          var usm = document.getElementById("cl30");
          var uhw = document.getElementById("cl40");
          var usf = document.getElementById("cl50");


          pom.addEventListener('mousedown', initializeOnClick, false);
          ulw.addEventListener('mousedown', initializeOnClick, false);
          usm.addEventListener('mousedown', initializeOnClick, false);
          uhw.addEventListener('mousedown', initializeOnClick, false);
          usf.addEventListener('mousedown', initializeOnClick, false);
        break;

        case 2:
          var pom = document.getElementById("cl10");
          var ulw = document.getElementById("cl20");
          var usm = document.getElementById("cl30");
          var uhw = document.getElementById("cl40");
          var usf = document.getElementById("cl50");


          pom.addEventListener('mousedown', initializeOnClick, false);
          ulw.addEventListener('mousedown', initializeOnClick, false);
          usm.addEventListener('mousedown', initializeOnClick, false);
          uhw.addEventListener('mousedown', initializeOnClick, false);
          usf.addEventListener('mousedown', initializeOnClick, false);

          var pom2 = document.getElementById("cl11");
          var ulw2 = document.getElementById("cl21");
          var usm2 = document.getElementById("cl31");
          var uhw2 = document.getElementById("cl41");
          var usf2 = document.getElementById("cl51");


          pom2.addEventListener('mousedown', initializeOnClick, false);
          ulw2.addEventListener('mousedown', initializeOnClick, false);
          usm2.addEventListener('mousedown', initializeOnClick, false);
          uhw2.addEventListener('mousedown', initializeOnClick, false);
          usf2.addEventListener('mousedown', initializeOnClick, false);
        break;

        case 3:
          var pom = document.getElementById("cl10");
          var ulw = document.getElementById("cl20");
          var usm = document.getElementById("cl30");
          var uhw = document.getElementById("cl40");
          var usf = document.getElementById("cl50");


          pom.addEventListener('mousedown', initializeOnClick, false);
          ulw.addEventListener('mousedown', initializeOnClick, false);
          usm.addEventListener('mousedown', initializeOnClick, false);
          uhw.addEventListener('mousedown', initializeOnClick, false);
          usf.addEventListener('mousedown', initializeOnClick, false);

          var pom2 = document.getElementById("cl11");
          var ulw2 = document.getElementById("cl21");
          var usm2 = document.getElementById("cl31");
          var uhw2 = document.getElementById("cl41");
          var usf2 = document.getElementById("cl51");


          pom2.addEventListener('mousedown', initializeOnClick, false);
          ulw2.addEventListener('mousedown', initializeOnClick, false);
          usm2.addEventListener('mousedown', initializeOnClick, false);
          uhw2.addEventListener('mousedown', initializeOnClick, false);
          usf2.addEventListener('mousedown', initializeOnClick, false);

          var pom3 = document.getElementById("cl12");
          var ulw3 = document.getElementById("cl22");
          var usm3 = document.getElementById("cl32");
          var uhw3 = document.getElementById("cl42");
          var usf3 = document.getElementById("cl52");


          pom3.addEventListener('mousedown', initializeOnClick, false);
          ulw3.addEventListener('mousedown', initializeOnClick, false);
          usm3.addEventListener('mousedown', initializeOnClick, false);
          uhw3.addEventListener('mousedown', initializeOnClick, false);
          usf3.addEventListener('mousedown', initializeOnClick, false);
        break;

        case 4:
          var pom = document.getElementById("cl10");
          var ulw = document.getElementById("cl20");
          var usm = document.getElementById("cl30");
          var uhw = document.getElementById("cl40");
          var usf = document.getElementById("cl50");


          pom.addEventListener('mousedown', initializeOnClick, false);
          ulw.addEventListener('mousedown', initializeOnClick, false);
          usm.addEventListener('mousedown', initializeOnClick, false);
          uhw.addEventListener('mousedown', initializeOnClick, false);
          usf.addEventListener('mousedown', initializeOnClick, false);

          var pom2 = document.getElementById("cl11");
          var ulw2 = document.getElementById("cl21");
          var usm2 = document.getElementById("cl31");
          var uhw2 = document.getElementById("cl41");
          var usf2 = document.getElementById("cl51");


          pom2.addEventListener('mousedown', initializeOnClick, false);
          ulw2.addEventListener('mousedown', initializeOnClick, false);
          usm2.addEventListener('mousedown', initializeOnClick, false);
          uhw2.addEventListener('mousedown', initializeOnClick, false);
          usf2.addEventListener('mousedown', initializeOnClick, false);

          var pom3 = document.getElementById("cl12");
          var ulw3 = document.getElementById("cl22");
          var usm3 = document.getElementById("cl32");
          var uhw3 = document.getElementById("cl42");
          var usf3 = document.getElementById("cl52");


          pom3.addEventListener('mousedown', initializeOnClick, false);
          ulw3.addEventListener('mousedown', initializeOnClick, false);
          usm3.addEventListener('mousedown', initializeOnClick, false);
          uhw3.addEventListener('mousedown', initializeOnClick, false);
          usf3.addEventListener('mousedown', initializeOnClick, false);

          var pom4 = document.getElementById("cl13");
          var ulw4 = document.getElementById("cl23");
          var usm4 = document.getElementById("cl33");
          var uhw4 = document.getElementById("cl43");
          var usf4 = document.getElementById("cl53");


          pom4.addEventListener('mousedown', initializeOnClick, false);
          ulw4.addEventListener('mousedown', initializeOnClick, false);
          usm4.addEventListener('mousedown', initializeOnClick, false);
          uhw4.addEventListener('mousedown', initializeOnClick, false);
          usf4.addEventListener('mousedown', initializeOnClick, false);
        break;

        case 5:
          var pom = document.getElementById("cl10");
          var ulw = document.getElementById("cl20");
          var usm = document.getElementById("cl30");
          var uhw = document.getElementById("cl40");
          var usf = document.getElementById("cl50");


          pom.addEventListener('mousedown', initializeOnClick, false);
          ulw.addEventListener('mousedown', initializeOnClick, false);
          usm.addEventListener('mousedown', initializeOnClick, false);
          uhw.addEventListener('mousedown', initializeOnClick, false);
          usf.addEventListener('mousedown', initializeOnClick, false);

          var pom2 = document.getElementById("cl11");
          var ulw2 = document.getElementById("cl21");
          var usm2 = document.getElementById("cl31");
          var uhw2 = document.getElementById("cl41");
          var usf2 = document.getElementById("cl51");


          pom2.addEventListener('mousedown', initializeOnClick, false);
          ulw2.addEventListener('mousedown', initializeOnClick, false);
          usm2.addEventListener('mousedown', initializeOnClick, false);
          uhw2.addEventListener('mousedown', initializeOnClick, false);
          usf2.addEventListener('mousedown', initializeOnClick, false);

          var pom3 = document.getElementById("cl12");
          var ulw3 = document.getElementById("cl22");
          var usm3 = document.getElementById("cl32");
          var uhw3 = document.getElementById("cl42");
          var usf3 = document.getElementById("cl52");


          pom3.addEventListener('mousedown', initializeOnClick, false);
          ulw3.addEventListener('mousedown', initializeOnClick, false);
          usm3.addEventListener('mousedown', initializeOnClick, false);
          uhw3.addEventListener('mousedown', initializeOnClick, false);
          usf3.addEventListener('mousedown', initializeOnClick, false);

          var pom4 = document.getElementById("cl13");
          var ulw4 = document.getElementById("cl23");
          var usm4 = document.getElementById("cl33");
          var uhw4 = document.getElementById("cl43");
          var usf4 = document.getElementById("cl53");


          pom4.addEventListener('mousedown', initializeOnClick, false);
          ulw4.addEventListener('mousedown', initializeOnClick, false);
          usm4.addEventListener('mousedown', initializeOnClick, false);
          uhw4.addEventListener('mousedown', initializeOnClick, false);
          usf4.addEventListener('mousedown', initializeOnClick, false);

          var pom5 = document.getElementById("cl14");
          var ulw5 = document.getElementById("cl24");
          var usm5 = document.getElementById("cl34");
          var uhw5 = document.getElementById("cl44");
          var usf5 = document.getElementById("cl54");


          pom5.addEventListener('mousedown', initializeOnClick, false);
          ulw5.addEventListener('mousedown', initializeOnClick, false);
          usm5.addEventListener('mousedown', initializeOnClick, false);
          uhw5.addEventListener('mousedown', initializeOnClick, false);
          usf5.addEventListener('mousedown', initializeOnClick, false);
        break;

        case 6:
          var pom = document.getElementById("cl10");
          var ulw = document.getElementById("cl20");
          var usm = document.getElementById("cl30");
          var uhw = document.getElementById("cl40");
          var usf = document.getElementById("cl50");


          pom.addEventListener('mousedown', initializeOnClick, false);
          ulw.addEventListener('mousedown', initializeOnClick, false);
          usm.addEventListener('mousedown', initializeOnClick, false);
          uhw.addEventListener('mousedown', initializeOnClick, false);
          usf.addEventListener('mousedown', initializeOnClick, false);

          var pom2 = document.getElementById("cl11");
          var ulw2 = document.getElementById("cl21");
          var usm2 = document.getElementById("cl31");
          var uhw2 = document.getElementById("cl41");
          var usf2 = document.getElementById("cl51");


          pom2.addEventListener('mousedown', initializeOnClick, false);
          ulw2.addEventListener('mousedown', initializeOnClick, false);
          usm2.addEventListener('mousedown', initializeOnClick, false);
          uhw2.addEventListener('mousedown', initializeOnClick, false);
          usf2.addEventListener('mousedown', initializeOnClick, false);

          var pom3 = document.getElementById("cl12");
          var ulw3 = document.getElementById("cl22");
          var usm3 = document.getElementById("cl32");
          var uhw3 = document.getElementById("cl42");
          var usf3 = document.getElementById("cl52");


          pom3.addEventListener('mousedown', initializeOnClick, false);
          ulw3.addEventListener('mousedown', initializeOnClick, false);
          usm3.addEventListener('mousedown', initializeOnClick, false);
          uhw3.addEventListener('mousedown', initializeOnClick, false);
          usf3.addEventListener('mousedown', initializeOnClick, false);

          var pom4 = document.getElementById("cl13");
          var ulw4 = document.getElementById("cl23");
          var usm4 = document.getElementById("cl33");
          var uhw4 = document.getElementById("cl43");
          var usf4 = document.getElementById("cl53");


          pom4.addEventListener('mousedown', initializeOnClick, false);
          ulw4.addEventListener('mousedown', initializeOnClick, false);
          usm4.addEventListener('mousedown', initializeOnClick, false);
          uhw4.addEventListener('mousedown', initializeOnClick, false);
          usf4.addEventListener('mousedown', initializeOnClick, false);

          var pom5 = document.getElementById("cl14");
          var ulw5 = document.getElementById("cl24");
          var usm5 = document.getElementById("cl34");
          var uhw5 = document.getElementById("cl44");
          var usf5 = document.getElementById("cl54");


          pom5.addEventListener('mousedown', initializeOnClick, false);
          ulw5.addEventListener('mousedown', initializeOnClick, false);
          usm5.addEventListener('mousedown', initializeOnClick, false);
          uhw5.addEventListener('mousedown', initializeOnClick, false);
          usf5.addEventListener('mousedown', initializeOnClick, false);

          var pom6 = document.getElementById("cl15");
          var ulw6 = document.getElementById("cl25");
          var usm6 = document.getElementById("cl35");
          var uhw6 = document.getElementById("cl45");
          var usf6 = document.getElementById("cl55");


          pom6.addEventListener('mousedown', initializeOnClick, false);
          ulw6.addEventListener('mousedown', initializeOnClick, false);
          usm6.addEventListener('mousedown', initializeOnClick, false);
          uhw6.addEventListener('mousedown', initializeOnClick, false);
          usf6.addEventListener('mousedown', initializeOnClick, false);
        break;

        case 7:
        var pom = document.getElementById("cl10");
        var ulw = document.getElementById("cl20");
        var usm = document.getElementById("cl30");
        var uhw = document.getElementById("cl40");
        var usf = document.getElementById("cl50");


        pom.addEventListener('mousedown', initializeOnClick, false);
        ulw.addEventListener('mousedown', initializeOnClick, false);
        usm.addEventListener('mousedown', initializeOnClick, false);
        uhw.addEventListener('mousedown', initializeOnClick, false);
        usf.addEventListener('mousedown', initializeOnClick, false);

        var pom2 = document.getElementById("cl11");
        var ulw2 = document.getElementById("cl21");
        var usm2 = document.getElementById("cl31");
        var uhw2 = document.getElementById("cl41");
        var usf2 = document.getElementById("cl51");


        pom2.addEventListener('mousedown', initializeOnClick, false);
        ulw2.addEventListener('mousedown', initializeOnClick, false);
        usm2.addEventListener('mousedown', initializeOnClick, false);
        uhw2.addEventListener('mousedown', initializeOnClick, false);
        usf2.addEventListener('mousedown', initializeOnClick, false);

        var pom3 = document.getElementById("cl12");
        var ulw3 = document.getElementById("cl22");
        var usm3 = document.getElementById("cl32");
        var uhw3 = document.getElementById("cl42");
        var usf3 = document.getElementById("cl52");


        pom3.addEventListener('mousedown', initializeOnClick, false);
        ulw3.addEventListener('mousedown', initializeOnClick, false);
        usm3.addEventListener('mousedown', initializeOnClick, false);
        uhw3.addEventListener('mousedown', initializeOnClick, false);
        usf3.addEventListener('mousedown', initializeOnClick, false);

        var pom4 = document.getElementById("cl13");
        var ulw4 = document.getElementById("cl23");
        var usm4 = document.getElementById("cl33");
        var uhw4 = document.getElementById("cl43");
        var usf4 = document.getElementById("cl53");


        pom4.addEventListener('mousedown', initializeOnClick, false);
        ulw4.addEventListener('mousedown', initializeOnClick, false);
        usm4.addEventListener('mousedown', initializeOnClick, false);
        uhw4.addEventListener('mousedown', initializeOnClick, false);
        usf4.addEventListener('mousedown', initializeOnClick, false);

        var pom5 = document.getElementById("cl14");
        var ulw5 = document.getElementById("cl24");
        var usm5 = document.getElementById("cl34");
        var uhw5 = document.getElementById("cl44");
        var usf5 = document.getElementById("cl54");


        pom5.addEventListener('mousedown', initializeOnClick, false);
        ulw5.addEventListener('mousedown', initializeOnClick, false);
        usm5.addEventListener('mousedown', initializeOnClick, false);
        uhw5.addEventListener('mousedown', initializeOnClick, false);
        usf5.addEventListener('mousedown', initializeOnClick, false);

        var pom6 = document.getElementById("cl15");
        var ulw6 = document.getElementById("cl25");
        var usm6 = document.getElementById("cl35");
        var uhw6 = document.getElementById("cl45");
        var usf6 = document.getElementById("cl55");


        pom6.addEventListener('mousedown', initializeOnClick, false);
        ulw6.addEventListener('mousedown', initializeOnClick, false);
        usm6.addEventListener('mousedown', initializeOnClick, false);
        uhw6.addEventListener('mousedown', initializeOnClick, false);
        usf6.addEventListener('mousedown', initializeOnClick, false);

        var pom7 = document.getElementById("cl16");
        var ulw7 = document.getElementById("cl26");
        var usm7 = document.getElementById("cl36");
        var uhw7 = document.getElementById("cl46");
        var usf7 = document.getElementById("cl56");


        pom7.addEventListener('mousedown', initializeOnClick, false);
        ulw7.addEventListener('mousedown', initializeOnClick, false);
        usm7.addEventListener('mousedown', initializeOnClick, false);
        uhw7.addEventListener('mousedown', initializeOnClick, false);
        usf7.addEventListener('mousedown', initializeOnClick, false);
        break;
      }


    },200);


  });
}

$('.load').hide();
$('.buttonshowHide').hide();
$("#haggle").hide();
$("#haggle2").hide();

function showHide(buttonID) {
  var x = document.getElementById("results" + buttonID);

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display="none";
  }
}

document.getElementById("inputBoxes")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("searchButton").click();
    }
  });

var gearNames = [];

function getGearName() {
  console.log("getGearName running");
  var refreshNote = document.getElementById('refreshDiv');

  if(processData.calledTimes != 0) {
    processData.calledTimes=0;
  }
  for (i=0; i<searchBoxes; ++i) {
    //$(".buttonshowHide").show();
    var gearName=document.getElementById("gearInput" + i).value;
    console.log("gearname is " + gearName);
    gearNames.push(gearName);
  }

    makeBtnLabels();
    buildRequestUrl();
    gearNames = [];
};

gearInputs = document.getElementsByClassName('Box');
gearButtons = document.getElementsByClassName('buttonshowHide');



function makeBtnLabels() {
  gearHeaders = [];



  for(i=0; i<gearInputs.length; ++i) {

    var inputName = gearInputs[i].value;
    //var btnid = "btn" + i.toString();
    //var gearButton = document.getElementById(btnid);
    gearHeaders.push(inputName.replace(/\+/g,' '));

    //gearButton.innerHTML = ' <span class="resultsButtons"> ' + inputName +  "</span>";

  }

}



var i = 2;

var urls = [];
var url1, url2, url3, url4, url5, url6, url7;
var searcTerm1, searchTerm2, searchTerm3, searchTerm4, searchTerm5, searchTerm6, searchTerm7;
function buildRequestUrl() {

    baseURL = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=RoryGarc-priceGen-PRD-55d8a3c47-c767674d&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&callback=processData&REST-PAYLOAD&keywords=";
    endURL = "&itemFilter(0).name=Condition&itemFilter(0).value=3000&itemFilter(1).name=SoldItemsOnly&itemFilter(1).value=true&paginationInput.entriesPerPage=10&paginationInput.pageNumber=1";

    switch (searchBoxes) {
      case 1:
        searchTerm1 = gearNames[0].split(' ').join('+');
        url1 = baseURL.concat(searchTerm1, endURL);
        break;

      case 2:
        searchTerm1 = gearNames[0].split(' ').join('+');
        url1 = baseURL.concat(searchTerm1, endURL);
        searchTerm2 = gearNames[1].split(' ').join('+');
        url2 = baseURL.concat(searchTerm2, endURL);
        console.log("searchterm 1 is " + searchTerm1 + " searchterm 2 is " + searchTerm2);
        break;

      case 3:
        searchTerm1 = gearNames[0].split(' ').join('+');
        url1 = baseURL.concat(searchTerm1, endURL);
        searchTerm2 = gearNames[1].split(' ').join('+');
        url2 = baseURL.concat(searchTerm2, endURL);
        searchTerm3 = gearNames[2].split(' ').join('+');
        url3 = baseURL.concat(searchTerm3, endURL);
        break;

      case 4:
        searchTerm1 = gearNames[0].split(' ').join('+');
        url1 = baseURL.concat(searchTerm1, endURL);
        searchTerm2 = gearNames[1].split(' ').join('+');
        url2 = baseURL.concat(searchTerm2, endURL);
        searchTerm3 = gearNames[2].split(' ').join('+');
        url3 = baseURL.concat(searchTerm3, endURL);
        searchTerm4 = gearNames[3].split(' ').join('+');
        url4 = baseURL.concat(searchTerm3, endURL);
        break;

      case 5:
        searchTerm1 = gearNames[0].split(' ').join('+');
        url1 = baseURL.concat(searchTerm1, endURL);
        searchTerm2 = gearNames[1].split(' ').join('+');
        url2 = baseURL.concat(searchTerm2, endURL);
        searchTerm3 = gearNames[2].split(' ').join('+');
        url3 = baseURL.concat(searchTerm3, endURL);
        searchTerm4 = gearNames[3].split(' ').join('+');
        url4 = baseURL.concat(searchTerm3, endURL);
        searchTerm5 = gearNames[3].split(' ').join('+');
        url5 = baseURL.concat(searchTerm3, endURL);
        break;

      case 6:
        searchTerm1 = gearNames[0].split(' ').join('+');
        url1 = baseURL.concat(searchTerm1, endURL);
        searchTerm2 = gearNames[1].split(' ').join('+');
        url2 = baseURL.concat(searchTerm2, endURL);
        searchTerm3 = gearNames[2].split(' ').join('+');
        url3 = baseURL.concat(searchTerm3, endURL);
        searchTerm4 = gearNames[3].split(' ').join('+');
        url4 = baseURL.concat(searchTerm3, endURL);
        searchTerm5 = gearNames[3].split(' ').join('+');
        url5 = baseURL.concat(searchTerm3, endURL);
        searchTerm6 = gearNames[3].split(' ').join('+');
        url6 = baseURL.concat(searchTerm3, endURL);
        break;

      case 7:
        searchTerm1 = gearNames[0].split(' ').join('+');
        url1 = baseURL.concat(searchTerm1, endURL);
        searchTerm2 = gearNames[1].split(' ').join('+');
        url2 = baseURL.concat(searchTerm2, endURL);
        searchTerm3 = gearNames[2].split(' ').join('+');
        url3 = baseURL.concat(searchTerm3, endURL);
        searchTerm4 = gearNames[3].split(' ').join('+');
        url4 = baseURL.concat(searchTerm3, endURL);
        searchTerm5 = gearNames[3].split(' ').join('+');
        url5 = baseURL.concat(searchTerm3, endURL);
        searchTerm6 = gearNames[3].split(' ').join('+');
        url6 = baseURL.concat(searchTerm3, endURL);
        searchTerm7 = gearNames[3].split(' ').join('+');
        url7 = baseURL.concat(searchTerm3, endURL);
        break;

      default:

    }

    getPromises();

};



let promise0 = function () {
  return new Promise(function (resolve, reject) {
    getData(url1);
    if (url1 != null) {
      resolve('1st result fetched')
    } else {
      reject(alert('first search term returned no result'))
    }
  });
};

let promise1 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      getData(url2);
      if (url2 != null) {
        resolve('1st result fetched')
      } else {
        reject(alert('second search term returned no result'))
      }

    },1000);

  });
};

let promise2 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      getData(url3);
      if (url3 != null) {
        resolve('1st result fetched')
      } else {
        reject(alert('third search term returned no result'))
      }
    },2000);

  });
};

let promise3 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      getData(url4);
      if (url4 != null) {
        resolve('1st result fetched')
      } else {
        reject(alert('fourth search term returned no result'))
      }

    },3000);

  });
};

let promise4 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      getData(url5);
      if (url5 != null) {
        resolve('1st result fetched')
      } else {
        reject(alert('fifth search term returned no result'))
      }

    },3300);

  });
};

let promise5 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      getData(url6);
      if (url6 != null) {
        resolve('1st result fetched')
      } else {
        reject(alert('sixth search term returned no result'))
      }
    },3700);

  });
};

let promise6 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      getData(url7);
      if (url7 != null) {
        resolve('1st result fetched')
      } else {
        reject(alert('seventh search term returned no result'))
      }

    },4200);

  });
};

function getPromises() {
  var grey = "grey";
  switch(searchBoxes) {
    case 1:
    promise0().then(function () {
      $('#calcButton').css({"background": grey});
    })
    break;

    case 2:
    promise0().then(function () {
      return promise1();
    }).then(function () {
      $('#calcButton').css({"background": grey});
    })
    break;

    case 3:
    promise0().then(function () {
      return promise1();
    }).then(function () {
      return promise2().then(function () {
        $('#calcButton').css({"background": grey});
      });

    })
    break;

    case 4:
    promise0().then(function () {
      return promise1();
    }).then(function () {
      return promise2();
    }).then(function () {
      return promise3().then(function () {
        $('#calcButton').css({"background": grey});
      });
    })
    break;

    case 5:
    promise0().then(function () {
      return promise1();
    }).then(function () {
      return promise2();
    }).then(function () {
      return promise3();
    }).then(function () {
      return promise4().then(function () {
        $('#calcButton').css({"background": grey});
      });

    })
    break;

    case 6:
    promise0().then(function () {
      return promise1();
    }).then(function () {
      return promise2();
    }).then(function () {
      return promise3();
    }).then(function () {
      return promise4();
    }).then(function () {
      return promise5().then(function () {
        $('#calcButton').css({"background": grey});
      });
    })
    break;

    case 7:
    promise0().then(function () {
      return promise1();
    }).then(function () {
      return promise2();
    }).then(function () {
      return promise3();
    }).then(function () {
      return promise4();
    }).then(function () {
      return promise5();
    }).then(function () {
      return promise6();
    }).then(function () {
      return promise7().then(function () {
        $('#calcButton').css({"background": grey});
      });
    })
    break;
  }

}

var modal = document.getElementById('excludedResultsModal');

var othermodal = document.getElementById("priceTable");

var hagglemodal = document.getElementById("haggle");

var hagglemodal2 = document.getElementById("haggle2");

var modalBtn = document.getElementById("excluded-results-button");

var span = document.getElementById("exit")[0];

window.onclick = function (event) {

  switch(event.target) {
    case modal:
      modal.style.display = "none";
      $(".cselectorText").show();
      $(".title").show();
      $(".ctitle::after").show();
      $(".title").show();

    break;

    case othermodal:
      othermodal.style.display = "none";
      $(".cselectorText").show();
      $(".title").show();
      $(".ctitle::after").show();
      $(".title").show();

    break;

    case hagglemodal:
      hagglemodal.style.display = "block";
    break;

    case hagglemodal2:
     hagglemodal2.style.display = "none";
    break;

  }

}

function displayExcludedResults () {
  $(".cselectorText").hide();
  $(".title").hide();
  //$(".ctitle").hide();
  $(".ctitle::after").hide();
  if (checkBoxesPrices != null) {
    checkBoxesPrices = [];
  }
  modal.style.display = "block";
}

function displayPriceTable() {
  othermodal.style.display = "block";
  $(".cselectorText").hide();
  $(".title").hide();
  $(".ctitle").hide();
  $(".ctitle::after").hide();
}

function displayHideHaggle() {
  displayStyle = document.getElementById('haggle').style.display;
  displayStyle2 = document.getElementById('haggle2').style.display;
  console.dir("dispalyhidehaggle triggered and this is " + this.id);




  if(this.id == "buyTotal") {
    console.log("buyTotal triggered");

    switch (displayStyle) {
      case "none":
      console.log("case none for buy total");
      createBuyGhost();
      $("#haggle").show();
      $('#ghostSpan').show();
      break;

      case "block":
      $("#haggle").hide();
      $('ghostSpan').hide();
      break;
    }

  } else {
    console.log("else case running");


    switch (displayStyle2) {
      case "none":
      createTradeGhost();
      $("#haggle2").show();
      $("#ghostSpan2").show();
      break;

      case "block":
      $("#haggle2").hide();
      $('#ghostSpan2').hide();
      break;
    }

  }

}

var checkBoxesPrices = [];

var masterList = [];
var allResults = [];
var excludedResults = [];
var searches;

var searchOne, searchTwo, searchThree, searchFour, searchFive, searchSix, searchSeven;
var excludedsearchOne, excludedsearchTwo, excludedsearchThree, excludedsearchFour, excludedsearchFive, excludedsearchSix, excludedsearchSeven;

var j;

var html = [];



processData.calledTimes=0;

var finalPrices = [];
var excludedPrices = [];
var soldPriceValue;
var soldPriceValueExcluded;
var averagePrice;
var buyPrice;
var tradePrice;

var excludedsearchThree;


function createResults() {
  for (i=1; i<=searchBoxes; ++i) {
    switch (i) {

        case 1:
          excludedsearchOneLength = excludedsearchOne.length;
          searchOneLength = searchOne.length;
          firstSearch = sortList(searchOneLength, excludedsearchOneLength, searchOne, excludedsearchOne);
          searches = {one:firstSearch};
          break;

        case 2:
          searchTwoLength = searchTwo.length;
          excludedsearchTwoLength = excludedsearchTwo.length;
          secondSearch = sortList(searchTwoLength, excludedsearchTwoLength, searchTwo, excludedsearchTwo);
          searches = {one:firstSearch, two:secondSearch};
          break;

        case 3:
          excludedsearchThreeLength = excludedsearchThree.length;
          searchThreeLength = searchThree.length;
          thirdSearch = sortList(searchThreeLength, excludedsearchThreeLength, searchThree, excludedsearchThree);
          searches = {one:firstSearch, two:secondSearch, three:thirdSearch};

          break;

        case 4:
          searchFourLength = searchFour.length;
          excludedsearchFourLength = excludedsearchFour.length;
          searchFour = sortList(searchFourLength, excludedsearchFourLength, searchFour, excludedsearchFour);
          searches = {one:searchOne, two:searchTwo, three:searchThree, four:searchFour};
          break;

        case 5:
          searchFiveLength = searchFive.length;
          excludedsearchFiveLength = excludedsearchFive.length;
          searchFive = sortList(searchFiveLength, excludedsearchFiveLength, searchFive, excludedsearchFive);
          searches = {one:searchOne, two:searchTwo, three:searchThree, four:searchFour, five:searchFive};
          break;

        case 6:
          searchSixLength = searchSix.length;
          excludedsearchSixLength = excludedsearchSix.length;
          searchSix = sortList(searchSixLength, excludedsearchSixLength, searchSix, excludedsearchSix);
          searches = {one:searchOne, two:searchTwo, three:searchThree, four:searchFour, five:searchFive, six:searchSix};
          break;

        case 7:
          searchSevenLength = searchSeven.length;
          excludedsearchSevenLength = excludedsearchSeven.length;
          searchSeven = sortList(searchSevenLength, excludedsearchSevenLength, searchSeven, excludedsearchSeven);
          searches = {one:searchOne, two:searchTwo, three:searchThree, four:searchFour, five:searchFive, six:searchSix, seven:searchSeven};
          break;

      }

  }
}

function sortList(searchLength, excludedSearchLength, resultList, excludedResultList) {

    var newPriceList = [];

    for (j=0; j<searchLength; j += 2) {
      var checkBoxComplete = '<input class="Checked" type="checkbox" id="checkBox';
      var checkBox = "checkBox";
      var i = resultList[j].match(/\d/g);
      i = i.join("");
      i = parseInt(i);

      checkBox = checkBox + i;
      checkBoxComplete = checkBoxComplete + i + '" checked';

      var x = document.getElementById(checkBox).checked;


      switch(x) {
        case false:
          var checkIndexFalse = resultList.indexOf(checkBoxComplete);
          break;
        case true:
          var checkIndexTrue = resultList.indexOf(checkBoxComplete);
          var priceIndex = checkIndexTrue + 1;
          newPriceList.push(parseInt(resultList[priceIndex]));
          break;
      }
    }

    if (excludedResultList != null) {
      for (k=0; k<excludedSearchLength; k += 2) {
        var l = excludedResultList[k].match(/\d/g);
        l = l.join("");
        l = parseInt(l);
        var test = "checkBox";
        var testComplete = '<input class="Checked" type="checkbox" id="checkBox';

        test = test + l;
        testComplete = testComplete + l + '"';
        var x = document.getElementById(test).checked;

        if (x == true) {
          var excludedCheckIndex = excludedResultList.indexOf(testComplete);
          var excludedPriceIndex = excludedCheckIndex + 1;
          newPriceList.push(parseInt(excludedResultList[excludedPriceIndex]));
        }

      }
    }
  return newPriceList;
  }





var pom = getConditionText("cl10");
var ulw = getConditionText("cl20");
var umw = getConditionText("cl30");
var uhw = getConditionText("cl40");
var usm = getConditionText("cl50");

function getConditionText(i) {
  test = document.getElementById(i).title;
  return document.getElementById(i).innerHTML;
}

function getCondition(i) {
  return document.getElementById(i).innerHTML;
}
function calculatePrices() {

  createResults(resultsPerSearch, checkBoxesPricesExcluded);
  switch(searchBoxes) {
    case 1:
      sum1 = searches.one.reduce(getSum);
      avg1 = getAvg(sum1, searches.one.length);
      condition = getCondition("button0");
      trdPrice1 = getTradePrice(avg1, condition);
      buyPrice1 = getBuyPrice(avg1, condition);
      totalBuyList = [];
      totalBuyList.push(buyPrice1);
      totalBuySum = totalBuyList.reduce(getSum);
      totalTradeList = [];
      totalTradeList.push(trdPrice1);
      totalTradeSum = totalTradeList.reduce(getSum);
      totalAvgSum = avg1;
      break;
    case 2:
      sum1 = searches.one.reduce(getSum);
      sum2 = searches.two.reduce(getSum);
      avg1 = getAvg(sum1, searches.one.length);
      avg2 = getAvg(sum2, searches.two.length);
      condition = getCondition("button0");
      condition2 =getCondition("button1");
      trdPrice1 = getTradePrice(avg1, condition);
      trdPrice2 = getTradePrice(avg2, condition2);
      buyPrice1 = getBuyPrice(avg1, condition);
      buyPrice2 = getBuyPrice(avg2, condition2);
      totalBuyList = [];
      totalBuyList.push(buyPrice1, buyPrice2);
      totalBuySum = totalBuyList.reduce(getSum);
      totalTradeList = [];
      totalTradeList.push(trdPrice1, trdPrice2);
      totalTradeSum = totalTradeList.reduce(getSum);
      totalAvgList = [];
      totalAvgList.push(avg1, avg2);
      totalAvgSum = totalAvgList.reduce(getSum);
      break;
    case 3:
      sum1 = searches.one.reduce(getSum);
      sum2 = searches.two.reduce(getSum);
      sum3 = searches.three.reduce(getSum);
      avg1 = getAvg(sum1, searches.one.length);
      avg2 = getAvg(sum2, searches.two.length);
      avg3 = getAvg(sum3, searches.three.length);
      condition = getCondition("button0");
      condition2 = getCondition("button1");
      condition3 = getCondition("button2");
      trdPrice1 = getTradePrice(avg1, condition);
      trdPrice2 = getTradePrice(avg2, condition2);
      trdPrice3 = getTradePrice(avg3, condition3);
      buyPrice1 = getBuyPrice(avg1, condition);
      buyPrice2 = getBuyPrice(avg2, condition2);
      buyPrice3 = getBuyPrice(avg3, condition3);
      totalBuyList = [];
      totalBuyList.push(buyPrice1, buyPrice2,  buyPrice3);
      totalBuySum = totalBuyList.reduce(getSum);
      totalTradeList = [];
      totalTradeList.push(trdPrice1, trdPrice2, trdPrice3);
      totalTradeSum = totalTradeList.reduce(getSum);
      totalAvgList = [];
      totalAvgList.push(avg1, avg2, avg3);
      totalAvgSum = totalAvgList.reduce(getSum);
      break;

    case 4:
      sum1 = searches.one.reduce(getSum);
      sum2 = searches.two.reduce(getSum);
      sum3 = searches.three.reduce(getSum);
      sum4 = searches.four.reduce(getSum);
      avg1 = getAvg(sum1, searches.one.length);
      avg2 = getAvg(sum2, searches.two.length);
      avg3 = getAvg(sum3, searches.three.length);
      avg4 = getAvg(sum4, searches.four.length);
      condition = getCondition(button0);
      condition2 = getCondition(button1);
      condition3 = getCondition(button2);
      condition4 = getCondition(button3);
      trdPrice1 = getTradePrice(avg1, condition);
      trdPrice2 = getTradePrice(avg2, condition2);
      trdPrice3 = getTradePrice(avg3, condition3);
      trdPrice4 = getTradePrice(avg4, condition4);
      buyPrice1 = getBuyPrice(avg1, condition);
      buyPrice2 = getBuyPrice(avg2, condition2);
      buyPrice3 = getBuyPrice(avg3, condition3);
      buyPrice4 = getBuyPrice(avg4, condition4);
      totalBuyList = [];
      totalBuyList.push(buyPrice1, buyPrice2,  buyPrice3, buyPrice4);
      totalBuySum = totalBuyList.reduce(getSum);
      totalTradeList = [];
      totalTradeList.push(trdPrice1, trdPrice2, trdPrice3, trdPrice4);
      totalTradeSum = totalTradeList.reduce(getSum);
      totalAvgList = [];
      totalAvgList.push(avg1, avg2, avg3, avg4);
      totalAvgSum = totalAvgList.reduce(getSum);
      break;

    case 5:
      sum1 = searches.one.reduce(getSum);
      sum2 = searches.two.reduce(getSum);
      sum3 = searches.three.reduce(getSum);
      sum4 = searches.four.reduce(getSum);
      sum5 = searches.five.reduce(getSum);
      avg1 = getAvg(sum1, searches.one.length);
      avg2 = getAvg(sum2, searches.two.length);
      avg3 = getAvg(sum3, searches.three.length);
      avg4 = getAvg(sum4, searches.four.length);
      avg5 = getAvg(sum5, searches.five.length);
      condition = getCondition(button0);
      condition2 = getCondition(button1);
      condition3 = getCondition(button2);
      condition4 = getCondition(button3);
      condition5 = getCondition(button4);
      trdPrice1 = getTradePrice(avg1, condition);
      trdPrice2 = getTradePrice(avg2, condition2);
      trdPrice3 = getTradePrice(avg3, condition3);
      trdPrice4 = getTradePrice(avg4, condition4);
      trdPrice5 = getTradePrice(avg5, condition5);
      buyPrice1 = getBuyPrice(avg1, condition);
      buyPrice2 = getBuyPrice(avg2, condition2);
      buyPrice3 = getBuyPrice(avg3, condition3);
      buyPrice4 = getBuyPrice(avg4, condition4);
      buyPrice5 = getBuyPrice(avg5, condition5);
      totalBuyList = [];
      totalBuyList.push(buyPrice1, buyPrice2,  buyPrice3, buyPrice4, buyPrice5);
      totalBuySum = totalBuyList.reduce(getSum);
      totalTradeList = [];
      totalTradeList.push(trdPrice1, trdPrice2, trdPrice3, trdPrice4, trdPrice5);
      totalTradeSum = totalTradeList.reduce(getSum);
      totalAvgList = [];
      totalAvgList.push(avg1, avg2, avg3, avg4, avg5);
      totalAvgSum = totalAvgList.reduce(getSum);
      break;

    case 6:
      sum1 = searches.one.reduce(getSum);
      sum2 = searches.two.reduce(getSum);
      sum3 = searches.three.reduce(getSum);
      sum4 = searches.four.reduce(getSum);
      sum5 = searches.five.reduce(getSum);
      sum6 = searches.six.reduce(getSum);
      avg1 = getAvg(sum1, searches.one.length);
      avg2 = getAvg(sum2, searches.two.length);
      avg3 = getAvg(sum3, searches.three.length);
      avg4 = getAvg(sum4, searches.four.length);
      avg5 = getAvg(sum5, searches.five.length);
      avg6 = getAvg(sum6, searches.six.length);
      condition = getCondition(button0);
      condition2 = getCondition(button1);
      condition3 = getCondition(button2);
      condition4 = getCondition(button3);
      condition5 = getCondition(button4);
      condition6 = getCondition(button5);
      trdPrice1 = getTradePrice(avg1, condition);
      trdPrice2 = getTradePrice(avg2, condition2);
      trdPrice3 = getTradePrice(avg3, condition3);
      trdPrice4 = getTradePrice(avg4, condition4);
      trdPrice5 = getTradePrice(avg5, condition5);
      trdPrice6 = getTradePrice(avg6, condition6);
      buyPrice1 = getBuyPrice(avg1);
      buyPrice2 = getBuyPrice(avg2);
      buyPrice3 = getBuyPrice(avg3);
      buyPrice4 = getBuyPrice(avg4);
      buyPrice6 = getBuyPrice(avg6);
      totalBuyList = [];
      totalBuyList.push(buyPrice1, buyPrice2,  buyPrice3, buyPrice4, buyPrice5, buyPrice6);
      totalBuySum = totalBuyList.reduce(getSum);
      totalTradeList = [];
      totalTradeList.push(trdPrice1, trdPrice2, trdPrice3, trdPrice4, trdPrice5, trdPrice6);
      totalTradeSum = totalTradeList.reduce(getSum);
      totalAvgList = [];
      totalAvgList.push(avg1, avg2, avg3, avg4, avg5, avg6);
      totalAvgSum = totalAvgList.reduce(getSum);
      break;
    case 7:
      sum1 = searches.one.reduce(getSum);
      sum2 = searches.two.reduce(getSum);
      sum3 = searches.three.reduce(getSum);
      sum4 = searches.four.reduce(getSum);
      sum5 = searches.five.reduce(getSum);
      sum6 = searches.six.reduce(getSum);
      sum7 = searches.seven.reduce(getSum);
      avg1 = getAvg(sum1, searches.one.length);
      avg2 = getAvg(sum2, searches.two.length);
      avg3 = getAvg(sum3, searches.three.length);
      avg4 = getAvg(sum4, searches.four.length);
      avg5 = getAvg(sum5, searches.five.length);
      avg6 = getAvg(sum6, searches.six.length);
      avg7 = getAvg(sum7, searches.seven.length);
      condition = getCondition(button0);
      condition2 = getCondition(button1);
      condition3 = getCondition(button2);
      condition4 = getCondition(button3);
      condition5 = getCondition(button4);
      condition6 = getCondition(button5);
      condition7 = getCondition(button6);
      trdPrice1 = getTradePrice(avg1, condition);
      trdPrice2 = getTradePrice(avg2, condition2);
      trdPrice3 = getTradePrice(avg3, condtion3);
      trdPrice4 = getTradePrice(avg4, condition4);
      trdPrice5 = getTradePrice(avg5, condition5);
      trdPrice6 = getTradePrice(avg6, condition6);
      trdPrice7 = getTradePrice(avg7, condition7);
      buyPrice1 = getBuyPrice(avg1, condition);
      buyPrice2 = getBuyPrice(avg2, condition2);
      buyPrice3 = getBuyPrice(avg3, condition3);
      buyPrice4 = getBuyPrice(avg4, condition4);
      buyPrice5 = getBuyPrice(avg5, condition5);
      buyPrice6 = getBuyPrice(avg6, condition6);
      buyPrice7 = getBuyPrice(avg7, condition7);
      totalBuyList = [];
      totalBuyList.push(buyPrice1, buyPrice2,  buyPrice3, buyPrice4, buyPrice5, buyPrice6, buyPrice7);
      totalBuySum = totalBuyList.reduce(getSum);
      totalTradeList = [];
      totalTradeList.push(trdPrice1, trdPrice2, trdPrice3, trdPrice4, trdPrice5, trdPrice6, trdPrice7);
      totalTradeSum = totalTradeList.reduce(getSum);
      totalAvgList = [];
      totalAvgList.push(avg1, avg2, avg3, avg4, avg5, avg6, avg7);
      totalAvgSum = totalAvgList.reduce(getSum);
      break;
  }

  function getSum(total, num) {
    sum = total + num;
    sum = Math.round(sum);
    return sum;
  }

  function getAvg(sum, divisor) {
    var avg = sum/divisor;
    return avg;
  }



  function getTradePrice(avg, condition) {

    switch (condition) {
      case "Pre-owned Mint":
        console.log('case is preowned mint')
        trdPrice = avg * .45;
        return trdPrice
        break;
      case "Used Light Wear":
        console.log('case is used light wear')
        trdPrice = avg * .425;
        return trdPrice;
        break;

      case "Used Moderate Wear":
        trdPrice = avg * .40;
        return trdPrice;
        break;

      case "Used Heavy Wear":
        trdPrice = avg * .375;
        return trdPrice;
        break;

      case "Used Semi-functional":
        trdPrice = avg * .35;
        return trdPrice;
        break;
      default:
        trdPrice = avg * .45;
        return trdPrice

    }


  }

  function getBuyPrice(avg, condition) {
    switch (condition) {
      case "Pre-owned Mint":
        buyPrice = avg * .30;
        return buyPrice;
        break;
      case "Used Light Wear":
        buyPrice = avg * .275;
        return buyPrice;
        break;

      case "Used Moderate Wear":
        buyPrice = avg * .25;
        return buyPrice;
        break;

      case "Used Heavy Wear":
        buyPrice = avg * .225;
        return buyPrice;
        break;

      case "Used Semi-functional":
        buyPrice = avg * .20;
        return buyPrice;
        break;
      default:
        buyPrice = avg * .30;
        return buyPrice;


    }

    return buyPrice;
  }



  showResults();
  pricesPer();
  createBuySlider();
  createTradeSlider();


}

function pricesPer() {
  var priceTable = [];
  var th = "<th>";
  var gearInput;

  switch (searchBoxes) {
    case 1:
      var gearHeader1 = gearHeaders[0];
      priceTable.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tr><th>' + gearHeader1 + '</th></tr>' + '<tr><td>' + "Buy Total " + buyPrice1 + '</td></tr>' + '<tr><td>' + "Trade Total " + trdPrice1 + '</td></tr></table>');
      break;
    case 2:
      var gearHeader1 = gearHeaders[0];
      var gearHeader2 = gearHeaders[1];
      priceTable.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tr><th>' + gearHeader1 + '</th>' + '<th>' + gearHeader2 + '</th></tr>' + '<tr><td>' + "Buy Total " + buyPrice1 + '</td>' + '<td>' + "Buy Total " + buyPrice2 + '</td></tr>' + '<tr><td>' + "Trade Total " + trdPrice1 + '</td>' + '<td>' + "Trade Total " + trdPrice2  + '</td></tr></table>');
      break;
    case 3:
      var gearHeader1 = gearHeaders[0];
      var gearHeader2 = gearHeaders[1];
      var gearHeader3 = gearHeaders[2];
      priceTable.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tr><th>' + gearHeader1 + '</th>' + '<th>' + gearHeader2 + '</th>' + '<th>' + gearHeader3  +  '</th></tr>' + '<tr><td>' + "Buy Total " + buyPrice1 + '</td>' + '<td>' + "Buy Total " + buyPrice2 + '</td>' + '<td>' + "Buy Total " + buyPrice3 + '</td></tr>' + '<tr><td>' + "Trade Total " + trdPrice1 + '</td>' + '<td>' + "Trade Total " + trdPrice2  + '</td>' + '<td>' + "Trade Total " + trdPrice3 + '</td></tr></table>');
      break;
    case 4:
      var gearHeader1 = gearHeaders[0];
      var gearHeader2 = gearHeaders[1];
      var gearHeader3 = gearHeaders[2];
      var gearHeader4 = gearHeaders[3];
      priceTable.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tr><th>' + gearHeader1 + '</th>' + '<th>' + gearHeader2 + '</th>' + '<th>' + gearHeader3  +  '</th>' + '<th>' + gearHeader4 + '</th></tr>' + '<tr><td>' + "Buy Total " + buyPrice1 + '</td>' + '<td>' + "Buy Total " + buyPrice2 + '</td>' + '<td>' + "Buy Total " + buyPrice3 + '</td>' + '<td>' + "Buy Total " + buyPrice4 + '</td></tr>' + '<tr><td>' + "Trade Total " + trdPrice1 + '</td>' + '<td>' + "Trade Total " + trdPrice2  + '</td>' + '<td>' + "Trade Total " + trdPrice3 +  '</td>' + '<td>' + "Trade Total " + trdPrice4 + '</td></tr></table>');
      break;

    case 5:
      var gearHeader1 = gearHeaders[0];
      var gearHeader2 = gearHeaders[1];
      var gearHeader3 = gearHeaders[2];
      var gearHeader4 = gearHeaders[3];
      var gearHeader5 = gearHeaders[4];
      priceTable.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tr><th>' + gearHeader1 + '</th>' + '<th>' + gearHeader2 + '</th>' + '<th>' + gearHeader3  +  '</th>' + '<th>' + gearHeader4 + '</th>' + '<th>' + gearHeader5 + '</th></tr>' + '<tr><td>' + "Buy Total " + buyPrice1 + '</td>' + '<td>' + "Buy Total " + buyPrice2 + '</td>' + '<td>' + "Buy Total " + buyPrice3 + '</td>' + '<td>' + "Buy Total " + buyPrice4 + '</td>' + '<td>' + "Buy Total " + buyPrice5 + '</td></tr>' + '<tr><td>' + "Trade Total " + trdPrice1 + '</td>' + '<td>' + "Trade Total " + trdPrice2  + '</td>' + '<td>' + "Trade Total " + trdPrice3 +  '</td>' + '<td>' + "Trade Total " + trdPrice4 + '</td>' + '<td>' + "Trade Total " + trdPrice5 + '</td></tr></table>');
      break;
    case 6:
      var gearHeader1 = gearHeaders[0];
      var gearHeader2 = gearHeaders[1];
      var gearHeader3 = gearHeaders[2];
      var gearHeader4 = gearHeaders[3];
      var gearHeader5 = gearHeaders[4];
      var gearHeader6 = gearHeaders[5];
      priceTable.push('<table width="100%" border="0" cellspacing="0" cellpadding="1"><tr><th>' + gearHeader1 + '</th>' + '<th>' + gearHeader2 + '</th>' + '<th>' + gearHeader3  +  '</th>' + '<th>' + gearHeader4 + '</th>' + '<th>' + gearHeader5 + '</th>' + '<th>' + gearHeader6 + '</th></tr>' + '<tr><td>' + "Buy Total " + buyPrice1 + '</td>' + '<td>' + "Buy Total " + buyPrice2 + '</td>' + '<td>' + "Buy Total " + buyPrice3 + '</td>' + '<td>' + "Buy Total " + buyPrice4 + '</td>' + '<td>' + "Buy Total " + buyPrice5 + '</td>' + '<td>' + "Buy Total " + buyPrice6 +  '</td></tr>' + '<tr><td>' + "Trade Total " + trdPrice1 + '</td>' + '<td>' + "Trade Total " + trdPrice2  + '</td>' + '<td>' + "Trade Total " + trdPrice3 +  '</td>' + '<td>' + "Trade Total " + trdPrice4 + '</td>' + '<td>' + "Trade Total " + trdPrice5 + '</td>' + '<td>' + "Trade Total " + trdPrice6 + '</td></tr></table>');
      break;
    case 7:
      var gearHeader1 = gearHeaders[0];
      var gearHeader2 = gearHeaders[1];
      var gearHeader3 = gearHeaders[2];
      var gearHeader4 = gearHeaders[3];
      var gearHeader5 = gearHeaders[4];
      var gearHeader6 = gearHeaders[5];
      var gearHeader7 = gearHeaders[6];
      priceTable.push('<table width="100%" border="0" cellspacing="0" cellpadding="1"><tr><th>' + gearHeader1 + '</th>' + '<th>' + gearHeader2 + '</th>' + '<th>' + gearHeader3  +  '</th>' + '<th>' + gearHeader4 + '</th>' + '<th>' + gearHeader5 + '</th>' + '<th>' + gearHeader6 + '</th>' + '<th>' + gearHeader7 + '</th></tr>' + '<tr><td>' + "Buy Total " + buyPrice1 + '</td>' + '<td>' + "Buy Total " + buyPrice2 + '</td>' + '<td>' + "Buy Total " + buyPrice3 + '</td>' + '<td>' + "Buy Total " + buyPrice4 + '</td>' + '<td>' + "Buy Total " + buyPrice5 + '</td>' + '<td>' + "Buy Total " + buyPrice6 +  '</td>' + '<td>' + "Buy Total " + buyPrice7 +  '</td></tr>' + '<tr><td>' + "Trade Total " + trdPrice1 + '</td>' + '<td>' + "Trade Total " + trdPrice2  + '</td>' + '<td>' + "Trade Total " + trdPrice3 +  '</td>' + '<td>' + "Trade Total " + trdPrice4 + '</td>' + '<td>' + "Trade Total " + trdPrice5 + '</td>' + '<td>' + "Trade Total " + trdPrice6 + '</td>' + '<td>' + "Trade Total " + trdPrice7 + '</td></tr></table>');
      break;

  }
  document.getElementById("priceTableContent").innerHTML = priceTable.join("");
}


var iTotals = [];
var avgPrice = 'Average Price';


var maxBuy = parseInt(totalBuySum) + 150;
var maxTrd = totalTradeSum + 150;


function showResults () {
  var bPrice = 'Total Buy Price';
  var tPrice = 'Total Trade Price';
  resultsTable = [];
  if (totalTradeSum != null && totalBuySum != null) {
    resultsTable.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tr><th>' + bPrice +
    '</th>' + '<th>' + tPrice + '</th></tr>' + '<tr><td id="buyTotal" class="totals">' + Math.round(totalBuySum) + '</td>' + '<td id="trdTotal"  class="totals">' + Math.round(totalTradeSum) + '</td></tr></table>' );
  }
}

function createTradeSlider() {
  var trdHaggleSlider = [];
  var maxTrd = totalTradeSum + 300;

  trdHaggleSlider.push(' <input id="trdSlider" type="range" min="0" max="' + maxTrd + '"' + ' value="' + totalTradeSum + '"/> ');
  document.getElementById("haggle2").innerHTML = trdHaggleSlider.join("");
  trdTotal = document.getElementById("trdTotal");
  trdTotal.addEventListener('mousedown', displayHideHaggle);

  var trdSlider = document.getElementById("trdSlider");
  trdSlider.addEventListener('input', updateTrdSlider);


}

function updateTrdSlider() {
  var trdValue = document.getElementById('trdSlider').value;
  trdTotal.innerHTML = trdValue;
  profit = totalAvgSum - trdValue;
  marginPercentage = profit / totalAvgSum;
  marginPercentage = marginPercentage * 100;
  marginGhost2 = document.getElementById('marginGhost2');
  marginGhost2.innerHTML = 'Total Value: ' + Math.round(totalAvgSum) + ' Profit Margin: ' + Math.round(marginPercentage) + "%";

}

function createBuySlider () {
  var haggleSlider = [];

  var maxBuy = totalBuySum + 300;
  haggleSlider.push(' <input id="slider" type="range" min="0" max="' + maxBuy + '"' + ' value="' + totalBuySum + '"/>');
  document.getElementById("calculationResults").innerHTML = resultsTable.join("");
  document.getElementById("haggle").innerHTML = haggleSlider.join("");
  buyTotal = document.getElementById("buyTotal");
  buyTotal.addEventListener('mousedown', displayHideHaggle);

  var slider = document.getElementById("slider");
  slider.addEventListener('input', updateBuySlider);
}

function updateBuySlider () {
  var buyValue = document.getElementById('slider').value;
  buyTotal.innerHTML = buyValue;
  profit = totalAvgSum - buyValue;
  marginPercentage = profit / totalAvgSum;
  mar$ginPercentage = marginPercentage * 100;
  marginGhost = document.getElementById('marginGhost');
  marginGhost.innerHTML = 'Total Value: ' + Math.round(totalAvgSum) + ' Profit Margin: ' + Math.round(marginPercentage) + "%";

}

function createBuyGhost() {
  ghost = document.getElementById("ghostSpan");
  ghost.style.display = "none";
  ghost.innerHTML = "Original Offer " + Math.round(totalBuySum);
}

function createTradeGhost() {
  ghostSpan = document.getElementById("ghostSpan2");
  ghostSpan.style.dispaly = "none";
  ghostSpan.innerHTML = "Original Offer " + Math.round(totalTradeSum);
}*/
//import axios, {AxiosPromise, AxiosResponse} from 'axios'
//let axios = require('./node_modules/axios')



var selectedNum;
let processDataCalledTimes = 0;
let x = 0;

function processData(result, id) {
  console.log('gear in processData', gear)
  //console.log(`result is ${result}`)
  //console.log(`searchid: ${JSON.stringify(searchId)}`)

  //let responseData = JSON.stringify(result)
  //responseData.push(JSON.stringify(result))
  //console.log(`responseData in processData: ${responseData}`)

  let searchResultsElements = $('.results-container-flex').children()

    processDataCalledTimes++
    let items = result.findCompletedItemsResponse[0].searchResult[0].item || [];
    //let items = Object.keys(result.findCompletedItemsResponse[0].searchResult[0].item || [])
    console.log(`items is ${items}`)
    for (let j=0; j < items.length; ++j) {
        var item = items[j];
        var title = item.title;
        //let title = Object.keys(findCompletedItemsResponse[0].searchResult[0].item)
        console.log(`title: ${title}`)
        var pic = item["galleryURL"];
        var viewitem = item.viewItemURL;
        var soldPrice = item.sellingStatus[0].convertedCurrentPrice[0]["__value__"];
        soldPrice = Math.round(soldPrice)
        var checkBox = '<input class="Checked" type="checkbox" id="checkBox';
        var itemName = title.toString();
        var test1 = "with";
        var test2 = "With";
        var test3 = "WITH";
        var test4 = "W/";
        let test6 = "EXTREME";
        var test5 = "w/";
        var pass1 = "box";
        var pass2 = "case";
        var pass3 = "Box";
        var pass4 = "Case";
        var pass5 = "BOX";
        var pass6 = "SHUTTER";
        var pass7= "Shutter";
        if (null != title && null != viewitem && soldPrice != null) {
          //console.log(`running first if block`)
          if (itemName.includes(test1) || itemName.includes(test2) || itemName.includes(test3) || itemName.includes(test4) || itemName.includes(test5)) {
            //console.log(`test case found`)
            if (itemName.includes(pass1) || itemName.includes(pass2) || itemName.includes(pass3) || itemName.includes(pass4) || itemName.includes(pass5) || itemName.includes(pass6) || itemName.includes(pass7) ) {
              //console.log(`pass case found and added: card${x}`)
              searchResultsElements.each(function(item, index){
                //console.log(`item is: ${item}, index is: ${index}`)
                console.log('index in searchlements each function', index)

                  if(index == id) {
                    //console.log(`index is ${index}`)
                    item.append(`<div class="card-container" ontouchstart="this.classList.toggle('hover');">
                      <div id="card${x}" class="card">
                        <div class="card-front">
                          <img class="pic" alt="item picture" src="${pic}" style="width:100%">
                          <div class="container">
                            <span>${itemName}<br></span>
                            <p><br>Sold Price:<span class="price">${soldPrice}</span></p>
                          </div>
                        </div>
                        <div class="card-back">
                          <div class="back-message">Item excluded from calculaton. Click again to include in final calculation.</div>
                        </div>
                      </div>
                    </div>`)
                    //$('.results-container-flex').append(`<div class="card-container"><div id="card${x}" class="card"><div class="card-front"><img class="pic" alt="item picture" src="${pic}" style="width:100%"><div class="container"><span>${itemName}<br></span><p><br>Sold Price:<span class="price">${soldPrice}</span></p></div><div class="card-back"><div class="back-message">Item excluded from calculaton. Click again to include in final calculation.</div></div></div></div></div>`)
                  }


              })
              x++
            }
          } else {
              function htmlDecode(input) {
                let e = document.createElement('div')
                e.innerHTML = input
                return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
              }
              searchResultsElements.each(function(index, item){
                //console.log(`running else`)
                //console.log(`index is ${index}, item is: ${item.toString()}`)
                //console.log(`serchId type is: ${typeof(searchId)}`)
                //console.log(`index type is: ${typeof(index)}`)

                //console.log(`searchid: ${JSON.stringify(searchId)}`)

                //console.log('item name before if statement', itemName)
                //console.log('gear[0] before if', gear[0])

                if(index == id) {
                  //console.log('gear index includes item name')
                  //console.log(`index is ${index}`)
                  //let mystring = '&lt;div&gt;test&lt;/div&gt;'
                  let htmlString = `&lt;div class="card-container" ontouchstart="this.classList.toggle('hover');"&gt;
                    &lt;div id="card${x}" class="card"&gt;
                      &lt;div class="card-front"&gt;
                        &lt;img class="pic" alt="item picture" src="${pic}" style="width:100%"&gt;
                        &lt;div class="container"&gt;
                          &lt;span&gt;${itemName}&lt;br&gt;&lt;/span&gt;
                          &lt;p&gt;&lt;br&gt;Sold Price:&lt;span class="price"&gt;${soldPrice}&lt;/span>&lt;/p&gt;
                        &lt;/div&gt;
                      &lt;/div&gt;
                      &lt;div class="card-back"&gt;
                        &lt;div class="back-message"&gt;Item excluded from calculaton. Click again to include in final calculation.&lt;/div&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;`
                  htmlString = $('<div />').html(htmlString).text()
                  $(item).append(htmlString)
                  //item.append(`<div class="card-container"><div id="card${x}" class="card"><div class="card-front"><img class="pic" alt="item picture" src="${pic}" style="width:100%"><div class="container"><span>${itemName}<br></span><p><br>Sold Price:<span class="price">${soldPrice}</span></p></div><div class="card-back"><div class="back-message">Item excluded from calculaton. Click again to include in final calculation.</div></div></div></div></div>`)
                  //$('.results-container-flex').append(`<div class="card-container"><div id="card${x}" class="card"><div class="card-front"><img class="pic" alt="item picture" src="${pic}" style="width:100%"><div class="container"><span>${itemName}<br></span><p><br>Sold Price:<span class="price">${soldPrice}</span></p></div><div class="card-back"><div class="back-message">Item excluded from calculaton. Click again to include in final calculation.</div></div></div></div></div>`)
                }
              })
              console.log(`x is ${x}`)
              //$('.results-container-flex').append(`<div class="card-container"><div id="card${x}" class="card"><div class="card-front"><img alt="item picture" src="${pic}" style="width:100%"><div class="container"><span>${itemName}<br></span><p><br>Sold Price:<span class="price">${soldPrice}</span></p></div></div><div class="card-back"><div class="back-message">Item excluded from calculaton. Click again to include in final calculation.</div></div></div></div>`)
              x++
           }
       }
    }
    console.log(`selectedNum in prdata is ${selectedNum}`)
    console.log(`processdatacalledtimes in prdata is ${processDataCalledTimes}`)
    //console.log(`selectedNum type in prdata is ${typeof(selectedNum)}`)
    //console.log(`processdatacalledtimes type in prdata is ${typeof(processDataCalledTimes)}`)
    if (processDataCalledTimes === parseInt(selectedNum)) {
      console.log(`done processing data`)
      getPrices()
    }

}

function getBuyPrice(avg, condition) {
  switch (condition) {
    case "pom":
      return Math.round(avg * .30);
      break;
    case "ulw":
      return Math.round(avg * .275);

      break;

    case "umw":
      return Math.round(avg * .25);
      break;

    case "uhw":
      return Math.round(avg * .225);
      break;

    case "usf":
      return Math.round(avg * .20);
      break;
    default:
      return Math.round(avg * .30);
  }

  return buyPrice;
}

function getTrdPrice(avg, condition) {
    switch (condition) {
      case "pom":
        return Math.round(avg * .35);
        break;
      case "ulw":
        return Math.round(avg * .30);
        break;

      case "umw":
        return Math.round(avg * .275);
        break;

      case "uhw":
        return Math.round(avg * .25);
        break;

      case "usf":
        return Math.round(avg * .225);
        break;
      default:
        return Math.round(avg * .35);

    }
    return trdPrice;
  }

function calculate(arr){

  console.log(`calculate function running before loop: prices is ${arr}`)
  const reducer = (accumulator, currentValue) => accumulator + currentValue

  toggleDisplay('.step-3')
  toggleDisplay('.step-4')
  for (i=0; i<arr.length; i++) {
    console.log(`${arr[i]} type is ${typeof i}`)
    if(arr[i] === undefined) {
      arr.splice(i, 1)
    }
  }
  console.log(`prices list for math after loop is ${arr}`)
  let totalSum = arr.reduce(reducer)
  let avgPrice = totalSum / arr.length
  toggleDisplay('.total-view-flex')



  $('.total-buy-prices-grid').append(`<span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span><span class="price">${getBuyPrice(avgPrice,"pom")}</span><span class="price">${getBuyPrice(avgPrice,"ulw")}</span><span class="price">${getBuyPrice(avgPrice,"umw")}</span><span class="price">${getBuyPrice(avgPrice,"uhw")}</span><span class="price">${getBuyPrice(avgPrice,"usf")}</span>`)
  $('.total-trade-prices-grid').append(`<span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span><span class="price">${getTrdPrice(avgPrice,"pom")}</span><span class="price">${getTrdPrice(avgPrice,"ulw")}</span><span class="price">${getTrdPrice(avgPrice,"umw")}</span><span class="price">${getTrdPrice(avgPrice,"uhw")}</span><span class="price">${getTrdPrice(avgPrice,"usf")}</span>`)
  console.log(`totalSum is ${totalSum}`)
  console.log(`avgPrice is ${avgPrice}`)


  $('.total').on('click', function(e){
    e.stopPropagation()
    if ( $('.total-view-flex').attr('style') === 'display: none' ) {
      toggleDisplay('.item-view-flex')
      toggleDisplay('.total-view-flex')
    }
  })

  $('.item').on('click', function(e){
    e.stopPropagation()
    if ( $('.item-view-flex').attr('style') === 'display: none' ) {
      toggleDisplay('.total-view-flex')
      toggleDisplay('.item-view-flex')
      for (i=0; i<=selectedNum; i++) {
        $('.item-view-flex').append(`<h2>${itemName}</h2><div class="item-buy-prices-grid"><span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span></div><div class="item-trade-prices-grid"><span class="conditions">Pre-owned Mint</span><span class="conditions">Used Light Wear</span><span class="conditions">Used Medium Wear</span><span class="conditions">Used Heavy Wear</span><span class="conditions">Used Semi-functional</span></div>`)
      }

    }
  })

}

function handleCardClick(prices) {
  let i = 0;

  console.log(`${i}nth run has class card-rotate: prices now contains ${prices}`)

  $('.results-container-flex').on('click', '.card', function(e){
    i++
    e.stopPropagation()
    $(this).toggleClass('card-rotate')

    let clickedPrice = $(e.currentTarget).find('span.price').text()
    console.log(`${i}nth run: clickedPrice is ${clickedPrice}`)
    let id = this.id
    //this doesnt work bc im getting the index from the class name
    console.log(`${i}nth run: id is ${id}`)
    let index = parseInt(id.replace(/\D+/, ""))
    console.log(`${i}nth run: index is ${index}`)
    if ($(this).hasClass('card-rotate') === true) {
      console.log(`prices list before deletion ${prices}`)
      delete prices[index]
      console.log(`removing ${clickedPrice}: prices now contains ${prices}`)
    } else {
        prices.splice(index, 1, parseInt(clickedPrice))
        console.log(`adding ${clickedPrice} back to list: prices now contains ${prices}`)
    }

  })

  $('.calc-button').on('click', function(){
    calculate(prices)
  })

}

function SearchObject(url, id, term) {
  this.url = url
  this.id = id
  this.term = term
}

let searchUrls = [];

function getPrices() {
  toggleDisplay('.step-2')
  toggleDisplay('.step-3')

  const prices = []

  $('.price').each(function(){
    let price = $(this).text()
    prices.push(parseInt(price))
  })


  handleCardClick(prices)

}

let callScriptCounter = 0;

/*let makeCallScript = function(uri) {
  callScriptCounter++
  s = document.createElement('script');
  s.src = uri;
  document.body.appendChild(s);
}*/

let getDataCounter = 0;

/*function getData(uri) {
  console.log(`selectedNum in getdata is ${selectedNum}`)
  console.log(`processdatacalledtimes in getdata is ${processDataCalledTimes}`)

  getDataCounter++
  if (getDataCounter === 1) {
    makeCallScript(uri)
  } else {
      console.log(`running else`)
      setTimeout(() => {
        if (processDataCalledTimes === callScriptCounter) {
          makeCallScript(uri)
        } else {
            getData(uri)
        }
      }, 300)
  }

}*/



async function getData(searchObj) {

  let response = await fetchJsonp(searchObj.url)
  let data = await response.json()
  console.log(data)
  processData(data, searchObj.id)



  /*fetchJsonp(searchObj.url, {
    timeout: 6000,
  })
  .then(function(response) {
    console.log(response.json())
  }).then(function(json) {
      console.log('parsed json', json.findCompletedItemsResponse[0].searchResult[0].item)
      //processData(searchObj.id, json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })*/

  /*callScriptCounter++
  s = document.createElement('script');
  s.src = searchObj.url;
  document.body.appendChild(s);*/

  /*axios.get(searchObj.url).then(res => {
    console.log(`response: ${res.data}`)
    res.data = res.data.slice(16)
    let response = res.data.slice(0,  -1)
    processData(JSON.parse(response), searchObj.id)
  })*/
}


/*async function getData(searchObj) {

  console.log(`running getdata`)

  const response = await fetch(searchObj.url)

  const data = await response.json()

  console.log(`data: ${data}`)
  console.dir(`searchObj is ${searchObj}`)
  console.log(`searchObj url is ${searchObj.url}`)

  console.log(`response data is ${response}`)
  //processData(searchObj.id, data)

  /*fetch(searchObj.url).then(res => {
    console.log(`fetch res is ${res}`)

    processData(searchObj.id, res)
  })
}*/

function buildRequestUrl(item) {
    toggleDisplay('.step-2')
    toggleDisplay('.step-3')
    baseURL = "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&SERVICE-VERSION=1.7.0&SECURITY-APPNAME=RoryGarc-priceGen-PRD-55d8a3c47-c767674d&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=";
    endURL = "&itemFilter(0).name=Condition&itemFilter(0).value=3000&itemFilter(1).name=SoldItemsOnly&itemFilter(1).value=true&paginationInput.entriesPerPage=10&paginationInput.pageNumber=1";
    let requestUrl = baseURL.concat(item.split(' ').join('+'), endURL);
    console.log(`requestUrl: ${requestUrl}`)
    return requestUrl


    /*for (let i=0, j=0; i<gear.length; i++ ) {
      let requestUrl = baseURL.concat(gear[i].split(' ').join('+'), endURL);
      searchUrls.push(requestUrl)
      //getData(requestUrl)
    }*/

}

let test = "test"
test

const gear = []

function getSearchTerms(numTerms){
  $('.search-button').on('click', function(e){
    e.preventDefault()


    let i = 0;

    $('.search-box').each(function($inputObj){
      let item = $(this).val()
      let search = new SearchObject(buildRequestUrl(item), i, item)
      console.log(`i in getsearchterms each function: ${i}`)

      console.log(item)
      //search.url = buildRequestUrl(item)
      //search.id = index
      //search.term = item

      gear.push(item)
      console.log(`gear is ${gear}`)
      getData(search)
      i++
    })
    //buildRequestUrl(gear)

  })

}

function handleConditionClick() {
  $('.input-container-flex').on('click', 'li', function(e){
    e.stopPropagation()
    let condition = $(e.currentTarget).text()
    let conditionID = $(e.currentTarget).parent().attr('id')
  })

}

function createSearch(numTerms) {
  toggleDisplay('.step-1')
  toggleDisplay('.step-2')
  console.log(`numTerms is ${numTerms}`)
  let id = "id"
  for (let i=1; i<=numTerms; ++i) {
    $('.input-container-flex').prepend(`<div class="inner-input-flex"><input class="search-box" type="text" required placeholder="Enter equipment model name"><div>`)
    $('.results-container-flex').append(`<div class="searchResults"></div>`)
    console.log(`i is ${i}`)
  }
  handleConditionClick()
  getSearchTerms()
}

function toggleDisplay(className) {
  console.log(`toggelDisplay running`)
  if ($(className).attr('style') === 'display: none') {
    console.log(`detected display none`)
    $(className).removeAttr('style')
  } else {
    $(className).attr('style', 'display: none')
  }
}

function startQuote() {
  $('.num-opt').click(function(e){
    e.preventDefault()
    selectedNum = this.id;
    createSearch(selectedNum)
    console.log(`selectedNum is ${selectedNum}`)
  })
}

$(startQuote);
