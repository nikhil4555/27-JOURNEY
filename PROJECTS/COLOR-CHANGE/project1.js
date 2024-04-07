const boxes = document.querySelectorAll(".box");

const body = document.querySelector("body");

boxes.forEach((box)=> {
    box.addEventListener('click', function(e) {
        body.style.backgroundColor = e.target.id;
    }); // Closing parenthesis was missing here
});
