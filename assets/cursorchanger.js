var i=0
var x = document.getElementsByClassName("postbox");
var j;
var ol, ot;
var maxz=10;
var elem;
var pointerin;
// var mouseCursor = document.getElementById('cursor');
window.addEventListener("mousemove", e=> {
  var mouseCursor = document.getElementById('cursor');
  mouseCursor.style.top=e.pageY + "px"
  mouseCursor.style.left=e.pageX + "px"
  document.getElementsByTagName("html")[0].getAttribute("style")
  if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: ew-resize;") {
    mouseCursor.style.backgroundImage="url('/assets/images/Horizontal Resize.png')"
  } else if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: nesw-resize;") {
    mouseCursor.style.backgroundImage="url('/assets/images/Diagonal Resize 2.png')"
  } else if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: nwse-resize;") {
    mouseCursor.style.backgroundImage="url('/assets/images/Diagonal Resize 1.png')"
  } else if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: ns-resize;") {
    mouseCursor.style.backgroundImage="url('/assets/images/Vertical Resize.png')"
  } else if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: move;" && !pointerin) {
   mouseCursor.style.backgroundImage="url('/assets/images/Move 2.png')"
  } 
   else mouseCursor.style.backgroundImage="none"
})

// var clickables=document.getElementsByTagName('A');
var clickables=document.getElementsByTagName('A');
// console.log(clickables.length)

for (let int = 0; int < clickables.length; int++) {
  // console.log("x")
  element=clickables[int]
  // console.log(element)
  clickables[int].addEventListener("mouseenter",e=> {
    var mouseCursor = document.getElementById('cursor');
    mouseCursor.style.backgroundImage="url('/assets/images/pointer.png')"
    // console.log('enter pointer')
    pointerin=true;
  })
  clickables[int].addEventListener("mouseleave",e=> {
    var mouseCursor = document.getElementById('cursor');
    mouseCursor.style.backgroundImage="url('/assets/images/pointer.png')"
    // console.log('leave pointer')
    pointerin=false;
  })
}
