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

function validationChamps() {
    let errors = [];
    const name = document.getElementById('name').value.trim();
    const position = document.getElementById('position').value.trim();
    const rating = document.getElementById('rating').value.trim();
    const photoUrl = document.getElementById('url').value.trim();
    const nationality = document.getElementById('nationality').value.trim();
    const club = document.getElementById('club').value.trim();

    if (!name || !position || !rating || !photoUrl || !club || !nationality) {
        errors.push("mazal chi champs khawya");
    }

    if (position === "GK") {
        const diving = document.getElementById('diving').value.trim();
        const handling = document.getElementById('handling').value.trim();
        const kicking = document.getElementById('kicking').value.trim();
        const reflexes = document.getElementById('reflexes').value.trim();
        const speed = document.getElementById('speed').value.trim();
        const positioning = document.getElementById('positioning').value.trim();

        if (!diving || !handling || !kicking || !reflexes || !speed || !positioning) {
            errors.push("mazal chi champs khawya.");
        }
    } else {
        const pace = document.getElementById('pace').value.trim();
        const shooting = document.getElementById('shooting').value.trim();
        const passing = document.getElementById('passing').value.trim();
        const dribbling = document.getElementById('dribbling').value.trim();
        const defending = document.getElementById('defending').value.trim();
        const physical = document.getElementById('physical').value.trim();

        if (!pace || !shooting || !passing || !dribbling || !defending || !physical) {
            errors.push("mazal chi champs khawya");
        }
    }

    if (errors.length > 0) {
        alert(errors);
        return false;
    }

    return true;
}



function addJoueur() {
    if (!validationChamps()) {
        return; 
    }
var select = document.getElementById('position');
    
    let post = document.getElementById(`${select.value}`);
    let imgJoueur = post.querySelector('img')
    let inputs = document.getElementById('url')
    imgJoueur.setAttribute('src',inputs.value)
    let statique = post.querySelectorAll('p')
    let rt = document.getElementById('rating')
    statique[0].textContent = rt.value;
    let nom = document.getElementById('name')
    statique[2].textContent = nom.value;

    if (select.value === "GK"){
    let dv = document.getElementById('diving');
    let hd = document.getElementById('handling');
    let kc = document.getElementById('kicking');
    let rf = document.getElementById('reflexes');
    let sp = document.getElementById('speed');
    let ps = document.getElementById('positioning');
    statique[4].textContent = dv.value;
    statique[6].textContent = hd.value;
    statique[8].textContent = kc.value;
    statique[10].textContent = rf.value;
    statique[12].textContent = sp.value;
    statique[14].textContent = ps.value;
    
    }else{
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

        const editButton = document.createElement('button');
        editButton.textContent = "EDIT";
        editButton.classList.add('edit'); 
        editButton.onclick = () => {
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Supprimer";
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => {
        };

        post.appendChild(editButton);
        post.appendChild(deleteButton);

    document.getElementById("playerForm").reset();
}


