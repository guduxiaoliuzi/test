/**
 * Created by Administrator on 2016/5/25 0025.
 */
var style=document.createElement("style");
document.head.appendChild(style);
var sheet=style.sheet;
sheet.insertRule("*{margin:0;padding:0}");

var director;
$(function(){
    director=new Director($("body"));
    director.runScene(new Login());
    //director.runScene(new Loading());
    //director.runScene(new Store());
    //director.runScene(new Main());
    //director.runScene(new Depot());
    //director.runScene(new Checkpoint());
    //director.runScene(new Settlement(3,126,2));
    //director.runScene(new MapSelect());
    //director.runScene(new Register());
});
//var login=new Login($("#main"));
function Director(viewPort){
    var that=this;
    this.view=viewPort;
    this.runScene=function(scene){
        that.view.empty();
        that.view.append(scene.$MainBody);
    }
}