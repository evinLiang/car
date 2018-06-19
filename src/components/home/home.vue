<template>
	<div>
		<tabbar></tabbar>
		<slider></slider>
		<div class="dayPrize res-img">
			<router-link to="/daysProze"><img src="./dayPrize.png" alt=""></router-link>
		</div>
		<div class="server-list">
			<yd-grids-group :rows="3">
		        <yd-grids-item v-for="item in serverList" :key="item.id">
		        	<div slot="else" style="text-align: center;">
		                <img :src="item.iconSrc" style="height: 4rem;">
		                <p class="text">{{item.name}}</p>
		            </div>  
		        </yd-grids-item>
		    </yd-grids-group>			
		</div>	
		<div class="footPlaceholder"></div>
	</div>
</template>

<script>
import slider from '@/components/slider/slider';
import tabbar from '@/components/tabbar/tabbar';
export default {
	data() {
		return {
			serverList:[
				{name:'违章查询',iconSrc:require('./icon_1.png')},
				{name:'道路救援',iconSrc:require('./icon_2.png')},
				{name:'一键车险',iconSrc:require('./icon_3.png')},
				{name:'汽车美容',iconSrc:require('./icon_4.png')},
				{name:'安全出行',iconSrc:require('./icon_5.png')},
				{name:'车主之家',iconSrc:require('./icon_6.png')}
			]
		};
	},
	components: {
      'slider': slider,
      'tabbar':tabbar
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