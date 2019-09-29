<?php include("../include/header.php");?>

<!-- Container :: build -->
<div id="container" class="sub build">
	<!-- sub visual -->
	<div class="sub_top">
		<!-- visual -->
		<div class="visual">
			<div class="text">
				<h2>Kellan Family</h2>
				<p>가까운 시공점에 방문하시면<br />차별화된 켈란을 경험할 수 있습니다.</p>
			</div>
		</div>
		<!-- //visual -->

		<!-- location -->
		<div class="location_wrap">
			<h3 class="tit"></h3>
			<div class="location">
				<span>Home</span>
				<span></span>
				<span></span>
			</div>
		</div>
		<!-- //location -->
	</div>
	<!-- //sub visual -->

	<!-- content -->
	<div class="content">
		<div class="inner">
			<!-- search -->
			<div class="search">
				<input type="text" placeholder="시공점명 또는 지역을 입력해 주세요.">
				<a href="#" class="btn_search">검색</a>
			</div>
			<!-- //search -->

			<!-- google map -->
			<div id="build_map">
				<script>
					// Initialize and add the map
					function initMap() {
						var map = new google.maps.Map(document.getElementById('build_map'), {
						zoom: 13,
						center: {lat: 37.6274, lng: 127.1902}
					});
					var image = 'http://mkmotors.gabia.io/images/sub01/map_maker.png';
					var beachMarker = new google.maps.Marker({
						position: {lat: 37.6274, lng: 127.1902},
						map: map,
						icon: image
					});
					}
				</script>
				<script async defer
				src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmfyg2FGCXnDc5mnylFjUmm8Qr-STFeHo&callback=initMap">
				</script>
			</div>
			<!-- //google map -->

			<h3 class="tit">켈란 시공점</h3>
			<!-- bulid tab -->
			<div class="build_tab">
				<ul>
					<li class="on"><a href="#"><span>전체</span></a></li>
					<li><a href="#"><span>프리미엄대리점</span></a></li>
					<li><a href="#"><span>공식대리점</span></a></li>
					<li><a href="#"><span>인증점</span></a></li>
				</ul>
			</div>
			<!-- //bulid tab -->

			<!-- result board -->
			<p><strong>20</strong>건의 게시물의 검색되었습니다.</p>
			<div class="tbl_style_01">
				<table>
					<thead>
						<tr>
							<th>구분</th>
							<th>시공점명</th>
							<th>주소</th>
							<th>연락처</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>프리미엄대리점</td>
							<td>여의도점</td>
							<td>서울특별시 영등포고 여의도동 20</td>
							<td>02-2080-2266</td>
						</tr>
						<tr>
							<td>프리미엄대리점</td>
							<td>여의도점</td>
							<td>서울특별시 영등포고 여의도동 20</td>
							<td>02-2080-2266</td>
						</tr>
						<tr>
							<td>프리미엄대리점</td>
							<td>여의도점</td>
							<td>서울특별시 영등포고 여의도동 20</td>
							<td>02-2080-2266</td>
						</tr>
						<tr>
							<td>프리미엄대리점</td>
							<td>여의도점</td>
							<td>서울특별시 영등포고 여의도동 20</td>
							<td>02-2080-2266</td>
						</tr>
						<tr>
							<td>프리미엄대리점</td>
							<td>여의도점</td>
							<td>서울특별시 영등포고 여의도동 20</td>
							<td>02-2080-2266</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- //result board -->

			<!-- pager :: PC -->
			<div class="pager pc">
				<ul>
					<li class="first"><a href="#">가장 앞으로</a></li>
					<li class="prev"><a href="#">이전</a></li>
					<li class="on"><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
					<li><a href="#">8</a></li>
					<li><a href="#">9</a></li>
					<li><a href="#">10</a></li>
					<li class="next"><a href="#">다음</a></li>
					<li class="last"><a href="#">가장 뒤로</a></li>
				</ul>
			</div>
			<!-- //pager :: PC -->

			<!-- pager :: Mobile -->
			<div class="pager mobile">
				<ul>
					<li class="first"><a href="#">가장 앞으로</a></li>
					<li class="prev"><a href="#">이전</a></li>
					<li class="on"><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li class="next"><a href="#">다음</a></li>
					<li class="last"><a href="#">가장 뒤로</a></li>
				</ul>
			</div>
			<!-- //pager :: Mobile -->
		</div>
	</div>
	<!-- //content -->

	<img src="../images/sub/left_red_line.png" alt="" class="line red_line_01">
	<img src="../images/sub/right_white_line.png" alt="" class="line white_line_01">
	<img src="../images/sub/right_red_line.png" alt="" class="line red_line_02">
</div>
<!-- //Container :: build -->

<?php include("../include/footer.php");?>
