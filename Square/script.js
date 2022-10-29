let num=parseInt(prompt("Enter The length of sides")),star="";
for(i=0;i<num;i++){
    for(j=0;j<num;j++){
        star+="*";
    }
    star+="\n";
}
console.log(star);