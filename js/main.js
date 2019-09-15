const inputForm = document.querySelectorAll(".input-block input");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const welcomeMsg = document.querySelector("#welcomeMsg");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    validateForm();
});

function validateForm(){
    inputForm.forEach( inputForm => {
        if(inputForm.value == ""){
            form.classList.add("form-refuse");
        }else{
            form.classList.add("form-accept");
            welcomeMsgShow();
        }
    });
}

form.addEventListener("animationend", () =>{
    form.classList.remove("form-refuse");
})

function welcomeMsgShow(){
    let username = inputForm[0].value;

    welcomeMsg.classList.add("active-msg");
    welcomeMsg.innerHTML = `Welcome, ${username}, glad to see you back!`;

    setTimeout(() => {
        form.style.display = "none";
    }, 500);
}