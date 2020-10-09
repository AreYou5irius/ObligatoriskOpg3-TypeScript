//Select er dropdown menuen
let select: HTMLSelectElement =  (document.getElementById("chooseCase")) as HTMLSelectElement;

//input er det man skriver i tekst boksen
let input: HTMLInputElement = (document.getElementById("wordInput")) as HTMLInputElement;


//wordOutput er resultatet af ændringen i teksten
let wordOutput: HTMLParagraphElement = (document.getElementById("output")) as HTMLDivElement 

//eventet der sker når man trykker på knappen(button1)
document.getElementById("button1").addEventListener("click", caseChange);

//funktionen der sker ved at trykke på knappen(button1)
function caseChange()  {
//her sætter vi det valgte fra dropdown til at være en string
    let option: string = select.options[select.selectedIndex].value;

        if(option == "Upper Case"){
            wordOutput.innerHTML = input.value.toUpperCase();
        }else if(option== "Lower Case"){
            wordOutput.innerHTML = input.value.toLowerCase();  
        }

    }
