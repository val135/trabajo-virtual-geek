'use strict';

const colorSection = document.querySelector('.section');

if (colorSection.classList.contains('warning')){
    color.innerHTML ='<h1>AVISO</h1><p>Tenga cuidado</p>';
}
else if (colorSection.classList.contains('error')){
    color.innerHTML ='<h1>ERROR</h1><p>Ha surgido un error</p>';
}
else if (colorSection.classList.contains('success')){
    color.innerHTML ='<h1>CORRECTO</h1><p>Los datos son correctos</p>';
}