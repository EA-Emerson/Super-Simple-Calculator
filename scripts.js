let input = document.querySelector('.input')
let btns = document.querySelectorAll('button')
let submit = document.querySelector('.submit')
// let del = document.querySelector('.DEL')

btns.forEach(function(btn){

    btn.addEventListener('click', function(e){

    var x=e.target.innerHTML

    input.value += x

    let styles=input.value

    if (styles.includes('AC')) {
        input.value=''
    }
        submit.addEventListener('click', function(){
            input.value=eval(styles);  
            return   
        })

    

})

})
