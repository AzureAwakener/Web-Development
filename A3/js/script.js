const getServant = async () => {
    const response = await fetch('https://api.atlasacademy.io/export/NA/nice_servant_lore.json');
    const servants = await response.json();

    function capitalizeFirstLetter(str) {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Favorite Characters
    const favServants = [
        305100,  // Don Quixote
        2800100, // Oberon
        1100700  // Demon King Nobunaga
    ];

    const favorites = servants.filter(servant =>
        favServants.includes(servant.id)
    );

    const container = document.getElementById("favoriteServants");
    const searchInput = document.getElementById("servantSearch");
    const classSelect = document.getElementById("servantClass");
    const raritySelect = document.getElementById("servantRarity");
    const filterForm = document.querySelector("form");

    // Modal Data
    const modalElement = document.getElementById("servantDetailsModal");
    const servantModal = new bootstrap.Modal(modalElement);

    const modalImage = document.getElementById("modalServantImage");
    const modalClass = document.getElementById("modalServantClass");
    const modalRarity = document.getElementById("modalServantRarity");
    const modalName = document.getElementById("modalServantName");
    const modalAtk = document.getElementById("modalServantAtk");
    const modalHp = document.getElementById("modalServantHp");
    const modalBio = document.getElementById("modalServantBio");
    const modalCards = document.getElementById("modalServantCards");
    const modalNpName = document.getElementById("modalServantNpName");
    const modalNpDescription = document.getElementById("modalServantNpDescription");

    // Currently displayed Servants
    let displayedServants = favorites;

    // Get Servant artwork
    function getServantImage(servant) {
        return servant.extraAssets.charaGraph.ascension[4] || "";
    }

    // Render Servant Cards
    function renderServants(servantList) {
        displayedServants = servantList;
        container.innerHTML = "";

        if (servantList.length === 0) {
            container.innerHTML = `
                <div class="col-12">
                    <p class="text-center text-secondary"> No Servants found. Try different filters. </p>
                </div>
            `;
            return;
        }

        servantList.forEach(servant => {
            const charaImg = getServantImage(servant);

            container.innerHTML += `
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="card servant-card h-100 shadow-sm">
                        <div class="servant-image-wrapper">
                            <img src="${charaImg}" class="servant-artwork" alt="${servant.name}" loading="lazy">
                        </div>

                        <div class="card-body d-flex flex-column p-3">
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <span class="badge"> ${capitalizeFirstLetter(servant.className)} </span>

                                <span class="servant-rarity" title="${servant.rarity} Stars"> ${"★".repeat(servant.rarity)} </span>
                            </div>

                            <h3 class="h5 card-title mb-3"> ${servant.name} </h3>

                            <div class="row g-2 mb-3">
                                <div class="col-6">
                                    <div class="servant-stat p-2 rounded">
                                        <small>MAX ATK</small>
                                        <h6 class="mb-0">
                                            ${servant.atkMax.toLocaleString()}
                                        </h6>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="servant-stat p-2 rounded">
                                        <small>MAX HP</small>
                                        <h6 class="mb-0">
                                            ${servant.hpMax.toLocaleString()}
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-auto">
                                <button type="button" class="btn btn-outline-primary btn-sm" data-servant-id="${servant.id}">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Search the data when the form is submitted
    filterForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = searchInput.value.trim().toLowerCase();
        const selectedClass = classSelect.value.toLowerCase();
        const selectedRarity = raritySelect.value;

        const results = servants.filter(servant => {
            const matchesName = servant.name.toLowerCase().includes(name);
            const matchesClass = selectedClass === "all classes" ||
                servant.className.toLowerCase() === selectedClass;
            const matchesRarity = selectedRarity === "All Rarities" ||
                servant.rarity === parseInt(selectedRarity);

            return matchesName && matchesClass && matchesRarity;
        });

        renderServants(results);
    });

    // Reset the filters and restore featured Servants
    filterForm.addEventListener("reset", () => {
        setTimeout(() => {
            renderServants(favorites);
        }, 0);
    });

    // Modal View
    container.addEventListener("click", event => {
        const button = event.target.closest("[data-servant-id]");

        if (!button) return;

        const servantId = Number(button.dataset.servantId);
        const servant = displayedServants.find(
            item => item.id === servantId
        );

        if (!servant) return;

        const charaImg = getServantImage(servant);
        const charaBio =
            servant.profile.comments[0].comment ||
            "No biography available.";

        modalImage.src = charaImg;
        modalImage.alt = servant.name;

        modalClass.textContent = capitalizeFirstLetter(servant.className);
        modalRarity.textContent = "★".repeat(servant.rarity);

        modalName.textContent = servant.name;
        modalAtk.textContent = servant.atkMax.toLocaleString();
        modalHp.textContent = servant.hpMax.toLocaleString();
        modalBio.textContent = charaBio;

        const cardTypes = {
            1: { name: "Buster", color: "#dc3545" },
            2: { name: "Arts", color: "#0d6efd" },
            3: { name: "Quick", color: "#198754" }
        };

        modalCards.innerHTML = "";

        (servant.cards || []).forEach(card => {
            const cardType = cardTypes[card];

            if (!cardType) return;

            modalCards.innerHTML += `
                <span class="badge"
                      style="background-color: ${cardType.color}; color: white;">
                    ${cardType.name}
                </span>
            `;
        });

        const noblePhantasm = servant.noblePhantasms[0];

        if (noblePhantasm) {
            modalNpName.src = noblePhantasm.icon || "";
            modalNpName.alt =
                noblePhantasm.name || "Noble Phantasm Artwork";

            modalNpDescription.textContent =
                noblePhantasm.detail ||
                "No Noble Phantasm description available.";
        } else {
            modalNpName.src = "";
            modalNpDescription.textContent =
                "No Noble Phantasm available.";
        }

        servantModal.show();
    });

    // Display featured Servants initially
    renderServants(favorites);
};

getServant().catch(error => {
    console.error("Failed to load Servants:", error);

    const container = document.getElementById("favoriteServants");

    container.innerHTML = `
        <div class="col-12">
            <p class="text-center text-danger">
                Unable to load Servants. Please refresh the page.
            </p>
        </div>
    `;
});