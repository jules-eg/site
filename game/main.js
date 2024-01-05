function naviguer() {
    // Récupérer les valeurs des étapes
    var etape1 = document.getElementById('etape1').value;
    var etape2 = document.getElementById('etape2').value;
    var etape3 = document.getElementById('etape3').value;
    var etape4 = document.getElementById('etape4').value;

    // Construire l'URL en fonction des valeurs des étapes
    var url = '/var/www/html/game/' + etape1 + '/' + etape2 + '/' + etape3 + '/' + etape4;

    alert('Vous accérrrrrrr à la page : ' + url);
}
