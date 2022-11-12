// To print the hollow square in star

let spc="",len,bth;
len=parseInt(prompt("Enter the length "));
bth=parseInt(prompt("Enter the breath "));
for(i=1;i<=len;i++){
	for(j=1;j<=bth;j++){
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
