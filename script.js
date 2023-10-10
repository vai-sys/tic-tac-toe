// const inputslider=document.querySelector("[data-lengthSlider]");
// const lengthDisplay=document.querySelector("[data-lengthNumber]");
// const passwordDisplay=document.querySelector("[data-passwordDisplay]");
// const copyBtn=document.querySelector("[data-copy]");
// const copyMsg=document.querySelector("[data-copyMsg]");
//  const uppercaseCheck=document.querySelector('#uppercase');
//  const lowercaseCheck=document.querySelector("#Lowercase");
//  const numbersCheck=document.querySelector("#numbers");
//  const symbolsCheck=document.querySelector("#symbols");
//  const indicater=document.querySelector("[data-indicater]");
//  const generateBtn=document.querySelector(".generateBtn");
//  const allCheckBox=document.querySelectorAll("input[type=checkbox]");
//   const symbols='@#$%^&*:?><,./+-!~{}|}[]()'
//  let password="";
//    let passwordLength=10;
//   let checkCount=1;
//   handleslider();
//   Setindicater("#ccc");
//   function handleslider(){
//           inputslider=passwordLength;
//           lengthDisplay.innertext=10;
//   }
//   function Setindicater(color){
//     indicater.style.backgroundColor=color;
//   }
//   function getRnInteger(min,max){

//      return Math.floor(Math.random()*(max-min)) ;
//   }
//   function getRnNumber(){
//     return getRnInteger(0,9);
//   }
// function getRnLowercase(){
//     return String.fromCharCode(getRnInteger(97,123));
// }
// function getRnLowercase(){
//     return String.fromCharCode(getRnInteger(65,91));
// }
// function getRnSymbols(){
// const ranNum=getRnInteger[0,symbols.length];
// return symbols.charAt[ranNum];

// }
// function calcstrength(){
//     let hasUpper=false;
//     let hasLower=false;
//     let hasNum=false;
//     let hasSym=false;
//     if(uppercaseCheck.checked)hasUpper=true;
//     if(lowercaseCheck.checked)hasLower=true;
//     if(numbersCheck.checked)hasNum=true;
//     if(symbolsCheck.checked)hasSym=true;
//     if(hasUpper&& hasLower&&(hasNum || hasSym )&& passwordLength>=8){
//         Setindicater("#0f0");
//     }
//     else if
        
//         ((hasLower||hasUpper)&&(hasNum||hasSym)&&passwordLength>=6){
//             Setindicater("#ff0");
//     }
//     else{
//         Setindicater("#f00");
//     } 
// }
// async function copyContent(){
//     try{
//         await navigater.clipboard.writetext(passwordDisplay.value)
//     }
//     catch(e){
//          copyMsg.innerText="fail to copy";
//     }
//     copyMsg.classList.add("active");
//     setTimeout(function(){
//          copyMsg.classList.remove("active")
//     },2000)  
// }
// function handleCheckBoxChange(){
//     checkCount=1;
//     allCheckBox.forEach((checkbox)=>{
//         if(checkbox.checked)
//         checkCount++;
//     })
// }
// if(checkCount<=0){
//     return 
// }
// if(passwordLength<checkCount){
//     passwordLength=checkCount;
//     handleslider();
// }

// password="";
// // if(uppercaseCheck.checked){
// //     password+=generateUppercase();
// // }
// // if(lowercaseCheck.checked){
// //     password+=generateUppercase();
// // }
// // if(numbersCheck.checked){
// //     password+=generateUppercase();
// // }
// // if(symbolsCheck.checked){
// //     password+=generateUppercase();
// // }
// allCheckBox.foreach((checkbox)=>{
//     checkbox.addEventListener("change",handleCheckBoxChange);
// })
// inputslider.addEventListener('input',(e)=>{
// passwordLength=e.target.value;
// handleslider();
// })
// copyBtn.addEventListener('click',()=>{
//     if(passwordDisplay.value)
//     copyContent();
// })
// generateBtn.addEventListener("click",()=>{

// })
// let funArr=[];
// if(uppercaseCheck.checked){
//     funArr.push(generateUppercase);
// }
//     if(lowercaseCheck.checked){
//         funArr.push(generateLowercase)
//     }
//         if(numbersCheck.checked){
//             funArr.push(generateNumber)
//         }
//             if(symbolsCheck.checked){
//                 funArr.push(generatesymbol)
//             }

// for(let i=0;i<funArr.length;i++){
//     password+=funArr[i]();
// }
// for(let i=0;i<passwordLength-funArr.length;i++){
//     let ranIndex=get(0,funArr.length);
//     password+=funArr[ranIndex]();
// }
// password=shufflePassword(Array.from(password));
// passwordDisplay.value=password;
// calcstrength();

// function shufflePassword(array){
// for(let i=array.length-1;i>0;i--){
//     const j=Math.floor(Math.random()*(i+1));
//     const temp=array[i];
//     array[i]=array[j];
//     array[j]=temp;
// }
// let str="";
// array.forEach((el)=>(str+=el));
// return str;
// }

const inputslider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector('#uppercase');
const lowercaseCheck = document.querySelector("#Lowercase");
const numbersCheck = document.querySelector("#Numbers");
const symbolsCheck = document.querySelector("#Symbols");
const indicater = document.querySelector("[data-indicater]");
const generateBtn = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '@#$%^&*:?><,./+-!~{}|}[]()';
let password = "";
let passwordLength = 10;
let checkCount = 1;

handleslider();
Setindicater("#ccc");

function handleslider() {
    inputslider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function Setindicater(color) {
    indicater.style.backgroundColor = color;
}

// function getRnInteger(min, max) {
//     const result = Math.floor(Math.random() * (max - min) + min);
//     console.log(`getRnInteger: ${result}`);
//     return result;
// }
function getRnInteger(min, max) {
    // Ensure the result is within the bounds of [min, max]
    return Math.max(min, Math.floor(Math.random() * (max + 1)));
}

function getRnNumber() {
    const result = getRnInteger(0, 9);
    console.log(`getRnNumber: ${result}`);
    return result;
}

function getRnLowercase() {
    const result = String.fromCharCode(getRnInteger(97, 123));
    console.log(`getRnLowercase: ${result}`);
    return result;
}

function getRnUppercase() {
    const result = String.fromCharCode(getRnInteger(65, 91));
    console.log(`getRnUppercase: ${result}`);
    return result;
}

function getRnSymbol() {
    const ranNum = getRnInteger(0, symbols.length);
    const result = symbols.charAt(ranNum);
    console.log(`getRnSymbol: ${result}`);
    return result;
}

function calcstrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        Setindicater("#0f0");
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        Setindicater("#ff0");
    } else {
        Setindicater("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        console.log("copyContent: Copied to clipboard");
    } catch (e) {
        copyMsg.innerText = "Fail to copy";
        console.error("copyContent: Error copying to clipboard", e);
    }
    copyMsg.classList.add("active");
    setTimeout(function () {
        copyMsg.classList.remove("active");
    }, 2000);
}

function handleCheckBoxChange() {
    checkCount = 1;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) checkCount++;
    });
}

// if (checkCount <= 0) {
//     console.log("checkCount is 0 or negative, returning.");
//     return;
// }

if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleslider();
}

password = "";
let funArr = [];

if (uppercaseCheck.checked) {
    funArr.push(generateUppercase);
}

if (lowercaseCheck.checked) {
    funArr.push(generateLowercase);
}

if (numbersCheck.checked) {
    funArr.push(generateNumber);
}

if (symbolsCheck.checked) {
    funArr.push(generateSymbol);
}
// let funArr = [];

// if (uppercaseCheck.checked) {
//     funArr.push(getRnUppercase);
// }
// if (lowercaseCheck.checked) {
//     funArr.push(getRnLowercase);
// }
// if (numbersCheck.checked) {
//     funArr.push(getRnNumber);
// }
// if (symbolsCheck.checked) {
//     funArr.push(getRnSymbol);
// }

for (let i = 0; i < funArr.length; i++) {
    password += funArr[i]();
}

for (let i = 0; i < passwordLength - funArr.length; i++) {
    if (funArr.length === 0) {
        console.error('funArr is empty, cannot generate password.');
        break;  // Exit the loop if funArr is empty
    }

    let ranIndex = getRnInteger(0, funArr.length - 1);
    console.log(`ranIndex: ${ranIndex}, funArr:`, funArr);

    // Ensure ranIndex is within the bounds of funArr
    if (ranIndex >= 0 && ranIndex < funArr.length) {
        let fun = funArr[ranIndex];
        if (typeof fun === 'function') {
            password += fun();
        } else {
            console.error(`Invalid function at index ${ranIndex}`);
        }
    } else {
        console.error(`Invalid ranIndex: ${ranIndex}`);
    }
}



// for (let i = 0; i < passwordLength - funArr.length; i++) {
//     let ranIndex = getRnInteger(0, funArr.length - 1);
//     console.log(`ranIndex: ${ranIndex}, funArr:`, funArr);

//     // Ensure ranIndex is within the bounds of funArr
//     if (ranIndex >= 0 && ranIndex < funArr.length) {
//         password += funArr[ranIndex]();
//     } else {
//         console.error(`Invalid ranIndex: ${ranIndex}`);
//     }
// }


password = shufflePassword(Array.from(password));
passwordDisplay.value = password;
calcstrength();

function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}






