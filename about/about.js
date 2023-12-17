const menuOpenBtn = document.getElementById("menuOpenBtn");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const menu = document.getElementById("menu")
menuOpenBtn.addEventListener("click", () => {
    menuOpenBtn.style.display = "none"
    menuCloseBtn.style.display = "inline-block"
    menuCloseBtn.style.color = "#d63485"
    menu.style.animationName = "open"
})
menuCloseBtn.addEventListener("click", () => {
    menuOpenBtn.style.display = "inline-block"
    menuCloseBtn.style.display = "none"
    menu.style.animationName = "close"
    menuCloseBtn.style.color = "#646363"

})

// menu end
// form open
const buttonUserOpen = document.getElementById("buttonUserOpen");
const buttonUserClose = document.getElementById("buttonUserClose");
const formSingIn = document.getElementById("formSingIn");
const formSingUp = document.getElementById("formSingUp");
const signUpA = document.getElementById("signUpA")
const signUpBtn = document.getElementById("signUpBtn");

buttonUserOpen.addEventListener ("click", () => {
    formSingIn.style.display = "flex"
    buttonUserOpen.style.display = "none"
    buttonUserClose.style.display = "inline-block"
    
})

buttonUserClose.addEventListener("click", () => {
    formSingIn.style.display = "none"
    formSingUp.style.display = "none"
    buttonUserOpen.style.display = "inline-block"
    buttonUserClose.style.display = "none"
})

signUpA.addEventListener("click", () => {
    formSingUp.style.display = "flex"
    formSingIn.style.display = "none"
})

signUpBtn.addEventListener("click", () => {
    formSingUp.style.display = "none"
    formSingIn.style.display = "flex"
})

// end form
function formatTime( d = new Date(), ampm = true ) {
    var hour = d.getHours();
    
    if ( ampm ) {
        var a = ( hour >= 12 ) ? 'PM' : 'AM';
        hour = hour % 12;
        hour = hour ? hour : 12; // the hour '0' should be '12'  
    }

    var hour    = checkDigit(hour);  
    var minute  = checkDigit(d.getMinutes());
    var second  = checkDigit(d.getSeconds());
  
    return ( ampm ) ? `${hour}:${minute}:${second} ${a}` : `${hour}:${minute}:${second}`;
}

function checkDigit(t)
{
  return ( t < 10 ) ? `0${t}` : t;
}


// time 
let time = document.getElementById("time");
let timeP = document.getElementById("timeP")
timeP.style.fontSize = "25px"

setInterval(() => {
    // timeP.innerText = `Armenian Time Now ${formatTime( new Date(), false )}`;
    timeP.innerText = formatTime( new Date(), false );
}, 1000)


const openMenu = document.getElementById("openMenu");
const hideMenu = document.getElementById("hideMenu");
const navBar2 = document.getElementById("navBar2");

openMenu.addEventListener("click", () => {
    openMenu.style.display = "none"
    navBar2.style.animationName = "openList"
    hideMenu.style.display = "inline"
})

hideMenu.addEventListener("click", () => {
    hideMenu.style.display = "none"
    navBar2.style.animationName = "closeList"
    openMenu.style.display = "inline";

})
