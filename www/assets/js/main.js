var nav = new Array("home");

$(document).ready(function(){
	$("#nav .back").on("tap",function(){
		$("#"+nav.pop()).hide();
		$("#"+nav[nav.length-1]).show();
		if(nav.length==1) $(this).hide();
	})

	$("#home .btempezar").on("tap",function(){
		$("#home").hide();
		$("#menu").show();
		$("#nav .back").show();
		nav.push("menu");
	});
	$("#menu .item.cat").on("tap",function(){
		$("#menu").hide();
		$("#categoria").show();
		nav.push("categoria");
	});
})