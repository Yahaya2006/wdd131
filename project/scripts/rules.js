const rules = [
    {
        title: "Original Work Only",
        description: `Poets must perform only their own original 
        work. No covers or adaptations of other poets' material 
        are permitted.`
    },
    {
        title: "Three-Minute Time Limit",
        description: `Each performance must not exceed three minutes. 
        Penalties are applied for going over time: 
        0.5 points per 10 seconds over the limit.`
    },
    {
        title: "No Props or Costumes",
        description: `Poets perform with nothing but their voice and 
        body. No musical instruments, costumes, or props 
        of any kind are allowed on stage.`
    },
    {
        title: "Audience as Judges",
        description: `Five judges are chosen randomly from the audience 
        before the show begins. This keeps the competition 
        democratic and community-driven.`
    },
    {
        title: "Solo or Group",
        description: `Poets can perform solo or as part of a group piece. 
        Group pieces can have up to three performers 
        on stage at the same time.`
    },
    {
        title: "Multiple Rounds",
        description: `Competitions typically have two or three rounds. 
        The highest-scoring poets from each round advance 
        to the final round.`
    }
];

const allPoets = [
    {
        name: "Marc Kelly Smith",
        origin: "USA",
        city: "Chicago",
        known: "Founder of slam poetry and the Uptown Poetry Slam.",
        year: "1984"
    },
    {
        name: "Saul Williams",
        origin: "USA",
        city: "New York",
        known: "Poet, musician, and actor known for merging hip-hop and spoken word.",
        year: "1990s"
    },
    {
        name: "Sarah Kay",
        origin: "USA",
        city: "New York",
        known: "Founder of Project VOICE, bringing spoken word poetry to schools.",
        year: "2004"
    },
    {
        name: "Souleymane Diamanka",
        origin: "France",
        city: "Bordeaux",
        known: "Franco-Senegalese poet who blends Wolof and French in his performances.",
        year: "2000s"
    },
    {
        name: "Grand Corps Malade",
        origin: "France",
        city: "Paris",
        known: "One of the most famous French slam poets, known for his emotional storytelling.",
        year: "2000s"
    },
    {
        name: "Gil Scott-Heron",
        origin: "USA",
        city: "New York",
        known: "Pioneer of spoken word and proto-rap, known as the godfather of rap.",
        year: "1970s"
    }
];

function displayRules() {
    const grid = document.getElementById("rulesGrid");
    let html = "";

    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        html += `
            <div class="rule-card">
                <h3>${rule.title}</h3>
                <p>${rule.description}</p>
            </div>
        `;
    }

    grid.innerHTML = html;
}

function displayPoets(poets, containerId) {
    const grid = document.getElementById(containerId);

    if (poets.length === 0) {
        grid.innerHTML = `<p class="no-result">No poets found for this filter.</p>`;
        return;
    }

    const cards = poets.map(poet => `
        <div class="poet-card-full">
            <h3>${poet.name}</h3>
            <span class="poet-badge">${poet.city}, ${poet.origin}</span>
            <p>${poet.known}</p>
            <small>Active since: ${poet.year}</small>
        </div>
    `);

    grid.innerHTML = cards.join("");
}

function buildFilters() {
    const bar = document.getElementById("filterBar");

    let origins = [];
    for (let i = 0; i < allPoets.length; i++) {
        const origin = allPoets[i].origin;
        if (origins.indexOf(origin) === -1) {
            origins.push(origin);
        }
    }

    let buttonsHtml = `<button class="filter-btn active" data-origin="all">All</button>`;

    for (let i = 0; i < origins.length; i++) {
        buttonsHtml += `<button class="filter-btn" data-origin="${origins[i]}">${origins[i]}</button>`;
    }

    bar.innerHTML = buttonsHtml;

    bar.addEventListener("click", (e) => {
        if (!e.target.classList.contains("filter-btn")) {
            return;
        }

        const buttons = document.querySelectorAll(".filter-btn");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        e.target.classList.add("active");

        const selected = e.target.dataset.origin;

        if (selected === "all") {
            displayPoets(allPoets, "filteredPoetsGrid");
        } else {
            const filtered = allPoets.filter(poet => poet.origin === selected);
            displayPoets(filtered, "filteredPoetsGrid");
        }
    });

    displayPoets(allPoets, "filteredPoetsGrid");
}

displayRules();
displayPoets(allPoets, "fullPoetsGrid");
buildFilters();