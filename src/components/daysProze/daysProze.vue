<template>
	<div class="component">		
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	<slider :slides="slides"></slider>
	 	<div class="dayPrize res-img"><img src="./dayPrize.png" alt=""></div>
		<yd-tab>
	        <yd-tab-panel label="交通普及"><articleList :newsList="jtpjList"></articleList></yd-tab-panel>
	        <yd-tab-panel label="路况查看"><articleList :newsList="lkckList"></articleList></yd-tab-panel>
	    </yd-tab>	
	</div>
</template>

<script>
import slider from '@/components/slider/slider';	//轮播组件
import bmobUse from '@/modules/bmobUse';			//bmob的方法模块
import header from '@/components/header/header';	//头部信息组件
import trafficRegulationst from '@/components/trafficRegulationst/trafficRegulationst';	//文章列表组件
export default {
	data() {
		return {
			headerName:'天天奖',  //header头部信息名
			tabbar:false,	//判断是否为tabbar的页面，如果是back按钮去掉
			jtpjList:[],
			lkckList:[],
			slides:[]
		};
	},
	components: {
      'v-header': header,
      'slider':slider,
      'articleList':trafficRegulationst
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

		//获取新闻数据
		bmobUse.getAllData("articles",function(res){

			// console.log(res[0].id);
			//循环拿到的数据，push到this.slides
			for(var i in res){
				if(res[i].attributes.type == '交通普及'){
					_this.jtpjList.push({
						id:res[i].id,
						title:res[i].attributes.title,
						description:res[i].attributes.details,
						imgUrl:res[i].attributes.imgUrl,
						description:res[i].attributes.description
					})	
				}else{
					_this.lkckList.push({
						id:res[i].id,
						title:res[i].attributes.title,
						description:res[i].attributes.details,
						imgUrl:res[i].attributes.imgUrl,
						description:res[i].attributes.description
					})
				}
				
			}
		},function(res){

			//数据获取失败回调
			console.log(res);
		}) 	  	
    }
}
</script>

<style>  
</style>