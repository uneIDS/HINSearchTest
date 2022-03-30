const HCAPermutations = [
  {
    choiceOne: "Health Informatics", 
    choiceTwo:"Data Analytics",
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
    remaining: "HCA 601, HIN 605, HCA 610, HCA 720, HCA 760, HIN 700, GPH 702, HCA 780"
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
    choiceTwo:"Data Analytics",
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
var choices = [];
var options = document.getElementById("courseOptions");

document.getElementById('healthPolicyLawButton').onclick = function() {
  console.log("Policy Law was selected");
  if (choices.length < 2) {choices.push("Policy and Law");}
  else {alert('you can only select a maximum of 2 choices');}
  console.log(choices);
};

document.getElementById('emergencyManagementButton').onclick = function() {
  console.log("Emergency Management was selected");
  if (choices.length < 2) {choices.push("Emergency Management");} else { alert('you can only select a maximum of 2 choices');}
  console.log(choices);
};
document.getElementById('healthcareManagementButton').onclick = function() {
  console.log("Healthcare Management was selected");
  if (choices.length < 2) {choices.push("Healthcare Management");} else { alert('you can only select a maximum of 2 choices'); }
  console.log(choices);
};

document.getElementById('healthcareDataQualityButton').onclick = function() {
  console.log("Healthcare Data Quality was selected");
  if (choices.length < 2) {choices.push("Healthcare Data Quality");} else {alert('you can only select a maximum of 2 choices');}
  console.log(choices);
};

document.getElementById('dataAnalyticsButton').onclick = function() {
  console.log("Data Analytics was selected");
  if (choices.length < 2) {choices.push("Data Analytics");} else {alert('you can only select a maximum of 2 choices');}
  console.log(choices);
};

document.getElementById('healthInformaticsButton').onclick = function() {
  console.log("Health Informatics was selected");
  if (choices.length < 2) {choices.push("Health Informatics");} else {alert('you can only select a maximum of 2 choices');}
  console.log(choices);
};

function selectHCACourses() {
  for (i=0; i < HCAPermutations.length; i++) {
    if (choices.includes(HCAPermutations[i].choiceOne) && choices.includes(HCAPermutations[i].choiceTwo)) {
      options.innerText = HCAPermutations[i].remaining;
    }
  };
}

function selectHINCourses() {
  for (i=0; i < HINPermutations.length; i++) {
    if (choices.includes(HINPermutations[i].choiceOne) && choices.includes(HINPermutations[i].choiceTwo)) {
      options.innerText = HINPermutations[i].remaining;
    }
  };
}

function resetChoices() {
  choices = [];
  options.innerText = "";
}