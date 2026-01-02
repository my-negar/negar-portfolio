const themeBtn = document.getElementById("themeBtn");
 

themeBtn.addEventListener("click" , function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))

        {
            themeBtn.innerText = "Light";
        }  else{
themeBtn.innerText = "Dark";
        }
});