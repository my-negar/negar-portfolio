let input = document.getElementById("input");
let addBtn = document. getElementById("btn");
let list = document.getElementById("list");

addBtn.addEventListener("click" ,
    function() {
        let task = input.value.trim();
        if(task  !== "") { 
            let item = document.createElement("div");
            item.textContent = task;
        }
    });
