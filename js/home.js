$(document).keypress(function(e) {
    if(e.which == 13) {
        setTimeout(function(){
			$(".resultNum")[0].style.display = "block"
		}, 1000)
		setTimeout(function(){
		for(var i = 0; i < $(".result").length; i++){
			$(".result")[i].style.display = "block"
			
		}
		$(".bottom")[0].style.display = "block"

		},1500)
		


    }

});



