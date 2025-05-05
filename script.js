let btn = document.querySelector('#btn')
let h3 = document.querySelector('h3')
let img = document.querySelector('img')
let flag = 0

btn.addEventListener('click', function(){
    if(flag == 0){
        h3.innerHTML = '<h5>Request Sending...</h5>'
        h3.style.color = 'gold'
        setTimeout(function(){
            h3.innerHTML = 'Friends'
            h3.style.color = '#3199F9'
            btn.innerHTML = 'Remove Friend'
        },2000)
        flag = 1
    }else {
        h3.innerHTML = '<h5>Removing Friend...</h5>'
        h3.style.color = 'gold'
        setTimeout(function(){
            h3.innerHTML = 'Stranger'
            h3.style.color = '#C1267D'
            btn.innerHTML = 'Add Friend'
        },2000)
        flag = 0
    }
})
