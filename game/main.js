function naviguer() {
    // Récupérer les valeurs des étapes
    var etape1 = document.getElementById('etape1').value;
    var etape2 = document.getElementById('etape2').value;
    var etape3 = document.getElementById('etape3').value;
    var etape4 = document.getElementById('etape4').value;
    var etape5 = document.getElementById('etape5').value;
    var etape6 = document.getElementById('etape6').value;
    var etape7 = document.getElementById('etape7').value;
    var etape8 = document.getElementById('etape8').value;

    // Construire l'URL en fonction des valeurs des étapes
    var url = 'http://pastju.com/game/'+etape1 + '/' + etape2 + '/' + etape3 + '/' + etape4 + '/' + etape5 + '/' + etape6 + '/' + etape7 + '/' + etape8;
    window.location.href = url;
    console.log('Vous accedez à la page : ' + url);
}

