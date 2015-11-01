<div class="container">
	<div class="col-md-12">
		<h3>Editar página<a href="" class="btn btn-default btn-link">Adicionar nova</a></h3>
	</div>	
	<div class="col-md-7">
		<form action="">
			<div class="input-group">
  				<span class="input-group-addon" id="basic-addon1">Página</span>
  				<input type="text" class="form-control" placeholder="Página" aria-describedby="basic-addon1">
			</div>
			<div class="input-group">
				<br/>
				<strong>http://localhost/app/index/</strong><div class="btn-group btn-group-xs">
					<button class="btn btn-success">Editar</button>
				</div>
			</div>
			<div class="input-group">
				<br/>			
				<textarea name="" id="" cols="30" rows="10">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias doloribus molestias, facilis odit amet esse quis neque ad repudiandae natus, veniam soluta beatae dolore harum molestiae autem temporibus eaque.
				</textarea>
			</div>	
		</form>	
	</div>
</div>

<script src="<?php echo BASE_URL ?>/view/assets/js/tinymce/tinymce.min.js"></script>
<script>tinymce.init({selector:'textarea'});</script>