let tet = 0;
let fogadasok = [];
let nyeroSzam = -1;
let nyeremeny = 0;

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
    if(tet > 0) {
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
        
        if (szam >= 40) {
            alert("Ezt választottad: " + valsztasok[szam] + ". A Téted: " + tet);
        } else {
            alert("Ezt választottad: " + szam + ". A Téted: " + tet);
        }

        valasztott = szam;
        fogadasok.push({ szam: valasztott, tet: tet});

        console.log("Fogadások:", fogadasok);
    }
}

function chip(mtet) {
    alert("Tét: " + mtet);
    tet = mtet;
}

function nyeremenyel() {
    fogadasok.forEach(fogadas => {

        if (fogadas.szam == nyeroSzam) {
            nyeremeny = fogadas.tet * 36;
        }
        else{
            if (fogadas.szam == 40) {
                if(valasztas["40"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 3;
            }
            else if (fogadas.szam == 41) {
                if(valasztas["41"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 3;
            }
            else if (fogadas.szam == 42) {
                if(valasztas["42"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 3;
            }
            else if (fogadas.szam == 43) {
                if(valasztas["43"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 3;
            }
            else if (fogadas.szam == 44) {
                if(valasztas["44"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 3;
            }
            else if (fogadas.szam == 45) {
                if(valasztas["45"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 3;
            }
            else if (fogadas.szam == 46) {
                if(valasztas["46"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 2;
            }
            else if (fogadas.szam == 47) {
                if(valasztas["47"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 2;
            }
            else if (fogadas.szam == 48) {
                if(valasztas["48"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 2;
            }
            else if (fogadas.szam == 49) {
                if(valasztas["49"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 2;
            }
            else if (fogadas.szam == 50) {
                if(valasztas["50"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 2;
            }
            else if (fogadas.szam == 51) {
                if(valasztas["51"].includes(nyeroSzam)){ console.log('Nyertél')}
                nyeremeny = fogadas.tet * 2;
            }
        }

        if (nyeremeny > 0) {
            console.log(`Nyertél ${nyeremeny} egységet a ${fogadas.szam} fogadással!`);
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    let kerek = document.getElementById('kerek');
    const szoge = document.querySelector('#kerek');
    let idozito = document.getElementById('ora');
    let vissza = 5;
    szamolas()
    
    function szamolas(){
        const countdown = setInterval(() => {
            if (vissza <= 0) {
                clearInterval(countdown);
                idozito.textContent = "Idő lejárt!";
                increaseSpeed();
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

    function increaseSpeed() {
        let szog = Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000;
        szoge.style.setProperty('--spin-degrees', `${szog}deg`);
        kerek.style.animation = 'spin 4s linear forwards';
        setTimeout(() => {
            kerek.style.animation = 'none';
            void kerek.offsetWidth;
            vissza = 20;
            fogadasok = [];
            alert("A nyerő szám: " + nyeroSzam + ". A nyereményed: " + nyeremeny);
            szamolas()
        }, 4000);
    }
});
