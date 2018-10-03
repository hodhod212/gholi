myGlobalVar ;
function  doMath() 
{
    var payMoney = eval(document.minForm.elements[0].value)
    var costMoney = eval(document.minForm.elements[1].value)
    var payBack = payMoney  -  costMoney
    if (payBack>0){
    alert("kunden har betalat "  +  payMoney +' kr ' + "\n" +  " Kostnaden är: "  +
    costMoney +' kr ' + "\n" +  " Kunden får tillbaka: "  +  payBack +' kr ')
    }
    else {
        payBack = -payBack;
        alert("kunden har betalat "  +  payMoney +' kr ' + "\n" +  " Kostnaden är: "  +
    costMoney +' kr ' + "\n" +  " Kunden ska betala: "  +  payBack +' kr ')
    }
    myGlobalVar = payBack;
} 
    function myFunction0() 
{
    x0 = Math.floor((myGlobalVar -  Math.floor(myGlobalVar/10)*10));
    if (x0>4) 
{
    x0 = x0 - 5;
}

    document.getElementById("demo").innerHTML = "antal 1 kronor:" + x0;  
}
   function myFunction1() 
{
    x = Math.floor(((myGlobalVar -  (Math.floor(myGlobalVar/100))*100) - (Math.floor((myGlobalVar -  (Math.floor(myGlobalVar/100))*100)/20))*20)/5);

        document.getElementById("demo").innerHTML = "antal 5 kronor:" + x;   
}
    function myFunction2()
{
    y = Math.floor((myGlobalVar -  (Math.floor(myGlobalVar/100))*100)/20);
    document.getElementById("demo").innerHTML = "antal 20 kronor:" + y;     
}
    function myFunction3() 
{
    z = (Math.floor(myGlobalVar/100));
    document.getElementById("demo").innerHTML = "antal 100 kronor:" + z;
}