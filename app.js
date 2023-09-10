let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach(function(btn) {
    // console.log(btn);

    btn.addEventListener("click", function(e) {
        const classes = e.currentTarget.classList;
        // console.log(classes);

        if (classes.contains('decrease')) {
            count--;
        }
        else if (classes.contains('increase')) {
            count++;
        }
        else if (classes.contains('reset')) {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count <0 ) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})
