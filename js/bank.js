// handle button  add even 
document.getElementById('deposit-btn').addEventListener('click' , function() {

    // update deposit total 
    const depositInput = document.getElementById('user-deposit');
    const totalDepositText = depositInput.value;
    if (!isNaN(parseFloat(depositInput.value)) &&
        parseFloat(depositInput.value) > 0)
    {
        // set deposit total amount 
        const totalDeposit = parseFloat(totalDepositText);
        const depositAdd = document.getElementById('deposit-amount');
        const previousDepositText = depositAdd.innerText;
        const previousDeposit = parseFloat(previousDepositText);
        const newDepositTotal = previousDeposit + totalDeposit;
        depositAdd.innerText = newDepositTotal;

        // update account balance
        const balanceTotal = document.getElementById('balance-amount');
        const balanceTotalText = balanceTotal.innerText;
        const totalBalance = parseFloat(balanceTotalText);
        const newBalance = totalBalance + totalDeposit;
        balanceTotal.innerText = newBalance;

        // clear deposit input field 
        depositInput.value = "";
    }else{
        alert('Please Enter Posative Value');
    }
    
})

// add withdraw even handeler
document.getElementById('withdraw-btn').addEventListener('click' , function(){
    const withdrawInput = document.getElementById('user-withdraw');
    const withdrawAmountText = withdrawInput.value;
    // basic validation
    if (!isNaN(parseFloat(withdrawInput.value)) &&
        parseFloat(withdrawInput.value) > 0) {
        const withdrawTotal = parseFloat(withdrawAmountText)
        // set withdraw total amount 
        const withdraw = document.getElementById('withdraw-amount');
        const withdrawText = withdraw.innerText;
        const newWithdraw = parseFloat(withdrawText);
        const newWithdrawTotal = newWithdraw + withdrawTotal;
        withdraw.innerText = newWithdrawTotal;

        // update total blance 
        const balanceTotal = document.getElementById('balance-amount');
        const balanceTotalText = balanceTotal.innerText;
        const totalBalance = parseFloat(balanceTotalText);
        const newBalance = totalBalance - newWithdrawTotal;
        balanceTotal.innerText = newBalance;
        // clear withdrawinput field 
        withdrawInput.value = "";
    }
    else{
        alert ('Please Enter Posstive Value');
    }
})

// logout btn even handelar
document.getElementById('logout-btn').addEventListener('click' , function() {
    window.location.href = 'index.html';
})