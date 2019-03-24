
function Population(target,popSize,mutation){
	this.target = target;
	this.mutation = mutation;
	this.popSize = popSize;
	this.population = [];
	this.createPopulation = function(){
			for(i=0;i<this.popSize;i++){
				person = new DNA(this.target);
				person.createIndivid();
				this.population.push(person);
			}
	}

	this.magnitPull = [];
	this.naturalSelection = function(){

		for(var i = 0; i < this.popSize;i++){
			var score = this.population[i].fittest();
			for(j=0;j<(score*100);j++){
				this.magnitPull.push(this.population[i]);
			}
		}

	}

	this.generation = function(){

		for(var i = 0;i < popSize; i++){
			var a = Math.floor(Math.random()*this.magnitPull.length);
			var b = Math.floor(Math.random()*this.magnitPull.length);
			var parentA = this.magnitPull[a];
			var parentB = this.magnitPull[b];
			var child = parentA.cross(parentB);
			child.mutate(this.mutation);
			this.population[i] = child;
		}
		this.magnitPull = [];
	}

	this.evaluate = function(){
		var score = this.population[0].fittest();
		var say = this.population[0].say();
		for(var i = 0; i < popSize;i++){
			var fittest = this.population[i].fittest();
			if(fittest > score ){
				score = fittest;
				say = this.population[i].say();
			}
		}
		return {
			score:score,
			say:say
		}
	}


}


