let results = "";
function onClickHandler(){
    let v1=document.getElementById("number1").value;
    let v2=document.getElementById("number2").value;
    let op=document.getElementById("operation").value;

    v1=parseFloat(v1);
    v2=parseFloat(v2);

    console.log(v1, v2, op, typeof v1, typeof v2);

    let result = null;
    if(isNaN(v1) || isNaN(v2)){
        let resultInformation=''
        result='Считаю только цифры';
        resultInformation +=result;
        document.getElementById("result").value = results + "\n" + resultInformation;
        results = resultInformation;
    }
    else{
        let resultInformation = v1 + " " + op + " " + v2 + " = " ;
        if (op=='+'){
            result= v1 + v2;
        }
        if (op=='-'){
            result= v1 - v2;
        }
        if (op=='*'){
            result= v1 * v2;
        }
        if (op=='/'){
            if(Math.abs(v2)<Number.EPSILON){
                result='На ноль делить нельзя';
            }
            else{
                result= v1 / v2;
            }
        }
        resultInformation +=result;
        document.getElementById("result").value = results + "\n" + resultInformation;
        results = resultInformation;
    }

}