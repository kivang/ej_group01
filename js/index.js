$(function(){
	// 为栏目绑定事件
	$("ul.left_nav").on("click","li",function(){
<<<<<<< HEAD
		// this = event.currentTarget — > li
=======
		// this = event.currentTarget
>>>>>>> 55ac3207143a95f702564d0ad7eb40a992d01f8e
		$("ul.left_nav > li").removeClass("current");
		$(this).addClass("current");
		var list = this.parentNode.children
		var lis = Array.prototype.slice.call(list,0)
		for (var i = 0; i < lis.length; i++) {
			if (lis[i]==this) {
				switch (i){
				case 0:
					$(".container > .right >.content >.mb_nav > span").removeClass("current_P")
					$("#0").addClass("current_P");
					break;
				case 1:
					$(".container > .right >.content >.mb_nav > span").removeClass("current_P")
					$("#1").addClass("current_P");break;
				case 2:
					$(".container > .right >.content >.mb_nav > span").removeClass("current_P")
					$("#2").addClass("current_P");break;
				case 3:
					$(".container > .right >.content >.mb_nav > span").removeClass("current_P")
					$("#3").addClass("current_P");break;
				case 4:
					$(".container > .right >.content >.mb_nav > span").removeClass("current_P")
					$("#4").addClass("current_P");break;
				case 5:
					$(".container > .right >.content >.mb_nav > span").removeClass("current_P")
					$("#5").addClass("current_P");break;
			}				
			}
			
		}
		var url = $(this).attr("url");
		$("#wrapper").load(url+"?time="+Math.random())
	})

		$("ul.left_nav > li").mouseenter(function(){
 		$(this.firstChild.nextSibling).addClass("current_a");
	})

		$("ul.left_nav > li").mouseout(function(){
   		$(this.firstChild.nextSibling).removeClass("current_a");
	})
		$("ul.left_nav > li > a").mouseenter(function(){
 		$(this).addClass("current_a");
 		$(this.previousSibling).addClass("current_i");
	})

		$("ul.left_nav > li > a").mouseout(function(){
   		$(this).removeClass("current_a");
   		$(this.previousSibling).addClass("current_i");
	})
		$("ul.left_nav > li").mouseenter(function(){
 		$(this.firstChild).addClass("current_i");
	})

		$("ul.left_nav > li").mouseout(function(){
   		$(this.firstChild).removeClass("current_i");
	})
		$("ul.left_nav > li > i").mouseenter(function(){
 		$(this).addClass("current_i");
 		$(this.nextSibling).addClass("current_a");
	})
		$("ul.left_nav > li > i").mouseout(function(){
 		$(this).addClass("current_i");
 		$(this.nextSibling).addClass("current_a");
	})
		
	// 默认选中第一个li
	$("ul.left_nav > li:first-child").trigger("click");


});