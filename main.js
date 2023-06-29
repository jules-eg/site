document.addEventListener('DOMContentLoaded', function() {
  var sommaire = document.querySelector('#sommaire');
  var liensSommaire = sommaire.querySelectorAll('a');

  liensSommaire.forEach(function(lien) {
    lien.addEventListener('click', function(e) {
      e.preventDefault();
      var targetSection = document.querySelector(this.getAttribute('href'));
      var sommaireHeight = sommaire.offsetHeight;

      // Vérifier la vitesse de connexion de l'utilisateur
      var connectionSpeed = navigator.connection ? navigator.connection.effectiveType : 'unknown';
      var imageQuality = '';

      // Sélectionner la qualité d'image en fonction de la vitesse de connexion
      switch (connectionSpeed) {
        case 'slow-2g':
        case '2g':
          imageQuality = 'low';
          break;
        case '3g':
          imageQuality = 'medium';
          break;
        case '4g':
        case '5g':
          imageQuality = 'high';
          break;
        default:
          imageQuality = 'medium';
          break;
      }

      // Mettre à jour les attributs src des images avec la qualité appropriée
      var images = targetSection.querySelectorAll('img');
      images.forEach(function(image) {
        var src = image.getAttribute('src');
        var newSrc = src.replace('.jpeg', '_' + imageQuality + '.jpeg');
        image.setAttribute('src', newSrc);
      });

      // Calculer la position de défilement en tenant compte de la hauteur du sommaire
      var scrollToPosition = targetSection.offsetTop - sommaireHeight;

      // Défiler jusqu'à la position
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    });
  });
});
