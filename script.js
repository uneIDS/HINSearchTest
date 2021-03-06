//Permutations array -- add if more get added using same set up
const HCAPermutations = [
  {
    choiceOne: "Health Informatics",
    choiceTwo: "Data Analytics",
    remaining: "HCA 630, HCA 720, HCA 760, HIN 700, GPH 702, HCA 780"
  },
  {
    choiceOne: "Health Informatics",
    choiceTwo: "Healthcare Management",
    remaining: "HCA 630, HCA 760, HCA 780, An Elective"
  },
  {
    choiceOne: "Health Informatics",
    choiceTwo: "Policy and Law",
    remaining: "HCA 720, HCA 760, HIN 700, HCA 780, An Elective"
  },
  {
    choiceOne: "Health Informatics",
    choiceTwo: "Emergency Management",
    remaining: "HCA 720, HCA 760, HIN 700, GPH 702, HCA 780"
  },
  {
    choiceOne: "Health Informatics",
    choiceTwo: "Healthcare Data Quality",
    remaining: "Cannot be Stacked"
  },
  {
    choiceOne: "Data Analytics",
    choiceTwo: "Healthcare Management",
    remaining: "HIN 605, HCA 610, HCA 630, HCA 760, GPH 702, HCA 780"
  },
  {
    choiceOne: "Data Analytics",
    choiceTwo: "Policy and Law",
    remaining: "HIN 605, HCA 610, HCA 720, HCA 760, HIN 700, HCA 780"
  },
  {
    choiceOne: "Data Analytics",
    choiceTwo: "Emergency Management",
    remaining:
      "HCA 601, HIN 605, HCA 610, HCA 720, HCA 760, HIN 700, GPH 702, HCA 780"
  },
  {
    choiceOne: "Data Analytics",
    choiceTwo: "Healthcare Data Quality",
    remaining: "HCA 601, HCA 630, HCA 720, HIN 700, GPH 702, HCA 780"
  },
  {
    choiceOne: "Healthcare Data Quality",
    choiceTwo: "Healthcare Management",
    remaining: "HCA 630, GPH 702, HCA 780, An Elective"
  },
  {
    choiceOne: "Healthcare Data Quality",
    choiceTwo: "Policy and Law",
    remaining: "HCA 720, HIN 700, HCA 780, An Elective"
  },
  {
    choiceOne: "Healthcare Data Quality",
    choiceTwo: "Emergency Management",
    remaining: "HCA 601, HCA 720, HIN 700, GPH 702, HCA 780"
  },
  {
    choiceOne: "Emergency Management",
    choiceTwo: "Policy and Law",
    remaining: "HIN 605, HCA 610, HCA 720, HCA 760, HIN 700, HCA 780"
  },
  {
    choiceOne: "Emergency Management",
    choiceTwo: "Healthcare Management",
    remaining: "HIN 605, HCA 610, HCA 760, HIN 700, GPH 702, HCA 780"
  },
  {
    choiceOne: "Healthcare Management",
    choiceTwo: "Policy and Law",
    remaining: "HIN 605, HCA 610, HCA 760, HCA 780, An Elective"
  }
];
const HINPermutations = [
  {
    choiceOne: "Health Informatics",
    choiceTwo: "Data Analytics",
    remaining: "HIN 625, HIN 700, HIN 785"
  },
  {
    choiceOne: "Health Informatics",
    choiceTwo: "Healthcare Management",
    remaining: "HIN 625, HIN 620, HIN 715, HIN 785"
  },
  {
    choiceOne: "Health Informatics",
    choiceTwo: "Policy and Law",
    remaining: "HIN 620, HIN 700, HIN 715, HIN 785"
  },
  {
    choiceOne: "Health Informatics",
    choiceTwo: "Emergency Management",
    remaining: "HIN 625, HIN 620, HIN 700, HIN 715, HIN 785"
  },
  {
    choiceOne: "Health Informatics",
    choiceTwo: "Healthcare Data Quality",
    remaining: "Cannot be Stacked"
  },
  {
    choiceOne: "Data Analytics",
    choiceTwo: "Healthcare Management",
    remaining: "HIN 605, HCA 610, HIN 625, HIN 615, HIN 785"
  },
  {
    choiceOne: "Data Analytics",
    choiceTwo: "Policy and Law",
    remaining: "HIN 605, HCA 610, HIN 615, HIN 700, HIN 785"
  },
  {
    choiceOne: "Data Analytics",
    choiceTwo: "Emergency Management",
    remaining: "HCA 601, HIN 605, HCA 610, HIN 625, HIN 615, HIN 700, HIN 785"
  },
  {
    choiceOne: "Data Analytics",
    choiceTwo: "Healthcare Data Quality",
    remaining: "HCA 601, HIN 625, HIN 615, HIN 700, HIN 785"
  },
  {
    choiceOne: "Healthcare Data Quality",
    choiceTwo: "Healthcare Management",
    remaining: "HIN 625, HIN 620, HIN 615, HIN 715, HIN 785"
  },
  {
    choiceOne: "Healthcare Data Quality",
    choiceTwo: "Policy and Law",
    remaining: "HIN 620, HIN 615, HIN 700, HIN 715, HIN 785"
  },
  {
    choiceOne: "Healthcare Data Quality",
    choiceTwo: "Emergency Management",
    remaining: "HCA 601, HIN 625, HIN 620, HIN 615, HIN 700, HIN 715, HIN 785"
  },
  {
    choiceOne: "Emergency Management",
    choiceTwo: "Policy and Law",
    remaining: "HIN 605, HCA 610, HIN 620, HIN 615, HIN 700, HIN 715, HIN 785"
  },
  {
    choiceOne: "Emergency Management",
    choiceTwo: "Healthcare Management",
    remaining: "HIN 605, HCA 610, HIN 625, HIN 620, HIN 615, HIN 715, HIN 785"
  },
  {
    choiceOne: "Healthcare Management",
    choiceTwo: "Policy and Law",
    remaining: "HIN 605, HCA 610, HIN 620, HIN 615, HIN 715, HIN 785"
  }
];

//set array for the choices made and define global variable for where remaining courses will appear as well as the buttons styles
var choices = [];
var options = document.getElementById("courseOptions");

//buttons
const policyButtonTop = document.querySelector(".policy-button-top");
const policyButtonBottom = document.querySelector(".policy-button-bottom");
const emergButtonTop = document.querySelector(".emerg-button-top");
const emergButtonBottom = document.querySelector(".emerg-button-bottom");
const mgmtButtonTop = document.querySelector(".mgmt-button-top");
const mgmtButtonBottom = document.querySelector(".mgmt-button-bottom");
const dataEqualButtonTop = document.querySelector(".dataqual-button-top");
const dataEqualButtonBottom = document.querySelector(".dataqual-button-bottom");
const analysisButtonTop = document.querySelector(".analysis-button-top");
const analysisButtonBottom = document.querySelector(".analysis-button-bottom");
const informButtonTop = document.querySelector(".inform-button-top");
const informButtonBottom = document.querySelector(".inform-button-bottom");

//establish event listeners for each of the buttons, have them push to choices array up to 2 times and turn grey when chosen
document.getElementById("healthPolicyLawButton").onclick = function () {
  console.log("Policy Law was selected");
  if (choices.length < 2) {
    choices.push("Policy and Law");
    policyButtonTop.style.fill = "grey";
    policyButtonBottom.style.fill = "grey";
  } else {
    alert("You can only select a maximum of 2 choices");
  }
  console.log(choices);
};

document.getElementById("emergencyManagementButton").onclick = function () {
  console.log("Emergency Management was selected");
  if (choices.length < 2) {
    choices.push("Emergency Management");
    emergButtonTop.style.fill = "grey";
    emergButtonBottom.style.fill = "grey";
  } else {
    alert("You can only select a maximum of 2 choices");
  }
  console.log(choices);
};

document.getElementById("healthcareManagementButton").onclick = function () {
  console.log("Healthcare Management was selected");
  if (choices.length < 2) {
    choices.push("Healthcare Management");
    mgmtButtonTop.style.fill = "grey";
    mgmtButtonBottom.style.fill = "grey";
  } else {
    alert("You can only select a maximum of 2 choices");
  }
  console.log(choices);
};

document.getElementById("healthcareDataQualityButton").onclick = function () {
  console.log("Healthcare Data Quality was selected");
  if (choices.length < 2) {
    choices.push("Healthcare Data Quality");
    dataEqualButtonTop.style.fill = "grey";
    dataEqualButtonBottom.style.fill = "grey";
  } else {
    alert("you can only select a maximum of 2 choices");
  }
  console.log(choices);
};

document.getElementById("dataAnalyticsButton").onclick = function () {
  console.log("Data Analytics was selected");
  if (choices.length < 2) {
    choices.push("Data Analytics");
    analysisButtonTop.style.fill = "grey";
    analysisButtonBottom.style.fill = "grey";
  } else {
    alert("you can only select a maximum of 2 choices");
  }
  console.log(choices);
};

document.getElementById("healthInformaticsButton").onclick = function () {
  console.log("Health Informatics was selected");
  if (choices.length < 2) {
    choices.push("Health Informatics");
    informButtonTop.style.fill = "grey";
    informButtonBottom.style.fill = "grey";
  } else {
    alert("you can only select a maximum of 2 choices");
  }
  console.log(choices);
};

//function that sorts through the permutations to match with choices and inputs remaining in the options region
function selectHCACourses() {
  for (i = 0; i < HCAPermutations.length; i++) {
    if (
      choices.includes(HCAPermutations[i].choiceOne) &&
      choices.includes(HCAPermutations[i].choiceTwo)
    ) {
      options.innerText = HCAPermutations[i].remaining;
    }
  }
}

function selectHINCourses() {
  for (i = 0; i < HINPermutations.length; i++) {
    if (
      choices.includes(HINPermutations[i].choiceOne) &&
      choices.includes(HINPermutations[i].choiceTwo)
    ) {
      options.innerText = HINPermutations[i].remaining;
    }
  }
}

//function resetting choices and all colors
function resetChoices() {
  choices = [];
  options.innerText = "";
  policyButtonTop.style.fill = "#08a3dc";
  policyButtonBottom.style.fill = "#286181";
  emergButtonTop.style.fill = "#dde4e6";
  emergButtonBottom.style.fill = "#909496";
  mgmtButtonTop.style.fill = "#e70f66";
  mgmtButtonBottom.style.fill = "#bd0952";
  dataEqualButtonTop.style.fill = "#a894ed";
  dataEqualButtonBottom.style.fill = "#5449cd";
  analysisButtonTop.style.fill = "#04a777";
  analysisButtonBottom.style.fill = "#02825c";
  informButtonTop.style.fill = "#fb8b24";
  informButtonBottom.style.fill = "#c85103";
}
