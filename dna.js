function DNA(target){
			
			this.target = target;
			this.genes = [];
			this.fitScore = 0;
			this.createGene = function(){
				var availableGenes = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
				availableGenes.push(" ");
				return availableGenes[Math.floor(Math.random()*availableGenes.length)]
			}
			
			this.createIndivid = function(){
				for (var i = 0; i < this.target.length; i++) {
					this.genes[i] = this.createGene();	
				}
			}

			this.fittest = function(){
				var score = 0;
				for(var i = 0;i < this.target.length; i++){
					if(this.genes[i] == this.target[i]){
						score++;
					}
				}

				return score / this.target.length;
			}
			this.say = function(){
				return this.genes.join("");
			}
			this.evaluate = function(){
				if(this.say()==this.target){
					return true;
				}else{
					return false;
				}
			}

			this.cross = function(partner){
				var child = new DNA(this.target); 
				var midpoint = Math.floor(Math.random()*this.target.length);
				for(var i=0;i<this.target.length;i++){
					if(i<midpoint){
						child.genes[i] = this.genes[i];
					}else{
						child.genes[i] = partner.genes[i];
					}
				}
				return child;
			}

			this.mutate = function(mut){
				for(var i = 0;i < this.target.length;i++){
					if(Math.random() <= mut ){
						this.genes[i] = this.createGene();
					}
				}
			}

}


