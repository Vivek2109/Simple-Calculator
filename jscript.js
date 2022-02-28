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