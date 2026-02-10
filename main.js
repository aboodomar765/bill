let mc = document.getElementById('mc');
let water = document.getElementById('water');
let sewage = document.getElementById('sewage');
let sum = document.getElementById('SUM');


let mcc=0;
let mccc=0;




mc.onkeyup = function() {


    
 if (mc.value>0 && mc.value<= 6){
    water.value=mc.value*0.25;
    sewage.value=mc.value*0.23;
   
    

 }

else if (mc.value>=7 && mc.value<=12){
    mcc=mc.value-6;
    water.value= 6*0.25 + mcc*0.55;
    mccc=mc.value-6;
    sewage.value= 6*0.23 + mccc*0.10;
    
}

else if (mc.value>=13 && mc.value<=18){
    mcc=mc.value-12;
    water.value= 6*0.25 + 6*0.55 +mcc*0.7; 
    mccc=mc.value-12;
    sewage.value= 6*0.23 + 6*0.10 +mccc*0.5;
    

   
   }
   
else if (mc.value>=19 && mc.value<=24)  { 
    mcc=mc.value-18;
    water.value= 6*0.25 + 6*0.55 + 6*0.7+ mcc*1.1; 
    mccc=mc.value-18;
    sewage.value= 6*0.23 + 6*0.10 + 6*0.5+ mccc*0.7;
    
}
   sum.value = +water.value + +sewage.value;

   }
  
  