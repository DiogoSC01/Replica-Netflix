 let botaoSom = document.querySelector(".botão-som")
 
 let video = document.querySelector(".video")

 let aparecerModal = document.querySelector(".link-info")

 let modal = document.querySelector(".modal")

 let audio = document.querySelector(".audio")

//  mutar o Video

 botaoSom.addEventListener ("click", ligaSom)

 function ligaSom() {
    video.muted = !video.muted
 }

//  mostrar MODAL 

 aparecerModal.addEventListener ("click", mostrarModal)
 modal.addEventListener ("click", sairModal)

 function mostrarModal(){

    modal.style.display = "block"
 }
 
 function sairModal(){

    modal.style.display = "none"
 }

//  tocar audio TUDUM

window.addEventListener("load", tocarAudio)

function tocarAudio(){
    audio.play()
}
 