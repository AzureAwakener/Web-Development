const getServant = async () => {
    // call API
    const response = await fetch('https://api.atlasacademy.io/export/NA/nice_servant_lore.json');
    const servants = await response.json()

    function capitalizeFirstLetter(str) {
        if (!str) return str; // Handle empty strings safely
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    //Favorite Characters
    const favServants = [
        305100, // Don Quixote
        2800100, // Oberon
        1100700, // Demon King Nobunaga
    ]

    const favorites = servants.filter(servant => favServants.includes(servant.id))

    const container = document.getElementById("favoriteServants")
    container.innerHTML = ""

    favorites.forEach(servant => {
        const charaImg = servant.extraAssets.charaGraph.ascension[4]

        container.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="card servant-card h-100 shadow-sm">
                <div class="servant-image-wrapper">
                    <img src="${charaImg}" class="servant-artwork" alt="${servant.name}">
                </div>

                <div class="card-body d-flex flex-column p-3">

                    <div class="d-flex align-items-center gap-2 mb-2">
                        <span class="badge">${capitalizeFirstLetter(servant.className)}</span>
                        <span class="servant-rarity" title="${servant.rarity} Stars">${"★".repeat(servant.rarity)}</span>
                    </div>

                    <h3 class="h5 card-title mb-3">${servant.name}</h3>

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
                        <button type="button" class="btn btn-outline-primary btn-sm">
                            View Details
                        </button>
                    </div>

                </div>
            </div>
        </div>
    `})
}

getServant()