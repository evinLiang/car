<template>
	<div>
		<tabbar></tabbar>
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	<div class="purseInfo">
	 		<div class="tripIncome">
	 			<h3>
	 				<yd-countup
				            endnum="998"
				            duration="3"
				    ></yd-countup>
				</h3>
	 			<p class="incomeName">安全出行收益(元)</p>
	 		</div>
	 		<div class="incomeDetail">
	 			<div class="item">
	 				<h4>
	 					<yd-countup
				            endnum="998"
				            duration="3"
				    	></yd-countup>
	 				</h4>
	 				<p class="incomeName">账户余额(元)</p>
	 			</div>
	 			<div class="item">
	 				<h4>
	 					<yd-countup
				            endnum="568"
				            duration="3"
				    	></yd-countup>
	 				</h4>
	 				<p class="incomeName">昨日收益(元)</p>
	 			</div>
	 			<div class="item">
	 				<h4>
	 					<yd-countup
				            endnum="998"
				            duration="3"
				    	></yd-countup>
	 				</h4>
	 				<p class="incomeName">累计收益(元)</p>
	 			</div>
	 		</div>	
	 	</div>
	 	<div class="withdrawCash">
			<yd-cell-group>
	            <yd-cell-item>
		            <span slot="left">提现金额(元)：</span>
		            <input slot="right" type="number" placeholder="请输提现金额">
		        </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left" class="c-c5c5c5 font-s-12">您当前最大可提现金额为：888 元</span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left" class="c-5ba4ff font-s-12">查看支持银行</span>
	                <span slot="right" class="c-5ba4ff font-s-12">查看手续费</span>
	            </yd-cell-item>
	        </yd-cell-group>	 		
	 	</div>
	 	<div class="tips">
	 		<h4 class="font-s-13 c-666">提现小贴士:</h4>
	 		<p class="font-s-12">1.安全出行收益需按规定周期提现；<br>
      2.宣传安全出行收益可随时提现。</p>
	 	</div>
	 	<div class="withdrawBtn">
	 		<yd-button size="large" type="warning">立刻提现</yd-button>
	 	</div>
	 	<div class="footPlaceholder"></div>
	</div>
</template>

<script>
import header from '@/components/header/header';
import tabbar from '@/components/tabbar/tabbar';	
export default {
	data() {
		return {
			headerName:'钱包',  //header头部信息名
			tabbar:true		   //判断是否为tabbar的页面，如果是back按钮去掉
		};
	},
	components: {
      'v-header': header,
      'tabbar':tabbar
    }
}
</script>

<style>
	.purseInfo {
		background: #ff6833;
		padding: 4.5rem 0rem 2.5rem 0rem;
		text-align: center;
		color: #fff;
	}
	.c-5ba4ff { color:#5ba4ff; }
	.c-c5c5c5 { color:#c5c5c5; }
	.c-666 { color:#666; }
	.font-s-12 { font-size: 12px; }
	.font-s-13 { font-size: 13px; }
	.purseInfo .tripIncome h3 { font-size: 24px; font-weight: bold; }
	.purseInfo .incomeName { font-size: 10px; margin-top: 0.5rem; }
	.incomeDetail { display: flex; margin-top: 5rem; }
	.incomeDetail .item {flex: 1;}
	.incomeDetail .item h4 { font-size: 13px; }
	.withdrawCash { margin-top: 1rem; }
	.withdrawCash .yd-cell:after { border:none; }
	.tips { padding: 0.25rem 2rem 1rem 2rem; line-height: 2rem; color: #888; }
	.tips p { padding-left: 1.5rem; }
	.withdrawBtn { padding: 0rem 3.5rem 3rem 3.5rem; }
</style>