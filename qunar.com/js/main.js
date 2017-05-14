var base = {};
base.carousel = function(count,isSwipe){
   /*轮播图片*/
   var bw = $(window).width()>540?540:$(window).width(),
       scale = 100/count,
       persent = 0,
       $carouselContent = $(".carousel-content"),
       $carouselPanel = $(".carousel-panel"),
       $carouselMark = $(".carousel-mark");

   $carouselContent.width(bw*count).height(bw*1/3);
   $carouselPanel.width(bw);
  
   /*自动播放*/
   setInterval(function(){
         persent = (persent + scale) >=100 ? 0 : (persent + scale);
         transformStyle(persent,scale);
   },5000);
   
   //为该轮播图片指定触屏移动事件
   if( isSwipe ){
      Hammer($carouselContent[0]).on("swipeleft swiperight", handleHammer);
   }
   function handleHammer(e){
      e.preventDefault();
      switch(e.type){
         case 'swipeleft': persent+=scale; break;
         case 'swiperight': persent-=scale; break;
      }
      persent = persent<=0?0:(persent>=(100-scale)?(100-scale):persent);
      transformStyle(persent,scale);
   }
   function transformStyle(persent,scale){
      $carouselContent.css("-webkit-transform","translate3d(-"+persent+"%,0,0) scale3d(1,1,1)");
      $carouselMark.find("li").removeAttr("class").eq(persent/scale).addClass("carousel-mark-active");
   }
};
base.navRotate3d=function(){
  var items = $(".nav .nav-item");
  items.each(function(index){
    setTimeout(function(){
      items.eq(index).addClass("nav-item-animate");
    },100*index);
  });
};










