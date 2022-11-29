/* 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
*/ 

const menu = document.getElementById("navbar");

const hamMenu = () =>{
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
} 
//Kode til hamburger-meny er hentet fra forelesning om responsivt-design.
