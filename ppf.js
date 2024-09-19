function calculatePPF(){
    const investment=parseFloat(document.getElementById('investment').value);
    const time=parseFloat(document.getElementById('time').value);
    const rate=parseFloat(document.getElementById('rate').value);
    
    const interest=rate/100
   
    const totalinvestment= investment*time 
    const maturity= investment*(((Math.pow((1+interest),time)-1)/interest)*(1+interest));             
    const Totinterest= maturity-totalinvestment

    document.getElementById('firstinvest').innerText=`Invested amount ₹${totalinvestment.toFixed(0)}`;
    document.getElementById('TotInt').innerText=`Total interest ₹${Totinterest.toFixed(0)}`;
    document.getElementById('TotAmt').innerText=`maturity Value ₹${maturity.toFixed(0)}`;
    }