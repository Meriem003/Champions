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

    if (name === ""  || position === ""  || rating === ""  || photoUrl === ""  || club === ""  || nationality === "" ){
        errors.push("Un champ est laissé vide.");
    }

    if (position === "GK") {
        const diving = document.getElementById('diving').value.trim();
        const handling = document.getElementById('handling').value.trim();
        const kicking = document.getElementById('kicking').value.trim();
        const reflexes = document.getElementById('reflexes').value.trim();
        const speed = document.getElementById('speed').value.trim();
        const positioning = document.getElementById('positioning').value.trim();

        if (diving === ""  || handling === ""  || kicking === ""  || reflexes === ""  || speed === ""  || positioning === "" ) {
            errors.push("Un champ est laissé vide.");
        }
    } else {
        const pace = document.getElementById('pace').value.trim();
        const shooting = document.getElementById('shooting').value.trim();
        const passing = document.getElementById('passing').value.trim();
        const dribbling = document.getElementById('dribbling').value.trim();
        const defending = document.getElementById('defending').value.trim();
        const physical = document.getElementById('physical').value.trim();

        if (pace === ""  || shooting === ""  || passing === ""  || dribbling === ""  || defending === ""  || physical === "" ) {
            errors.push("Un champ est laissé vide.");
        }
    }

    if (errors.length > 0) {
        alert(errors);
        return false;
    }

    return true;
}


let joueurEnEdition = null;
function addJoueur() {
    if (!validationChamps()) {
        return; 
    }

    const select = document.getElementById('position');
    const post = joueurEnEdition || document.getElementById(`${select.value}`);

    const imgJoueur = post.querySelector('img');
    const inputs = document.getElementById('url');
    imgJoueur.setAttribute('src', inputs.value);
    const statique = post.querySelectorAll('p');
    const rt = document.getElementById('rating');
    const nom = document.getElementById('name');
    statique[0].textContent = rt.value;
    statique[2].textContent = nom.value;

    if (select.value === "GK") {
        const dv = document.getElementById('diving');
        const hd = document.getElementById('handling');
        const kc = document.getElementById('kicking');
        const rf = document.getElementById('reflexes');
        const sp = document.getElementById('speed');
        const ps = document.getElementById('positioning');
        const rtGK=document.getElementById('ratingGK');
        statique[0].textContent=rtGK.value;
        statique[4].textContent = dv.value;
        statique[6].textContent = hd.value;
        statique[8].textContent = kc.value;
        statique[10].textContent = rf.value;
        statique[12].textContent = sp.value;
        statique[14].textContent = ps.value;
    } else {
        const pc = document.getElementById('pace');
        const st = document.getElementById('shooting');
        const psg = document.getElementById('passing');
        const dr = document.getElementById('dribbling');
        const df = document.getElementById('defending');
        const ph = document.getElementById('physical');
        statique[4].textContent = pc.value;
        statique[6].textContent = st.value;
        statique[8].textContent = psg.value;
        statique[10].textContent = dr.value;
        statique[12].textContent = df.value;
        statique[14].textContent = ph.value;
    }

    if (!joueurEnEdition && !post.querySelector('.edit') && !post.querySelector('.delete')) {
        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = "✏️";
        editButton.onclick = () => {
            Edit(post, select.value);
        };

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = "🗑️";
        deleteButton.onclick = () => {
            Delete(post);
        };

        post.appendChild(editButton);
        post.appendChild(deleteButton);
    
    }
    let count = 0
    const totalJoueur = document.createElement('h3');
    totalJoueur.textContent = ""
    

    if (){

    }





    joueurEnEdition = null;
    document.getElementById("playerForm").reset();
}


function Edit(post, position) {
    joueurEnEdition = post;
    const img = post.querySelector('img').getAttribute('src');
    const statique = post.querySelectorAll('p');

    document.getElementById('url').value = img;
    document.getElementById('rating').value = statique[0].textContent;
    document.getElementById('name').value = statique[2].textContent;
    document.getElementById('position').value = position;

    if (position === "GK") {
        document.getElementById('diving').value = statique[4].textContent;
        document.getElementById('handling').value = statique[6].textContent;
        document.getElementById('kicking').value = statique[8].textContent;
        document.getElementById('reflexes').value = statique[10].textContent;
        document.getElementById('speed').value = statique[12].textContent;
        document.getElementById('positioning').value = statique[14].textContent;
    } else {
        document.getElementById('pace').value = statique[4].textContent;
        document.getElementById('shooting').value = statique[6].textContent;
        document.getElementById('passing').value = statique[8].textContent;
        document.getElementById('dribbling').value = statique[10].textContent;
        document.getElementById('defending').value = statique[12].textContent;
        document.getElementById('physical').value = statique[14].textContent;
    }
}

function Delete(post) {
    const imgJoueur = post.querySelector('img');
    const statique = post.querySelectorAll('p');

    imgJoueur.setAttribute('src', '');
    statique[0].textContent = '';
    statique[2].textContent = '';

    const position = document.getElementById('position').value;
    if (position === "GK") {
        statique[4].textContent = '';
        statique[6].textContent = '';
        statique[8].textContent = '';
        statique[10].textContent = '';
        statique[12].textContent = '';
        statique[14].textContent = '';
    } else {
        statique[4].textContent = ''; 
        statique[6].textContent = '';
        statique[8].textContent = '';
        statique[10].textContent = '';
        statique[12].textContent = '';
        statique[14].textContent = '';
    }

    const editButton = post.querySelector('.edit');
    const deleteButton = post.querySelector('.delete');
    if (editButton) post.removeChild(editButton);
    if (deleteButton) post.removeChild(deleteButton);

}




