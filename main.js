document.addEventListener('DOMContentLoaded', function() {
  var sommaire = document.querySelector('#sommaire');
  var liensSommaire = sommaire.querySelectorAll('a');

  // Cacher le sommairje
  function cacherSommaire() {
    sommaire.style.left = -(sommaire.offsetWidth + 100) + 'px';
  }

  // Afficher le sommaire
  function afficherSommaire() {
    sommaire.style.left = '0';
  }

  // Ajouter un écouteur d'événement pour le clic sur le sommaire
  liensSommaire.forEach(function(lien) {
    lien.addEventListener('click', function(e) {
      e.preventDefault();
      cacherSommaire();
      var targetSection = document.querySelector(this.getAttribute('href'));
      var sommaireHeight = sommaire.offsetHeight;
  
      // Calculer la position de défilement en tenant compte de la hauteur du sommaire
      var scrollToPosition = targetSection.offsetTop;
  
      // Défiler jusqu'à la position
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    });
  });

  // Ajouter un écouteur d'événement pour le clic en dehors du sommaire pour le cacher

  document.addEventListener('click', function(e) {

    //Si pas le sommaire et pas un lien du sommaire alors cacher le sommaire
    if (!sommaire.contains(e.target) && !liensSommaire.contains(e.target)) {
      cacherSommaire();
    }
  });

  // Appel initial pour cacher le sommaire
  cacherSommaire();
});
