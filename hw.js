let age_2 = 18
let age_3 = 60
const checkAge = function(age){

age = Number (age)

if (!isNaN(+age)) {

if (age < age_2) {
console.log ("You dont have access cause your age is" + age + "Its less then")
} else if (age >= age_2 && age < age_3){
console.log ("Welcome!")
} else if (age > age_3){
console.log ("Keep calm and look Culture channel")
} else {
console.log ("Technical work")
} 
}else {console.log ("mistake")}
}

checkAge ("18")
let agePrompt = prompt("Enter age")