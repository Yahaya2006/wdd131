const poems = [
    {
        title: "Totally like whatever, you know?",
        author: "Taylor Mali",
        excerpt: `In case you hadn't noticed,
                        it has somehow become uncool
                        to sound like you know what you're talking about?
                        And so when you say what you believe,
                        try to say it as if you're not sure.`

    },
    {
        title: "When the Fat Girl Gets Skinny",
        author: "Blythe Baird",
        excerpt: `If you develop an eating disorder
    when you are already thin to begin with,
    you go to the hospital.
    If you develop an eating disorder
    when you are not thin to begin with,
    you are a success story.`

    },
    {
        title: "OCD",
        author: "Neil Hilborn",
        excerpt: `The first time I saw her,
    everything in my head went quiet.
    All the dead-end thoughts, all the missed connections
    shut up for once in my life.`
    },
    {
        title: "Being Human Differently",
        author: "Souleyman Diamanka",
        excerpt: `so you know that humanity is just one people seen from up there
    one people with many languages, many cultures, and many skin colors `
    },
    {
        title: "Black Life 1",
        author: "Black Panther",
        excerpt: `|Don't blame me for being dark in my writing, 
            I was born on a blackout day and I grew up in the dark. 
            At our place, electricity is still a rare commodity.`

    }
]

const featuredPoets = [
    { name: "Black Panther", origin: "Republic of Congo", known: "Poet and slam artist" },
    { name: "Grand Corps Malade", origin: "France", known: "Poet and Slam Artist" },
    { name: "Mark Kelly Smith", origin: "New York, USA", known: "Founder of the National Poetry Slam" }
]

function displayPoem(index) {
    const poem = poems[index];
    document.getElementById("poemTitle").textContent = poem.title;
    document.getElementById("poemAuthor").textContent = `by ${poem.author}`;
    document.getElementById("poemExcerpt").textContent = poem.excerpt;
    localStorage.setItem("lastPoemIndex", index);
}

function loadInitialPoem() {
    const saved = localStorage.getItem("lastPoemIndex");

    if (saved !== null) {
        displayPoem(parseInt(saved));
    } else {
        displayPoem(0);
    }
}

function setupPoemButton() {
    const btn = document.getElementById("newPoemBtn");

    btn.addEventListener("click", () => {
        let current = parseInt(localStorage.getItem("lastPoemIndex"));

        if (isNaN(current)) {
            current = 0;
        }

        const next = (current + 1) % poems.length;
        displayPoem(next);
    });
}

function displayFeaturedPoets() {
    const grid = document.getElementById("poetsGrid");
    let html = "";

    for (let i = 0; i < featuredPoets.length; i++) {
        const poet = featuredPoets[i];
        html += `
            <div class="poet-card">
                <h3>${poet.name}</h3>
                <p>${poet.origin}</p>
                <p><em>${poet.known}</em></p>
            </div>
        `;
    }

    grid.innerHTML = html;
}

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

loadInitialPoem();
setupPoemButton();
displayFeaturedPoets();
setupMenu();