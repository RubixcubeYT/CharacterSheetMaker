let spellPoints = 10;



function handleSubmit(e){
    e.preventDefault();
    //find and read the name input
    let userName = document.querySelector("#name-input").value;
    //find and fill the name output
    document.querySelector("#name-output").innerHTML = userName;
    //show the output html
    document.querySelector("#sheet").classList.remove("hide");
    console.log(userName);
    let charClass = document.querySelector("#classSelector").value;

    //Find the element to reveal and remove the "hide" class
    document.querySelector("#sheet").classList.remove("hide");
}


//this is f is called when the class selection box is changed
function selectionChanged(){
    console.log("selection changed");
    //this gets the option that was selected
    let selectedClass = document.querySelector("#classSelector").value;
    if(selectedClass == "mage"){
        //show whatever element you like
        document.querySelector("#ChooseSpell").classList.remove("hide");
    }
}