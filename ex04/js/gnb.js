$(function(){
 var gnbLi = $('#gnb > li');
 var sub = $('#gnb > li > ul');
 var min =$('#mheader').height();
 var max =$('#gnb > li > ul').innerHeight()+min;
 
 gnbLi.on("mouseenter focus",function(){
   $('#mheader').stop().animate({width:'1200px',height:max},"fast","swing",function(){
        sub.stop().fadeIn('fast');
   });
     sub.removeClass('on');
	 $(this).find('ul').addClass('on');
  }); 
  $('#gnb').mouseleave(function(){
      sub.stop().fadeOut('fast',function(){
	     $('#mheader').stop().animate({height:min},'fast','swing');
	  });
  });
  
  $('#gnb > li > a').focus(function(){
   $('#mheader').stop().animate({height:max},"fast","swing");
     sub.stop().fadeIn("fast");
  }).blur(function(){
	 sub.stop().fadeOut("fast");
   $('#mheader').stop().animate({height:min},"fast","swing");
  });

});