//! צור משתני JSON של הודעת צור קשר: שם, הודעה,אימייל

const formJson = `{
    "name": "Ruti",
    "message": "Hello World",
    "email": "rutiayaso0@gmail.com"
}`;

//! המר את ההודעה לאובייקט

// const formObj = JSON.parse(formJson);
// console.log(formObj);

//! ---------------------------------------------------------------

//! צור משתנה של JSON המכיל: 
//! מערך של רכבים: דגם, מחיר, שנתון 
//! מערך של ספינות: שם, שנתון, מקום עגינה ותמונה

const arrayJson = `{
    "arrayOfCars": [
        {
            "model": "BMW",
            "price": 203000,
            "year": 2020
        },
        {
            "model": "Mercedes",
            "price": 124540,
            "year": 2013 
        },
        {
            "model": "Honda",
            "price": 12400,
            "year": 2009 
        },
        {
            "model": "Toyota",
            "price": 90000,
            "year": 2019 
        }
    ],
    "arrayOfShips": [
        {
            "model": "Mainstream Cruise Ship",
            "year": 2020,
            "dock": "USA",
            "img": "http://www.windrosenetwork.com/archivos/Barco-Crucero-Convencional-Sub.jpg"
        },
        {
            "model": "Mega Cruise Ship",
            "year": 2018,
            "dock": "Israel",
            "img": "http://www.windrosenetwork.com/archivos/Mega-Barco-Crucero-Sub.jpg"
        },
        {
            "model": "Ocean Cruise Ship",
            "year": 2015,
            "dock": "Paris",
            "img": "http://www.windrosenetwork.com/archivos/Barco-Crucero-Oceanico-Sub.jpg"
        },
        {
            "model": "Luxury Cruise Ship",
            "year": 2021,
            "dock": "USA",
            "img": "http://www.windrosenetwork.com/archivos/Barco-Crucero-Lujo-Sub.jpg"
        }
    ]
}`

//! הצג את כל הספינות על המסך

let mySection = document.getElementById("container");
const arrayObj = JSON.parse(arrayJson);
for (const ship of arrayObj.arrayOfShips) {
    mySection.innerHTML += `<article>
    <h1>${ship.model}</h1>
    <img src=${ship.img}>
    <h4>${ship.year}</h4>
    <span>${ship.dock}</span>
    </article>`
}

//! ---------------------------------------------------------------

//! צור אובייקט על פי השדות האלו
//! המר את האובייקט שיצרת לפורמט JSON

let form = document.getElementById("form");
let userName = document.getElementById("inputName");
let userEmail = document.getElementById("inputEmail");
let message = document.getElementById("userMessage");
let myButton = document.getElementById("submitButton");
let personObject;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    personObject = {
        name: userName.value,
        email: userEmail.value,
        message: message.value
    }
    const personJson = JSON.stringify(personObject);
    console.log(personJson);
});

//! ---------------------------------------------------------------

//! כתוב פונקציה שמקבלת אובייקט ומחזירה JSON

function getJsonFromObject(object){
    return JSON.stringify(object);
}

//! ---------------------------------------------------------------


//! כתוב פונקציה המקבלת JSON ומחזירה אובייקט

function getObjectFromJson(json){
    return JSON.parse(json);
}

//! ---------------------------------------------------------------

//! כתוב פונקציה שמקבלת אובייקט של משתמש: גיל, שם,אימייל
//! הפונקציה מכפילה את הגיל ב-3 ומחזירה JSON

function getJsonMultiByThree(name, age, email){
    const myObject = {name, age, email};
    myObject.age *= 3;
    return JSON.stringify(myObject);
}