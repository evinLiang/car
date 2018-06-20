<template>
	<div class="component">		
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	<slider></slider>
	 	<div class="dayPrize res-img"><img src="./dayPrize.png" alt=""></div>
		<yd-tab>
	        <yd-tab-panel label="交通普及">
	        	<div class="newsList">
					<div class="new-item" v-for="item in newsList" :key="item.id" @click="goDetail(item.id)">
						<div class="new-pic res-img"></div>
						<div class="new-main">
							<h4>{{item.title}}</h4>
							<p>{{item.description}}</p>
						</div>
					</div>
				</div>
	        </yd-tab-panel>
	        <yd-tab-panel label="路况查看">
	        	<div class="newsList">
					<div class="new-item" v-for="item in newsList" :key="item.id" @click="goDetail(item.id)">
						<div class="new-pic res-img"></div>
						<div class="new-main">
							<h4>{{item.title}}</h4>
							<p>{{item.description}}</p>
						</div>
					</div>
				</div>
	        </yd-tab-panel>
	    </yd-tab>	 	
	</div>
</template>

<script>
import header from '@/components/header/header';
import slider from '@/components/slider/slider';
export default {
	data() {
		return {
			headerName:'天天奖',  //header头部信息名
			tabbar:false,	//判断是否为tabbar的页面，如果是back按钮去掉
			newsList:[
				{title:'安全出行常识详解一',description:'道路交通信息：指挥灯信号、车道灯信号、人行横道灯信号、交通指挥棒信号、手势信号......',id:1},
				{title:'安全出行常识详解二',description:'道路交通信息：指挥灯信号、车道灯信号、人行横道灯信号、交通指挥棒信号、手势信号......',id:2}
			]
		};
	},
	components: {
      'v-header': header,
      'slider':slider
    },
    created() {
    },
    methods:{
    	tabswitch(){
    		tabContent=!tabContent;
    	},
    	goDetail(id){
    		console.log(id);
			this.$router.push({ 
				name: 'detail', 
				params: { id: id } 
			});
		}
    }
}
</script>

<style>
/*.tabbar { display: none; }*/
/*	.page {
		position: relative;
		left: 0px;
		top: 0px;
		z-index: 101;
		width: 100%;
		background: #f5f5f5;
	} */ 
.newsList {
	background: #fff;
}
.new-item {
	padding: 1.4rem 1.6rem;
	border-bottom: 1px solid #f6f6f6;
	display: flex;
}
.new-pic {
	width: 14.7rem;
	height: 9.2rem;
	border-radius: 0.5rem;
	overflow: hidden;
	background: #ff8942;
	margin-right: 1rem;
}
.new-main { flex: 1; }
.new-main h4 { font-size: 15px; color: #404040; margin: 0.5rem 0rem; }
.new-main p { font-size: 11px; color:#888888; line-height: 1.5rem; }
@media screen and (max-width: 320px) {
	.new-pic {
		width: 12rem;
		height: 7.5rem;
	}
}	  
</style>