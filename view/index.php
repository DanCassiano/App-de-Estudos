<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title><?php echo $this->getTitulo() ?></title>
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="<?php echo BASE_URL ?>/view/assets/css/material-design-iconic-font.min.css">
	<link rel="stylesheet" href="<?php echo BASE_URL ?>/view/assets/css/app.css">
	<link rel="stylesheet" type="text/css" href="<?php echo BASE_URL ?>/view/assets/css/jquery-ui.min.css">
	<base href="<?php echo BASE_URL ?>/" />
</head>
<body class="">	
	<div class="container-fixo">
		<div class="nav nav-default fixo-top">
			<div class="container-nav">
				<a href="#" class="btn" id="btnMenu"><i class="zmdi zmdi-more-vert zmdi-hc-2x cor-padrao"></i></a>
				<div class="painel painel-right">
					<img src="" alt="">
				</div>
			</div>
		</div>
		<div class="barra fixa barra-default barra-menu">
			<?php 
				$ativo = Request::get('query');
				$menu1 = "";
				$menu2 = "";
				$menu3 = "";

				switch ($ativo) {
				 	case 'calendario':
				 		$menu1 = "active";
				 		break;
				 	case 'mail':
				 		$menu2 = "active";
				 		break;
				 	case 'config':
				 		$menu3 = "active";
				 		break;				 	
				}
			?>
			<ul class="menu menu-app">
				<li class="<?php echo $menu1 ?>">
					<a href="<?php echo BASE_URL ?>/app-admin/calendario"><i class="zmdi zmdi-view-dashboard"></i>calendário</a>
				</li>
				<li class="<?php echo $menu2 ?>">
					<a href="<?php echo BASE_URL ?>/app-admin/mail"><i class="zmdi zmdi-mail-send"></i>mail</a>
				</li>
				<li class="<?php echo $menu3 ?>">
					<a href="<?php echo BASE_URL ?>/app-admin/config"><i class="zmdi zmdi-settings"></i>configurações</a>
				</li>				
			</ul>
		</div>
		<div class="conteudo">
			<?php 
				$include = "";
				switch ($ativo) {
				 	case 'calendario':
				 		$include = "calendario.php";
				 		break;
				 	case 'mail':
				 		$include = "mail.php";
				 		break;
				 	case 'config':				 		
				 		break;				 	
				}

				include $include;
			?>
		</div>
	</div>
	<script src="<?php echo BASE_URL ?>/view/assets/js/jquery.js"></script>
	<script src="<?php echo BASE_URL ?>/view/assets/js/jquery-ui.min.js"></script>
	<script src="<?php echo BASE_URL ?>/view/assets/js/app.js"></script>
	<script src="<?php echo BASE_URL ?>/view/assets/js/mail.js"></script>
</body>
</html>