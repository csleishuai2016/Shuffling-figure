//封装dom id
function byId(id) {
	if(typeof(id) === "string") {
		return document.getElementById(id);
	} else {
		return id;
	}
}
var main = byId("main"),
	imageItems = byId("image-content").getElementsByTagName("div"),
	tabControl = byId("tab-control").getElementsByTagName("span"),
	imgPic = imageItems.length,
	timer = null,
	index = 0;

function startImage() {
	for(var i = 0; i < imgPic; i++) {
		imageItems[i].style.display = "none";
		tabControl[i].className = "";
	}
	imageItems[index].style.display = "block";
	tabControl[index].className = "active";
}

function startWork() {
	var imageContent = byId("image-content");
	var control = byId("tab-control");
	//实现轮播图	（1）：实现计时轮播
	//封装轮播方法
	function interVal(){
		timer = setInterval(function() {
				index++;
				if(index > imgPic - 1) {
					index = 0;
				}
				//console.log(index);
				startImage();
			}, 1000);
	}
	//封装停止轮播方法
	function disInterVal(){
		if(timer) {
			clearInterval(timer);
		}
	}
	//1.开始进入页面，开始计时1s轮播
	interVal();
	//2.当鼠标指针指在网页上时，停止计时轮播
	main.onmouseover = function() {
         disInterVal();
		}
	//3.当鼠标指针在网页外面时，开始计时1s轮播
	main.onmouseout = function() {
			interVal();
	}
	
		//实现轮播图（2）:选择选项卡选择图片
	for(var j = 0; j < imgPic; j++) {
		tabControl[j].id = j;
		tabControl[j].onclick = function() {
			index = this.id;
			startImage();
		}
	}

}

startWork();