
function editargGid( coluna, evento )
{
	console.log( coluna, evento)
}

function removeGrid( coluna, evento ){
	console.log( coluna, evento)
}

$(function(){
	grid.setGrid('.app-grid')
	grid.setOpt('editar',editargGid);
	grid.setOpt('remover',removeGrid);
})