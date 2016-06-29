/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $("#c-button").click(function (){
       $("#c-nav ul").toggle();
    });
    setSubNavImgHide(true);
    setImageCenter();
    setULCenter();
});

function setImageCenter() {
    var myWidth = $("body").prop("clientWidth");
    $("#image-slide img").css("width", myWidth);
}

function setULCenter() {
    var myScreenWidth = $("body").prop("clientWidth");
    var myUlWidth = $("#c-nav ul").width();
    var myLeft = (myScreenWidth - myUlWidth) / 2;
    $("#c-nav ul").css("marginRight", myLeft);
}

function setULRight() {
    var myScreenWidth = $("body").prop("clientWidth");
    var myUlWidth = $("#c-nav ul").width();
    var myLeft = (myScreenWidth - myUlWidth) / 2;
    $("#c-nav ul").css("marginRight", "10px");
}

function setSubNavImgHide(bool) {
    if (bool == true) {
        $("#sub-c-nav").hide();
    } else {
        $("#sub-c-nav").show();
    }
}

$(window).resize(function (){
    $("#image-slide img").css("width","100%");
   if($(window).innerWidth() < 900){
        setSubNavImgHide(false);
    }else{
        setSubNavImgHide(true);
    }     
});

$(window).scroll(function () {
    if($(window).innerWidth() < 900){
        
    }else{
        if ($(document).scrollTop() > 150) {
        $("#c-nav").addClass("nav-effect");
        $("#logo").hide();
        setULRight();
        setSubNavImgHide(false);
    } else {
        $("#c-nav").removeClass("nav-effect");
        $("#logo").show();
        setULCenter();
        setSubNavImgHide(true);
    }
    }
});

