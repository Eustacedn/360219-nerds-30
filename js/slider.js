var btn = document.querySelectorAll(".sliderswitch");
var openedTab = function(evt){
  var blocks = document.querySelectorAll(".slider-container > div")
  for(var j = 0; j < blocks.length; j++){
      blocks[j].classList.remove("slide-current")
    if(evt.target.id === "btn1"){
      blocks[0].classList.add("slide-current");
    }
    if(evt.target.id === "btn2"){
      blocks[1].classList.add("slide-current");
    }
    if(evt.target.id === "btn3"){
      blocks[2].classList.add("slide-current");
    }
  }
}
for(var i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", openedTab)
}
