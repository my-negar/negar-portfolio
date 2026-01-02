let inputBox = document.getElementById("inputBox")
let buttons = document.querySelectorAll("button")

let string = '';

buttons.forEach(element => {
    element.addEventListener("click", (b) => {

        //=
        if (b.target.innerText == '=') {
            string = String(eval(string));
            inputBox.value = string;
        }

        // C
        else if (b.target.innerText == "C") {
            string = " ";
            inputBox.value = string;
        }

        // +/-
        else if (b.target.id == "plusMinus") {
            string = String(-eval(string));
            inputBox.value = string;
        }

        //anoder 

        else {
            string += b.target.innerText;
            inputBox.value = string;
        }
    });
});