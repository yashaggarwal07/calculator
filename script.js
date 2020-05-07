function clr(){
   document.getElementById("view").value="";
}
function insert(val){
  
document.getElementById("view").value+=val;
}
function solve(){
    let x= document.getElementById("view").value;
    	let y= eval(x);
    	document.getElementById("view").value=y;
}