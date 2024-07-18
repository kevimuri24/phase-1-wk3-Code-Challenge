    
function content(list){
    const li = document.createElement('li')
    li.textContent = list
    document.querySelector('#shopping-list').appendChild(li)
}


const add = document.querySelector('#add')
add.addEventListener('click', function(e){
    e.preventDefault()
    const listItems = document.querySelector('#user-input')
    content(listItems.value)
})

const dltBtn = document.querySelector('#clear')
    dltBtn.addEventListener('click', function(e){
        e.preventDefault()
       if(e.target.idName === 'clear'){
        const li = e.target.parentElement
        document.querySelector('#shopping-list ul li').parentNode.removeChild(li)
       }
    })

const purchased = document.querySelector('#purchased')
purchased.addEventListener('click', function(e){

    const strke = document.elementCreateOptions('strike')
    document.querySelector('#shopping-list ul li').appendChild(strke) 
})