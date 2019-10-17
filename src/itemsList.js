
const utils2 = require("./utils2");

console.log("itemsList.js loaded");

const phones = [{}];
const laptops = [{}];

const categories = {
    PHONE: "phones", //plural because it is like that in phones array
    LAPTOP: "laptop", 
};

// initial state
let selectedCategory = categories.PHONE;

function createItems(){

    //console.log('createItems', selectedCategory);
    const root = document.getElementById("item-list");

    root.innerHTML = null; //reset
    //reset
    //root.innerHTML = null;

    let items = [];

    if(selectedCategory === categories.PHONE){
        items = phones;
        //console.log("set phones");
    }
    else if(selectedCategory === categories.LAPTOP){
        items = laptops;
        //console.log("set laptops");
    }
    phones.forEach((phone)=>{
        //console.log("drawing");
        const element = createItemElement(phone);
        root.append(element);
        //console.log(element);
    })
}

function setupCategoryListener(){
    
    const dropdown= document.getElementById("category-dropdown");

    dropdownElement.addEventListener('change', (event) => {
        //console.log(event.target.value);
        selectedCategory = event.target.value;
        createItems();
        //const result = document.querySelector('.result');
        //result.textContent = `You like ${event.target.value}`;
    });
}



window.addEventListener("load", () =>{
    console.log("Document loaded, itemsList.js");
    createItem();
    setupCategoryListener();
    //const app = document.getElementById("item-body")
    //app.append(container);
})