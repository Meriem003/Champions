let position= document.getElementById("position")
position.addEventListener("change", function (event) {
    const selectedPosition = event.target.value;
    const allJoueur = document.querySelectorAll(".stats-group");
    const gkJoueur = document.querySelectorAll(".Gk-joueur");

    if (selectedPosition === "GK") {
        for (let i = 0; i < allJoueur.length; i++) {
            allJoueur[i].style.display = "none";
        }
        for (let i = 0; i < gkJoueur.length; i++) {
            gkJoueur[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < allJoueur.length; i++) {
            allJoueur[i].style.display = "block";
        }
        for (let i = 0; i < allJoueur.length; i++) {
            allJoueur[i].style.display = "none";
        }
    }
});

function addJoueur() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const nationality = document.getElementById('nationality').value;
    const club = document.getElementById('club').value;
    const rating = document.getElementById('rating').value;
    const pace = document.getElementById('pace').value;
    const shooting = document.getElementById('shooting').value;
    const passing = document.getElementById('passing').value;
    const dribbling = document.getElementById('dribbling').value;
    const defending = document.getElementById('defending').value;
    if (position === 'GK') {
       let diving = document.getElementById('diving').value;
       let handling = document.getElementById('handling').value;
       let kicking = document.getElementById('kicking').value;
       let reflexes = document.getElementById('reflexes').value;
       let speed = document.getElementById('speed').value;
       let positioning = document.getElementById('positioning').value;
    }

    
}
