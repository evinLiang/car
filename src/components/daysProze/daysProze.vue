<template>
	<transition name="style" mode="out-in">
	<div class="page">		
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	</div>
	</transition>
</template>

<script>
import header from '@/components/header/header';	
export default {
	data() {
		return {
			headerName:'天天奖',  //header头部信息名
			tabbar:false	//判断是否为tabbar的页面，如果是back按钮去掉
		};
	},
	components: {
      'v-header': header
    },
    created() {
    },
    methods:{
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
		height: 100%;
		background: #f5f5f5;
		box-shadow:-2px 0px 2px rgba(51,51,51,0.3);
	}    
/*    .style-enter-active,.style-leave-active{
        transition: all 0.4s;
        transform: translateX(0%);
        
    }
    .style-enter,.style-leave-to{
    	transition: all 0.4s;
        transform: translateX(100%);
    }*/
</style>