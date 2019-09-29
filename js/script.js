$(function(){
	//header
	var url = window.location.href,
	path = window.location.pathname;

	$('.gnb a').each(function(){
		var href = $(this).attr('href'),
		pathTarget = path.split('_')[0];
		if(url.indexOf(pathTarget) != -1 && href.indexOf(pathTarget) != -1){
			if(path == '/'){
				$(this).parents('li').removeClass('on');
			}else{
				$(this).parents('li').addClass('on');
			}
		}
	});

	$('.ready a').click(function(){
		alert('준비중입니다');
		return false;
	});

	if(!$('#container').hasClass('main') && !$('#container').hasClass('sub')){
		$(window).scroll(function(){
			if($(this).scrollTop() > 0){
				$('header').addClass('black');
			}else{
				$('header').removeClass('black');
			}
		});
	}

	//company
	var href = window.location.href,
	companyTarget = href.split('#')[1],
	company = href.indexOf('sub01');
	$('.gnb li:first-child ul li a').click(function(){
		if(company != -1){
			var href = $(this).attr('href'),
			content = href.split('#')[1];
			contentTop = $('#'+content).offset().top;
			$('html, body').animate({'scrollTop':contentTop},500);
			$('header').removeClass('on');
			return false;
		}
	});

	if (companyTarget!=undefined && $('#container').hasClass('company')){
		var companyTop = $('#'+companyTarget).offset().top;
		$('html, body').animate({'scrollTop':companyTop},500);
	}

	//location
	//var loc = location.href;
	var path = window.location.pathname;
	var serach = window.location.search;
	var serachN = serach.split('=')[1];
	if (path.indexOf('/pages/board/') === 0)
	{
		if (serachN.indexOf('&') != -1) serachN = serachN.substr(0, serachN.indexOf('&'));
	}

	var link = path + serach
	//var chunk = loc.split("/");
	//var str = "/" + chunk.slice(-2).join("/");

	var oneDepth = $('.gnb>li.on>a').text();
	var twoDepth = $('.gnb ul li.on a').text();
	var title = $('.sub_top h2').text();

	$('.location span:nth-child(2)').text(oneDepth);
	if($('#container').hasClass('product')){
		$('.location span:nth-child(3)').text(twoDepth);
	}else {
		$('.location_wrap h3').text(twoDepth);
		$('.location span:nth-child(3)').text(title);
	}

	//guide
	if(url.indexOf('guide') != -1){
		var str = path.split('/').slice(-1)[0];
		$('.location span:nth-child(2)').hide();
		switch (str) {
			case 'email.php':
				$('.location_wrap h3').text('이메일무단수신거부');
			break;
			case 'policy.php':
				$('.location_wrap h3').text('개인정보취급방침');
			break;
			case 'sitemap.php':
				$('.location_wrap h3').text('사이트맵');
			break;
			default:
			break;
		}
	}


	// tab
	$('.tab.page a').each(function(){
		var tabPageAll = $(this).attr('href'),
		tabPage = tabPageAll.split('#')[0];
		if(href.indexOf(tabPage) != -1){
			$(this).parent('li').addClass('on');
		}
	});
	/*
	if($('.location_wrap').length > 0){
		var locationTop = $('.location_wrap').offset().top;
		if(href.indexOf('#topSkip') != -1){
			$('body, html').animate({scrollTop:locationTop},500);
		}
		$('.tab.page a').click(function(){
			var tabPageAll = $(this).attr('href'),
			tabPage = tabPageAll.split('#')[0];
			if(href.indexOf(tabPage) != -1){
				$('body, html').animate({scrollTop:locationTop},500);
			}
		});
	}
	*/

	$('.tab.cont a').click(function(){
		var tagetIndex = $(this).parent('li').index()+1;
		$('.tab.cont li').removeClass('on');
		$(this).parent('li').addClass('on');
		$('.content').hide();
		$('.content_0'+tagetIndex).show();
		//return false;
	});



	$('.login .btn_join').click(function(){
		var tabTop = $('.tab_wrap').offset().top;
		$('.tab.cont li').removeClass('on');
		$('.tab.cont li:last-child').addClass('on');
		$('.content').hide();
		$('.content_02').show();
		$('body, html').scrollTop(tabTop);
		return false;
	})

	//login
	if(url.indexOf('login') != -1){
		var tabTop = $('.tab_wrap').offset().top;
		var target = url.split('#')[1];
		switch (target) {
			case 'family':
				$('.tab li').removeClass('on');
				$('.tab li:first-child').addClass('on');
				$('.content').hide();
				$('.content_01').show();
				//$('body, html').scrollTop(tabTop);
			break;
			case 'dist':
				$('.tab li').removeClass('on');
				$('.tab li:last-child').addClass('on');
				$('.content').hide();
				$('.content_02').show();
				//$('body, html').scrollTop(tabTop);
			break;
			default:
			break;
		}
	}

	//faq
	$('.faq_list ul>li>a').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).next('div').stop().slideUp();
		}else{
			$('.faq_list ul>li>a').removeClass('on');
			$(this).addClass('on');
			$('.faq_list ul>li>div').stop().slideUp();
			$(this).next('div').stop().slideDown();
		}
		return false;
	})


	$('.fixed_navi a').click(function(){
		var content = $(this).children('span').attr('data-name'),
		contentTop = $('.'+content).offset().top;
		$('html, body').animate({'scrollTop':contentTop},500);
		return false;
	});

	scrollNav();
	mainAnimate();

	$(window).scroll(function(){
		scrollNav();
		mainAnimate();
		/*
		if($(this).scrollTop() > 0){
			$('header').unbind('mouseenter');
			$('header').addClass('scroll');
		}else{
			$('nav').bind({
				mouseenter:function(){$(this).parent('header').addClass('on');},
				mouseleave:function(){$(this).parent('header').removeClass('on');}
			});
			$('header').removeClass('scroll');
		}
		*/
	});

	$('.intro_scroll').click(function(){
		var tagetTop = $(this).parents('.content').next('.content').offset().top;
		$('html, body').animate({'scrollTop':tagetTop},500);
		return false;
	});

	$(window).load(function(){
		//masonry
		if($('.grid').length > 0){
			$('.grid').masonry({
				itemSelector: '.grid li',
				columnWidth: '.grid li',
				horizontalOrder: true,
				percentPosition: true,
				gutter: 0
			});
		}

		//sub page animate
		$('.sub .visual h2').addClass('on');
		$('.sub .visual p').addClass('on');
	})

	responsive();

	//main img margin top
	$(window).resize(function(){
		$('.main .img_box').each(function(){
			var imgH = $(this).height();
			$(this).css({'margin-top':-imgH/2});
		});
	});
	$('.main .img_box').each(function(){
		var imgH = $(this).height();
		$(this).css({'margin-top':-imgH/2});
	});
});

function scrollNav() {
	var windowH = $(window).height(),
	fixedNaviH = $('.fixed_navi').height();
	$('.fixed_navi li').each(function(){
		var targetContent = $(this).find('span').attr('data-name'),
		targetContentTop = $('.'+targetContent).offset().top;
		if($(window).scrollTop() >= targetContentTop-(windowH/2-fixedNaviH/2)){
			$('.fixed_navi li').removeClass('on');
			$(this).addClass('on');
		}
	});
	/*
	if($('#container').hasClass('main')){
		var priceTop = $('.price').offset().top,
		qualityTop = $('.quality').offset().top;
		if($(window).scrollTop() >= priceTop-(windowH/2-fixedNaviH/2) && $(window).scrollTop() < qualityTop-(windowH/2-fixedNaviH/2)){
			$('.fixed_navi').addClass('left');
		}else{
			$('.fixed_navi').removeClass('left');
		}
	}
	*/
}

function mainAnimate() {
	if($('#container').hasClass('main')){
		$('.content').each(function(){
			var mainContentTop = $(this).offset().top;
			if($(window).scrollTop() >= mainContentTop-500){
				$(this).find('h2').addClass('fadeInRight');
				$(this).find('.desc').addClass('fadeInRight');
				$(this).find('.list li').addClass('fadeInUp');
				$(this).find('.btn_white').addClass('fadeInUp');
				$(this).find('.img_fade').addClass('fadeIn');
				$(this).find('.img_left').addClass('fadeInLeft');
				$(this).find('.img_right').addClass('fadeInRight');
			}
		});
	}
	if($('#container').hasClass('company')){
		$('.content').each(function(){
			var mainContentTop = $(this).offset().top;
			if($(window).scrollTop() >= mainContentTop-500){
				$(this).find('h2').addClass('on');
				$(this).find('.desc').addClass('on');
				$(this).find('.text p').addClass('on');
				$(this).find('dl').addClass('on');
				$(this).find('h3').addClass('on');
			}
		});
	}
}

function responsive(){
	var res = '',
	param = $('header');

	if($('.logo_pc').is(':visible')) res = 'web';
	else res = 'mob';
	param.removeClass('web mob');
	param.addClass(res);
	def(param);

	$(window).resize(function(){
		if($('.logo_pc').is(':visible')) res2 = 'web';
		else res2 = 'mob';
		param.removeClass('web mob');
		param.addClass(res2);
		if(res != res2){
			res = res2;
			def(param);
		}
	});

	function def(param){
		if(param.hasClass('web')){
			$('.gnb').show();
			$('.gnb>li ul').show();
			$('.btn_menu_m').unbind('click');
			$('.gnb>li>a').unbind('click');
			$('.gnb>li>a').removeClass('on');
			$('header').removeClass('on');
			$('nav').bind({
				mouseenter:function(){$(this).parent('header').addClass('on');}
			});
			$('header').bind({
				mouseleave:function(){$(this).removeClass('on');}
			});
			var clickW = 0;
			$('.btn_menu').bind('click', function(){
				if(clickW == 0){
					$('header').addClass('on');
					clickW = 1;
				}else {
					$('header').removeClass('on');
					clickW = 0;
				}

				return false;
			});
		}else if(param.hasClass('mob')){
			$('.gnb').hide();
			$('.gnb>li ul').hide();
			$('nav').unbind('mouseenter');
			$('header').unbind('mouseleave');
			$('.btn_menu').unbind('click');
			$('header').removeClass('on');
			var clickM = 0;
			$('.btn_menu_m').bind('click', function(){
				if(clickM == 0){
					$('header').addClass('on');
					$('.gnb').slideDown();
					clickM = 1;
				}else{
					$('.gnb').slideUp(function(){
						$('header').removeClass('on');
					});
					clickM = 0;
				}
				return false;
			});
			$('.gnb>li>a').bind('click', function(){
				$(this).toggleClass('on');
				$(this).next('ul').slideToggle();
				return false;
			});
		}
	}
}
