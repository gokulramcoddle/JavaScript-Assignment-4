// Q1)Create a div with a background color red, create buttons
// a)to hide the div
// b)to change the background color of the div
// c)to show your basic details on the div, the details should hide/show, on the click.

function hide(){
    document.getElementById("Q1").style.display="none";
}
function change() {
    document.getElementById("Q1").style.display="block";
    document.getElementById("Q1").style.backgroundColor="blue";
}
function showhide(){
    var sh=document.getElementById("para");
    if(sh.style.display=="none"){
       sh.style.display="block";
    }
    else{
        sh.style.display="none";
    }
}

// Q2)Create a select box with numbers 1 to 10,  when selecting 9, you should change the selection to 10 and show a message that "9 is fully occupied please select another number", when selecting any number other than 9 it should show a message as "you selected 'particular number' " in a div, on hovering the div it should change the background color of the div into a highlighting shade, while the mouse pointer leaves the message area the background color should go back to as before (don't use CSS to attain the hovering functionality)

var messagebox=document.getElementById("message-box");
function listselect(){
    var listopt=document.getElementById("list");
    var selectedVal=listopt.value;
    if(selectedVal=='9'){
        listopt.value='10'
        messagebox.innerHTML="9 is fully occupied, please select any other number";
    }
    else{
        messagebox.innerHTML="you selected: "+selectedVal;
    }
}

   messagebox.addEventListener("mouseenter",function(){
    messagebox.style.backgroundColor=" rgb(216, 240, 202)";
   });
   messagebox.addEventListener("mouseleave",function(){
    messagebox.style.backgroundColor="rgb(201, 201, 200)";
   })

// Q3)Consider an array with names of 10 programming languages, and make 10 buttons by iterating this array, when clicking on each button the name of the programming language should be shown in a corresponding div. 

var languages = [
    "JavaScript", "Python", "Java", "C++", "C#", 
    "Ruby", "Swift", "Go", "Kotlin", "PHP"
];
var container=document.getElementById("Q3")
languages.forEach((lang,idx)=>{
    var button=document.createElement("button");
    button.innerText=lang;
    button.onclick=function(){
        document.getElementById("output-"+idx).innerText=lang;
    }
    var divbox=document.createElement("div");
    divbox.id="output-"+idx;
    divbox.innerText="click the above button!"
    divbox.className="output-con";
    container.appendChild(button);
    container.appendChild(divbox);
});

// Q4)Make a form with fields name, phone number, place, company name, pin code
// a) if any of the field is empty on submitting it should show corresponding error messages on below of all the required fields.
// b) pin code and mobile number fields should not be submitted with non-integer values, if so, then show an error msg stating only numbers are allowed.
// c) Minimum length of phone number should be 10, otherwise show corresponding error msg below the mobile no. field. 
// d) On submit of the form, store the details in the local storage and clear the form. (it should stay on the same page don't refresh the page).
// e) Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise the button will be disabled.
// Note: The page shouldn't refresh on submitting the form in any of the questions and show error messages below the appropriate fields only.

document.getElementById("form").addEventListener("submit", function(event) {
event.preventDefault();
var username=document.getElementById("username").value.trim();
var phone=document.getElementById("phone").value.trim();
var place=document.getElementById("place").value.trim();
var company=document.getElementById("company").value.trim();
var pincode=document.getElementById("pincode").value.trim();

var usernamebox=document.getElementById("username-con");
var phonebox=document.getElementById("phone-con");
var placebox=document.getElementById("place-con");
var companybox=document.getElementById("company-con");
var pincodebox=document.getElementById("pincode-con");

usernamebox.innerText="";
phonebox.innerText="";
placebox.innerText="";
companybox.innerText="";
pincodebox.innerText="";

var valid=true;

if(username==""){
 usernamebox.innerText="Please enter name!!";
 valid=false;
}
if(phone==""){
    phonebox.innerText="Please enter phone number!!";
    valid=false;
}
else if(isNaN(phone)){
    phonebox.innerText="Only number is allowed!!";
    valid=false;
}
else if(phone.length<10){
    phonebox.innerText="Should be minimum 10 number!!";
    valid=false;
}
if(place==""){
    placebox.innerText="Please enter place name!!";
    valid=false;
}
if(company==""){
    companybox.innerText="Please enter company name!!";
    valid=false;
}
if(pincode==""){
    pincodebox.innerText="Please enter pincode!!";
    valid=false;
}
else if(isNaN(pincode)){
    pincodebox.innerText="Please enter numbers!!";
    valid=false;
}
if(valid){
    var data={username,phone,place,company,pincode};
    localStorage.setItem("data",JSON.stringify(data));
    document.getElementById("form").reset();
    document.getElementById("prepop").disabled=false;
    alert("Form submitted successfully");   
}
});
function prepopulatebtn(){
    var storedData=localStorage.getItem("data");
    if(storedData){
        var collectedData=JSON.parse(storedData);
        document.getElementById("username").value=collectedData.username;
        document.getElementById("phone").value=collectedData.phone;
        document.getElementById("place").value=collectedData.place;
        document.getElementById("company").value=collectedData.company;
        document.getElementById("pincode").value=collectedData.pincode;
    }
}
    if (localStorage.getItem("data")) {
        document.getElementById("prepop").disabled = false;
    }

// Q5)Create a form with a text field which when submitted, will change the tab title to whatever is entered, limit the field to 50 characters, otherwise show error message, stay on the same page when submitted(it shouldn't refresh).

document.getElementById("titleform").addEventListener("submit",function(event){
    event.preventDefault();
    var inputtext=document.getElementById("titleinput").value.trim();
    if(inputtext==""){
        document.getElementById("error").innerText="Title cannot be empty";
    }
    else if(inputtext.length>50){
        document.getElementById("error").innerText="Title canot exceed 50 chatracters";
    }
    else{
        document.title=inputtext;
        alert("Title changed successfully");
        document.getElementById("titleform").reset();
    }
});

// Q6)When control+enter key is pressed show an alert message.

document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.key=="Enter"){
          alert("Cntrlkey + Enter detected!!")
    }
});
