$(function(){
    var i=0;
    var imgs=$("#jd_bannerIndicator li")
    imgs.mouseover(function(){
        var i =$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#jd_bannerImg li").siblings('li').find('img').hide(0);
        $("#jd_bannerImg li a img:eq("+i+")").show(0);
    })
})