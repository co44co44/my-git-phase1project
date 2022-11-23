


//dark mode btn
//1.create in html the btm and add style in css
// //2. in js, grab the btn with query selector.  Also, grab the body with query selector.
let darkModeBtn = document.getElementById("dark-mode-btn")
let body = document.getElementById("body")

// //3. add an event listener to the btn

darkModeBtn.addEventListener('click', changeMode); 
//     function changeModeDark (){
//         document.body.classList.add('dark-mode')
//     }
    //     if (body.getAttribute = ('body.light-mode')){
    //         body.setAttribute = ('body.dark-mode')
    //       } else (body.setAttribute = ('body-light-mode'))
        
    //     document.querySelector('#body.light-mode').setAttribute(body)
    // };


function darkMode(){
    document.body.classList.add('dark-mode')
}
function lightMode(){
    document.body.classList.remove('dark-mode').add('light-mode')
}
function changeMode (){
    console.log ('darkMode')
    
    if (document.body.classList = ('body')){
        darkMode()
        console.log('im in darkMode')
      } else {
        lightMode()
      } 
      
    

};

//4. create the call back function of the btn


//5. initialize function if needed



//1. PROJECT THE ITEMS AVAILABLE TO THE DOM: 
//1. make a request to the server.
function fetchItems(){
    fetch('http://localhost:3000/items')
    .then((response) => response.json())
    .then((items) => items.forEach(item => cardItem(item)));
    console.log ('1.fetchItems runs')
}

//2. create the card were each item will show
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function cardItem(item){
    let heart = EMPTY_HEART
    let card = document.createElement ('div') 
    card.className = 'card'
    card.innerHTML = `
    <h2> "${item.name} @ ${item.store} @ ${item.mall}" </h2>
    <img class ="item_picture" src = '${item.image}'>
    <p style="text-align:center">`
    let p = document.createElement('p')
    p.id = 'p'
    p.classList= "like" 
    card.appendChild(p)
    let span = document.createElement('span')
    span.classList = "like-glyph"
    span.innerHTML = `${heart}`
    span.addEventListener('click',clickEmptyHeart)
    p.appendChild(span)

    //p.innerHTML = '<span class="like-glyph"=>`like! ${heart}`</span>'
    
    let ul = document.createElement('ul')
    ul.id= 'details_list'
    ul.innerHTML = 'Details:'
   
    let list = document.createElement('li')
    list.textContext = `Gender: ${item.gender}`
    list2 = document.createElement('li')
    list2.textContent = `Size: ${item.size}`
    list3 = document.createElement ('li')
    list3.textContent = `Color: ${item.color}`
    
    p.appendChild(ul)
    ul.appendChild(list)
    ul.appendChild(list2)
    ul.appendChild(list3)
    card.appendChild(p)

    //add the Span, to the span the class 
    //add to the span the event listener
    //heart instead of empty-heart ${heart} innerhtml of span. add eventlistener click, 


    //<p class="like">Like! <span class="like-glyph">${EMPTY_HEART}</span></p>
    // <p id=""> Details:</p>
    //     <ul id="details_list">
    //         <li>Gender:${item.gender} </li>
    //         <li>Size: ${item.size}</li>
    //         <li>Color: ${item.color}</li>
    //     </ul>
    // `
//3. add/append card to the card area (DOM)
document.querySelector('#sorted-collection').appendChild(card).appendChild(p)
// document.querySelector('#sorted-collection').appendChild(card)
//GRAB HTML HEART DRAWING AND ADD AN EVENT LISTENER TO IT SO WE CAN CLICK ON IT.
//let heart=document.querySelectorAll(".like-glyph")
// for (let i=0; i<heart.length; i++){
//   heart[i].addEventListener ("click", clickEmptyHeart); 
// }
//CREATE A FUNCTION WHERE I SAY THAT IF I CLICK THE EMPTY HEART IT WILL CHANGE COLOR
function clickEmptyHeart (e) {
  console.log (e.target)
  console.log ("click Empty Heart runs")
    if (span.innerHTML===EMPTY_HEART){
        span.innerHTML = FULL_HEART
    } else {
        (span = EMPTY_HEART)
  }
  //span.innerHTML= `${heart}`
  //append it to the card
  //after I add the details with js 
  //document.querySelector('#sorted-collection').appendChild(card)
  
}}
//3. filter the items by "I am looking for":
//1. grab the "Im looking for" menu
let dropdownLookingFor = document.querySelector('#looking-for-dropdown');
//2. remove data displayed in the DOM by creating a function that tells what will happend 
//when the dropdown is clicked
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
// create a function lookingForSelection() that: requests from server the data, filters it by a conditional:
// by the user choice at the dropdown, put the retun in the cardItem function.
// Then, upload it to the DOM with queryselector.appendChild
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