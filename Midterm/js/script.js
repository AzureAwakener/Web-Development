// Pagination
var elCurrentPage = document.getElementById("currentpage");
var elServantList = document.getElementById("servantList");
var page = 1;
var perPage = 20;
var finalPage = 1;

const getServants = async () => {
    elServantList.innerHTML = '';
    const response = await fetch('https://api.atlasacademy.io/export/NA/nice_servant_lore.json');
    const servants = await response.json();
    const excludedNPCs = [0, 83, 149, 151, 152, 168, 240, 333, 411, 412];

    // Servant Index
    const playableServants = servants.filter(servant => !excludedNPCs.includes(servant.collectionNo));
    playableServants.sort((a, b) => a.collectionNo - b.collectionNo);
    const servantList = document.getElementById("servantList");

    // Pagination
    finalPage = Math.ceil(playableServants.length / perPage);
    elCurrentPage.innerHTML = page;

    var startIndex = (page - 1) * perPage;
    var endIndex = Math.min(startIndex + perPage, playableServants.length);

    for(var i = startIndex; i < endIndex; i++){
        const servant = playableServants[i];
        
        servantList.innerHTML += `
                <div class="card">
                    <div class="card-body d-flex align-items-center gap-4">
                        <img src="${servant.extraAssets.status.ascension[1]}"
                             width="70" height="70"
                             class="rounded-circle bg-light"
                             style="object-fit: contain;">
    
                        <h5 class="mb-0">
                            #${servant.collectionNo} ${servant.name}
                        </h5>
    
                        <span class="badge bg-success">
                            ${servant.className}
                        </span>
                    </div>
                </div>
            `;
    }
}

// Pagination
function prev() {
    page -= 1;
    if (page == 0) {
        page = finalPage;
    }
    getServants();
}

function next() {
    page += 1;
    if (page > finalPage) {
        page = 1;
    }
    getServants();
}

getServants();