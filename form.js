// Gets the name from the answer input tag
let nameRecieved = document.getElementById('answer');
// When you type letters into the form box, it will activate the getName function.
nameRecieved.addEventListener('keyup', getName);
// Gets p tag with the id of print.
let printer = document.getElementById('print');

// Takes the answer from the input element in the form and puts it into a p tag.
function getName() {
    printer.innerHTML = nameRecieved.value;
}