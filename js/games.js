function HoverEffect(index) {

	var the = $(".article").find("ul").find("li");

	/* 第一个 */
	switch (index) {
		case 0:
			changeToNormal();
			the.find(".pic1").css("backgroundPosition", "-123px 0px");
			the.find(".pic1").next().css("color", "#38B774");
			the.find(".pic1").next().next().css("display", "block");
			break;
		case 1:
			changeToNormal();
			the.find(".pic2").css("backgroundPosition", "-123px -97px");
			the.find(".pic2").next().css("color", "#38B774");
			the.find(".pic2").next().next().css("display", "block");
			break;
		case 2:
			changeToNormal();
			the.find(".pic3").css("backgroundPosition", "-121px -199px");
			the.find(".pic3").next().css("color", "#38B774");
			the.find(".pic3").next().next().css("display", "block");
			break;
		case 3:
			changeToNormal();
			the.find(".pic4").css("backgroundPosition", "-120px -299px");
			the.find(".pic4").next().css("color", "#38B774");
			the.find(".pic4").next().next().css("display", "block");
			break;
		case 4:
			changeToNormal();
			the.find(".pic5").css("backgroundPosition", "-120px -506px");
			the.find(".pic5").next().css("color", "#38B774");
			the.find(".pic5").next().next().css("display", "block");
			break;
		default:
			break;
	}


}

function changeToNormal() {

	let the = $(".article").find("ul").find("li");
	the.find(".pic4").css("backgroundPosition", "0px -299px");
	the.find(".pic5").css("backgroundPosition", "0px -506px");
	the.find(".pic1").css("backgroundPosition", "1px 0px");
	the.find(".pic2").css("backgroundPosition", "-2px -97px");
	the.find(".pic3").css("backgroundPosition", "0px -199px");
	the.find("div").next().css("color", "black");
	the.find("div").next().next().css("display", "none");

}

function SelectList() {
	$(".article").find("ul").find("li").click(function() {

		var index = $(this).prevAll().length;

		console.log(index)

		$(".container-box").find("aside").css("display", "none")
		$(".container-box").find("aside:eq(" + index + ")").css("display", "block")

	});
}


$(function() {

	SelectList();

	$(".article").find("ul").find("li").click(function() {

		var index = $(this).prevAll().length;
		HoverEffect(index);
	});


})
