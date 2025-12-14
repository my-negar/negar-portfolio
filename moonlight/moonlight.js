const themeBtn = document.getElementById("themeBtn");
 

themeBtn.addEventListener("click" , function(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark"))
    {
        themeBtn.innerText = "Lighr"
    }  else{
        themeBtn.innerText ="Dark"
    }
 });

