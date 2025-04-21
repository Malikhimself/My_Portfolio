// const roles = ["UI/UX Designer", "Frontend Developer", "Creative Thinker"];
// const roleEl = document.getElementById("role");
// let index = 0;

// function showRole() {
//     roleEl.style.animation = "none";
//     void roleEl.offsetWidth; // trigger reflow
//     roleEl.textContent = roles[index];
//     roleEl.style.animation = "typing 2s steps(22, end), forwards";
//     index = (index + 1) % roles.length;
// }

// showRole();
// setInterval(showRole, 3000); // change role every 3 seconds

const roles = ["UI/UX Designer", "Frontend Developer", "Creative Thinker"];
const textEl = document.getElementById("typewriter-text");

let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (typing) {
        textEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            typing = false;
            setTimeout(typeEffect, 1500); // Pause before deleting
        } else {
            setTimeout(typeEffect, 100); // Speed of typing
        }
    } else {
        textEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            typing = true;
            roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
            setTimeout(typeEffect, 300); // Pause before typing the next role
        } else {
            setTimeout(typeEffect, 50); // Pause before typing the next role
        }
    }
}

typeEffect(); // Start the typewriter effect