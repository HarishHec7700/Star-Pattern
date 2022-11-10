// To print the hollow square in star

let spc="",no;
no=parseInt(prompt("Enter the number of times "));
for(i=1;i<=no;i++){
	for(j=1;j<=no;j++){
		if((i==1)||(i==no)){
			spc+="* ";
			//console.log(spc);
		}
		else{
			if((j==1)||(j==no)){
				spc+="* ";
			//console.log(spc);
		}
			 else{
				spc+="  ";
			}
		}
	}
	spc+="\n"
}

console.log(spc);
