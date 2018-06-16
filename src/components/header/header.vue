<template>
	<div v-show="!Weixin">
		<div class="header"><a v-show="!tabbar" class="back" href="javascript:;" onclick="window.history.go(-1)"></a> {{headerName}}</div>
		<div class="headPlaceholder"></div>
	</div>
</template>

<script>
export default {
	props: ['headerName','tabbar'],
	data() {
		return {
			Weixin:false
		};
	},
	created() {
		//如果是微信，关闭导航条
		// if(this.isWeiXin()){
		// 	this.Weixin=true 
		// }
	},
	methods: {
		//判断是否微信
		isWeiXin:function() {
	        var ua = window.navigator.userAgent.toLowerCase();
	        //console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
	        if(ua.match(/MicroMessenger/i) == 'micromessenger') {
	            return true;
	        } else {
	            return false;
	        }
	    }
	}
}
</script>

<style scoped>
	.header { 
		position: fixed; 
		z-index: 101;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 4.5rem;
		line-height: 4.5rem;
		text-align: center;
		color: #fff;
		font-size: 17px;
		background: #ff8533;
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