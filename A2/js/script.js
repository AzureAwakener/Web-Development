var characters = [
      {
        id: "C7-001",
        name: "Sara Valestein",
        dateOfBirth: "S.1179",
        age: 27,
        occupation: "Bracer",
        title: "Purple Lightning",
        affiliation: "Bracer Guild, Thors Military Academy, Northern Jaegers",
        image: "images/Sara.png",
        weapon: "Sword and Gun",
        combatRole: "Physical Attacker",
        status: "Alive",
        biography: `An A-Rank bracer known by her title, "Purple Lightning". She had previously served as the old Class VII's homeroom teacher. An orphan of the North Ambrian Disaster, she was raised as the adoptive daughter of Colonel Valestein, the founder of the Northern Jaegers.`
      },
      {
        id: "C7-002",
        name: "Rean Schwarzer",
        dateOfBirth: "May, S.1186",
        age: 20,
        occupation: "Instructor",
        title: "Divine Blade of Ash",
        affiliation: "Thors Military Academy, Eight Leaves One Blade",
        image: "images/Rean.png",
        weapon: "Longsword",
        combatRole: "Physical Attacker",
        status: "Imprisoned",
        biography: "A young man who was born the son of Chancellor Osborne before a grim chain of events led to his adoption into the Schwarzer family. He is a practitioner of the Eight Leaves One Blade style, and harbors a mysterious power within him."
      },
      {
        id: "C7-003",
        name: "Alisa Reinford",
        dateOfBirth: "S.1186",
        age: 20,
        occupation: "Senior Manager",
        title: "Reinford Group",
        affiliation: "Reinford Group, Thors Military Academy",
        image: "images/Alisa.png",
        weapon: "Bow",
        combatRole: "Ranged Attacker/Supporter",
        status: "Alive",
        biography: "The daughter of the Reinford family—the owners of Erebonia’s largest heavy industry manufacturer. Like Rean, she was a member of the original Class VII. After graduating Thors, she put the management skills she'd gained from her mother to use as General Manager of the RF Group's Development Division."
      },
      {
        id: "C7-004",
        name: "Elliot Craig",
        dateOfBirth: "S.1187",
        age: 19,
        occupation: "Music Producer",
        title: "Traveling Musician",
        affiliation: "Thors Military Academy",
        image: "images/Elliot.png",
        weapon: "Orbal Staff",
        combatRole: "Arts Attacker/Healer",
        status: "Alive",
        biography: "The son of the Craig the Red, the most formidable general of the Imperial Army. After graduating from Thors, he enrolled at a music academy in Heimdallr, fulfilling his lifelong dream of making his debut as a professional musician."
      },
      {
        id: "C7-005",
        name: "Laura S. Arseid",
        dateOfBirth: "S.1186",
        age: 20,
        occupation: "Acting Master of the Arseid School",
        title: "Practitioner of the Arseid Style",
        affiliation: "Thors Military Academy, Arseid School",
        image: "images/Laura.png",
        weapon: "Greatsword",
        combatRole: "Physical Attacker",
        status: "Alive",
        biography: "The daughter of Viscount Arseid—the head of a famous military family in Erebonia. Like Rean, she is a former member of the old Class VII and a practicing swordsman. After graduating Thors, she trained rigorously with her father for a year and a half, learning all of the Arseid style's techniques and qualifying as acting master of the school."
      },
      {
        id: "C7-006",
        name: "Jusis Albarea",
        dateOfBirth: "S.1186",
        age: 20,
        occupation: "Acting Lord of the Kreuzen Province",
        title: "Second Son of House Albarea",
        affiliation: "Thors Military Academy, Kreuzen Province",
        image: "images/Jusis.png",
        weapon: "Knight Sword",
        combatRole: "Supporter",
        status: "Alive",
        biography: "The brilliant and talented second son of House Albarea—one of the Four Great Houses. He governs the Kreuzen Province as acting lord in the stead of his father Helmut—arrested for his role in the civil war—and brother Rufus—current governor general of Crossbell Province."
      },
      {
        id: "C7-007",
        name: "Machias Regnitz",
        dateOfBirth: "S.1186",
        age: 20,
        occupation: "Investigator",
        title: "Son of the Governor",
        affiliation: "Thors Military Academy",
        image: "images/Machias.png",
        weapon: "Orbal Shotgun",
        combatRole: "Supporter",
        status: "Alive",
        biography: "The son of the governor of Heimdallr. Bright and hard-working, Machias is as strict toward himself as he is toward others. He studied at a political academy after graduating Thors, eventually finding employment at the Government Accountability Inspectorate."
      },
      {
        id: "C7-008",
        name: "Fie Claussell",
        dateOfBirth: "S.1188",
        age: 17,
        occupation: "Bracer",
        title: "Sylphid",
        affiliation: "Bracer Guild, Thors Military Academy, Zephyr",
        image: "images/Fie.png",
        weapon: "Twin Gunswords",
        combatRole: "Evasion Tank",
        status: "Alive",
        biography: "A young bracer with astounding combat prowess and physical capability, raised from youth by a jaeger corps known as Zephyr. A reunion with Xeno and Leonidas—her former allies—during the civil war made her determined to take up the path of a bracer, leading to her qualification into the guild under the guidance of Instructor Sara."
      },
      {
        id: "C7-009",
        name: "Emma Millstein",
        dateOfBirth: "S.1186",
        age: 20,
        occupation: "Wandering Witch",
        title: "Class President",
        affiliation: "Hexen Clan, Thors Military Academy",
        image: "images/Emma.png",
        weapon: "Orbal Staff",
        combatRole: "Arts Attacker/Healer",
        status: "Alive",
        biography: "A talented witch of the Hexen Clan who also served as the old Class VII's class president. She, along with Celine—her black cat familiar—guided Rean to becoming Valimar's awakener."
      },
      {
        id: "C7-010",
        name: "Gaius Worzel",
        dateOfBirth: "S.1186",
        age: 20,
        occupation: "Gralsritter",
        title: "Dominion No.8",
        affiliation: "Septian Church, Thors Military Academy",
        image: "images/Gaius.png",
        weapon: "Spear",
        combatRole: "Physical Attacker",
        status: "Missing in Action",
        biography: "A member of the nomadic people of the Nord Highlands. Like the rest of his people, he is deeply devout to both the Goddess and the wind. After graduating Thors, an incident in his homeland resulted in him inheriting both his stigma and the seat of Eighth Dominion from Father Barkhorn, thus inducting him into the Gralsritter of the Septian Church."
      },
      {
        id: "C7-011",
        name: "Millium Orion",
        dateOfBirth: "S.1191",
        age: 15,
        occupation: "Spy",
        title: "White Rabbit",
        affiliation: "Ironblood, Intelligence Division, Thors Military Academy",
        image: "images/Millium.png",
        weapon: "Airgetlam",
        combatRole: "Physical Attacker",
        status: "Deceased",
        biography: `A carefree young girl who is able to control a combat shell named "Airgetlam." She serves the Imperial Army's Intelligence Division as one of its agents. She's also a member of the Ironbloods—Chancellor Osborne's personal assistants—and uses the code name "White Rabbit" on her missions.`
      },
      {
        id: "C7-012",
        name: "Crow Armbrust",
        dateOfBirth: "S.1184",
        age: 22,
        occupation: "Terrorist",
        title: "Azure Awakener",
        affiliation: "Thors Military Academy, Imperial Liberation Front",
        image: "images/Crow.png",
        weapon: "Twinguns and Double Sabre",
        combatRole: "Physical Attacker",
        status: "Deceased",
        biography: `
        <p>A long-absent member of the old Class VII. Despite being a year ahead of Rean and the others, he ended up joining their class and spending his days as a student alongside them.</p>
        <p>Though he was known at Thors as a friendly slacker who loved gambling, the truth was far more complicated. His student life was simply a front for his identity as leader of the Imperial Liberation Front, a group he founded to get revenge on Chancellor Osborne for annexing his home country of Jurai.</p>
        <p>He and Rean found themselves on opposite sides during the civil war, but banded together at the end to defeat the Vermillion Apocalypse. Crow suffered a fatal wound in the battle, however, and imparted his final words to his friends in Class VII before breathing his last.</p>`
      },
      {
        id: "NC7-001",
        name: "Juna Crawford",
        dateOfBirth: "S.1189",
        age: 18,
        occupation: "Student",
        title: "New Class VII",
        affiliation: "Thors Branch Campus, Special Support Section",
        image: "images/Juna.png",
        weapon: "Gunbreakers",
        combatRole: "Physical Attacker",
        status: "Alive",
        biography: `The de facto leader of the new Class VII—an energetic girl with a strong sense of justice. She was raised in the formerly independent Crossbell State. She idolizes the Special Support Section and enrolled in Crossbell's police academy to follow in their footsteps, but certain circumstances forced her to transfer to Thors' branch campus instead.`
      },
      {
        id: "NC7-002",
        name: "Kurt Vander",
        dateOfBirth: "S.1189",
        age: 18,
        occupation: "Student",
        title: "New Class VII",
        affiliation: "Thors Branch Campus, Vander Family",
        image: "images/Kurt.png",
        weapon: "Twin Swords",
        combatRole: "Physical Attacker",
        status: "Alive",
        biography: `A handsome young man with a strikingly serious personality. He is the second son of the Vander family—a line of Imperial sword masters—and possesses an inordinate level of skill with dual blades. His family's dismissal from their duties as Imperial bodyguards had left him without purpose, causing him to withdraw from the main campus and enroll in the branch campus instead.`
      },
      {
        id: "NC7-003",
        name: "Altina Orion",
        dateOfBirth: "S.1192",
        age: 14,
        occupation: "Student",
        title: "New Class VII",
        affiliation: "Thors Branch Campus, Intelligence Division",
        image: "images/Altina.png",
        weapon: "Claiohm Solais",
        combatRole: "Arts Attacker/Supporter",
        status: "Alive",
        biography: `A seemingly emotionless girl who uses her combat shell, Claiomh Solais, to fight. She was formerly affiliated with the Imperial Army's Intelligence Division under the code name "Black Rabbit," and served as Rean's support and surveillance during his time fulfilling the government's orders. When Rean was assigned to the branch campus as an instructor, she enrolled under secret orders herself.`
      },
      {
        id: "NC7-004",
        name: "Mildine Juzelith de Cayenne",
        dateOfBirth: "S.1190",
        age: 16,
        occupation: "Student",
        title: "New Class VII",
        affiliation: "Thors Branch Campus, House Cayenne",
        image: "images/Musse.png",
        weapon: "Orbal Carbine",
        combatRole: "Arts Attacker/Healer",
        status: "Alive",
        biography: `A delicate-looking, coquettish girl from the prestigious Egret family. She originally attended St. Astraia Girls' School prior to enrolling in the branch campus. The mysterious airs and hidden talents she had let slip during her time as a student were in fact only a taste of her true identity: Mildine Juzelith de Cayenne, niece of Duke Cayenne and heir apparent to the Cayenne Duchy.`
      },
      {
        id: "NC7-005",
        name: "Ash Carbide",
        dateOfBirth: "S.1189",
        age: 18,
        occupation: "Student",
        title: "New Class VII",
        affiliation: "Thors Branch Campus",
        image: "images/Ash.png",
        weapon: "Varia Axe",
        combatRole: "Physical Attacker",
        status: "Alive",
        biography: `A troublemaking punk who grew up in the slums of Raquel. Despite his coarse mouth and brazen behavior, he possesses exceptional talent in a variety of fields. Though originally enrolled in Class VIII of the branch campus, he transferred into Class VII halfway through the year, where Rean and the rest of the class proved influential in helping him discover his own path.`
      },
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

          <div class="profile-label">
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

      document.getElementById("profileAffiliation").innerHTML =
        character.affiliation;
    }