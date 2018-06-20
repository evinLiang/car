<template>
	<div class="bg-fff component">
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	<div class="userInfo">
	 		<div v-show="login">
		 		<div class="userAva"><img src="./userT.png" alt=""></div>
		 		<h3>13711765424 <yd-badge shape="square" bgcolor="#b15b2c" color="#fe6730">VIP</yd-badge></h3>
		 		<div class="userUse">
		 			<a href="javascript:;" class="btn bg-ffb033">充值</a>
		 			<a href="javascript:;" class="btn bg-ff9c33">提现</a>
		 		</div>
	 		</div>
	 		<div class="loginSign" v-show="!login" @click="getLogin()">登录/注册</div>
	 	</div>
	 	<div class="vip">
	 		<div class="vipPanel">
	 			<div class="vipItem">
	 				<h4>成为普通VIP <yd-badge shape="square" bgcolor="#b15b2c" color="#FFF">VIP</yd-badge></h4>
	 				<p>安全出行每天获车币，可提现</p>
	 			</div>
	 			<div class="vipItem">
	 				<h4>成为超级VIP <yd-badge shape="square" bgcolor="#ffc809" color="#FFF">VIP</yd-badge></h4>
	 				<p>推荐人每天获车币，天天涨，可提现</p>
	 			</div>
	 		</div>
	 	</div>
	 	<div class="toolList">
			<yd-cell-group>
		        <yd-cell-item arrow v-for="item in toolList" type="link" :key="item.id" :href="item.href">		        	
		            <img slot="icon" :src="item.imgSrc">
		            <span slot="left">{{item.name}}</span>		        	
		        </yd-cell-item>
		    </yd-cell-group>	 		
	 	</div>
	 	<div class="footPlaceholder"></div>
	</div>
</template>

<script>
import header from '@/components/header/header';
export default {
	data() {
		return {
			headerName:'我的',  //header头部信息名
			tabbar:true,		//判断是否为tabbar的页面，如果是back按钮去掉
			login:false,
			toolList:[
				{name:"我的爱车",imgSrc:require('./1.png'),href:''},
				{name:"爱车估值",imgSrc:require('./2.png'),href:''},
				{name:"订单列表",imgSrc:require('./3.png'),href:''},
				{name:"服务优惠",imgSrc:require('./4.png'),href:''},
				{name:"车险保障",imgSrc:require('./5.png'),href:''},
				{name:"意见反馈",imgSrc:require('./6.png'),href:'/feedback'},
				{name:"我的帮助",imgSrc:require('./7.png'),href:''},
				{name:"车主论坛",imgSrc:require('./8.png'),href:''}
			]
		};
	},
	components: {
      'v-header': header
    },
    methods:{
    	getLogin(){
    		this.login=true;
    	}
    }
}
</script>

<style>
.bg-fff { background: #fff; }
.bg-ffb033 { background: #ffb033; }
.bg-ff9c33 { background: #ff9c33; }
.yd-cell-left { color: #404040; }
.toolList .yd-cell:after { border:none; }
.userInfo {
	position: relative;
	z-index: 99;
	top: 0px;
	left: 0px;
	height: 24.1rem;
	background: url(./top.jpg) no-repeat top center;
	background-size: 100% 100%;
	text-align: center;
	color: #fff;
}
.userInfo h3 { font-size: 17px; position: relative; z-index: 102; margin: 1rem 0rem 1.5rem 0rem; } 
.userInfo h3 .yd-badge {
	position: absolute;
	z-index: 103;
	top: -0.6rem;
	margin-left: 0.2rem;
	font-style:oblique;
	font-size: 10px;
	padding: 2px 3px 1px 3px;
}
.userAva img {
	margin-top: 1rem;
	width: 9rem;
	height: 9rem;
}
.userUse .btn {
	width: 10.9rem;
	height: 3.5rem;
	line-height: 3.5rem;
	display: inline-block;
	border-radius: 0.5rem;
	font-size: 15px;
	margin: 0rem 3rem;
	color: #fff;
}
.loginSign {
	position: absolute;
	z-index: 100;
	left: 50%;
	transform: translateX(-50%);
	top: 7.6rem;
	width: 16.4rem;
	height: 4.4rem;
	line-height: 4.4rem;
	background: #fff;
	color: #ff6833;
	text-align: center;
	font-size: 17px;
	border-radius: 0.5rem;
}
.vip {
	position: relative;
	z-index: 101;
	margin-top: -4.2rem;
	padding: 0rem 1.2rem;
	text-align: center;
}
.vipPanel {
	padding-bottom: 1.0rem;
	display: flex;
	background: #fff;
	border-radius: 0.6rem 0.6rem 0rem 0rem;
	color: #9e9e9e;
}
.vipItem {
	flex: 1px;
	padding-bottom: 1rem;
}
.vipItem:nth-child(1) {
	border-right: 1px solid #e3e3e3;
}
.vipItem h4 { font-size: 15px; color:#404040; margin:2.5rem 0rem 1.5rem 0rem; position: relative; z-index: 102; }
.vipItem h4 .yd-badge {
	position: absolute;
	z-index: 103;
	top: -0.8rem;
	margin-left: 0.2rem;
	font-style:oblique;
	font-size: 10px;
	padding: 2px 3px 1px 3px;
}
.vipItem p { font-size: 10px; }
@media screen and (max-width: 320px) {
	.userUse .btn {
		margin: 0rem 2rem;
	}
}
</style>