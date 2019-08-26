var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    effect : 'slide',
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        this.emit('slideChangeTransitionEnd');//在初始化时触发一次slideChangeTransitionEnd事件
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时运行当前slide动画
    this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次
      } 
    }
  });


  $("#nextbtn").click(function(){
      swiper.slideNext();
  })

  let isPlay = false;
  $("#music_icon").click(function(){
      if(!isPlay){
        $("#audio")[0].play()
        isPlay = true;
        $("#music_icon").addClass('icon-ani')
      }else{
        $("#audio")[0].pause()
        isPlay = false;
        $("#music_icon").removeClass('icon-ani')
      }
  })
