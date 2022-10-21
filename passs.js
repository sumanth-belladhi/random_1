const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "_", "-", "+", "=", "{", "[", "}", "]",
    ",", "|", ":", ";", "<", ">", ".", "?", "/"
];
let one = document.getElementById("one");
let two = document.getElementById("two");

function generate() {
    let word1 = "";
    let word2 = "";
    for (let i = 0; i < 15; i++) {
        if (i === 0) {
            word1 += characters[Math.floor(Math.random() * 26)];
            word2 += characters[Math.floor(Math.random() * 26)];
        } else {
            word1 += characters[Math.floor(Math.random() * 91)];
            word2 += characters[Math.floor(Math.random() * 91)];

        }


    }
    one.innerHTML = word1;
    two.innerHTML = word2;

}