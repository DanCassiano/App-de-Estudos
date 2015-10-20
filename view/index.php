<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title><?php echo $this->getTitulo() ?></title>
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="<?php echo BASE_URL ?>/view/assets/css/material-design-iconic-font.min.css">
	<link rel="stylesheet" href="<?php echo BASE_URL ?>/view/assets/css/app.css">
</head>
<body class="expandido">	
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
				 switch ($ativo) {
				 	case 'calendario':
				 		$menu1 = "active";
				 		break;
				 	case 'config':
				 		$menu2 = "active";
				 		break;
				 	
				 }
			 ?>
			<ul class="menu menu-app">
				<li class="<?php echo $menu1 ?>">
					<a href="<?php echo BASE_URL ?>/app-admin/calendario"><i class="zmdi zmdi-view-dashboard"></i>calendário</a>
				</li>
				<li class="<?php echo $menu2 ?>">
					<a href="<?php echo BASE_URL ?>/app-admin/config"><i class="zmdi zmdi-settings"></i>configurações</a>
				</li>				
			</ul>
		</div>
	</div>
	<script src="<?php echo BASE_URL ?>/view/assets/js/jquery.js"></script>
	<script src="<?php echo BASE_URL ?>/view/assets/js/app.js"></script>
</body>
</html>