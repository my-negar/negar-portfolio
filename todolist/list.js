const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click",
    function () {
        const value = input.value;
        if (value === " ") return;

        const li = document.createElement("li");
        li.innerText = value;

        li.addEventListener("click", function () {
            li.classList.toggle("done");
        });

        li.addEventListener("dblclick", function () {
            li.remove();
        });

        list.appendChild(li);
        input.value = " ";
    });

input.addEventListener("keydown",
    function (event) {
        if (event.key === "Enter") {
            btn.click();
        }
    });







