    
function content(list){
    const li = document.createElement('li')
    li.textContent = list
    li.id = '#item'
    document.querySelector('#shopping-list').appendChild(li)
}


const add = document.querySelector('#add-btn')
add.addEventListener('click', function(e){
    e.preventDefault()
    const listItems = document.querySelector('#text-box')
    content(listItems.value)
})

const dltBtn = document.querySelector('#clear-list-btn').addEventListener('click', function(){
    const clear = document.querySelectorAll('#item')
    clear.forEach((e)=>{
        e.parentElement.remove()
    })
})

const purchased = document.querySelector('#purchase-btn')
purchased.addEventListener('click', function(e){
    const strke = value.strike()
    document.getElementById('#shopping-list').appendChild(strke) 
})