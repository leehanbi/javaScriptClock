
const exchange_Bank_Btn = document.getElementById("js-Exchange_Bank_Btn");

function showExchangeRateTable(){
    const js_Exchange_Bank = document.getElementById("js-Exchange_Bank_View");
    const exchange_view_display = js_Exchange_Bank.style.display;
    const menu_state = document.getElementById("menu_state");
   
    if(exchange_view_display === 'none' || exchange_view_display === ''){
        js_Exchange_Bank.style.display = 'block';
      
    }else{
        js_Exchange_Bank.style.display = 'none';
    }
    // 메뉴 고정 
    menu_state.checked = false;
}
exchange_Bank_Btn.addEventListener("click",showExchangeRateTable);