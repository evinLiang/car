<template>
	<div>
		<tabbar></tabbar>
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	</div>
</template>

<script>
import header from '@/components/header/header';
import tabbar from '@/components/tabbar/tabbar';	
export default {
	data() {
		return {
			headerName:'我的',  //header头部信息名
			tabbar:true	//判断是否为tabbar的页面，如果是back按钮去掉
		};
	},
	components: {
      'v-header': header,
      'tabbar':tabbar
    }
}
</script>

<style>

</style>