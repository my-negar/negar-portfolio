 const form =
        document.querySelector("form");

        form.addEventListener("submit",
            function(e) {
                e.preventDefault(); //
                const username = form.username.value;
                const password = form.password.value;

                if(username && password){
                    alert("Lagin successful!\nUsername:" + username);
                }
                else{
                    alert("please fill in all fileds")}
            });