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
        1100600, // Antonio Salieri
        1100700, // Oberon
    ]

    const favorites = servants.filter(servant => favServants.includes(servant.id))

    const container = document.getElementById("favoriteServants")
    container.innerHTML = ""

    favorites.forEach(servant => {
        const charaImg = servant.extraAssets.charaGraph.ascension[4]
        const charaBio = servant.profile.comments[0].comment

        container.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${charaImg}"
                            class="card-img-top" alt="${servant.name}">
                        <div class="card-body">
                            <span class="badge text-bg-primary mb-2">${capitalizeFirstLetter(servant.className)}</span>
                            <span class="badge text-bg-warning mb-2">${servant.rarity} Stars</span>
                            <h3 class="h5 card-title">${servant.name}</h3>
                            <p class="card-text text-secondary">
                                ${charaBio}
                            </p>
                            <button type="button" class="btn btn-outline-primary w-100">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
        `
    })
}

getServant()