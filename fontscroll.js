$(document).ready(function(){
  $(document).mousemove(function(e) {
 	  e.preventDefault();

    var letters = ['Aa','Bb','Cc','Dd','Ee',"Ff", "Gg","Hh", "Ii", "Jj", "Kk","Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"],
        fonts = ['Open Sans','Vollkorn','PT Sans','Helvetica','Comic Sans MS','Georgia','Times New Roman','Arial','Lucida Sans Unicode','Tahoma','Trebuchet MS','Courier New','Lucida Console'];

    var letterSegments = Math.round($(window).width() / letters.length),
        fontSegments = Math.round($(window).height() / fonts.length);

    var $font = $("#font"),
        $footer = $("#footer");

  	for (var i = 0; i < letters.length; i++) {
  		if (letterSegments * (i + 1) > e.pageX && letterSegments * i < e.pageX) {
  			$("#font").html(letters[i]);
  		}
  	}

  	for (var i = 0; i < fonts.length; i++) {
  		if (fontSegments * (i + 1) > e.pageY && fontSegments * i < e.pageY) {
  			$font.css("font-family", fonts[i]);
  			$footer.css("font-family", fonts[i])
  			       .html(fonts[i]);
  		}
  	}
  });
});