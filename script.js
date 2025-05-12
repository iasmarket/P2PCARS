

const tauxChangeUSD_MAD = 10;
const historiquePrix = [
    
    { annee: 1986, or: 100, acier: 500, aluminium: 800, cuivre: 1200, plastiques: 300 },
    { annee: 1987, or: 110, acier: 510, aluminium: 850, cuivre: 1250, plastiques: 320 },
    { annee: 1988, or: 120, acier: 520, aluminium: 900, cuivre: 1300, plastiques: 330 },
    { annee: 1989, or: 130, acier: 540, aluminium: 920, cuivre: 1350, plastiques: 340 },
    { annee: 1990, or: 150, acier: 550, aluminium: 950, cuivre: 1400, plastiques: 350 },
    { annee: 1991, or: 160, acier: 580, aluminium: 980, cuivre: 1450, plastiques: 360 },
    { annee: 1992, or: 170, acier: 600, aluminium: 1000, cuivre: 1500, plastiques: 370 },
    { annee: 1993, or: 180, acier: 620, aluminium: 1030, cuivre: 1550, plastiques: 380 },
    { annee: 1994, or: 190, acier: 640, aluminium: 1060, cuivre: 1600, plastiques: 390 },
    { annee: 1995, or: 200, acier: 660, aluminium: 1090, cuivre: 1650, plastiques: 400 },
    { annee: 1996, or: 210, acier: 680, aluminium: 1120, cuivre: 1700, plastiques: 410 },
    { annee: 1997, or: 220, acier: 700, aluminium: 1150, cuivre: 1750, plastiques: 420 },
    { annee: 1998, or: 230, acier: 720, aluminium: 1180, cuivre: 1800, plastiques: 430 },
    { annee: 1999, or: 240, acier: 740, aluminium: 1210, cuivre: 1850, plastiques: 440 },
    { annee: 2000, or: 250, acier: 760, aluminium: 1240, cuivre: 1900, plastiques: 450 },
    { annee: 2001, or: 280, acier: 780, aluminium: 1270, cuivre: 1950, plastiques: 460 },
    { annee: 2002, or: 290, acier: 800, aluminium: 1300, cuivre: 2000, plastiques: 470 },
    { annee: 2003, or: 300, acier: 820, aluminium: 1330, cuivre: 2050, plastiques: 480 },
    { annee: 2004, or: 320, acier: 840, aluminium: 1360, cuivre: 2100, plastiques: 490 },
    { annee: 2005, or: 340, acier: 860, aluminium: 1390, cuivre: 2150, plastiques: 500 },
    { annee: 2006, or: 360, acier: 880, aluminium: 1420, cuivre: 2200, plastiques: 510 },
    { annee: 2007, or: 380, acier: 900, aluminium: 1450, cuivre: 2250, plastiques: 520 },
    { annee: 2008, or: 410, acier: 920, aluminium: 1480, cuivre: 2300, plastiques: 530 },
    { annee: 2009, or: 430, acier: 940, aluminium: 1510, cuivre: 2350, plastiques: 540 },
    { annee: 2010, or: 450, acier: 960, aluminium: 1540, cuivre: 2400, plastiques: 550 },
    { annee: 2011, or: 480, acier: 980, aluminium: 1570, cuivre: 2450, plastiques: 560 },
    { annee: 2012, or: 510, acier: 1000, aluminium: 1600, cuivre: 2500, plastiques: 570 },
    { annee: 2013, or: 530, acier: 1020, aluminium: 1630, cuivre: 2550, plastiques: 580 },
    { annee: 2014, or: 550, acier: 1040, aluminium: 1660, cuivre: 2600, plastiques: 590 },
    { annee: 2015, or: 570, acier: 1060, aluminium: 1690, cuivre: 2650, plastiques: 600 },
    { annee: 2016, or: 590, acier: 1080, aluminium: 1720, cuivre: 2700, plastiques: 610 },
    { annee: 2017, or: 610, acier: 1100, aluminium: 1750, cuivre: 2750, plastiques: 620 },
    { annee: 2018, or: 630, acier: 1120, aluminium: 1780, cuivre: 2800, plastiques: 630 },
    { annee: 2019, or: 650, acier: 1140, aluminium: 1810, cuivre: 2850, plastiques: 640 },
    { annee: 2020, or: 670, acier: 1160, aluminium: 1840, cuivre: 2900, plastiques: 650 },
    { annee: 2021, or: 700, acier: 1180, aluminium: 1870, cuivre: 2950, plastiques: 660 },
    { annee: 2022, or: 750, acier: 1200, aluminium: 1900, cuivre: 3000, plastiques: 670 },
    { annee: 2023, or: 800, acier: 1220, aluminium: 1930, cuivre: 3050, plastiques: 680 },
    { annee: 2024, or: 850, acier: 1240, aluminium: 1960, cuivre: 3100, plastiques: 690 },
    { annee: 2025, or: 2000, acier: 1800, aluminium: 2000, cuivre: 5000, plastiques: 400 }


];



function afficherHistorique() {
    const historiqueTable = document.getElementById("historique-prix");
    historiqueTable.innerHTML = "";
    historiquePrix.forEach(prix => {
        const row = `<tr>
            <td>${prix.annee}</td>
            <td>${prix.or}</td>
            <td>${prix.acier}</td>
            <td>${prix.aluminium}</td>
            <td>${prix.cuivre}</td>
            <td>${prix.plastiques}</td>
        </tr>`;
        historiqueTable.innerHTML += row;
    });

    const select = document.getElementById("annee_revente");
    historiquePrix.forEach(prix => {
        const option = document.createElement("option");
        option.value = prix.annee;
        option.textContent = prix.annee;
        select.appendChild(option);
    });
}

function remplirPrixParAnnee() {
    const annee = parseInt(document.getElementById("annee_revente").value);
    const donnees = historiquePrix.find(p => p.annee === annee);
    if (donnees) {
        document.getElementById("prix_acier").value = donnees.acier;
        document.getElementById("prix_aluminium").value = donnees.aluminium;
        document.getElementById("prix_cuivre").value = donnees.cuivre;
        document.getElementById("prix_plastiques").value = donnees.plastiques;
    }
}

function calculerDepréciation() {
  let ajustement = 0;
let details = "Ajustements appliqués :\n";

if (document.getElementById('dedouane').checked) {
ajustement += 10000;
details += "- Dédouané : +10 000 MAD\n";
}
if (document.getElementById('accident').checked) {
ajustement += 2000;
details += "- Jamais accidenté : +2 000 MAD\n";
}
if (document.getElementById('premierMain').checked) {
ajustement += 2000;
details += "- 1ère main + pneus neufs : +2 000 MAD\n";
}
if (document.getElementById('peinture').checked) {
ajustement -= 2000;
details += "- Peinture renouvelée : -2 000 MAD\n";
}
if (document.getElementById('reparation').checked) {
ajustement -= 2000;
details += "- Petite réparation : -2 000 MAD\n";
}
    const prixInitial = parseFloat(document.getElementById("prix_initial").value);
    const anneeModele = parseInt(document.getElementById("annee_modele").value);
    const anneeRevente = parseInt(document.getElementById("annee_revente").value);
    const prixAcier = parseFloat(document.getElementById("prix_acier").value);
    const prixAluminium = parseFloat(document.getElementById("prix_aluminium").value);
    const prixCuivre = parseFloat(document.getElementById("prix_cuivre").value);
    const prixPlastiques = parseFloat(document.getElementById("prix_plastiques").value);
    
    if (
        isNaN(prixInitial) || isNaN(anneeModele) || isNaN(anneeRevente) ||
        isNaN(prixAcier) || isNaN(prixAluminium) || isNaN(prixCuivre) || isNaN(prixPlastiques)
    ) {
        document.getElementById("result").innerText = "Veuillez remplir toutes les informations.";
        return;
    }

    const compositionMatières = {
        acier: 0.65,
        aluminium: 0.065,
        cuivre: 0.02,
        plastiques: 0.10
    };

    const prixRef = historiquePrix.find(p => p.annee === anneeRevente);
    const prixRefModel = historiquePrix.find(p => p.annee === anneeModele);

    if (!prixRef || !prixRefModel) {
        document.getElementById("result").innerText = "Données manquantes pour le calcul.";
        return;
    }

    // 1. Calcul principal (avec matières premières)
    const indiceModele = (
        prixRefModel.acier * compositionMatières.acier +
        prixRefModel.aluminium * compositionMatières.aluminium +
        prixRefModel.cuivre * compositionMatières.cuivre +
        prixRefModel.plastiques * compositionMatières.plastiques
    ) / 1000;

    const indiceRevente = (
        prixAcier * compositionMatières.acier +
        prixAluminium * compositionMatières.aluminium +
        prixCuivre * compositionMatières.cuivre +
        prixPlastiques * compositionMatières.plastiques
    ) / 1000;

    const ageVoiture = anneeRevente - anneeModele;
    let depreciate = prixInitial;

    for (let i = 0; i <= ageVoiture; i++) {
        const tauxDepreciation = Math.exp((-0.10 ) );
        depreciate = depreciate * tauxDepreciation;
      
    }
    const valeurMP = depreciate * (indiceRevente / indiceModele);

    // 2. Calcul avec uniquement l'or
    const valeurOr = valeurMP  * (prixRef.or / (prixRefModel.or));

    // 3. Moyenne
    const moyenneOccasion = valeurMP ;

                // Récupère le kilométrage
    const kilometrage = parseFloat(document.getElementById("kilometrage").value);

    // Vérifie que le kilométrage est un nombre valide
    if (isNaN(kilometrage)) {
        document.getElementById("result").innerText = "Veuillez renseigner le kilométrage.";
        return;
    }

    // Calcul du bonus kilométrage
    const bonusKilometrage = 20000 - ((20000 / 300000) * kilometrage);
    const montantFinal = moyenneOccasion + bonusKilometrage + ajustement ;


    document.getElementById("result").innerHTML = 
    `<strong>✔ Valeur estimée avec matières premières :</strong> ${valeurMP.toFixed(2)} MAD<br>
    <strong>🚗 Bonus kilométrage :</strong> ${bonusKilometrage.toFixed(2)} MAD<br>
    <strong>✅ Montant final estimé :</strong> <span style="color:blue;">${montantFinal.toFixed(2)} MAD</span>`;

    }

window.onload = afficherHistorique;
