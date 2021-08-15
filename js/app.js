// addEventListener btn 
document.getElementById('login-btn').addEventListener('click' , function() {
    // basic validation
    
        // get email user 
        const userField = document.getElementById('user-email');
        const userEmail  = userField.value;
        // grt user password
        const userPassField = document.getElementById('user-pass');
        const userPass = userPassField.value;
        // basic validation 
        if(userEmail == "" && userPass == "") {
            alert ('Please Enter Your email and Password !!');
        }
        else {
            if(userEmail == 'bapp@gmail.com' && userPass == 'gmail') {
                window.location.href = 'bank.html';
            }
            else{
                alert ('Please Enter Your Vaid email and Password !!');
            }
        }
})