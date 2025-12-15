

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
//ریست دکمه ها
function resetButtons() {
    btn1.style.background = " " ;
     btn2.style.background = " " ;
      btn3.style.background = " " ;
       btn4.style.background = " " ;
}
//قفل کردن دکمه ها
function desableButtons() {
    btn1.disabled = true;
     btn2.disabled = true;
       btn3.disabled = true;
         btn4.disabled = true; 
}
//فعال کردن دوباره دکمه ها برای سوال بعدی
function enableButtons(){
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
}

//جواب درست
btn1.addEventListener("click", function () {
   resetButtons();
   btn1.style.background = "green";
   desableButtons();
 alert("آفرین! جواب درست رو انتخاب کردی"); 
});

//جواب غلط
btn2.addEventListener("click" , function () {
    resetButtons();
    btn2.style.background="red";
    desableButtons();
});

//جواب غلط
btn3.addEventListener("click" , function() {
    resetButtons();
    btn3.style.background="red";
    desableButtons();
});

//جواب غلط
btn4.addEventListener("click" , function() {
    resetButtons();
    btn4.style.background="red";
    desableButtons();
});