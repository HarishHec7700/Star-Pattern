let n=parseInt(prompt("Enter the Number ")),str='';
for(i=n;i>=0;i--){
    for(j=0;j<=i;j++)
        str+="*";
    str+="\n";
}

console.log(str);