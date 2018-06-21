<template>
	<div class="component">
		<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
		<slider :slides="slides"></slider>
		<div class="storeInfo bg-fff">
			<div class="storeName">东圃奥迪4S汽车店</div>
			<div class="clearfix">
				<div class="float-l">
					<yd-rate slot="left" v-model="rate" size="12px" color="#c7c7c7" active-color="#ffb71c" :readonly="true" :show-text="['1.0分','2.0分','3.0分','4.0分','5.0分']"></yd-rate>
				</div>
				<div class="float-r storeType">五山  汽车美容</div>
			</div>
		</div>
		<div class="storeAddressTel bg-fff">
			<div class="storeAddres">地址：五山街道华南农业大学钢铁研究所自编9栋101室</div>
			<div class="storeTel"><a href="javascript:;"><img src="./tel.png" alt=""></a></div>
		</div>
		<div class="infoPanel">
			<div class="panelTitle clearfix">
				<h3 class="float-l">服务类别</h3>
			</div>
			<yd-cell-group>
		        <yd-cell-item type="checkbox">
		            <span slot="left">标准洗车-五座轿车</span>
		            <span slot="right" class="margin-r-10">99元</span>
		            <input slot="right" type="checkbox" value="1" v-model="checkedNames"/>
		        </yd-cell-item>
		        <yd-cell-item type="checkbox">
		            <span slot="left">全车打蜡-五座轿车</span>
		            <span slot="right" class="margin-r-10">99元</span>
		            <input slot="right" type="checkbox" value="2" v-model="checkedNames"/>
		        </yd-cell-item>
		        <yd-cell-item type="checkbox">
		            <span slot="left">内饰清洗-五座轿车</span>
		            <span slot="right" class="margin-r-10">99元</span>
		            <input slot="right" type="checkbox" value="3" v-model="checkedNames"/>
		        </yd-cell-item>
		    </yd-cell-group>
		</div>
		<div class="infoPanel">
			<div class="panelTitle clearfix">
				<h3 class="float-l">评论(1800)</h3>
				<a href="javascript:;" class="float-r">查看更多</a>
			</div>
		</div>
		<div class="footPlaceholder bg-fff"></div>
		<div class="goPay">
			<div class="payText">￥ {{mokey}}</div>
			<div class="payBtn" type="warning" @click="goPay()">去支付</div>
		</div>
	</div>
</template>

<script>
import slider from '@/components/slider/slider';
import header from '@/components/header/header';	
export default {
	data() {
		return {
			headerName:'门店详情',  //header头部信息名
			tabbar:false,	//判断是否为tabbar的页面，如果是back按钮去掉
			listId: this.$route.params.id,
			rate:4,
			checkedNames:['1'],
			mokey:99,
			slides:[
				{imgUrl:require('./storeBanner.jpg')},
				{imgUrl:require('./storeBanner.jpg')}
			]
		};
	},
	components: {
      'v-header': header,
      'slider':slider
    },
    methods:{
    	goPay(){
    		if(this.mokey == 0){
    			this.$dialog.alert({mes: '请选择服务类别'});
    		}
    	}
    },
    watch:{
		checkedNames:{
			handler(newValue,oldValue){
				var num = newValue.length;
				switch(num){
				    case 0:
				        this.mokey=0
				        break;
				    case 1:
				        this.mokey=99
				        break;
				    case 2:
				        this.mokey=198
				        break;
				    case 3:
				        this.mokey=297
				        break;        
				    default:
				        this.mokey=99
				} 
			}
		}
	}
}
</script>

<style>
.bg-fff { background: #fff; }
.storeInfo {
	padding: 1.6rem 2rem;
	border-bottom: 1px solid #e5e5e5;
}
.margin-r-10 { margin-right: 10px; }
.storeInfo .storeName {
	font-weight: bold;
	color: #404040;
	font-size: 16px;
	margin-bottom: 0.5rem;
}
.storeInfo .yd-rate-text { font-size: 12px; color: #959595; }
.storeInfo .storeType { font-size: 12px; color: #838383; }
.storeAddressTel { padding: 1.1rem 2rem; display: flex; }
.storeAddressTel .storeTel { padding:0rem 1.5rem 0rem 3.5rem; border-left: 1px solid #e5e5e5; height: 3rem; line-height: 3rem; margin-left: 3.5rem; }
.storeAddressTel .storeTel img { width: 2rem; height: 2rem; }
.storeAddressTel .storeAddres { flex: 1; height: 3rem; color: #666; font-size: 12px; line-height: 1.5rem; }
.infoPanel { background: #FFF; margin-top: 1rem; }
.infoPanel .panelTitle { padding: 1.5rem 2rem; border-bottom: 1px solid #e5e5e5; }
.infoPanel .panelTitle h3 { color: #404040; font-size: 14px; }
.infoPanel .panelTitle a { color: #a0a0a0; font-size: 12px; }
.yd-cell-right input[type=checkbox]:not(.yd-switch):checked+.yd-cell-checkbox-icon:after, .yd-cell-right input[type=radio]:checked+.yd-cell-checkbox-icon:after {
	color: #ffa938;
}
.infoPanel .yd-cell-box { margin-bottom: 0rem; }
.infoPanel .yd-cell::after { border:none; }
.goPay {
	position: fixed;
	z-index: 115;
	left: 0px;
	bottom: 0px;
	width: 100%;
	height: 5rem;
	line-height: 5rem;
	background: #f4f4f4;
	border-top: 1px solid #dedede;
	display: flex;
	font-size: 15px;
}
.goPay .payBtn { width: 13rem; color: #fff; background: #ff8133; text-align: center; }
.goPay .payText { flex: 1; padding-left: 2.5rem; }
</style>