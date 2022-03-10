function currentdisplay(){
    document.getElementById("display").innerText=operator1+operator+operator2;
    return;
 }
 let operator1='';
 let operator2='';
 let operator='';
 let neg=-1;
 let decimal=false;
 function digitfunction(num){
//    if(answer===operator1&&operator===''){
//        operator1='';
//        operator1+=num;
//        currentdisplay();
//        answer='';
//        return;
//    }
     if(num==='.'){
         decimal=true;
     }
     if(operator1===''||operator===''){
      operator1=operator1+num;
        currentdisplay();
         return;
     }
     operator2=operator2+num;
     currentdisplay();
 }
 function controlfunction(operatorinput){
     if(operatorinput==='root'){
         operator1=Math.sqrt(operator1);
         currentdisplay();
         return;
     }
     if(operatorinput==='sqre'){
         // operator1=operator1*operator1;
         operator1=Math.pow(operator1,2);
         currentdisplay();
         return;
     }
     if(operatorinput==='fraction'){
         if(operator1===''){
            alert("Invalid operation")
             return;
         }
         else if(operator!==''){
             alert("Invalid opeation")
             return;
         }
         else{
             operator1=1/operator1;
             currentdisplay();
             return;
         }
     }
     if(operatorinput==='percent'){
         operator1=operator1/100;
         currentdisplay();
         return;
     }
     if(operatorinput==='CE'){
         if(operator2===''&&operator===''){
           operator1='';
           document.getElementById("display").innerText='0';
         }
         else{
          operator2='';
          currentdisplay();
         }
         
         
         return;
     }
     if(operatorinput==='C'){
         operator='';
         operator1='';
         operator2='';
         document.getElementById("display").innerText='0';
         return;
     }
     if(operatorinput==='delete'){
         if(operator2===''&&operator!==''){
             operator='';
             currentdisplay();
          
         }
         else if(operator2!==''){
             operator2=operator2/10;
             operator2=getValueBeforeDecimal(operator2);
             if(operator2===0){
                 operator2='';
             }
             currentdisplay();
         }
         else{
             operator1=operator1/10;
             operator1= getValueBeforeDecimal(operator1);
             
              currentdisplay();
         }
         return;
     }
     if(operatorinput==='negative'){
         // if(neg===1){
         //     neg=-1;
         // }
         // else{
         //     neg=;
         // }
          if(operator2===''&&operator1!==''){
              operator1=neg*operator1;
              currentdisplay();
          }
          else{
              if(operator==='-'){
                  neg=1;
              }
              operator2=neg*operator2;
              currentdisplay();
              neg=-1;
          }
       //  currentdisplay();
         return;
     }
     if(operatorinput==='multiply'){
         operator='*';
        
         currentdisplay();
         return;
     }
     if(operatorinput==='divide'){
         operator='/';
      
         currentdisplay();
         return;

     }
     if(operatorinput==='addition'){
         operator='+';
         
         currentdisplay();
         return;

     }
     if(operatorinput==='subtract'){
         operator='-';
        
         currentdisplay();
         return;
     }
     operator=operatorinput;
     currentdisplay();
 }
 function evaluatefunction(){

if(operator1!==''&&operator!==''&&operator2!==''){
 
 
 let parsedoperator1=parseInt(operator1);
 let parsedoperator2=parseInt(operator2);
 

 let answer=eval(parsedoperator1+operator+parsedoperator2);
 
 document.getElementById("display").innerText=answer;
 operator='';
 operator1=answer;
 operator2='';
 decimal=false;
}
 }
 function getValueBeforeDecimal(num) {
const beforeDecimalStr = num.toString().split('.')[0];

return Number(beforeDecimalStr);
}
document.addEventListener("keypress",(event)=>{
    
    if(event.shiftKey){
        if(event.code==="Digit8"){
            controlfunction('multiply');
        }
        if(event.code==="Equal"){
            controlfunction('addition');
        }
    }
    if(event.code==="Minus"){
        controlfunction('subtract');
    }
  if(event.code==="Slash"){
      controlfunction('divide');
  }
    if(event.code==="Digit1"){
        digitfunction('1');
    }
if(event.code==="Digit2"){
    digitfunction('2');
}
if(event.code==="Digit3"){
    digitfunction('3');
}
if(event.code==="Digit4"){
    digitfunction('4');
}
if(event.code==="Digit4"){
    digitfunction('4');
}
if(event.code==="Digit5"){
    digitfunction('5');
}
if(event.code==="Digit6"){
    digitfunction('6');
}
if(event.code==="Digit7"){
    digitfunction('7');
}
if(event.code==="Digit8"){
    if(!event.shiftKey){
    digitfunction('8');
    }
}
if(event.code==="Digit9"){
   
        digitfunction('9');
        
}
if(event.code==="Digit0"){
 
        digitfunction('0');
        
}
if(event.code==="Equal"){
    if(!event.shiftKey){
   evaluatefunction();
    }
}
});



document.addEventListener("keydown", KeyCheck);  
function KeyCheck(event)
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
   controlfunction('delete');
      break; 
      case 46:
        controlfunction('delete');
      break;
      default:
      break;
   }
}

