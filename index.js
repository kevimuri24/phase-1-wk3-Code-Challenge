// function to create elements in the list 
function content(list){
    const li = document.createElement('li')
    li.textContent = list
    li.id = '#item'
    document.querySelector('#shopping-list').appendChild(li)

    // Create the functionality to indicate items purchased by striking them through
const purchaseBtn = document.querySelector('#purchase-btn')
purchaseBtn.addEventListener('click', function(e){
    const strke = document.createElement<'strike'>
    document.querySelectorAll('#item').appendChild()
})

// create the clear button functionality
const addClearBtn = document.getElementById('addclear-btn')
addClearBtn.addEventListener('click', ()=>{

})

}

function addItems(){
    list = []
    content()
}

// Creates the add items button functionality to add the value in the input field to the list
const add = document.querySelector('#add-btn')
add.addEventListener('click', function(e){
    e.preventDefault()
    const listItems = document.querySelector('#text-box')
    content(listItems.value)
})



