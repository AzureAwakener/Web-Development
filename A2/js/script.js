var characters = [
      {
        id: "C7-001",
        name: "Rean Schwarzer",
        dateOfBirth: "May, S.1186",
        age: 20,
        occupation: "Instructor",
        title: "Class VII Member",
        image: "images/Rean.png",
        weapon: "Sword",
        combatRole: "Physical Attacker",
        status: "Berserk",
        biography: "A student of Thors Military Academy and a member of Class VII, known for his swordsmanship and strong sense of responsibility."
      },
      {
        id: "C7-002",
        name: "Alisa Reinford",
        dateOfBirth: "S.1186",
        age: 20,
        occupation: "Senior Manager",
        title: "Class VII Member",
        image: "images/Alisa.png",
        weapon: "Bow",
        combatRole: "Ranged Attacker",
        status: "Alive",
        biography: "A member of Class VII from the prominent Reinford family. She uses a bow in combat."
      }
    ];

    var character = document.getElementById("characterList");

    for (var i = 0; i < characters.length; i++) {
      character.innerHTML +=
        `<div class="col-12 col-sm-6 col-lg-4">
      <div class="card character-card h-100">

        <img
          src="${characters[i].image}"
          class="card-img-top portrait"
          alt="${characters[i].name}">

        <div class="card-body">
          <div class="h5">${characters[i].name}</div>

          <div class="text-secondary small">
            ${characters[i].title.toUpperCase()}
          </div>

          <hr>

          <div> Affiliation: Class VII</div>
          <div> Date of Birth: ${characters[i].dateOfBirth}</div>
          <div> Age: ${characters[i].age}</div>
          <div class="mb-3"> Occupation: ${characters[i].occupation}</div>

          <button
            class="btn btn-dark w-100"
            data-bs-toggle="modal"
            data-bs-target="#characterModal"
            onclick="showProfile(${i})">
            View Profile
          </button>
        </div>

        <div class="student-id text-center p-2">
          CADET ID: ${characters[i].id}
        </div>

      </div>
    </div>`;
    }

    function showProfile(index) {
      var character = characters[index];

      document.getElementById("profileName").innerHTML =
        character.name;

      document.getElementById("profileImage").src =
        character.image;

      document.getElementById("profileImage").alt =
        character.name;

      document.getElementById("profileID").innerHTML =
        character.id;

      document.getElementById("profileBio").innerHTML =
        character.biography;

      document.getElementById("profileWeapon").innerHTML =
        character.weapon;

      document.getElementById("profileRole").innerHTML =
        character.combatRole;

      document.getElementById("profileStatus").innerHTML =
        character.status;

      document.getElementById("profileDOB").innerHTML =
        character.dateOfBirth;

      document.getElementById("profileAge").innerHTML =
        character.age;

      document.getElementById("profileOccupation").innerHTML =
        character.occupation;
    }