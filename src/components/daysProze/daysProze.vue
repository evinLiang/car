<template>
	<transition name="style" mode="out-in">
	<div class="page">		
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	<slider></slider>
	 	<div class="dayPrize res-img"><img src="./dayPrize.png" alt=""></div>
		<yd-tab>
	        <yd-tab-panel label="交通普及"><trafficRegulationst></trafficRegulationst></yd-tab-panel>
	        <yd-tab-panel label="路况查看"><trafficRegulationst></trafficRegulationst></yd-tab-panel>
	    </yd-tab>	 	
	</div>
	</transition>
</template>

<script>
import header from '@/components/header/header';
import slider from '@/components/slider/slider';
import trafficRegulationst from '@/components/trafficRegulationst/trafficRegulationst';	
export default {
	data() {
		return {
			headerName:'天天奖',  //header头部信息名
			tabbar:false	//判断是否为tabbar的页面，如果是back按钮去掉
		};
	},
	components: {
      'v-header': header,
      'slider':slider,
      'trafficRegulationst':trafficRegulationst
    },
    created() {
    },
    methods:{
    	tabswitch(){
    		tabContent=!tabContent;
    	}
    }
}
</script>

<style>
	.page {
		position: relative;
		left: 0px;
		top: 0px;
		z-index: 101;
		width: 100%;
		/*height: 100%;*/
		background: #f5f5f5;
	}    
	.yd-tab-nav .yd-tab-active::before { content:''; height: 0px; }
/*    .style-enter-active,.style-leave-active{
        transition: all 0.4s;
        transform: translateX(0%);
        
    }
    .style-enter,.style-leave-to{
    	transition: all 0.4s;
        transform: translateX(100%);
    }*/
</style>