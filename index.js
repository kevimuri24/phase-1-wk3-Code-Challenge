let items = [];
const itemDisplay = document.getElementById('list')
const itemInput = document.getElementById('shopping-list')

//Get references to buttons and add event listeners
const addItemButton = document.getElementById('addBtn')
addItemButton.addEventListener('click', () => {
    addItem()
});


const addClearList = document.getElementById('clearBtn')
addClearList.addEventListener('click', () => {
    clearList()
});

const addMarkAsPurchased = document.getElementById('purchaseBtn')
addMarkAsPurchased.addEventListener('click', () => {
    markAsPurchased()
});

//function to add item to the list
function addItem() {
    items.push({
        name: itemInput.value,
        purchased: false
    })
    console.log(items.length)
    displayList()
}

//this function is used to refresh items on the list view.
function displayList() {

    console.log(items)
    itemDisplay.innerHTML = '' // clear current list

    //Loop through items array and create list items
    for (let i = 0; i < items.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = items[i].name
        itemDisplay.appendChild(listItem)
        listItem.classList.toggle('purchased', items[i].purchased)
    }


}
//add a function ClearList (indorder to clear the list)
function clearList() {
    items = []
    displayList()

}
//add function markAsPurchased
function markAsPurchased() {
    for (let i = 0; i < items.length; i++) {
        items[i].purchased = true; // sets status of all purchased items as true
    }
    displayList() //// Update the displayed list to reflect changes
}