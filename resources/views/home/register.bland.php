<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>注册</title>
<!-- Bootstrap Core CSS -->
<link href="assets/css/bootstrap.min.css" rel="stylesheet">
<!-- Animation -->
<link rel="stylesheet" href="css/animate.css">
<!-- prettyphoto -->
<!-- Bootsrap modal -->
<link rel="stylesheet" href="css/bootstrap-modal-carousel.css">
<!-- Custom CSS -->
<link href="css/theme.css" rel="stylesheet">
<!-- Responsive styles-->
<link rel="stylesheet" href="css/responsive.css">
<!-- Custom Fonts -->
<!-- FontAwesome -->
<link rel="stylesheet" href="css/font-awesome.min.css">
<!-- Elegant icon font -->
<link rel="stylesheet" href="css/line-icons.min.css">

</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
<!-- Navigation -->
<!-- Navigation -->
<nav class="navbar navbar-custom navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i class="fa fa-bars"></i> </button>
			<a class="navbar-brand page-scroll" href="index.html"> 
				<img src="images/logo.png" alt="" class="img-responsive"> 
			</a>
		</div>
		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse navbar-right navbar-main-collapse">
			<ul class="nav navbar-nav">
				<li class="active"><a href="index.html" class="page-scroll">首页</a></li>
				<li><a class="page-scroll" href="#section-features">要闻动态</a></li>
				<li><a class="page-scroll" href="#section-services">乡村研究</a></li>
				<li><a class="page-scroll" href="#section-portfolio">农村扶贫</a></li>
				<li class="page-scroll">
					<a href="#" class="page-scroll dropdown-toggle" data-toggle="dropdown">
						农村党建
						<b class="caret"></b>
					</a>
					<ul class="dropdown-menu">
						<li><a class="clickss" href="#">人才振兴</a></li>
						<li><a class="clickss" href="#">文化振兴</a></li>
						<li><a class="clickss" href="#">生态振兴</a></li>
					</ul>
				</li>
				<li><a class="page-scroll" href="login.html">登入</a></li>
				<li><a class="page-scroll" href="register.html">注册</a></li>
			</ul>
		</div>
		<!-- /.navbar-collapse -->
	</div>
	<!-- /.container -->
</nav>
<!-- navbar end -->





<!-- section contact start -->
<section id="section-content" class="section-padding" style="background: #222 url(./images/bg/bg2.jpg) no-repeat fixed center center / cover; height: 600px;">
	<div class="bg-overlay"></div>
	<div class="container">
		<div class="row">
			<div class="col-md-12" style="padding-top: 50px; ">
				<div class="section-heading text-center">
					<!-- <p>登入</p> -->
					<p style="color: white; !important">R e g i s t e r</p> 
				</div>
			</div>
		</div>
		<!--  row heading end -->
		<div class="row">
			<div class="wow fadeIn">
				<div class="contact-box">
					<form  id="contactForms" data-toggle="validator" method="get" action="">
						<div class="col-md-4 col-md-offset-4">
							
							<div class="form-group" style="padding-bottom: 10px;">
								<input type="phone" id="name" name="name" class="form-control" placeholder="手机号码" required data-error="请填写正确的手机号码">
								<div class="help-block with-errors"></div>
							</div>
						</div>
						<div class="col-md-4 col-md-offset-4">

							<div class="form-group">
								<input type="password" name="email" id="email" class="form-control" placeholder="密码" required data-error="请输入您的密码">
								<div class="help-block with-errors"></div>
							</div>
						</div>
						
						
						<div class="col-md-12  text-right wow fadeInUp text-center"> 
							<button class="btn btn-black " id="submit" type="submit" value="Submit">注 册</button>
							<div id="msgSubmit" class="h3 text-center hidden"></div>
						</div>
					</form>
				</div>
		</div>
		<!-- row end -->
	</div>
	<!-- container end -->
</section>
<!-- section contact end -->


<!--  Footer start  -->
<section id="footer" class="section-padding ">
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<div class="footer-widget">
					<h2>Neon</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa consectetur assumenda est unde animi. Repellat quibusdam et ad aut molestias, facere maxime expedita aperiam sint.</p>
				</div>
			</div>
			<div class="col-md-4">
				<div class="footer-widget">
					<h3>Quick Links</h3>
					<ul>
						<li><a href="#"><i class="fa  fa-angle-right"></i>Financial Analysis</a></li>
						<li><a href="#"><i class="fa  fa-angle-right"></i>Financial planner</a></li>
						<li><a href="#"><i class="fa  fa-angle-right"></i>Consulting</a></li>
						<li><a href="#"><i class="fa  fa-angle-right"></i>Creative ideas</a></li>
						<li><a href="#"><i class="fa  fa-angle-right"></i>Market Reseach</a></li>
						<li><a href="#"><i class="fa  fa-angle-right"></i>Investment Advisor</a></li>
						<li><a href="#"><i class="fa  fa-angle-right"></i>Creative ideas</a></li>
						<li><a href="#"><i class="fa  fa-angle-right"></i>Market Reseach</a></li>
					</ul>
				</div>
			</div>
			<div class="col-md-4">
				<div class="footer-widget tags">
					<h3>Top category</h3>
					<ul>
						<li><a href="#">Web design</a></li>
						<li><a href="#">graphics</a></li>
						<li><a href="#">Web development</a></li>
						<li><a href="#">branding</a></li>
						<li><a href="#">marketing</a></li>
						<li><a href="#">app development</a></li>
						<li><a href="#">Web development</a></li>
						<li><a href="#">marketing</a></li>
						<li><a href="#">branding</a></li>
						<li><a href="#">App development</a></li>
						<li><a href="#">branding</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<!--  Footer end  -->


<!-- section footer strat -->

</footer>
<!-- section contact address end -->

<!-- jQuery -->
<script src="js/jquery.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="assets/js/bootstrap.min.js"></script>
<!-- form validation -->
<script type="text/javascript" src="js/validator.min.js"></script>
<script type="text/javascript" src="js/form-scripts.js"></script>
<!-- Plugin JavaScript -->
<script src="js/jquery.easing.min.js"></script>
<!-- isotope -->
<script type="text/javascript" src="js/jquery.isotope.js"></script>
<!-- Waypoints -->
<script type="text/javascript" src="js/jquery.waypoints.min.js"></script>
<!-- Wow Animation -->
<script type="text/javascript" src="js/wow.min.js"></script>
<!-- Google Maps API Key - Use your own API key to enable the map feature. More information on the Google Maps API can be found at https://developers.google.com/maps/ -->
<!-- Custom Theme JavaScript -->
<script src="js/theme.js"></script>

<script type="text/javascript">
	

</script>

</body>
</html>
