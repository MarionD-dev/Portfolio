// Navbar scroll effect
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        if (window.scrollY >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}

// Navbar collapse on mobile click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (menuToggle.classList.contains("show")) {
                new bootstrap.Collapse(menuToggle).toggle();
            }
        });
    });
}

// Skills from JSON
function createSkillsFromJSON() {
    const container = document.querySelector("#skills-container");
    fetch("data/skills.json")
        .then(r => r.json())
        .then(data => {
            data.forEach(item => {
                const col = document.createElement("div");
                col.classList.add("col-lg-4", "col-md-4");
                col.innerHTML = `
                    <div class="skill-card">
                        <img src="./images/${item.image}" alt="${item.title}">
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                    </div>`;
                container.appendChild(col);
            });
        });
}

// Portfolio from JSON
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio-container");
    fetch("data/portfolio.json")
        .then(r => r.json())
        .then(data => {
            data.forEach(item => {
                const col = document.createElement("div");
                col.classList.add("col-lg-4", "col-md-4");
                col.innerHTML = `
                    <div class="project-card">
                        <div class="project-img-wrapper">
                            <img src="images/${item.image}" alt="${item.title}">
                        </div>
                        <div class="project-body">
                            <h3>${item.title}</h3>
                            <span class="project-type">${item.type}</span>
                            <p>${item.text}</p>
                            <a href="${item.link}" class="project-btn" target="_blank">Voir le projet</a>
                        </div>
                    </div>`;
                container.appendChild(col);
            });
        });
}

handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();
