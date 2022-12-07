
//dark mode btn
let darkModeBtn = document.getElementById("dark-mode-btn")
let body = document.getElementById("body")

darkModeBtn.addEventListener('click', changeMode); 

function changeMode (){
    console.log ('darkMode')
    let element = document.body;
    element.classList.toggle("dark-mode")
};


//request data

function fetchItems(){
    fetch('http://localhost:3000/items')
    .then((response) => response.json())
    .then((items) => items.forEach(item => cardItem(item)));
    console.log ('1.fetchItems runs')
}

//create card 

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function cardItem(item){
    let heart = EMPTY_HEART
    let card = document.createElement ('div') 
    card.className = 'card'
    card.innerHTML = `
    <h2 id = item> "${item.name} @ ${item.store} @ ${item.mall}" </h2>
    <img class ="item_picture" src = '${item.image}'>`
    
    let p = document.createElement('p')
    p.id = 'p'
    p.classList= "like" 
    card.appendChild(p)
    
    let span = document.createElement('span')
    span.classList = "like-glyph"
    span.innerHTML = `${heart}`
    span.addEventListener('click',clickEmptyHeart)
    p.appendChild(span)

    let ul = document.createElement('ul')
    ul.id= 'details_list'
    ul.innerHTML = 'Details:'
    let list1 = document.createElement('li')
    list1.textContent = `Gender: ${item.gender}`
    console.log("list1", list1)
    ul.appendChild(list1)

    let list2 = document.createElement('li')
    list2.textContent = `Size: ${item.size}`
    console.log("list2", list2)
    ul.appendChild(list2)
    
    let list3 = document.createElement ('li')
    list3.textContent = `Color: ${item.color}`
    ul.appendChild(list3)
    p.appendChild(ul)
    card.appendChild(p)
   
//add/append card to the card area (DOM)
document.querySelector('#sorted-collection').appendChild(card).appendChild(p)


//callback function click empty heart event listener

function clickEmptyHeart (e) {
  console.log (e.target)
  console.log ("click Empty Heart runs")
    if (span.innerHTML===EMPTY_HEART){
        span.innerHTML = FULL_HEART
    } else {
        (span.innerHTML = EMPTY_HEART)
  }
}}

// dropdowns: grab, event listener change: used when tha value is changed, 
let dropdownLookingFor = document.querySelector('#looking-for-dropdown');

function hideDropdownWhenClicked(){
    document.querySelectorAll('.dropdown-class').forEach(item => {
        item.addEventListener ('change', (e) =>{
            removeAllChildNodesItems(document.querySelector('#sorted-collection'));
            console.log ('3. items are hidding')
            lookingForSelection()
          
    document.querySelector('#sorted-collection').appendChild.innerHTML;
    })})}

function removeAllChildNodesItems(parent){
        while (parent.firstChild){
            parent.removeChild(parent.firstChild);
        }}
    
// DROPDOWN "I am looking for":

function lookingForSelection(){
    fetch('http://localhost:3000/items')
   .then((response) => response.json())
   .then((items) => items.forEach(filterByDropdownSelection))
           console.log('4.fetch lookingfor dropdown ')
}; 

function filterByDropdownSelection(item){
    if (item.name == dropdownLookingFor.value) {
        console.log('4.fetch lookingfor dropdown ')         
        cardItem(item)
        document.querySelector('#sorted-collection').appendChild
    }
}

function initialize(){
    fetchItems()
    hideDropdownWhenClicked()
    lookingForSelection()  
}

initialize()