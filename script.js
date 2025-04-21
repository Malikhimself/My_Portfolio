const roles = ["UI/UX Designer", "Frontend Developer", "Creative Thinker"];
const roleEl = document.getElementById("role");
let index = 0;

function showRole() {
    roleEl.style.animation = "none";
    void roleEl.offsetWidth; // trigger reflow
    roleEl.textContent = roles[index];
    roleEl.style.animation = "typing 2s steps(20, end), blink 0.75s step-end infinite";
    index = (index + 1) % roles.length;
}

showRole();
setInterval(showRole, 3000); // change role every 3 seconds