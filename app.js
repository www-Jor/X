const menuOpenBtn = document.getElementById("menuOpenBtn");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const menu = document.getElementById("menu")
menuOpenBtn.addEventListener("click", () => {
    menuOpenBtn.style.display = "none"
    menuCloseBtn.style.display = "inline-block"
    menu.style.animationName = "open"
    menuCloseBtn.style.color = "#d63485"

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









// const element = document.querySelector('#randomNumbers');
// console.log(randomNumbers);



const animalsImg = Array.from(document.getElementsByClassName("animalsImg"));
const animalsName = Array.from(document.getElementsByClassName("animalsName"));
const money = Array.from(document.getElementsByClassName("money"));
// json
fetch ("home.json")
.then (response => response.json())
.then (retur => retur.home[0].Home.BuyAnimals)
.then (animals => {    
    let arr  = [0, 1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10, 11]
    let arr3 = [12, 13, 14, 15, 16, 17]
    let arr4 = [18, 19, 20, 21, 22, 23, 24]
    // let arr = [0, 1, 2, 0,1,2, 0,1,2, 3, 4,5];

// for (let i = 0; i < arr.length; i++) {
    // arr.unshift();
    // console.log(arr.shift())
// }

    for (const [key, value] of Object.entries(animals.Dogs)) {
        var randomNumber = arr.shift() //Math.floor(Math.random() * 6)
        animalsImg[randomNumber].src = `${value.image}`
        animalsName[randomNumber].innerText = `${value.name}`
        money[randomNumber].innerText = `${value.value}`
    }

    for (const [key, value] of Object.entries(animals.Cats)) {
        let rNum = arr2.shift() //Math.floor(Math.random() * (10 - 5 ) + 6)
        animalsImg[rNum].src = `${value.image}`
        animalsName[rNum].innerText = `${value.name}`
        money[rNum].innerText = `${value.value}`
    }
    
    for (const [key, value] of Object.entries(animals.Fish)) {
        let rNum = arr3.shift()// Math.floor(Math.random() * (10 - 5 ) + 12)
        animalsImg[rNum].src = `${value.image}`
        animalsName[rNum].innerText = `${value.name}`
        money[rNum].innerText = `${value.value}`
    }

    for (const [key, value] of Object.entries(animals.Birds)) {
        let rNum = arr4.shift()//Math.floor(Math.random() * (10 - 5 ) + 18)
        animalsImg[rNum].src = `${value.image}`
        animalsName[rNum].innerText = `${value.name}`
        money[rNum].innerText = `${value.value}`
    }
    // cicl(animals.Dogs)//shner
    // cicl(animals.Cats)//catuner
    // cicl(animals.Fish)//dzkner
    // cicl(animals.Birds)//trchuner
})






// exemple object cicl
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: "gago"
//   };
  
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }






// cart shoping
const cartOpenBtn = document.getElementById("cartOpenBtn")
const cartCloseBtn = document.getElementById("cartCloseBtn")
const cartShoping = document.getElementById("cartShoping") 


cartOpenBtn.addEventListener("click", () => {
    cartOpenBtn.style.display = "none"
    cartCloseBtn.style.display = "inline"
    cartShoping.style.display = "flex"
})

cartCloseBtn.addEventListener("click", () => {
    cartOpenBtn.style.display = "inline"
    cartCloseBtn.style.display = "none"
    cartShoping.style.display = "none"
})

// buy
const buyBtn = Array.from(document.getElementsByClassName("buyBtn"));
const round = document.getElementById("round");
let cont = 0
buyBtn.map((x) => {
    
    x.addEventListener("click", () => {
        const button = document.createElement("button")
        const hr = document.createElement("hr")
        const div = document.createElement("div")
        const img = document.createElement("img")
        const section = document.createElement("div")
        roundOpen.style.display = "flex"
        roundClose.style.display = "flex"
        cont++
        roundOpen.innerText = cont;
        roundClose.innerText = cont;
        cartShoping.appendChild(section)
        cartShoping.appendChild(section)
        section.appendChild(x.parentElement.firstElementChild)
        section.appendChild(x.parentElement.firstElementChild)
        // section.appendChild(x.parentElement.lastElementChild)
        section.appendChild(button)
        cartShoping.appendChild(hr)
        section.id = "sellSection"
        div.id = "sold"
        button.innerText = "Dell"
        button.className = "minusBtn"
        x.parentElement.style.position = "relative"
        x.parentElement.appendChild(img)
        img.src = "./img/sold-out-sign-vector-illustration_123447-734.avif";
        img.style.position = "absolute"
        img.style.top = 0
        img.style.left = 0

        // x.parentElement.innerHTML = `<img src="./img/sold-out-sign-vector-illustration_123447-734.avif">`

        // x.parentElement.style.opacity = "1"
        // x.parentElement.firstElementChild.appendChild(divImg);
        // divImg.className = "divImg"
        // divImg.style.backgroundImage = "url(./img/sold-out-sign-vector-illustration_123447-734.avif)"

        // x.parentElement.style.filter = "grayscale()"
        // x.parentElement.style.color = "#fff"
        // button.id = "minusBtn"
        // cartShoping.appendChild(x.parentElement.firstElementChild)
        // this.parentElement = x.parentElement.firstElementChild
        // console.log((x.parentElement));
        // console.log(x.parentElement.firstElementChild);
        // <img src=${animalsImg}>
        
     
        // buttons
        let cont2 = cont    
        let buttons = Array.from(document.getElementsByClassName("minusBtn"))
                buttons.map((butt) => {
            butt.addEventListener("click", () => {
                butt.parentElement.remove()
                hr.remove()
                cont2--
                roundOpen.innerText = cont2;
                roundClose.innerText = cont2;
                cont = 0
                if (roundOpen.innerText === "0" && roundClose.innerText === "0") {
                    roundOpen.style.display = "none"
                    roundClose.style.display = "none"
                    // cartShoping.style.display = "none"
                }else {
                    roundOpen.style.display = "flex"
                    roundClose.style.display = "flex"
                }
                
                
                
                // x.parentElement.firstElementChild.appendChild(section.parentElement.firstElementChild)
                // section.parentElement.style.position = "relative"
                // section.parentElement.firstElementChild.style.position = "absolute"
                // section.parentElement.firstElementChild.style.display = "flex"
                // section.parentElement.firstElementChild.style.flexDirection = "column"
                // section.parentElement.firstElementChild.style.margin = "0 0  80px 0"
                // section.parentElement.firstElementChild.style.top = "0"
                // img.style.display = "none"
            })  
        })
       
    })
})


// menu hide

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
