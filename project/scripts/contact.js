const form = document.getElementById("joinForm");
const successMessage = document.getElementById("successMessage");
const successText = document.getElementById("successText");
const resetBtn = document.getElementById("resetBtn");

function getSelectedInterests() {
    const checkboxes = document.querySelectorAll("input[name='interests']:checked");
    let interests = [];

    for (let i = 0; i < checkboxes.length; i++) {
        interests.push(checkboxes[i].value);
    }

    return interests;
}

function saveSubmission(data) {
    localStorage.setItem("lastSubmission", JSON.stringify(data));
}

function loadLastSubmission() {
    const saved = localStorage.getItem("lastSubmission");
    const container = document.getElementById("savedSubmission");

    if (!saved) {
        container.innerHTML = `<p class="no-result">No previous submission found.</p>`;
        return;
    }

    const data = JSON.parse(saved);

    container.innerHTML = `
        <div class="submission-card">
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Age Group:</strong> ${data.age}</p>
            <p><strong>Experience:</strong> ${data.experience}</p>
            <p><strong>Interests:</strong> ${data.interests.join(", ")}</p>
            <p><strong>Message:</strong> ${data.message || "None provided"}</p>
            <small>Submitted on: ${data.date}</small>
        </div>
    `;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;
    const experience = document.getElementById("experience").value;
    const interests = getSelectedInterests();
    const message = document.getElementById("message").value.trim();

    if (firstName === "" || lastName === "" || email === "" || age === "" || experience === "") {
        alert("Please fill in all required fields.");
        return;
    }

    if (interests.length === 0) {
        alert("Please select at least one interest.");
        return;
    }

    const submission = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        experience: experience,
        interests: interests,
        message: message,
        date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    };

    saveSubmission(submission);
    loadLastSubmission();

    successText.textContent = `Thank you ${firstName}! We have received your interest and will be in touch at ${email} soon.`;

    form.style.display = "none";
    successMessage.style.display = "block";
});

resetBtn.addEventListener("click", () => {
    form.reset();
    form.style.display = "block";
    successMessage.style.display = "none";
});

function setupMenu() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");

        if (isOpen) {
            toggle.textContent = "✕";
        } else {
            toggle.textContent = "☰";
        }
    });
}

loadLastSubmission();
setupMenu();