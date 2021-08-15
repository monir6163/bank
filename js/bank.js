// handle button  add even 
document.getElementById('deposit-btn').addEventListener('click' , function() {

    // update deposit total 
    const depositInput = document.getElementById('user-deposit');
    const totalDepositText = depositInput.value;
    const totalDeposit = parseFloat(totalDepositText);
    // basic validation
    if (totalDepositText != 'number' && totalDepositText == "") {
        alert ('Please Enter Valid Data !!');
    }
    else{
        // set deposit total amount 
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
    }
})

// add withdraw even handeler
document.getElementById('withdraw-btn').addEventListener('click' , function(){
    const withdrawInput = document.getElementById('user-withdraw');
    const withdrawAmountText = withdrawInput.value;
    const withdrawTotal = parseFloat(withdrawAmountText);
    // basic validation
    if (withdrawAmountText != 'number' && withdrawAmountText == "") {
        alert ('Please Enter Valid Data !!');
    }
    else{
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
})