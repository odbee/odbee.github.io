var i=0
var x = document.getElementsByClassName("postbox");
var j;
var ol, ot;
var maxz=10;
var elem;

// var mouseCursor = document.getElementById('cursor');
window.addEventListener("mousemove", e=> {
  // mouseCursor.style.top=e.pageY + "px"
  // mouseCursor.style.left=e.pageX + "px"
  // document.getElementsByTagName("html")[0].getAttribute("style")
  // if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: ew-resize;") {
  //   mouseCursor.style.backgroundImage="url('/assets/images/Horizontal Resize.png')"
  // } else if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: nesw-resize;") {
  //   mouseCursor.style.backgroundImage="url('/assets/images/Diagonal Resize 2.png')"
  // } else if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: nwse-resize;") {
  //   mouseCursor.style.backgroundImage="url('/assets/images/Diagonal Resize 1.png')"
  // } else if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: ns-resize;") {
  //   mouseCursor.style.backgroundImage="url('/assets/images/Vertical Resize.png')"
  // } else if (document.getElementsByTagName("html")[0].getAttribute("style")== "cursor: move;") {
  //  mouseCursor.style.backgroundImage="url('/assets/images/Move 2.png')"
  // } else mouseCursor.style.backgroundImage="none"
  var elms = document.getElementsByTagName("*");
  var n = elms.length;
  var laststyle;
  for(var i = 0; i < n; i ++) {
    console.log( window.getComputedStyle(elms[i]).cursor)
    // console.log(elms[i])
    if(window.getComputedStyle(elms[i]).cursor == "pointer") {
      
      elms[i].style.cursor = "url(/windowscursors/arrow_rl.cur), auto";
      laststyle = elms[i].style.cursor;
    } else if (window.getComputedStyle(elms[i]).cursor == "move") {
      elms[i].style.cursor = "url(/windowscursors/move_l.cur), move";
    } else if (window.getComputedStyle(elms[i]).cursor == "ew-resize") {
      elms[i].style.cursor = "url(/windowscursors/size3_rl.cur), ew-resize";
    } else if (window.getComputedStyle(elms[i]).cursor == "nesw-resize") {
      elms[i].style.cursor = "url(/windowscursors/size1_rl.cur), nesw-resize";
    } else if (window.getComputedStyle(elms[i]).cursor == "nwse-resize") {
      elms[i].style.cursor = "url(/windowscursors/size2_rl.cur), nwse-resize";
    } else if (window.getComputedStyle(elms[i]).cursor == "ns-resize") {
      elms[i].style.cursor = "url(newcursor.ico)";
    } else if (window.getComputedStyle(elms[i]).cursor == "auto") {
      elms[i].style.cursor = laststyle;
    }
    
      
  }
})
