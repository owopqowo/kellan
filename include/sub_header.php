<?php include(dirname(__FILE__)."/header.php");?>


<!-- 전체감싸는 박스 -->
<div id="wrapper">
	<div id="sub_container"><!-- 서브컨테이너 -->
		<!-- 서브비주얼 -->
<!-- background-image:url(/images/sub/sub<?php echo sprintf('%02d',$GLOBALS['_curMenuNum'][0]);?>_bg.jpg); -->
		<div class="bg" style="background-repeat: no-repeat;background-position: center 0;background-size:cover">
			<div id="sub_head" class="mx_size">
				<!-- <div class="tit">
					<p> <?php echo $_MENUS[$GLOBALS['_curMenuNum'][0]]['TITLE']?></p>
				</div>
				<div class="text">
					<img src="/images/sub/tit_text.png" alt="당신을 지키는 한겹의 차이 앞서가는 기술력과 노하우로 21세기를 앞장서겠습니다." />
				</div> -->
			</div>
		</div>
		<!-- //서브비주얼 -->
		<!-- 서브메뉴-->
		<div id="sub_left">
			<!-- 현재 서브페이지_타이틀 및 서브 카테고리 -->
			<!-- <div id="sub_visual" class="s_vi<?php echo sprintf('%02d',$GLOBALS['_curMenuNum'][0]);?>">
				<p><?php echo $_MENUS[$GLOBALS['_curMenuNum'][0]]['TITLE']?></p>
			</div> -->
			<!-- //현재 서브페이지_타이틀 및 서브 카테고리 end-->
			<div class="mx_size">
				<?php include (dirname(__FILE__)."/leftmenu1.html");?>
			</div>
		</div>
		<!-- //서브메뉴 end-->
		<!-- 경로 -->
		<div id="sub_location">
			<p class="roc">
				<img src="/images/sub/home.gif" alt="home" />
				<?php echo getMenuTitles()?>
			</p>
		</div>
		<!-- //경로 end-->
		<div class="mx_size"><!-- mx_size -->


			<!-- 서브컨텐츠 전체 -->
			<div id="sub_body">



				<!-- 서브내용 -->
				<div id="sub_con">
				<!-- <?php echo getMyMenuTitle()?> -->


				<?php if( $_curMenuNum[0] == 2 && $_curMenuNum[1] == 1 ){?>
					<!-- //탭메뉴 -->
					<div class="basics_tab">
						<div class="tab_add">
							<ul>
								<li>Modern Style</li>
								<li>Unique Style</li>
							</ul>
						</div>
						<ul>
							<li class="<?php if($_GET[catecode] == "211") echo "on" ?>"><a href="<?php echo getMenuLink( '2_1_1' )?>">켈란 ST</a></li>
							<li class="<?php if($_GET[catecode] == "212") echo "on" ?>"><a href="<?php echo getMenuLink( '2_1_2' )?>">켈란 SI+</a></li>
							<li class="<?php if($_GET[catecode] == "213") echo "on" ?>"><a href="<?php echo getMenuLink( '2_1_3' )?>">켈란 IC+</a></li>
							<li class="<?php if($_GET[catecode] == "214") echo "on" ?>"><a href="<?php echo getMenuLink( '2_1_4' )?>">켈란 NC+</a></li>
							<li class="<?php if($_GET[catecode] == "215") echo "on" ?>"><a href="<?php echo getMenuLink( '2_1_5' )?>">켈란 SC</a></li>
							<li style="margin-right:36px;" class="<?php if($_GET[catecode] == "216") echo "on" ?>"><a href="<?php echo getMenuLink( '2_1_6' )?>">켈란 MD+</a></li>
							<li class="<?php if($_GET[catecode] == "217") echo "on" ?>"><a href="<?php echo getMenuLink( '2_1_7' )?>">켈란 CR</a></li>
							<li class="<?php if($_GET[catecode] == "218") echo "on" ?>"><a href="<?php echo getMenuLink( '2_1_8' )?>">켈란 PM</a></li>
							<li class="<?php if($_GET[catecode] == "219") echo "on" ?>"><a href="<?php echo getMenuLink( '2_1_9' )?>">켈란 IP(G)</a></li>
							<li class="<?php if($_GET[catecode] == "220") echo "on" ?>"><a href="<?php echo getMenuLink( '2_1_10' )?>">켈란 NP(G)</a></li>
						</ul>
					</div>
					<!-- //탭메뉴 end -->
				<?php }else if( $_curMenuNum[0] == 3 && $_curMenuNum[1] == 4 ){?>
					<!-- //탭메뉴 -->
					<div class="basics_tab02">
						<ul>
							<li class="<?php if($_GET[catecode] == "341") echo "on" ?>"><a href="<?php echo getMenuLink( '3_4_1' )?>">3차원 측정기</a></li>
						</ul>
					</div>
					<!-- //탭메뉴 end -->
				<?}?>

				<h3 class="sub_tit"></h3>
