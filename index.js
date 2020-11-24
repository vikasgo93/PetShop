var availablePets = [];
var petRequests = [];
var PetAvailability = /** @class */ (function () {
    function PetAvailability(petFamily, petName, petColor, petAge, petGender) {
        this.family = petFamily,
            this.name = petName,
            this.color = petColor,
            this.age = petAge,
            this.gender = petGender;
    }
    PetAvailability.prototype.createPet = function () {
        var pet = {
            petFamily: this.family,
            petName: this.name,
            petColor: this.color,
            petAge: this.age,
            petGender: this.gender
        };
        availablePets.push(pet);
    };
    PetAvailability.prototype.checkAvailability = function (petFamily, Quantity) {
        var count = 0;
        for (var i = 0; i < 5; i++) {
            if (availablePets[i]['petFamily'].toLowerCase() === petFamily.toLowerCase()) {
                count++;
            }
        }
        if (count >= availablePets.length) {
            return "available";
        }
        else {
            return "unavailable";
        }
    };
    return PetAvailability;
}());
var PetRequest = /** @class */ (function () {
    function PetRequest(petFamily, petName, petColor, petAge, petGender) {
        this.family = petFamily,
            this.name = petName,
            this.color = petColor,
            this.age = petAge,
            this.gender = petGender;
    }
    PetRequest.prototype.createRequest = function () {
        var request = {
            petFamily: this.family,
            petName: this.name,
            petColor: this.color,
            petAge: this.age,
            petGender: this.gender
        };
        petRequests.push(request);
    };
    return PetRequest;
}());
/*let pet1 = new PetAvailability('Dog','Retriever','brown',"2",'male')
console.log(pet1);
console.log(pet1.createPet());

let pet2 = new PetAvailability('Dog','Pomerean','white',"1",'female');
console.log(pet2.createPet());
console.log(availablePets[0]['petFamily']);*/
var containerDiv = document.createElement("div");
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);
var addDiv = document.createElement("div");
addDiv.setAttribute("class", "d-flex flex-column align-items-center");
containerDiv.appendChild(addDiv);
var rowOne = document.createElement("div");
rowOne.classList.add("row");
addDiv.appendChild(rowOne);
var addPetBtn = document.createElement("button");
addPetBtn.setAttribute("class", "btn btn-info");
addPetBtn.innerHTML = "<h4>Add Pet</h4>";
rowOne.appendChild(addPetBtn);
var addPetForm = document.createElement("div");
addDiv.appendChild(addPetForm);
/*----------------------------------------------------*/
var rowTwo = document.createElement("div");
rowTwo.classList.add("row");
addDiv.appendChild(rowTwo);
var addRequest = document.createElement("button");
addRequest.setAttribute("class", "btn btn-info");
addRequest.innerHTML = "<h4>Add Pet Request</h4>";
rowTwo.appendChild(addRequest);
var addRequestForm = document.createElement("div");
addDiv.appendChild(addRequestForm);
/*--------------------------------------------------*/
var rowThree = document.createElement("div");
rowThree.classList.add("row");
addDiv.appendChild(rowThree);
var checkAvailability = document.createElement("button");
checkAvailability.setAttribute("class", "btn btn-info");
checkAvailability.innerHTML = "<h4>Check Availability</h4>";
rowThree.appendChild(checkAvailability);
var availabilityForm = document.createElement("div");
addDiv.appendChild(availabilityForm);
var rowFour = document.createElement("div");
rowFour.classList.add("row");
addDiv.appendChild(rowFour);
var getNumbers = document.createElement("button");
getNumbers.setAttribute("class", "btn btn-info");
getNumbers.innerHTML = "<h4>Get Pet Numbers</h4>";
rowFour.appendChild(getNumbers);
var numberOutDiv = document.createElement("div");
/*let formOne = document.createElement("form")
let petFamily = document.createElement("div");
petFamily.classList.add('form-group');*/
var createInput = function () {
    var inputBox = document.createElement("input");
    inputBox.classList.add("form-control", "text-center");
    return inputBox;
};
/* ---------Availability Form------------*/
var inputFamily = createInput();
inputFamily.setAttribute("placeholder", "Pet Family");
inputFamily.setAttribute("id", "petFamily");
var inputName = createInput();
inputName.setAttribute("placeholder", "Pet Type");
inputName.setAttribute("id", "petName");
var inputColor = createInput();
inputColor.setAttribute("placeholder", "Color");
inputColor.setAttribute("id", "petColor");
var inputAge = createInput();
inputAge.setAttribute("placeholder", "Age");
inputAge.setAttribute("id", "petAge");
var inputGender = createInput();
inputGender.setAttribute("placeholder", "Gender");
inputGender.setAttribute("id", "petGender");
var submitBtn = document.createElement("button");
submitBtn.setAttribute("class", "btn btn-info");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("id", "submitBtn");
submitBtn.innerHTML = "Submit";
addPetBtn.addEventListener("click", function () {
    addPetForm.appendChild(inputFamily);
    addPetForm.appendChild(inputName);
    addPetForm.appendChild(inputColor);
    addPetForm.appendChild(inputAge);
    addPetForm.appendChild(inputGender);
    addPetForm.appendChild(submitBtn);
    addPetBtn.removeEventListener;
});
submitBtn.addEventListener("click", function () {
    var type = document.getElementById('petFamily').value;
    var name = document.getElementById('petName').value;
    var color = document.getElementById('petColor').value;
    var age = document.getElementById('petAge').value;
    var gender = document.getElementById('petGender').value;
    var newPet = new PetAvailability(type, name, color, age, gender);
    newPet.createPet();
    alert("Pet has been successfully added");
});
/*---------AddRequestForm--------------------------------*/
var reqInputFamily = createInput();
reqInputFamily.setAttribute("placeholder", "Pet Family");
reqInputFamily.setAttribute("id", "petFamily");
var reqInputName = createInput();
reqInputName.setAttribute("placeholder", "Pet Name");
reqInputName.setAttribute("id", "petName");
var reqInputColor = createInput();
reqInputColor.setAttribute("placeholder", "Color");
reqInputColor.setAttribute("id", "petColor");
var reqInputAge = createInput();
reqInputAge.setAttribute("placeholder", "Age");
reqInputAge.setAttribute("id", "petAge");
var reqInputGender = createInput();
reqInputGender.setAttribute("placeholder", "Gender");
reqInputGender.setAttribute("id", "petGender");
/*let reqQuantity = createInput();
reqQuantity.setAttribute("placeholder","Quantity")*/
var reqSubmitBtn = document.createElement("button");
reqSubmitBtn.setAttribute("class", "btn btn-info");
reqSubmitBtn.setAttribute("type", "submit");
reqSubmitBtn.setAttribute("id", "submitBtn");
reqSubmitBtn.innerHTML = "Submit";
addRequest.addEventListener("click", function () {
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
reqSubmitBtn.addEventListener("click", function () {
    var type = document.getElementById('petFamily').value;
    var name = document.getElementById('petName').value;
    var color = document.getElementById('petColor').value;
    var age = document.getElementById('petAge').value;
    var gender = document.getElementById('petGender').value;
    var newPet = new PetRequest(type, name, color, age, gender);
    newPet.createRequest();
    alert("your Request has been submitted");
});
/*---------------Availability----------------------*/
var availFamily = createInput();
availFamily.setAttribute("placeholder", "Pet Family");
availFamily.setAttribute("id", "petFamily");
var availQuantity = createInput();
availQuantity.setAttribute("placeholder", "Quantity");
availQuantity.setAttribute("id", "petQuantity");
var availBtn = document.createElement("button");
availBtn.setAttribute("class", "btn btn-info");
availBtn.setAttribute("type", "submit");
availBtn.setAttribute("id", "submitBtn");
availBtn.innerHTML = "Submit";
checkAvailability.addEventListener("click", function () {
    addPetForm.innerHTML = '';
    addRequestForm.innerHTML = '';
    availabilityForm.appendChild(availFamily);
    availabilityForm.appendChild(availQuantity);
    availabilityForm.appendChild(availBtn);
});
availBtn.addEventListener("click", function () {
    var tempArray = [];
    for (var i = 0; i < availablePets.length; i++) {
        tempArray.push(availablePets[i]['petFamily']);
    }
    ;
    var petCount = _.countBy(tempArray);
    var family = document.getElementById('petFamily').value;
    var petQuantity = document.getElementById('petQuantity').value;
    if (petCount[family]) {
        if (petCount[family] == parseInt(petQuantity)) {
            alert("Pets Available");
        }
        else {
            alert("Pets Unavailable");
        }
    }
});
/*--------GetNumbers------------*/
getNumbers.addEventListener("click", function () {
    addPetForm.innerHTML = '';
    addRequestForm.innerHTML = '';
    availabilityForm.innerHTML = '';
    var tempArray = [];
    for (var i = 0; i < availablePets.length; i++) {
        tempArray.push(availablePets[i]['petFamily']);
    }
    ;
    var petCount = _.countBy(tempArray);
    numberOutDiv.classList.add("alert", "alert-success");
    var petNumber = "";
    for (var i = 0; i < Object.keys(petCount).length; i++) {
        //petNumber += Object.keys(petCount)[i] + ":" + Object.values(petCount)[i];
        petNumber += Object.keys(petCount)[i] + ":" + petCount[Object.keys(petCount)[i]];
    }
    numberOutDiv.innerHTML = "<h3> These are the Pets available and the Quantity" + petNumber + "</h3>";
    getNumbers.appendChild(numberOutDiv);
});
