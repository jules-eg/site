document.addEventListener('DOMContentLoaded', function() {
  var sommaire = document.querySelector('#sommaire');
  var liensSommaire = sommaire.querySelectorAll('a');
  var sommaireToggle = document.querySelector('#sommaire-toggle'); // Ajout de l'élément de bascule du sommaire

  liensSommaire.forEach(function(lien) {
    lien.addEventListener('click', function(e) {
      e.preventDefault();
      var targetSection = document.querySelector(this.getAttribute('href'));
      var sommaireHeight = sommaire.offsetHeight;

      // Calculer la position de défilement en tenant compte de la hauteur du sommaire
      var scrollToPosition = targetSection.offsetTop - sommaireHeight;

      // Défiler jusqu'à la position
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });

      sommaire.classList.remove('active'); // Rétracte le sommaire après un clic sur un lien
    });

    // Gestion des événements tactiles pour les appareils mobiles
    lien.addEventListener('touchend', function(e) {
      e.preventDefault();
      var targetSection = document.querySelector(this.getAttribute('href'));
      var sommaireHeight = sommaire.offsetHeight;

      // Calculer la position de défilement en tenant compte de la hauteur du sommaire
      var scrollToPosition = targetSection.offsetTop - sommaireHeight;

      // Défiler jusqu'à la position
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });

      sommaire.classList.remove('active'); // Rétracte le sommaire après un toucher sur un lien
    });
  });

  sommaireToggle.addEventListener('click', function(e) {
    e.preventDefault();
    sommaire.classList.toggle('active'); // Affiche ou rétracte le sommaire lors du clic sur l'élément de bascule
  });
});
