let toggleSideBar = false;
let y = document.querySelector(".x-btn");
//make a function CALL 

function toggleHum() {
    //GRAB NODE FROM DOM 
    let x = document.querySelector("#side-bar ul ");
    let z = document.querySelectorAll("#side-bar ul li a");
    let y = document.querySelector(".x-btn");




    //MAKE A CONDITION TO FUNCTIION BEING PASSED WHEN CODITIONS ARE MET 
    if (toggleSideBar === false) {
        x.style.display = "block";
        x.style.width = "250px";
        y.style.visibility = "visible";

        let z = arrayLength.length;
        for (let i = 0; i < arrayLength; i++) {
            array[i].style.opacity = "1";
        }
        toggleSideBar = true;


    } else if (toggleSideBar == true) {
        x.style.display = "none";
        x.style.width = "0px";
        y.style.visibility = "hidden";


        let z = array.length;
        for (let a = 0; a < array; a++) {
            array[a].style.opacity = "0";
        }

        toggleSideBar === false;
    }
};

function close() {

    let y = document.querySelector(".x-btn");

    x.style.display = "none";
    x.style.width = "0px";
    y.style.visibility = "";
}