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
    } else{
        for (let i = 0; i < allJoueur.length; i++) {
            allJoueur[i].style.display = "block";
        }
        for (let i = 0; i < gkJoueur.length; i++) {
            gkJoueur[i].style.display = "none";
        }
    }
});

var select = document.getElementById('position');
function addJoueur() {

    let post = document.getElementById(`${select.value}`);
    let imgJoueur = post.querySelector('img')
    let inputs = document.getElementById('url')
    imgJoueur.setAttribute('src',inputs.value)
    let statique = post.querySelectorAll('p')
    let rt = document.getElementById('rating')
    statique[0].textContent = rt.value;
    let nom = document.getElementById('name')
    statique[2].textContent = nom.value;
        let pc = document.getElementById('pace');
        let st = document.getElementById('shooting');
        let psg = document.getElementById('passing');
        let dr = document.getElementById('dribbling');
        let df = document.getElementById('defending');
        let ph = document.getElementById('physical');
        statique[4].textContent = pc.value;
        statique[6].textContent = st.value;
        statique[8].textContent = psg.value;
        statique[10].textContent = dr.value;
        statique[12].textContent = df.value;
        statique[14].textContent = ph.value;

}