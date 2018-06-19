<template>
	<div>
		<tabbar></tabbar>
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	<div class="recommend" :class="recommend_weixin_height"></div>
	 	<div class="recommend-share" v-show="shareShow" @click="shareHide()">
	 		<div class="share-icon"><img src="./shareIcon.png" alt=""></div>
	 		<div class="share-text"><img src="./shareText.png" alt=""></div>
	 		<div class="share-btn">我知道了</div>
	 	</div>
	 	<div class="recommend-body">
	 		<div class="recommend-btn">已邀请 <span class="bigText">
	 			<yd-countup
		            endnum="88"
		            duration="3"
		    	></yd-countup>
	 		</span> 人</div>
	 		<img src="./eCode.png" alt="" class="eCode">
	 	</div>
	</div>
</template>

<script>
import header from '@/components/header/header';
import tabbar from '@/components/tabbar/tabbar';	
import weixin from '../../modules/weixin.js';
export default {
	data() {
		return {
			headerName:'分享',  				  //header头部信息名
			tabbar:true,					  //判断是否为tabbar的页面，如果是back按钮去掉	
			recommend_weixin_height:'',		  //如果在微信，分享页面的高度
			recommend_body_weixin_height:'',  //如果在微信，分享内容的高度
			shareShow:true					  //是否分享提示
		};
	},
	components: {
      'v-header': header,
      'tabbar':tabbar
    },
    created() {

		//如果是微信，recommend更改高度
		if(weixin.isWeiXin()){
			this.recommend_weixin_height='recommend_weixin_height';
		}		
	},
    methods:{

    	//关闭分享按钮
    	shareHide(){
    		this.shareShow=false
    	}
    }
}
</script>

<style>
	.recommend {
		position: absolute;
		z-index: 99;
		width: 100%;
		height: -moz-calc(100% - 9.5rem);
	    height: -webkit-calc(100% - 9.5rem);
	    height: -o-calc(100% - 9.5rem);
	    height: calc(100% - 9.5rem);
		background:#fff2cf url(./recommend.jpg) no-repeat top center;
		background-size: 100% auto;
	}
	.recommend-share {
		position: fixed;
		z-index: 104;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.6);
		text-align: center;
	}
	.share-icon {
		text-align: right;
		padding: 1rem 2rem 2rem 0rem;
	}
	.share-icon img {
		width: 13.9rem;
		height: 14.4rem;
	}
	.share-text img {
		width: 18.4rem;
		height: 6.1rem;
	}
	.share-btn {
		width: 15rem;
		height: 4.4rem;
		line-height: 4.4rem;
		background: #fff;
		margin: 2.5rem auto;
		border-radius: 3rem;
		font-size: 16px;
		color: #666;
	}
	.recommend_weixin_height {
		height: -moz-calc(100% - 5rem);
	    height: -webkit-calc(100% - 5rem);
	    height: -o-calc(100% - 5rem);
	    height: calc(100% - 5rem);
	}
	.recommend-body {
		position: absolute;
		z-index: 100;
		top: 40%;
		left: 50%;
		transform: translateX(-50%);
		width: 34.2rem;
		height: 25.9rem;
		line-height: 25.9rem;
		background: url(./mask.png) no-repeat center center;
		background-size: 100% 100%;
		text-align: center;
	}
	.recommend-body img {
		max-width: 50%;
	}
	.recommend-btn {
		position: absolute;
		z-index: 101;
		left: 50%;
		top: -1.5rem;
		width: 19.9rem;
		height: 4.4rem;
		line-height: 4.4rem;
		background: url(./btn.png) no-repeat center center;
		background-size: 100% 100%;
		transform: translateX(-50%);
		color: #fff;
		font-size: 14px;
	}
	.recommend-btn .bigText {
		font-size: 21px;
		color: #fd4b22;
	}
	@media screen and (max-width: 320px) {
		.recommend-body {
			width: 28rem;
			height: 21.2rem;
			line-height: 21.2rem;
		}
		.recommend-btn {
			width: 13.6rem;
			height: 3rem;
			line-height: 3rem;
		}
		.share-icon img {
			width: 9.7rem;
			height: 10rem;
		}
		.share-text img {
			width: 12rem;
			height: 4rem;
		}
		.share-btn {
			width: 10rem;
			height: 2.9rem;
			line-height: 2.9rem;
			font-size: 14px;
		}
	}
</style>