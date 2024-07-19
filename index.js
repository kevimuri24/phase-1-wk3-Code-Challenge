
const inputItems = document.querySelector('#input-item')
const itemList = document.querySelector('#item-list')

// Create Array to hold items in list
let list =[]
list.push(itemList)

// Create function to display list items
function content(list){
    let li = document.createElement('li')
    li.textContent = list
    li.id = '#item'
    document.querySelector('#item-list').appendChild(li)

    // Adding a marked purchased button on items to give them the option of choosing one thing or many
    const markPurchased = document.createElement('button')
    markPurchased.textContent = 'purchased'
    li.appendChild(markPurchased)

    // Marking an item as purchased by adding a Strikethrough 
    markPurchased.addEventListener('click', e => {
        e.target.parentNode.classList.toggle('purchased')
    })

}

// Create function that adds an item when the add button is clicked
const add = document.querySelector('#add-btn')
add.addEventListener('click', function(e){
    e.preventDefault()
    const listItems = document.querySelector('#input-item')
    content(listItems.value)
})

// Create function that clears the list items
const clearList = document.querySelector('#clear-btn')
clearList.addEventListener('click', e => {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
})