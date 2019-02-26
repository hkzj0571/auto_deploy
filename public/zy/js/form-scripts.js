$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "请重新填写?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    

    if(name.length == '11' && email.length!='0'){
        formSuccess();
    }else{
        formError();
        submitMSG(false,'please try again!');
    }
}

$("#contactForms").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "请您填写正确的信息");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForms();
    }
});

function submitForms(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();

    

    if (name.length != '11') {
        submitMSG(false,'请填写正确的11位手机号码');
    }
    if (email.length == '0') {
        submitMSG(false,'密码不能为空哦！');
    }
    

    $("#contactForms")[0].reset();
    submitMSG(true, "Register success!")
}




function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "wellcome login")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}