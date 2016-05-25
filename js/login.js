/**
 * Created by Administrator on 2016/5/25 0025.
 */
function Login(){
    var that=this;
    this.$MainBody=$("<div></div>");
    this.$MainBody.css({
        width:"100%",height:"100%","background-size":"cover","background-repeat":"no-repeat",
        "background-image":"url(img/LGbg.jpg)","background-position":"center center",position:"absolute"
    });
    this.$MainBody.appendTo(that.$MainBody);
    var $login=$("<div></div>");
    $login.css({
        "background-image": "url(img/login-bg.png)",
        width: 509,height: 424,overflow: "hidden",position: "absolute",top:"calc(50% - 212px)",left:"calc(50% - 255px)"
    });
    this.$MainBody.append($login);
    var $l_form=$("<form id='l_form'></form>");
    $l_form.appendTo($login);
    var $put_bg=$("<div></div>");
    $put_bg.css({
        width:"394px",height:"53px",margin:"0 auto","margin-top":"30px",background:"url(img/long-bg.png)",position:"absolute",
        left:"calc(50% - 197px)"
    });
    /*var $put_name=$("<input>")
    $put_name.css({
        "background-color": "#2f2f2f",color: "white","font-size": "110%",height: "36px",width: "220px",margin:"10px 40px","line-height": "36px"
    });*/
   /* var $put_pwd_bg=$put_bg.clone();
    var $put_pwd=$put_name.clone();
    $put_bg.css("background","url(img/username.png) no-repeat center");
    $put_name.attr({
        type:"text","placeholder":"请输入账号",name:"name"
    });
    $put_name.appendTo($put_bg);*/
    $put_bg.appendTo($l_form);   /*账号框*/
    /*$put_pwd_bg.css("background","url(img/pwd.png) no-repeat center");
    $put_pwd.attr({
        type:"password","placeholder":"请输入密码",name:"password"
    });
    $put_pwd.appendTo($put_pwd_bg);
    $put_pwd_bg.appendTo($l_form);*/
}