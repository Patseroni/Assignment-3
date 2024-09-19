const heading1 = document.querySelector("#heading");
const button1 = document.querySelector("#button1");

    button1.addEventListener('click', function(){
        if(heading1.textContent == "Hello World!"){
            heading1.textContent = "Goodbye World!";
        }
        else{
            heading1.textContent = "Hello World!";
        }  
    });

