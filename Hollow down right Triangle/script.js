// To print the hollow right angle triangle in star

let spc="",no;
no=parseInt(prompt("Enter the number of times "));
for(i=1;i<=no;i++){
	for(j=1;j<=i;j++){
		if((i==1)||(i==no)){
			spc+="* ";
			//console.log(spc);
		}
		else{
			if((j==1)||(j==i)){
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