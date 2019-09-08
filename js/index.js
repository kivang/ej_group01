$(function(){
	// 为栏目绑定事件
	$("ul.left_nav").on("click","li",function(){
		// this = event.currentTarget
		$("ul.left_nav > li").removeClass("current");
		$(this).addClass("current");
		var url = $(this).attr("url");
		$("#wrapper").load(url)
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