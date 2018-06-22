<template>
	<div class="comment">
		<div class="comment-item" v-for="item in comments" :key="item.id">
			<div class="comment-avatar"><img :src="item.userAvatar" alt=""></div>
			<div class="comment-info">
				<div class="user-name clearfix"><h3 class="float-l">{{item.userName}}</h3><span class="float-r">{{item.time}}</span></div>
				<div class="user-score">
					<yd-rate slot="left" v-model="item.rate" size="10px" color="#c7c7c7" active-color="#ffb71c" :readonly="true" :show-text="['1.0分','2.0分','3.0分','4.0分','5.0分']"></yd-rate>
				</div>
				<div class="user-pic">
					<ul class="clearfix">
						<li class="res-img" v-for="item in item.userPic"><img :src="item" alt=""></li>
					</ul>
				</div>
				<div class="user-text">{{item.userText}}</div>
				<template v-if="item.business">
				<div class="business-text">
					<p>商家回复（{{item.business.time}}）：{{item.business.text}}</p>
<p style="color: #7b97b3"><template v-for="item in item.business.tag"><span>#{{item}}#</span></template></p>
				</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	props: {
      comments: {
        type: Array
      }
    }
}
</script>

<style>
.comment .comment-item { padding: 1.8rem 2rem; display: flex; border-bottom:1px solid #e5e5e5; }
.comment .comment-avatar { width: 4.3rem; height: 4.3rem; overflow: hidden; border-radius: 50%; margin-right: 1.5rem; }
.comment .comment-avatar img { max-width: 100%; }
.comment .comment-info { flex: 1; padding-top: 0.5rem; }
.comment .comment-info .user-name { color: #666; font-size: 13px; }
.comment .comment-info .user-name span { font-size: 12px; color: #b4b4b4; }
.comment .comment-info .yd-rate-text { font-size: 10px; color: #959595; }
.comment .comment-info .user-score { margin-top: 0.5rem; }
.comment .comment-info .user-pic { margin-top: 0.5rem; }
.comment .comment-info .user-pic ul li { float: left; width: 7.5rem; height: 5rem; margin-right: 1.2rem;}
.comment .comment-info .user-text { font-size: 12px; color: #666; margin-top: 0.5rem; }
.comment .comment-info .business-text { padding: 1rem; background: #eeeeee; margin-top: 1rem; color: #999; font-size: 12px; line-height: 1.7rem; }
.comment .comment-info .business-text span { margin-right: 0.5rem; }
</style>