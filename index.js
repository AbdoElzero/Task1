let layer = document.querySelector(".circle-container")
let layerBlack = document.querySelector(".circle-container .layerblack p")
let boxs = document.querySelector(".page .boxs")


layerBlack.addEventListener("click", function() {

    layer.style.display = "none"
    boxs.style.display = "block"
    AOS.init({
        duration: 1000,
        once: false,
        disable: false,
      });
      AOS.refresh();
})