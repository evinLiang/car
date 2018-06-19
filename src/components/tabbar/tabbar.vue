<template>
    <div class="tabbar">
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
</template>

<script>
export default {
	data() {
		return {

		};
	}
}
</script>

<style scoped>
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
.tab-item a .homeIcon { background: url(../../assets/home_normal.png);}
.tab-item .active .homeIcon {background: url(../../assets/home_click.png);}
.tab-item a .meIcon { background: url(../../assets/me_normal.png);}
.tab-item .active .meIcon {background: url(../../assets/me_click.png);}
.tab-item a .recommendIcon { background: url(../../assets/recommend_normal.png);}
.tab-item .active .recommendIcon {background: url(../../assets/recommend_click.png);}
.tab-item a .purseIcon { background: url(../../assets/purse_normal.png);}
.tab-item .active .purseIcon {background: url(../../assets/purse_click.png);}
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
</style>