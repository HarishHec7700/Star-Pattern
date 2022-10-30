let a=parseInt(prompt("Enter The length of rectangle")),
b=parseInt(prompt("Enter The breath of rectangle")),star="";
for(i=0;i<b;i++){
    for(j=0;j<a;j++){
        star+="*";
    }
    star+="\n";
}
console.log(star);