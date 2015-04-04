function activate_tab(tab){
	$('.tab_activable.active').removeClass('active');
	$(tab).addClass('active');
	console.log(tab + " activated!");
}

function log(e){
	console.log(e);
	$(e).addClass('podre');
	console.log(e);
}
