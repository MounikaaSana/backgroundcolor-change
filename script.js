const button=document.querySelector("button1");
const body=document.querySelector("body");
const color=['violet','indigo','blue','green','yellow','orangle','red'];
body.style.backgroundColor='pink';
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
});