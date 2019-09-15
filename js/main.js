const inputForm = document.querySelectorAll(".input-block input");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    validateForm();
});

function validateForm(){
    inputForm.forEach( inputForm => {
        if(inputForm.value == ""){
            form.classList.add("form-refuse");
        }
    });    
}

form.addEventListener("animationend", () =>{
    form.classList.remove("form-refuse");
})