alert('Desenvolvido para o PIM, por Eduardo Pucinelli')

function hover() {
    var x = document.querySelector("a");
    x.style.color = 'orange'
    x.style.textDecoration = 'overline'
}

function onleave() {
    var x = document.querySelector('a');
    x.style.color = 'white'
    x.style.textDecoration = 'none'
}
