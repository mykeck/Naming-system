var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
Var dayOfTheWeek = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "friday","Saturday"];

function AkanName () {
    // var year = parseInt(document.getElementById("year");
    // var month = parseInt(document.getElementById("month");
    // var day = parseInt(document.getElementById("day");
    // var gender = document.getElementByClass(gender);
    var day=10;
    var month=11;
    var year=2001;
    var gender="male";
    var date = new Date(year +"/" + month + "/"+day);
    var dayBorn = date.getDay();
    var akanName;
    var validate = (year > 0 && (month >0 && month <=12) && (day > 0 && day <= 31));
     var validateGender = (gender !== "male" && gender !== "female");
       if (year <= 0 ) {
          alert("Invalid year");
       }
       else if(month <= 0 || month > 12){
         alert("month is between 1 and 12")
       }
       else if (day <= 0 || day >31){
         alert("Date is between 1 and 31");
       }
       else if (validate == false){
         alert("field can't be empty!");
       }
       if(gender ==="male"){
          akanName = maleNames[dayBorn];
          alert("You were born on "+ dayOfTheWeek[dayBorn]+ " and your Akan name is " +akanName);
       }
       else if (gender === "female"){
         akanName = femaleNames[dayBorn];
      alert("You were born on "+ dayOfTheWeek[dayBorn]+ " and your Akan name is " +akanName);
      }
       }