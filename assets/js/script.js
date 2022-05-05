let dragging = document.querySelectorAll('.dragging');
let dragID = 0;
let scorePlayer = 0;
let scoreComp = 0;
const min = Math.ceil(1);
const max = Math.floor(3);

dragging.forEach(function (dragged) {
    dragged.addEventListener('dragstart', function (ev) {
        dragID = this.id;
    })
})

// enlever le comportement natif du navigateur

gameTable.addEventListener('dragover', function (ev) {
    ev.preventDefault();
})


gameTable.addEventListener('drop', function (ev) {
    ev.preventDefault();
    game();

    // Random


})

dragging.forEach(function(clicked){
    clicked.addEventListener('click', function(){
        dragID = this.id;
        game();
    })
})

reload.addEventListener('click', function () {
    location.reload();
})

reload2.addEventListener('click', function () {
    location.reload();
})


function game() {
    ai = Math.floor(Math.random() * (max - min + 1)) + min;

    switch (ai) {
        case 1:
            rockAi.style.background = '#313131';
            paperAi.style.background = 'white';
            scisorsAi.style.background = 'white';
            break;
        case 2:
            paperAi.style.background = '#313131';
            scisorsAi.style.background = 'white';
            rockAi.style.background = 'white';
            break;
        case 3:
            scisorsAi.style.background = '#313131';
            rockAi.style.background = 'white';
            paperAi.style.background = 'white';
            break;
    }

    switch (dragID) {
        case 'rock':
            rock.style.background = '#313131';
            paper.style.background = 'white';
            scisors.style.background = 'white';
            break;
        case 'paper':
            paper.style.background = '#313131';
            scisors.style.background = 'white';
            rock.style.background = 'white';
            break;
        case 'scisors':
            scisors.style.background = '#313131';
            rock.style.background = 'white';
            paper.style.background = 'white';
            break;
    }

    console.log(dragID, ai);
    if ((dragID == 'rock' && ai == 2) || (dragID == 'paper' && ai == 3) || (dragID == 'scisors' && ai == 1)) {
        returnID.innerHTML = 'PERDU!';
        scoreComp++;
        comp.innerHTML = scoreComp;
    }
    else if ((dragID == 'rock' && ai == 3) || (dragID == 'paper' && ai == 1) || (dragID == 'scisors' && ai == 2)) {
        returnID.innerHTML = 'GAGNE!';
        scorePlayer++;
        player.innerHTML = scorePlayer;
    }
    else {
        returnID.innerHTML = "EGALITE!";
    }
    if (scorePlayer == 0 && scoreComp == 0) {
    } else {
        ratio.innerHTML = Math.round(scorePlayer / (scorePlayer + scoreComp) * 100) + '%';
    }
    if (scorePlayer === 3) {
        alert("Félicitation ! Vous avez gagné");
        scorePlayer = 0;
        player.innerHTML = 0
        scoreComp = 0;
        comp.innerHTML = 0

    } if (scoreComp === 3) {
        alert("Ouups! Vous avez perdu");
        scorePlayer = 0;
        player.innerHTML = 0
        scoreComp = 0;
        comp.innerHTML = 0
    }
}














