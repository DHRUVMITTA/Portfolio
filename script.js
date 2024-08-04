var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});
gsap.to(".nav",{
    backgroundColor:"black", height:"13vh",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top - 10%",
       
        scrub:2
    }
});
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
