function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

if(elemento != null && elemento.localName === 'audio');}
  elemento.play()
  }

    else{
        console.log('elemento nao encontrado ou seletor inválido');
    }
    
}



const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador =0; contador < listaDeTeclas.length;contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento} `; //tenplate string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }



    
    tecla.onkeydow = function(evento){


    if (evento.code=== 'Space'||evento.code === 'Enter') {
        tecla.classLit.add('ativa');
}


}

    tecla.onkeyup = function() {
        tecla.classlit.remove('ativa');
    }

     

