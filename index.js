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

    <h4> "${item.name} @ ${item.store} @ ${item.mall}" </h4>

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
//3. add/append card to the dom inside the card
    document.querySelector('#sorted-collection').appendChild(card)
   // likeBtnClick(item)
}

//4. initialize
function initialize(){
    fetchItems()
}
initialize()


//3. filter the items by "I am looking for":
//1. grab the "Im looking for" menu 
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
