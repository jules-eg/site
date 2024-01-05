function naviguer() {
    // Récupérer les valeurs des étapes
    var etape1 = document.getElementById('etape1').value;
    var etape2 = document.getElementById('etape2').value;
    var etape3 = document.getElementById('etape3').value;
    var etape4 = document.getElementById('etape4').value;

    // Construire l'URL en fonction des valeurs des étapes
    var url = 'http://pastju.com/game/'+etape1 + '/' + etape2 + '/' + etape3 + '/' + etape4;
    window.location.href = url;
    console.log('Vous accedez à la page : ' + url);
}

function synchroniserSliderEtNombre(sliderId, nombreId) {
    var slider = document.getElementById(sliderId);
    var nombre = document.getElementById(nombreId);

    slider.addEventListener('input', function() {
        nombre.value = this.value;
    });

    nombre.addEventListener('input', function() {
        slider.value = this.value;
    });
}

// Synchroniser les sliders et les nombres
synchroniserSliderEtNombre('slider1', 'etape1');
synchroniserSliderEtNombre('slider2', 'etape2');
synchroniserSliderEtNombre('slider3', 'etape3');
synchroniserSliderEtNombre('slider4', 'etape4');