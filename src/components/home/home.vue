<template>
	<div>
		<slider></slider>
		<div class="dayPrize res-img"><img src="./dayPrize.png" alt=""></div>
		<div class="server-list">
			<yd-grids-group :rows="3">
		        <yd-grids-item>
		        	<div slot="else" style="text-align: center;">
		                <img src="./icon_1.png" style="height: 4rem;">
		                <p class="text">违章查询</p>
		            </div>  
		        </yd-grids-item>
		        <yd-grids-item>
		        	<div slot="else" style="text-align: center;">
		                <img src="./icon_2.png" style="height: 4rem;">
		                <p class="text">道路救援</p>
		            </div>  
		        </yd-grids-item>
		        <yd-grids-item>
		        	<div slot="else" style="text-align: center;">
		                <img src="./icon_3.png" style="height: 4rem;">
		                <p class="text">一键车险</p>
		            </div>  
		        </yd-grids-item>
		        <yd-grids-item>
		        	<div slot="else" style="text-align: center;">
		                <img src="./icon_4.png" style="height: 4rem;">
		                <p class="text">汽车美容</p>
		            </div>  
		        </yd-grids-item>
		        <yd-grids-item>
		        	<div slot="else" style="text-align: center;">
		                <img src="./icon_5.png" style="height: 4rem;">
		                <p class="text">安全出行</p>
		            </div>  
		        </yd-grids-item>
		        <yd-grids-item>
		        	<div slot="else" style="text-align: center;">
		                <img src="./icon_6.png" style="height: 4rem;">
		                <p class="text">车主之家</p>
		            </div>  
		        </yd-grids-item>
		    </yd-grids-group>			
		</div>
		<div class="footPlaceholder"></div>	
	</div>
</template>

<script>
import slider from '@/components/slider/slider';
export default {
	data() {
		return {

		};
	},
	components: {
      'slider': slider
    }
}
</script>

<style>
.server-list {
	background: #fff;
	padding: 2.5rem 1.2rem;
}
.server-list .yd-grids-3:before {
	border: none;
}
.server-list .yd-grids-item:after {
	border-bottom-color:#e5e5e5;
}
.server-list .yd-grids-item:nth-child(4):after,.server-list .yd-grids-item:nth-child(5):after,.server-list .yd-grids-item:nth-child(6):after {
	border-bottom-color: #fff;
}
.server-list .text {
	font-size:1.3rem;
	margin-top: 1.5rem;
	color: #999;
}
</style>