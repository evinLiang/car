<template>
	<div class="component">
		<slider :slides="slides"></slider>
		<div class="dayPrize res-img">
			<router-link to="/daysProze"><img src="./dayPrize.png" alt=""></router-link>
		</div>
		<div class="server-list">
			<yd-grids-group :rows="3">
		        <yd-grids-item v-for="item in serverList" :key="item.id" type="link" :link="item.href">
		        	<div slot="else" style="text-align: center;">
		                <img :src="item.iconSrc" style="height: 4rem;">
		                <p class="text">{{item.name}}</p>
		            </div>  
		        </yd-grids-item>
		    </yd-grids-group>			
		</div>	
		<div class="footPlaceholder"></div>
	</div>
</template>

<script>
import slider from '@/components/slider/slider';	//引入轮播组件
import bmobUse from '@/modules/bmobUse';			//引入bmob的方法模块
export default {
	data() {
		return {
			serverList:[
				{name:'违章查询',iconSrc:require('./icon_1.png'),href:""},
				{name:'道路救援',iconSrc:require('./icon_2.png'),href:""},
				{name:'一键车险',iconSrc:require('./icon_3.png'),href:""},
				{name:'汽车美容',iconSrc:require('./icon_4.png'),href:"/storeDetail/:id"},
				{name:'安全出行',iconSrc:require('./icon_5.png'),href:""},
				{name:'车主之家',iconSrc:require('./icon_6.png'),href:""}
			],
			slides:[]
		};
	},
	components: {
      'slider': slider
    },
    created(){
    	var _this = this;
    	
    	//获取轮播图数据
		bmobUse.getAllData("homeSlider",function(res){

			//循环拿到的数据，push到this.slides
			for(var i in res){
				_this.slides.push({
					imgUrl:res[i].attributes.imgUrl
				})
			}
		},function(res){

			//数据获取失败回调
			console.log(res);
		}) 	  	
    }
}
</script>

<style>
.server-list {
	background: #fff;
	padding: 2.5rem 1.2rem;
}
.server-list .yd-grids-3:before {
	border: none;
}
.server-list .yd-grids-item:after {
	border-bottom-color:#e5e5e5;
}
.server-list .yd-grids-item:nth-child(4):after,.server-list .yd-grids-item:nth-child(5):after,.server-list .yd-grids-item:nth-child(6):after {
	border-bottom-color: #fff;
}
.server-list .text {
	font-size:1.3rem;
	margin-top: 1.5rem;
	color: #999;
} 
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