var field = document.getElementById('field');

document.getElementById("AC").onclick = function () {
    field.value = "";
};

document.getElementById("equal").onclick = function() {
    field.value = eval(field.value);
};

let buttons = document.querySelectorAll('.number');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if(buttons[i].value == "0") {
            if(field.value != "" && !isOper(field.value[field.value.length-1])) printNum(buttons[i].value);
        } else printNum(buttons[i].value);
    };
}

let actions = document.querySelectorAll('.action');

actions.forEach(element => {
    element.onclick = function() {
        if(!isOper(field.value[field.value.length-1]))
            field.value += element.value;
    };
});

function printNum(n) {
    field.value += n;
}

function isOper(c) {
    if(c == '+' || c == '-' || c == '*' || c == '/') return true;
    return false;
}
