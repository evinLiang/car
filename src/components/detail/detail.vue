<template>
	<div class="component">		
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	{{listId}}
	</div>
</template>

<script>
import header from '@/components/header/header';	
export default {
	data() {
		return {
			headerName:'文章详情',  //header头部信息名
			tabbar:false,	//判断是否为tabbar的页面，如果是back按钮去掉
			listId: this.$route.params.id
		};
	},
	components: {
      'v-header': header
    },
    created() {
    }
}
</script>

<style>
/*.tabbar { display: none; }*/
</style>