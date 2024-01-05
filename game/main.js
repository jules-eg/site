function naviguer() {
    // Récupérer les valeurs des étapes
    var etape1 = document.getElementById('etape1').value;
    var etape2 = document.getElementById('etape2').value;
    var etape3 = document.getElementById('etape3').value;
    var etape4 = document.getElementById('etape4').value;

    // Construire l'URL en fonction des valeurs des étapes
    var url = ../../../../' etape1 + '/' + etape2 + '/' + etape3 + '/' + etape4;

    // Afficher le résultat
    var resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML = 'Vous accédez à la page : ' + url;
    
    // Vous pouvez également rediriger l'utilisateur vers l'URL construite si nécessaire
    window.location.href = url;
}

window.addEventListener('load', function() {
    // Récupérer le chemin (path) du fichier actuel
    var cheminFichier = window.location.pathname;

    // Obtenir le nom du fichier à partir du chemin
    var nomFichier = cheminFichier.substring(cheminFichier.lastIndexOf('/') + 1);

    // Mettre à jour le contenu de la balise <h2>
    document.getElementById('nomFichier').textContent = "Nom du fichier actuel : " + nomFichier;
});
main.js
