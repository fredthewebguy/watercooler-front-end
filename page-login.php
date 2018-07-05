<?php include("header-login.php"); ?>

<!-- begin login wrapper -->
<section class="login-wrapper">

	<h1>The Watercooler</h1>

	<form action="frontpage.php">
		<label>Username or email</label>
		<input type="text" required>
		<label>Password</label>
		<input type="password" required>
		<input type="submit" value="Sign in">
	</form>

	<p>
		<a href="#">I forgot my login creds</a>
		&nbsp;&nbsp;&middot;&nbsp;&nbsp;
		<a href="#">I need an account</a>
	</p>
	
</section><!-- /login wrapper -->

<?php include("footer-login.php"); ?>