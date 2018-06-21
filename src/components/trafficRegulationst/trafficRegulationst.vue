<template>
	<div class="newsList">
		<div class="new-item" v-for="item in newsList" :key="item.id" @click="goDetail(item.id)">
			<div class="new-pic res-img"></div>
			<div class="new-main">
				<h4>{{item.title}}</h4>
				<p>{{item.description}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
      newsList: {
        type: Array
      }
    },
	data() {
		return {
		};
	},
	methods:{
		goDetail(id){
			this.$router.push({ 
				name: 'detail', 
				params: { id: id } 
			});
		}
	}
}
</script>

<style scoped>
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
