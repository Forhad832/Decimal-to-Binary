const submit = document.querySelector('#submit');
const result = document.querySelector('#result');

submit.addEventListener('click', function binary(e){
    e.preventDefault();

    const num = document.querySelector('#number').value;

    if(num== "" || num < 0 ){
        alert('please enter a valid number')
    }else{
        result.style.visibility = 'visible';
    }

    let binary = Number(num).toString(2);
    result.innerHTML = binary;
    
})