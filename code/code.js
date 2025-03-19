let totalPoints = 10; 

function updatePoints() {
    var skill1 = parseInt(document.getElementById('pointsSkill1').value);
    var skill2 = parseInt(document.getElementById('pointsSkill2').value);
    var skill3 = parseInt(document.getElementById('pointsSkill3').value);

    document.getElementById('pointsSkill1Value').textContent = skill1;
    document.getElementById('pointsSkill2Value').textContent = skill2;
    document.getElementById('pointsSkill3Value').textContent = skill3;

    var totalUsed = skill1 + skill2 + skill3;

    if (totalUsed > totalPoints) {
        alert("You cannot allocate more than 10 points in total!");
        return;
    }

    var remainingPoints = totalPoints - totalUsed;
    document.getElementById('remainingPointsOutput').textContent = remainingPoints;
}

function handleSubmit(e) {
    e.preventDefault();

    let userName = document.querySelector("#name-input").value;
    let userAge = document.querySelector("#age-input").value;
    let charClass = document.querySelector("#classSelector").value;
    let selectedSpell = "No spell selected"; 

    if (charClass === 'mage') {
        let spellInput = document.querySelector('input[name="spells"]:checked');
        if (spellInput) {
            selectedSpell = spellInput.nextElementSibling.textContent; 
        }
    }

    let disableEnemies = document.querySelector("#disable-enemies").checked ? "Yes" : "No";

    let strength = document.getElementById('pointsSkill1').value;
    let stamina = document.getElementById('pointsSkill2').value;
    let mana = document.getElementById('pointsSkill3').value;

    document.querySelector("#name-output").textContent = userName;
    document.querySelector("#age-output").textContent = userAge;
    document.querySelector("#class-output").textContent = charClass;
    document.querySelector("#spell-output").textContent = selectedSpell; 

    document.querySelector("#disable-enemies-output").textContent = disableEnemies;
    document.querySelector("#pointsSkill1Output").textContent = strength;
    document.querySelector("#pointsSkill2Output").textContent = stamina;
    document.querySelector("#pointsSkill3Output").textContent = mana;

    document.querySelector("#characterForm").classList.add("hide");
    document.querySelector("#outputPage").classList.remove("hide");
}

function selectionChanged() {
    let selectedClass = document.querySelector("#classSelector").value;
    let spellSection = document.querySelector("#ChooseSpell");

    if (selectedClass === "mage") {
        spellSection.classList.remove("hide");
    } else {
        spellSection.classList.add("hide");
    }
}