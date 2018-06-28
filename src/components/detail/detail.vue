<template>
	<div class="component bgfff">		
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	<div class="detailPanel">
	 		<h3 class="detailTitle" v-text="title"></h3>
	 		<div class="detailInfo">
	 			<span v-text="createdAt"></span>
	 			<span v-text="type"></span>
	 		</div>
	 		<div class="detailContent res-img" v-html="details"></div>
	 		<div class="detailRecord">
	 			<span>阅读 65988</span>
	 			<span><img class="like" src="./like_cilck.png" alt=""> 65988</span>
	 		</div>
	 	</div>
	</div>
</template>

<script>	
import bmobUse from '@/modules/bmobUse';			//bmob的方法模块
import header from '@/components/header/header';	//头部信息组件
export default {
	data() {
		return {
			headerName:'文章详情',  //header头部信息名
			tabbar:false,	//判断是否为tabbar的页面，如果是back按钮去掉
			listId: this.$route.params.id,
			title:'',
			details:'',
			type:'',
			createdAt:''
		};
	},
	components: {
      'v-header': header
    },
    activated() {

    	//因为路由设置了<keep-alive>导致路由不刷新，所以要从activated获取 -> params.id
    	var _this =this;
    	_this.listId=_this.$route.params.id;
    	
    	bmobUse.getIdData(_this.listId,"articles",function(res){
    		_this.title = res.attributes.title,
	        _this.details = res.attributes.details,
	        _this.type = res.attributes.type,
	        _this.createdAt = res.createdAt
    	},function(res){
    		console.log(res)
    	})
    }
}
</script>

<style>
.bgfff { background: #fff; }
.detailPanel {
	padding: 3rem 1.2rem;
}
.detailTitle {
	font-size: 18px;
	color: #333;
	margin-bottom: 1.2rem;
	line-height: 25px;
}
.detailInfo {
	font-size: 15px;
	color: #999;
	padding-bottom: 1.5rem;
	margin-bottom: 1.5rem;
	border-bottom: 1px solid #e5e5e5;
}
.detailInfo span { margin-right: 1.5rem; display: inline-block; }
.detailContent {
	font-size: 14px;
	color: #666;
	line-height: 2.4rem;
}
.detailContent p {
	text-indent: 2em;
}
.detailContent img {
	margin: 1rem 0rem;
}
.detailRecord { color: #999; margin-top: 3rem; }
.detailRecord span { margin-right: 1.5rem; display: inline-block; }
.detailRecord span .like { width: 1.3rem; height: 1.5rem; vertical-align: bottom; }
</style>