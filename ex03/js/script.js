$(function(){
  //메뉴
  $('#allMenu .main').mouseenter(function(){
    $('#allMenu .sub').stop().slideDown('fast');
  });
  $('#allMenu .main').mouseleave(function(){
    $('#allMenu .sub').slideUp('fast');
  });
  
  //tab메뉴
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

	$('ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');
    
	$(this).addClass('current');
	$('#'+tab_id).addClass('current');
  });
  
     //슬라이더 
	  function fadeInOut(){

				var hideImg = $('.img-box img:eq(0)');
				var showImg = $('.img-box img:eq(1)');

				showImg.addClass('act').css('opacity', 0).animate({'opacity': 1}, 500, function(){
					hideImg.removeClass('act').appendTo('.img-box');
				});
			}
			// 함수 일정시간 간격으로 호출하기
			var Timer = setInterval(fadeInOut, 3000);

			// 이미지 정지
			$('.img-box img').hover(
				function(){
					clearInterval(Timer);
				},
				function(){
					Timer = setInterval(fadeInOut, 3000);
				}
			);

          //popup처리
          $('.gallery li:first-child').click(function(){
		     $('.popup').css('display','inline-block');
			});

		  $('.close').click(function(){
			 $('.popup').css('display','none');
		  });

});