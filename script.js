const font = { "a": "!", "b": "%", "c": ")", "d": "O", "e": "7", "f": "@", "g": "&", "h": "L", "i": "$", "j": "X",
"k": "-", "l": ";", "m": "<", "n": "?", "o": "o", "p": "A", "q": "+", "r": "{", "s": "/", 
"t": ".", "u": "8", "v": "P", "w": "|", "x": "^", "y": "m", "z": "C", " ": "=", "!": "[", ".": "(", 
",": "6", "'": ",", ":": "#", ";": "K", "?": "_"};

var random_character = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','<','@','<','#','<','$','<','%','<','^','<','&','<','*','<','(',')','+','='];


const encodeButton = document.querySelector("#encode");

const decodeButton = document.querySelector("#decode");

const input = document.querySelector("#textBox");

const para = document.querySelector("p");

// let textCopy = document.getElementById("result");



encodeButton.addEventListener("click", codify);

decodeButton.addEventListener("click", decodify);

function codify() {
    originalMessage = input.value;
    newMessage = [];
    for (var x = 0; x < originalMessage.length; x++) {
        var c = originalMessage.charAt(x);
        // console.log(c);
        // console.log(typeof c);
        newChar = c;
        newMessage.push(font[newChar]);
        newMessage.push(random_character[Math.floor(Math.random() * 81)]);
    }
    // space = space.join(newMessage);
    para.textContent = newMessage.join("");
    clearInput();
}

function decodify() {
    encodedMessage = input.value;
    newMessage = [];

    for (var x = 0; x < encodedMessage.length; x += 2) {
        var c = encodedMessage.charAt(x);
        newMessage.push(getKeyByValue(font,c));
    }
    para.textContent = newMessage.join("");
    clearInput();
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function clearInput() {
    input.value = "";
}

function copyText() {
    // console.log(para.textContent);
    navigator.clipboard.writeText(para.textContent);
    // console.log(para.textContent);
}