<?php include("header.php"); ?>

<?php include("inc-sidebar-left.php"); ?>

<!-- begin main -->
<main role="main">

	<!-- begin -->
	<section class="page-content">

		<h1>Woops! We've sprung a leak!</h1>

		<img src="images/watercooler-guy.png" alt="Watercooler guy" class="alignright error-page-image">

		<p>The item you're looking for seems to have been removed or does not exist.</p>
						
		<p>Try <a href="#">starting over on the home page</a> or try the search form below.</p>

		<p>If what you're looking for is urgent, please <a href="#">contact us</a>.</p>
			
		<!-- begin page search -->
		<form action="search.php" class="page-search">
			<input type="text" placeholder="Search..." required>
			<button type="submit"><i class="icon-search"></i></button>
		</form><!-- /page search -->

	</section><!-- / -->
		
</main><!-- /main -->

<?php include("sidebar.php"); ?>

<?php include("footer.php"); ?>