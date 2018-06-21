<template>
	<div class="component">		
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	<slider :slides="slides"></slider>
	 	<div class="dayPrize res-img"><img src="./dayPrize.png" alt=""></div>
		<yd-tab>
	        <yd-tab-panel label="交通普及"><articleList :newsList="newsList"></articleList></yd-tab-panel>
	        <yd-tab-panel label="路况查看"><articleList :newsList="newsList"></articleList></yd-tab-panel>
	    </yd-tab>	 	
	</div>
</template>

<script>
import header from '@/components/header/header';
import slider from '@/components/slider/slider';
import trafficRegulationst from '@/components/trafficRegulationst/trafficRegulationst';
export default {
	data() {
		return {
			headerName:'天天奖',  //header头部信息名
			tabbar:false,	//判断是否为tabbar的页面，如果是back按钮去掉
			newsList:[
				{title:'《智能交通网络安全实践指南》',description:'2018年6月20日，由北航-梆梆车联网安全研究院、交通运输部公路科学研究院......',id:1},
				{title:'《智能交通网络安全实践指南》',description:'2018年6月20日，由北航-梆梆车联网安全研究院、交通运输部公路科学研究院......',id:2}
			],
			slides:[
				{imgUrl:require('../home/banner.png')},
				{imgUrl:require('../home/banner.png')}
			]
		};
	},
	components: {
      'v-header': header,
      'slider':slider,
      'articleList':trafficRegulationst
    },
    created() {
    }
}
</script>

<style>  
</style>