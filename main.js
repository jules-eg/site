  // Code JavaScript pour ajuster le défilement lors du clic sur un lien du sommaire
  document.addEventListener('DOMContentLoaded', function() {
    var sommaire = document.querySelector('#sommaire');
    var liensSommaire = sommaire.querySelectorAll('a');
  
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
      });
    });
  });