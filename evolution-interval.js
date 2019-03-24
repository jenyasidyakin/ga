

$('button').click(function(){
	var user_target = $('#target').val() || 'to be or not to be';
	var user_popsize = ($('#popsize').val() * 1) || 500;
	var user_mutation = ($('#mutation').val() * 1) || 0.01 ;
	$('.worlds').html("");
	$('.score').html("");
	evolve(user_target,user_popsize,user_mutation);
})


function evolve(target,popsize,mutation){
	var population = new Population(target,popsize,mutation);
	population.createPopulation();
	var stop = false;
	var select = population.evaluate();



	count = 0;
	var interval = setInterval(function(){
		var select = population.evaluate();
		if(select.say == population.target){
			stop = true;
			$('.score').html(select.say);
			$('.generations').html('Genration: '+count);
			clearInterval(interval);
		}
		console.log(select.say.length+"--- "+population.target.length);

		console.log(select.say);
		console.log(select.score);
		var worlds = $('.worlds').html();
		worlds = 'score: ' + (select.score*100) + '%';
		$('.worlds').html(worlds);
		$('.score').html(select.say);
		$('.generations').html('Genration: '+count);
		population.naturalSelection();
		population.generation();
		count++;
		console.log(count);
	},200);
}



