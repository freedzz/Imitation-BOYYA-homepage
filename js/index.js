window.onload = function(){
	//大轮播图
	var swiper_container = document.getElementsByClassName("swiper-container");
	var pic = document.getElementsByClassName("pic")[0];
	var pic_ul = document.getElementsByClassName("swiper_container_ul1")[0];
	var pic_ul_lis = pic_ul.getElementsByTagName("li");
	pic_ul.appendChild(pic_ul_lis[0].cloneNode(true));
	var circle_ul = document.getElementsByClassName("swiper_container_ul2")[0];
	var pic_ul_lis_length = pic_ul_lis.length;
	var timer;
	var options = {
		"img_index":0,
		"img_width":1366,
		"animate_time":1500,
		"lis_length":pic_ul_lis_length-2,
		"tween_string":""
	}

	var img_index = options.img_index;

    //小轮播图
    var bd = document.getElementsByClassName("bd")[0];
    var bd_ul = document.getElementsByClassName("cl")[0];
    var bd_ul_lis = bd_ul.getElementsByTagName("li");
    var circle_ul2 = document.getElementsByClassName("ul")[0];
    var bd_ul_lis_length = bd_ul_lis.length;
    var timer2;
    var options2 = {
    	"img_index":0,
		"img_width":1044,
		"animate_time":500,
		"lis_length":1,
		"tween_string":""
    }
    var img_index2 = options2.img_index;


    //大轮播图添加下方圆点
	for(let i=0; i<pic_ul_lis.length-2;i++){
		let circle = document.createElement("li")
		circle_ul.appendChild(circle);
	}

	var circle_ul_lis = circle_ul.getElementsByTagName("li");
	//给大轮播图圆点添加点击事件
	for(var i=0;i<circle_ul_lis.length;i++){
		circle_ul_lis[i].index = i;
		circle_ul_lis[i].onclick = function(){
			if(pic.isanimated) return;
			img_index = this.index;
			changeCircle();
			clearInterval(timer);
			animate(pic, {"left": -options.img_width * this.index}, options.animate_time, options.tween_string, function(){
			});
		}
	}

	var circle_ul_lis2 = circle_ul2.getElementsByTagName("li");
	//给小轮播图圆点添加点击事件
	for(var i=0;i<2;i++){
		circle_ul_lis2[i].index = i;
		circle_ul_lis2[i].onclick = function(){
			if(bd.isanimated) return;
			img_index2 = this.index;
			changeCircle2();
			clearInterval(timer2);
			animate(bd_ul, {"left": -options2.img_width * this.index}, options2.animate_time, options2.tween_string, function(){
			});
		}
	}

	move();
	move2();

	pic.onmouseover = function(){
		clearTimeout(timer);
	}

	pic.onmouseleave = function(){
			move();
	}
	bd.onmouseover = function(){
		clearTimeout(timer2);
	}

	bd.onmouseleave = function(){
			move2();
	}

	function move(){
		timer = setInterval(function(){
			img_index++;
			if(img_index == 3){
				img_index = 0;
			}
			changeCircle();
	 		animate(pic, {"left": -options.img_width * img_index}, options.animate_time, options.tween_string, function(){
	 	});
	 	},3000)
	}
	function move2(){
		timer2 = setInterval(function(){
			img_index2++;
			if(img_index2 == 2){
				img_index2 = 0;
			}
			changeCircle2();
	 		animate(bd_ul, {"left": -options2.img_width * img_index2}, options2.animate_time, options2.tween_string, function(){
	 	});
	 	},4000)
	}


	function changeCircle(){
		var temp_index = img_index > options.lis_length ? 0 : img_index;
		for(var i=0;i<circle_ul_lis.length;i++){
			circle_ul_lis[i].className = ""
		}
		circle_ul_lis[temp_index].className = "current";
	}
	function changeCircle2(){
		var temp_index = img_index2 > options2.lis_length ? 0 : img_index2;
		for(var i=0;i<2;i++){
			circle_ul_lis2[i].className = ""
		}
		circle_ul_lis2[temp_index].className = "current2";
	}
}