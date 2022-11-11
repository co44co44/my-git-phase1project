//STEPS FOR THIS PROJECT: 
//1. PROJECT THE ITEMS AVAILABLE TO THE DOM
//2. SORT THE ITEMS BY MALL
//3. THAT RESULT, SORT IT BY CATEGORY
//4. THAT RESULT, SORT IT BY GENDER
//5. THAT RESULT, SORT IT BY SIZE
//6. THAT RESULT, SORT IT BY COLOR


//1. PROJECT THE ITEMS AVAILABLE TO THE DOM: 
//1. make a request to the server to my project with fetch.
function fetchItems(){
    fetch('http://localhost:3000/items')
    .then((response) => response.json())
    .then((items) => items.forEach(item => cardItem(item)));
    console.log ('1.fetchItems runs')
}

//2. create the card were each item will show

function cardItem(item){
    
    console.log ('2.cardItem runs')

    let card = document.createElement ('div') 
    card.className = 'card'
    card.innerHTML = `

    <h2> "${item.name} @ ${item.store} @ ${item.mall}" </h2>

    <img class ="item_picture" src = '${item.image}'>
    <p style="text-align:center">
    <button class="map-btn" id=${item.id}> Take me to ${item.store}! </button>
    </p>
    <p id=""> Details:</p>
        <ul id="details_list">
            <li>Gender:${item.gender} </li>
            <li>Size: ${item.size}</li>
            <li>Color: ${item.color}</li>
        </ul>

    `
//3. add/append card to the card area (DOM)
    document.querySelector('#sorted-collection').appendChild(card)
    
   // likeBtnClick(item)
}

//4. initialize


//3. filter the items by "I am looking for":
//1. grab the "Im looking for" menu

let dropdownLookingFor = document.querySelector('#looking-for-dropdown');
let dropdownGender = document.querySelector('#gender-dropdown');


//2. remove data displayed in the DOM by creating a function that tells what will happend 
//when the dropdown is clicked

function hideDropdownWhenClicked(){
    document.querySelectorAll('.dropdown-class').forEach(item => {
        item.addEventListener ('change', (e) =>{
            removeAllChildNodesItems(document.querySelector('#sorted-collection'));
            console.log ('3. items are hidding')
            lookingForSelection()
            genderSelection()

//I am changing this area so I add a class to grab all dropdowns by their class
// so I do not have to repeat my code.
    // dropdownLookingFor.addEventListener ('change', (e) =>{
    // removeAllChildNodesItems(document.querySelector('#sorted-collection'));
    // console.log ('3. items are hidding')
    // lookingForSelection()
    // genderSelection()

    document.querySelector('#sorted-collection').appendChild.innerHTML;
    })})}

function removeAllChildNodesItems(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }}

// Code for the DROPDOWN "I am looking for":
// create a function lookingForSelection() that: fetchs from server the data, filters it by a conditional:
// if dropdown.value == to item.name, put the item in the cardItem function.
// Then, upload it to the DOM with queryselector.appendChild

function lookingForSelection(){
     fetch('http://localhost:3000/items')
    .then((response) => response.json())
    .then((items) => items.filter(item => {
        //console.log (item.name)
        //console.log (dropdownLookingFor.value)
        if (item.name == dropdownLookingFor.value) {
            console.log('4.fetch lookingfor dropdown ')
            
    cardItem(item)

        document.querySelector('#sorted-collection').appendChild
    }
}))}; 
 // CREATE THE GENDER DROPDOWN:
//1. at the top (global scope) grab the gender dropdown with query selector 
//2.create a function genderSelection() that: fetchs from server the data, 
//filters it by a conditional: if dropdown.value == to item.name, put the item in the cardItem function.
// Then, upload it to the DOM with queryselector.appendChild




function genderSelection(){
    fetch('http://localhost:3000/items')
   .then((response) => response.json())
   .then((items) => items.filter(item => {
       console.log (item.gender)
       console.log (dropdownGender.value)
       if (item.gender == dropdownGender.value) {
           console.log('5.fetch gender dropdown ')
           
   cardItem(item)

       document.querySelector('#sorted-collection').appendChild
   }
}))}; 

function genderSelection(){
    fetch('http://localhost:3000/items')
   .then((response) => response.json())
   .then((items) => items.filter(item => {
       console.log (item.gender)
       console.log (dropdownGender.value)
       if (item.gender == dropdownGender.value) {
           console.log('5.fetch gender dropdown ')
           
   cardItem(item)

       document.querySelector('#sorted-collection').appendChild
   }
}))}; 

function initialize(){
    fetchItems()
    hideDropdownWhenClicked()
    lookingForSelection()
    genderSelection()
}
initialize()


//2. filter items by user choice.





//4. THAT RESULT, filter IT BY CATEGORY:
//1. grab the previous return
//2. grab the category Im looking for 
//3. grab user Im looking for choice
//4. return items that match that choice 

//5. THAT RESULT, filter IT BY GENDER:
//1. grab the previous return
//2. grab the GENDER Im looking for 
//3. grab user Im looking for choice
//4. return items that match that choice 

//6. THAT RESULT, filter IT BY GENDER:
//1. grab the previous return
//2. grab the GENDER Im looking for 
//3. grab user Im looking for choice
//4. return items that match that choice 

//7. THAT RESULT, filter IT BY GENDER:
//1. grab the previous return
//2. grab the GENDER Im looking for 
//3. grab user Im looking for choice
//4. return items that match that choice 


//future adds-on: like to save, live map to navigate the mall.
