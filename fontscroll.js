$(document).ready(function(){

   $(document).mousemove(function(e){
   		e.preventDefault();
      //console.log(e.pageX);
      //console.log($(window).width());

      var alap = ['Aa','Bb','Cc','Dd','Ee',"Ff", "Gg","Hh", "Ii", "Jj", "Kk","Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"];
      var fonts = ['Open Sans','Vollkorn','PT Sans','Helvetica','Comic Sans MS','Georgia','Times New Roman','Arial','Lucida Sans Unicode','Tahoma','Trebuchet MS','Courier New','Lucida Console'];

      var mouseX = e.pageX; 
      var windowW = $(window).width();
      var windowH = $(window).height();
      var segments = windowW / 26;
      var segmentsRound = Math.round(segments);
      var segments2 = windowH / fonts.length;
      var segmentsRound2 = Math.round(segments2);

	for(i=0; i < 26; i++){
		if (segmentsRound * (i + 1) > e.pageX && segmentsRound * i < e.pageX) {
			$("#font").html(alap[i]);
		}
	}

	for(i=0; i < fonts.length; i++){
		if (segmentsRound2 * (i + 1) > e.pageY && segmentsRound2 * i < e.pageY) {
			console.log(fonts[i]);
			$("#font").css("font-family", fonts[i]);
			$("#footer").css("font-family", fonts[i]);
			$("#footer").html(fonts[i]);
		}
	}
	
   });

})