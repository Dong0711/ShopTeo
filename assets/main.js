var i=0;

function changeImg()
{
var img=["./assets/img/slide2.jpg","./assets/img/slide1.jpg","./assets/img/slide4.jpg","./assets/img/slide3.jpg",];
document.getElementById("slide").src=img[i];
++i;
if(i==4)
{
i=0;
}

}
setInterval(changeImg,1500);