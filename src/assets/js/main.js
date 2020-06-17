function sai(){
    alert("hello");
}

var string="Nagendra & Sai Krishna";
var strArray=string.split(0);

function animate(){
	if(strArray.length > 0){
		document.getElementById("animation").innerHTML += strArray.shift();
	}
	else{
document.getElementById("animation").innerHTML="";
	 strArray=string.split(0);
		}
		setTimeout(animate,100);
}

