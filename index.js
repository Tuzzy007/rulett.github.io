let tet = 0;
let fogadasok = [];
let nyeroSzam = -1;
let nyeremeny = 0;
let szamolaskezdes = false;
let aktualisOsszeg = 0;

const valasztas = {
    "40": [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    "41": [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35], 
    "42": [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    "43": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "44": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    "45": [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    "46": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    "47": [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    "48": [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    "49": [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
    "50": [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
    "51": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
};

function selectCell(szam) {
    if (tet > 0) {
        let tete = document.getElementById('tete');
        let valasztott = fogadasok.find(fogadas => fogadas.szam === szam);
        const valsztasok = {
            40: "3st", // 3*
            41: "2st", // 3*
            42: "1st", // 3*
            43: "1-12", // 3*
            44: "13-24", // 3*
            45: "25-36", // 3*
            46: "1-18", // 2*
            47: "Even", // 2*
            48: "Red", //2*
            49: "Black", // 2*
            50: "Odd", // 2*
            51: "19-36" // 2*
        };

        aktualisOsszeg -= tet;
        frissit();

        if (valasztott) {
            valasztott.tet += tet;
            if (szam >= 40) {
                tete.innerHTML += `Ezt választottad: ${valsztasok[szam]}, így a Téted: ${valasztott.tet}<br>`;
            } else {
                tete.innerHTML += `Ezt választottad: ${szam}, így a Téted: ${valasztott.tet}<br>`;
            }
        } else {
            fogadasok.push({ szam: szam, tet: tet });
            if (szam >= 40) {
                tete.innerHTML += `Ezt választottad: ${valsztasok[szam]}, a Téted: ${tet}<br>`;
            } else {
                tete.innerHTML += `Ezt választottad: ${szam}, a Téted: ${tet}<br>`;
            }
        }

        console.log("Fogadások:", fogadasok);
        szamolaskezdes = true;
    }
}


function chip(mtet) {
    alert("Tét: " + mtet);
    tet = mtet;
}

function nyeremenyel() {
    nyeremeny = 0;



    fogadasok.forEach(fogadas => {
        if (fogadas.szam === nyeroSzam) {
            nyeremeny += fogadas.tet * 36; 
        } else {
            if (fogadas.szam === 40) { // 3st
                if (valasztas["40"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 3;
                }
            } else if (fogadas.szam === 41) { // 2st
                if (valasztas["41"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 3;
                }
            } else if (fogadas.szam === 42) { // 1st
                if (valasztas["42"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 3;
                }
            } else if (fogadas.szam === 43) { // 1-12
                if (valasztas["43"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 3;
                }
            } else if (fogadas.szam === 44) { // 13-24
                if (valasztas["44"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 3;
                }
            } else if (fogadas.szam === 45) { // 25-36
                if (valasztas["45"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 3;
                }
            } else if (fogadas.szam === 46) { // 1-18
                if (valasztas["46"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 2;
                }
            } else if (fogadas.szam === 47) { // Even
                if (valasztas["47"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 2;
                }
            } else if (fogadas.szam === 48) { // Red
                if (valasztas["48"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 2;
                }
            } else if (fogadas.szam === 49) { // Black
                if (valasztas["49"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 2;
                }
            } else if (fogadas.szam === 50) { // Odd
                if (valasztas["50"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 2;
                }
            } else if (fogadas.szam === 51) { // 19-36
                if (valasztas["51"].includes(nyeroSzam)) {
                    nyeremeny += fogadas.tet * 2;
                }
            }
        }
    });

    if (nyeremeny > 0) {
        console.log(`Nyertél: ${nyeremeny}-et!`);
        
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const elmultt = confirm("Elmultál 18 éves?");

    if (!elmultt) {
        window.location.href = "https://www.youtube.com/watch?v=Q3V0-dxVc-c";
        return;
    }
    aktualisOsszeg = prompt("Mennyi összeged legyen?")*1;
    frissit();
    let kerek = document.getElementById('kerek');
    const szoge = document.querySelector('#kerek');
    let idozito = document.getElementById('ora');
    let tete = document.getElementById('tete');
    let vissza = 5;
    const ball = document.querySelector('.ball');
    let angle = 0;

    function moveBall() {
        const kezdes = Date.now();
        function animacio() {
            const elapsed = Date.now() - kezdes;
            if (elapsed < 11000) { 
                const x = Math.cos(-angle) * 60;
                const y = Math.sin(-angle) * 60;
                ball.style.left = `calc(17.5% + ${x}px)`;
                ball.style.top = `calc(31% + ${y}px)`;
                angle += 0.05;
                requestAnimationFrame(animacio);
            } else {
                ball.style.animation = 'none';
            }
        }
        animacio();
    }
    
    
    szamolas();
    function szamolas(){
        const countdown = setInterval(() => {
            if (vissza <= 0) {
                clearInterval(countdown);
                idozito.textContent = "Idő lejárt!";
                kerekf();
                moveBall();
                startGame();
                nyeremenyel();
            } else {
                idozito.textContent = vissza + " másodperc hátra";
                vissza--;
            }
        }, 2500);
    }

    function startGame() {
        nyeroSzam = Math.floor(Math.random() * 37);
        console.log("Nyerő szám:", nyeroSzam);
    }

    function kerekf() {
        let szog = Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000;
        szoge.style.setProperty('--spin-degrees', `${szog}deg`);
        kerek.style.animation = 'spin-slow 10s cubic-bezier(0.33, 0, 0.67, 1) forwards';
        setTimeout(() => {
            kerek.style.animation = 'none';
            ball.style.animation = 'none';
            void kerek.offsetWidth;
            vissza = 10;
            fogadasok = [];
            tete.innerHTML = `Fogadasok:<br>`;
            szamolas();
            aktualisOsszeg += nyeremeny;
            frissit();
            alert("A nyerő szám: " + nyeroSzam + ". A nyereményed: " + nyeremeny);
        }, 11000);
    }    
});

function frissit() {
    document.getElementById('osszegDisplay').innerText = aktualisOsszeg;
}

function levon(tet) {
    if (tet <= aktualisOsszeg) {
      aktualisOsszeg -= tet;
      frissit();
    } else {
      alert("Nincs elég pénzed a tétre!");
    }
}