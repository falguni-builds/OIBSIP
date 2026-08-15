
const toggleBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    toggleBtn.innerHTML = "☀️";
}

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggleBtn.innerHTML = "☀️";
        localStorage.setItem("theme", "light");
    }
    else{
        toggleBtn.innerHTML = "🌙";
        localStorage.setItem("theme", "dark");
    }

});


const words = [
    "Web Developer",
    "Frontend Developer",
    "Problem Solver",
    "Aspiring Full Stack Developer",
    "Computer Engineering Student"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    }
    else{

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();