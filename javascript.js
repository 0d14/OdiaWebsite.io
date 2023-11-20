let go = document.getElementById("go");
let output = document.getElementById("output");

go.onclick = function(){
  output.innerHTML = "";
  for(let n=0; n<8; n++){
    let i = Math.floor(Math.random() * (109 - 33)) +33;
       if(i> 57){
         i+=7;
       }
       if(i> 90){
         i+=6;
       }
    let temp = String.fromCharCode(i);
    output.append(temp)
    console.log(i);
  }
  
}
