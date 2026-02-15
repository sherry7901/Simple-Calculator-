let input = document.getElementById('display');
let string = ""
let buttons = document.querySelectorAll('button')

let arr = Array.from(buttons);
arr.forEach(buttons=> {
    buttons.addEventListener('click' , (e) =>{
        if (e.target.innerHTML == '='){
            string = eval(string)
            input.value = string;
        }
        else if  (e.target.innerHTML == 'E'){
            string = ""
            input.value = string
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})



