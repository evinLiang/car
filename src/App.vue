<template>
  <div id="app">
    <div class="tabbar" v-show="isBottom">
      <div class="tab-item">
        <router-link to="/home">
          <span class="icon homeIcon"></span>
          <p>首页</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/purse">
          <span class="icon purseIcon"></span>
          <p>钱包</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/recommend">
          <span class="icon recommendIcon"></span>
          <p>分享</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/me">
          <span class="icon meIcon"></span>
          <p>我的</p>
        </router-link>
      </div>      
    </div>
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>   
    </transition>  
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName:'',
      isBottom:true,
      bottomArr:['/home','/purse','/recommend','/me']
    }
  },
  watch:{
    '$route' (to,from){
        document.body.scrollTop = '0';

        //设置切换动画
        this.transitionName = JSON.parse(window.sessionStorage.history).transitionName;
       
       //判断是否显示tabbar
       let index = this.bottomArr.indexOf(to.path);
       if(index == -1){
           this.isBottom = false;
       }else{
           this.isBottom = true;
       }
    }
  }
}
</script>

<style>
#app { font-size: 14px; height: 100%; }
.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 105;
  width: 100%;
  height: 5rem;
  background: #fff;
  border-top: 1px solid #e9e9e9;
  display: flex;
}
.tab-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.tab-item a { 
  padding-top: 0.5rem;
  display: inline-block;
  width: 100%; 
  color: #bcbcbc;
}
.tab-item a .homeIcon { background: url(./assets/home_normal.png);}
.tab-item .active .homeIcon {background: url(./assets/home_click.png);}
.tab-item a .meIcon { background: url(./assets/me_normal.png);}
.tab-item .active .meIcon {background: url(./assets/me_click.png);}
.tab-item a .recommendIcon { background: url(./assets/recommend_normal.png);}
.tab-item .active .recommendIcon {background: url(./assets/recommend_click.png);}
.tab-item a .purseIcon { background: url(./assets/purse_normal.png);}
.tab-item .active .purseIcon {background: url(./assets/purse_click.png);}
.tab-item a .icon,.tab-item .active .icon {
  display: inline-block;
  width: 2.5rem;
  height: 2.3rem;
  background-size: auto 2.3rem;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 0.2rem;
}
.tab-item .active {color: #ff6d33;}

.fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.forward-enter-active,.forward-leave-active{
    transition: all 0.3s;
}
.forward-enter{
    transform: translateX(100%);
}
.forward-leave-to{
    transform: translateX(-100%);
}

.reverse-enter-active,.reverse-leave-active{
    transition: all 0.3s;
}
.reverse-enter{
    transform: translateX(-100%);
}
.reverse-leave-to{
    transform: translateX(100%);
}
</style>
