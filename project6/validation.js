function printAlert(errorTag,errorMessage){
    //to delete previous html tag
    errorTag.innerHTML=""
    var errorHtml='<div class="alert alert-danger"role="alert">' +
        errorMessage.join("<br>")+'</div>';
    errorTag.insertAdjacentHTML("afterbegin",errorHtml);
}

var btnSubmit=document.getElementById("btnSubmit");

btnSubmit.addEventListener('click',function (ev){

    var username=document.getElementById("username");
    var password=document.getElementById("password");
    var errors=document.getElementById("errors");

    var userNameText=username.value.trim();
    var passwordText=password.value.trim();

    var errorList=[];
//Conditions
    //Username Conditions
    if(userNameText.length <= 0){
         errorList.push("Username Is Required!");
    }else if(userNameText.length <=6){
         errorList.push("Username Must Be Large Than 6 Characters!");
    }
    else if(userNameText.length >= 50){
         errorList.push("Username Must Be Large Than 50 Characters!");
    }

    //Password Conditions
    if(passwordText.length <= 0){
         errorList.push("password Is Required!");
    }else if(passwordText.length <=6){
         errorList.push("password Must Be Large Than 6 Characters!");
    }
    else if(passwordText.length >= 50){
         errorList.push("password Must Be Large Than 50 Characters!");
    }

    //to check if there is error catch
    if(errorList.length>0){
        //to prevent submit if there is error
        ev.preventDefault();
        //function calling to print alert error
        printAlert(errors,errorList);
    }

});