
function SelectList() {

	$(".content").find(".left").find("ul").find("li").click(function() {

		var index = $(this).prevAll().length;
		
		/* 列表颜色和图标随着变动 */
		$(".content").find(".left").find("ul").find("li").find("p").find("a").find("strong").find("span").css("display","none")
		$(".content").find(".left").find("ul").find("li").find("p").find("a").css("color","#444866")
		$(this).find("p").find("a").css("color","#38b744")
		$(this).find("p").find("a").find("strong").find("span").css("display","inline-block")
		
		/* 点击显示对于列表 */
		$(".content").find(".productList").css("display", "none")
		$(".content").find(".productList:eq(" + index + ")").css("display", "block")
		
		$(".content-tit-right").find("ul").find("li").find("span").css("display","none")
		$(".content-tit-right").find("ul").find("li").find("span:eq("+ index +")").css("display","inline-block")

	});
}


$(function() {

	SelectList();

})
