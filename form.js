let nameRecieved = document.getElementById('answer');
nameRecieved.addEventListener('keyup', getName);
let printer = document.getElementById('print');

function getName() {
    printer.innerHTML = nameRecieved.value;
}