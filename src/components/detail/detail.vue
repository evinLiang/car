<template>
	<div class="component bgfff">		
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	<div class="detailPanel">
	 		<h3 class="detailTitle">{{listId}}:《智能交通网络安全实践指南》</h3>
	 		<div class="detailInfo">
	 			<span>2018-6-21</span>
	 			<span>腾分期</span>
	 		</div>
	 		<div class="detailContent res-img">
	 			<p>2018年6月20日，由北航-梆梆车联网安全研究院、交通运输部公路科学研究院、普华永道联合编撰的《智能交通网络安全实践指南》（下文简称“指南”）在世界交通运输大会正式发布。2018世界交通运输大会汇聚全球交通运输领域顶级专家，人员级别之高、影响人数之多、发布成果之新，堪称交通领域的最高规格会议。通过这个平台发布指南，一方面是以智能交通网络安全先行者的身份向专家、行业分享编撰者在智能交通网络安全领域的成果、理念、技术及建议；另一方面也希望能够集众人之智，采众家之长，共同为智能交通的健康可持续发展贡献智慧和力量。</p>
	 			<img src="./1.png" alt="">
	 			<p>在智能交通网络安全体系架构中，以政府政策为指导，以人为中心，围绕智能交通城市建设，范围涵盖智能制造企业、运营服务商等机构和企业，交通工具和运营平台以及智能基础设施和物联网络等智能交通产业链中的所有对象。该体系共分为4大领域，分别为智能交通网络安全管理体系、智能交通网络安全技术体系、智能交通网络安全运营体系和智能交通网络安全评价体系。在该体系的整体框架中，以安全管理体系为根本，安全技术体系为基石，安全运营体系为核心，安全评价体系为保障，将风险管理思维和PDCA理念融入其中，形成有效的、持续改进的体系闭环。</p>
	 		</div>
	 		<div class="detailRecord">
	 			<span>阅读 65988</span>
	 			<span><img class="like" src="./like_cilck.png" alt=""> 65988</span>
	 		</div>
	 	</div>
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
    activated() {

    	//因为路由设置了<keep-alive>导致路由不刷新，所以要从activated获取 -> params.id
    	this.listId=this.$route.params.id
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
	margin-bottom: 1.5rem;
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