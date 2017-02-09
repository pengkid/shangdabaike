
window.onload = function () {

    var form = document.getElementsByTagName("form")[0];
    var xuehao = document.getElementById("xuehao");
    var mima = document.getElementById("mima");

    function validateForm(id, pwd, alertTxt){
        with (xuehao&&mima){
            if (xuehao.value=="" || xuehao.value.length!=12 || mima.value==""){
                alert(alertTxt);
                return false;
            }
            else {
                return true;
            }
        }
    };

    form.onsubmit = function (){
        with (this){
            if (validateForm(xuehao, mima, "啥都没写就想绑定？")==false){
                xuehao.focus();
                return false;
            }
            else{
                alert("小可爱，你已经上车了");
            }
        }
    };
}
