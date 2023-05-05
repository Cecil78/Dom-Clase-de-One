const btn = document.querySelector("button");
console.log(btn);

const createTask = (evento) => {
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
}



//Arrow functions o funciones anonimas 
btn.addEventListener('click', createTask);
