<template>
	<div v-show="!Weixin">
		<div class="header"><a v-show="!tabbar" class="back" href="javascript:;" onclick="window.history.go(-1)"></a> <span>{{headerName}}</span></div>
		<div class="headPlaceholder"></div>
	</div>
</template>

<script>
import weixin from '../../modules/weixin.js';	
export default {
	props: ['headerName','tabbar'],
	data() {
		return {
			Weixin:false
		};
	},
	created() {
		//如果是微信，关闭导航条
		if(weixin.isWeiXin()){
			this.Weixin=true 
		}		
	},
	methods: {

	},
	watch: {
    }
}
</script>

<style scoped>
	.header { 
		position: fixed; 
		z-index: 105;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 4.5rem;
		line-height: 4.5rem;
		text-align: center;
		color: #fff;	
		background: #ff8533;
	}
	.header span {
		font-size: 17px;
	}
	.back {
		position: absolute;
		z-index: 102;
		left: 0px;
		top: 0px;
		width: 4.5rem;
		height: 4.5rem;
		background: url(./back.png) no-repeat center center;
		background-size: 0.9rem 1.6rem;
	}
</style>