padding=700;
ww=window.screen.width-padding;
wh=window.screen.height-padding;

boxes=document.getElementsByClassName('postbox')
for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    console.log(element)
    element.style.top=( Math.floor(Math.random() * wh))+"px"
    element.style.left=( Math.floor(Math.random() * ww))+"px"
}

console.log(wh + ', ' + ww)