function result(){
    let height= document.getElementById("height-input").value;
    let Weight= document.getElementById("weight-input").Value;
    let result= (parseFloat(Weight)/(parseFloat(height)/100)**2);
    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML=result;
    }
    if(result < 16){
        document.getElementById("bmi-category").innerHTML= "Sever Thinnes"
    }
    else if(result >=16 && result <17){
        document.getElementById("bmi-category").innerHTML= "Moderate Thinnes"
    }
    else if(result >=17 && result <18.5){
        document.getElementById("bmi-category").innerHTML= "Mild Thinnes"
    }
    else if(result >=18.5 && result <25){
        document.getElementById("bmi-category").innerHTML= "Normal"
    }
    else if(result >=25 && result <30){
        document.getElementById("bmi-category").innerHTML= "Over weight"
    }
    else if(result >=30 && result <35){
        document.getElementById("bmi-category").innerHTML= "Obess class I"
    }
    else if(result >=35 && result <40){
        document.getElementById("bmi-category").innerHTML= "Obess class II"
    }
    else{
        document.getElementById("bmi-category").innerHTML= "Obess class III"
    }
}