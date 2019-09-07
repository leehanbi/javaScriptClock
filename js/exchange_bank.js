
const exchange_Bank_Btn = document.getElementById("js-Exchange_Bank_Btn");

function showExchangeRateTable(){
    const js_Exchange_Bank = document.getElementById("js-Exchange_Bank_View");
    var exchange_view_display = js_Exchange_Bank.style.display;
   
    if(exchange_view_display === 'none' || exchange_view_display === ''){
        js_Exchange_Bank.style.display = 'block';
    }else{
        js_Exchange_Bank.style.display = 'none';
    }
}
exchange_Bank_Btn.addEventListener("click",showExchangeRateTable);