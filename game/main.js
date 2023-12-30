function rediriger() {
    // Récupérer la valeur de l'URL entrée par l'utilisateur
    var url = document.getElementById('urlInput').value;

    // Vérifier si l'URL est non vide
    if (url.trim() !== '') {
        // Rediriger vers l'URL spécifiée
        window.location.href = url;
    } else {
        // Afficher un message d'erreur si l'URL est vide
        alert('Veuillez entrer une URL valide.');
    }
}
    // Récupérer le chemin (path) du fichier actuel
    var cheminFichier = window.location.pathname;

    // Obtenir le nom du fichier à partir du chemin
    var nomFichier = cheminFichier.substring(cheminFichier.lastIndexOf('/') + 1);

    // Mettre à jour le contenu de la balise <h2>
    document.getElementById('nomFichier').textContent = "Nom du fichier actuel : " + nomFichier;
