import interact from 
'https://cdn.interactjs.io/v1.10.11/interactjs/index.js'

var i=0
var x = document.getElementsByClassName("postbox");
var j;
var ol, ot;
var maxz=10;
var elem;

var mouseCursor = document.getElementById('cursor');
window.addEventListener("mousemove", e=> {
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
  } else if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: move;") {
   mouseCursor.style.backgroundImage="url('/assets/images/Move 2.png')"
  } else mouseCursor.style.backgroundImage="none"
  
})


var myFunction = function() {
  // var attribute = this.getAttribute("data-myattribute");
  // alert(attribute);
  // console.log(this)
  this.style.zIndex=90+maxz;
  maxz+=20;
};
for (j = x.length-1; j >=0 ; j--) {
  // x[j].style.zIndex=j;
  // ol=x[j].offsetLeft + 'px';
  // ot=x[j].offsetTop + 'px';
  // console.log(x[j].offsetLeft);
  // // x[j].style.left=(x[j]).offsetLeft + 'px';
  // // x[j].style.top=(x[j]).offsetTop + 'px';
  // x[j].style.position = "absolute";
  // // x[j].style.top="340px";
  // // x[j].style.left="130px";

  // x[j].style.top=ot;
  // x[j].style.left=ol;
  // x[j].style.display='default';
  // elem= x[j];
  // console.log(x[j])
  x[j].addEventListener('mouseenter', myFunction, false)
  ;
}

function mouseEnter() {

}

// target elements with the "draggable" class
interact('.postbox')
  .resizable({
    //resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'

        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'
  
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
 
      },
      end (event) {

      }
    },
    modifiers: [


      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 300, height: 300 }
      })
    ],
    inertia: false

  })
  .draggable({
    // enable inertial throwing
    // inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
    //   interact.modifiers.restrictRect({
    //     restriction: 'parent',
    //     endOnly: true
    //   })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')

  
        // textEl && (textEl.textContent =
        //   'moved a distance of ' +
        //   (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
        //              Math.pow(event.pageY - event.y0, 2) | 0))
        //     .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
  // target.style.zIndex=(10+i)
  // i=i+1
  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)


}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener