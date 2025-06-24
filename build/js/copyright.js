"use strict";
/*
EXCERCISE

Take the below javascript and make adhere to typescript rules.

const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear
*/
//SOLUTION
const year = document.getElementById("year"); //Overide typescript and set 'as' HTMLElement only
const thisYear = new Date().getFullYear().toString(); // Change year type to string as 'datetime' expects a string only.
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
