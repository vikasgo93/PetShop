let availablePets:object[] =[];
let petRequests: object[] = [];

class PetAvailability {
    family:string
    name: string
    color:string
    age:string
    gender:string

    constructor(petFamily:string, petName:string, petColor:string, petAge:string, petGender:string){
        this.family = petFamily,
        this.name = petName,
        this.color = petColor,
        this.age = petAge,
        this.gender = petGender
    }

    createPet(){
        let pet = {
            petFamily:this.family,
            petName:this.name,
            petColor:this.color,
            petAge:this.age,
            petGender:this.gender
        }
        availablePets.push(pet);
    }

    checkAvailability(petFamily:string, Quantity:string){
        let count = 0;
        for(let i=0;i<5;i++){
            if(availablePets[i]['petFamily'].toLowerCase() === petFamily.toLowerCase()){
                count ++;
            }
        }
        if(count >= availablePets.length){
            return "available";
        } else {
            return "unavailable"
        }
    }
}

class PetRequest {

    family:string
    name:string
    color:string
    age:string
    gender:string

    constructor(petFamily:string, petName:string, petColor:string, petAge:string, petGender:string){
        this.family = petFamily,
        this.name = petName,
        this.color = petColor,
        this.age = petAge,
        this.gender = petGender    
    }

    createRequest(){
        let request = {
            petFamily : this.family,
            petName : this.name,
            petColor:this.color,
            petAge:this.age,
            petGender : this.gender
        }
        petRequests.push(request);
    }


}

/*let pet1 = new PetAvailability('Dog','Retriever','brown',"2",'male')
console.log(pet1);
console.log(pet1.createPet());

let pet2 = new PetAvailability('Dog','Pomerean','white',"1",'female');
console.log(pet2.createPet());
console.log(availablePets[0]['petFamily']);*/


let containerDiv = document.createElement("div");
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);

let addDiv = document.createElement("div");
addDiv.setAttribute("class","d-flex flex-column align-items-center");
containerDiv.appendChild(addDiv);

let rowOne = document.createElement("div");
rowOne.classList.add("row");
addDiv.appendChild(rowOne);

let addPetBtn = document.createElement("button");
addPetBtn.setAttribute("class","btn btn-info");
addPetBtn.innerHTML = "<h4>Add Pet</h4>"
rowOne.appendChild(addPetBtn);

let addPetForm = document.createElement("div");
addDiv.appendChild(addPetForm);


/*----------------------------------------------------*/
let rowTwo= document.createElement("div");
rowTwo.classList.add("row");
addDiv.appendChild(rowTwo);

let addRequest = document.createElement("button");
addRequest.setAttribute("class","btn btn-info");
addRequest.innerHTML = "<h4>Add Pet Request</h4>"
rowTwo.appendChild(addRequest);

let addRequestForm = document.createElement("div");
addDiv.appendChild(addRequestForm);


/*--------------------------------------------------*/

let rowThree = document.createElement("div");
rowThree.classList.add("row");
addDiv.appendChild(rowThree);

let checkAvailability = document.createElement("button");
checkAvailability.setAttribute("class","btn btn-info");
checkAvailability.innerHTML = "<h4>Check Availability</h4>"
rowThree.appendChild(checkAvailability);

let availabilityForm = document.createElement("div");
addDiv.appendChild(availabilityForm);

let rowFour = document.createElement("div");
rowFour.classList.add("row");
addDiv.appendChild(rowFour);

let getNumbers = document.createElement("button");
getNumbers.setAttribute("class","btn btn-info");
getNumbers.innerHTML = "<h4>Get Pet Numbers</h4>"
rowFour.appendChild(getNumbers);

let numberOutDiv = document.createElement("div");

/*let formOne = document.createElement("form")
let petFamily = document.createElement("div");
petFamily.classList.add('form-group');*/

let createInput = () =>{
    let inputBox = document.createElement("input")
    inputBox.classList.add("form-control","text-center");
    return inputBox;
}


/* ---------Availability Form------------*/
let inputFamily = createInput();
inputFamily.setAttribute("placeholder","Pet Family");
inputFamily.setAttribute("id","petFamily");

let inputName = createInput();
inputName.setAttribute("placeholder","Pet Type")
inputName.setAttribute("id","petName")

let inputColor = createInput();
inputColor.setAttribute("placeholder","Color")
inputColor.setAttribute("id","petColor");


let inputAge = createInput();
inputAge.setAttribute("placeholder","Age");
inputAge.setAttribute("id","petAge")

let inputGender = createInput();
inputGender.setAttribute("placeholder","Gender");
inputGender.setAttribute("id","petGender");

let submitBtn = document.createElement("button");
submitBtn.setAttribute("class","btn btn-info");
submitBtn.setAttribute("type","submit");
submitBtn.setAttribute("id","submitBtn");
submitBtn.innerHTML="Submit";

addPetBtn.addEventListener("click", () => {
    addPetForm.appendChild(inputFamily);
    addPetForm.appendChild(inputName);
    addPetForm.appendChild(inputColor);
    addPetForm.appendChild(inputAge);
    addPetForm.appendChild(inputGender);
    addPetForm.appendChild(submitBtn);
    addPetBtn.removeEventListener;
});

submitBtn.addEventListener("click", () => {
        let type = (<HTMLInputElement>document.getElementById('petFamily')).value;
        let name = (<HTMLInputElement>document.getElementById('petName')).value;
        let color = (<HTMLInputElement>document.getElementById('petColor')).value;
        let age = (<HTMLInputElement>document.getElementById('petAge')).value;
        let gender = (<HTMLInputElement>document.getElementById('petGender')).value;
        let newPet = new PetAvailability(type, name, color, age, gender);
        newPet.createPet();
        alert("Pet has been successfully added")
    })

/*---------AddRequestForm--------------------------------*/

let reqInputFamily = createInput();
reqInputFamily.setAttribute("placeholder","Pet Family");
reqInputFamily.setAttribute("id","petFamily");

let reqInputName = createInput();
reqInputName.setAttribute("placeholder","Pet Name");
reqInputName.setAttribute("id", "petName");

let reqInputColor = createInput();

reqInputColor.setAttribute("placeholder","Color")
reqInputColor.setAttribute("id","petColor")


let reqInputAge = createInput();
reqInputAge.setAttribute("placeholder","Age");
reqInputAge.setAttribute("id","petAge");


let reqInputGender = createInput();
reqInputGender.setAttribute("placeholder","Gender");
reqInputGender.setAttribute("id","petGender");

/*let reqQuantity = createInput();
reqQuantity.setAttribute("placeholder","Quantity")*/

let reqSubmitBtn = document.createElement("button");
reqSubmitBtn.setAttribute("class","btn btn-info");
reqSubmitBtn.setAttribute("type","submit");
reqSubmitBtn.setAttribute("id","submitBtn");
reqSubmitBtn.innerHTML="Submit";

addRequest.addEventListener("click", () => {
    addPetForm.innerText = '';
    addRequestForm.appendChild(reqInputFamily);
    addRequestForm.appendChild(reqInputName);
    addRequestForm.appendChild(reqInputColor);
    addRequestForm.appendChild(reqInputAge);
    addRequestForm.appendChild(reqInputGender);
    //addRequestForm.appendChild(reqQuantity);
    addRequestForm.appendChild(reqSubmitBtn);
    addRequest.removeEventListener;

});
reqSubmitBtn.addEventListener("click", () => {
    let type = (<HTMLInputElement>document.getElementById('petFamily')).value;
    let name = (<HTMLInputElement>document.getElementById('petName')).value;
    let color = (<HTMLInputElement>document.getElementById('petColor')).value;
    let age = (<HTMLInputElement>document.getElementById('petAge')).value;
    let gender = (<HTMLInputElement>document.getElementById('petGender')).value;
    let newPet = new PetRequest(type, name, color, age, gender);
    newPet.createRequest();
    alert("your Request has been submitted");
})

/*---------------Availability----------------------*/

let availFamily = createInput();
availFamily.setAttribute("placeholder","Pet Family");
availFamily.setAttribute("id","petFamily");


let availQuantity = createInput();
availQuantity.setAttribute("placeholder","Quantity")
availQuantity.setAttribute("id","petQuantity")

let availBtn = document.createElement("button");
availBtn.setAttribute("class","btn btn-info");
availBtn.setAttribute("type","submit");
availBtn.setAttribute("id","submitBtn");
availBtn.innerHTML="Submit";

checkAvailability.addEventListener("click", () => {
    addPetForm.innerHTML = '';
    addRequestForm.innerHTML = '';
    availabilityForm.appendChild(availFamily);
    availabilityForm.appendChild(availQuantity);
    availabilityForm.appendChild(availBtn);
})

availBtn.addEventListener("click", () => {
    let tempArray:string[] = [];
    for(let i=0;i<availablePets.length;i++){
        tempArray.push(availablePets[i]['petFamily']);
        };
    let petCount = _.countBy(tempArray);
    let family = (<HTMLInputElement>document.getElementById('petFamily')).value;
    let petQuantity = (<HTMLInputElement>document.getElementById('petQuantity')).value;
    if(petCount[family]){
        if(petCount[family] == parseInt(petQuantity)){
            alert("Pets Available");
        } else {
            alert("Pets Unavailable")
        }
    }
})

/*--------GetNumbers------------*/
getNumbers.addEventListener("click", () => {
    addPetForm.innerHTML = '';
    addRequestForm.innerHTML = '';
    availabilityForm.innerHTML = '';
    let tempArray:string[] = [];
    for(let i=0;i<availablePets.length;i++){
        tempArray.push(availablePets[i]['petFamily']);
        };
    let petCount = _.countBy(tempArray);
    numberOutDiv.classList.add("alert","alert-success")
    let petNumber = "";
    for(let i=0;i<Object.keys(petCount).length;i++){
        //petNumber += Object.keys(petCount)[i] + ":" + Object.values(petCount)[i];
        petNumber += Object.keys(petCount)[i] + ":" + petCount[Object.keys(petCount)[i]];
    }
    numberOutDiv.innerHTML= "<h3> These are the Pets available and the Quantity" + petNumber + "</h3>";
    getNumbers.appendChild(numberOutDiv)
    
})