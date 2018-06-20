<template>
	<div class="component">		
	 	<v-header :headerName="headerName" :tabbar="tabbar"></v-header>
	 	<div class="feedbackText">
		 	<yd-cell-group>
		        <yd-cell-item>
		            <yd-textarea slot="right" placeholder="请输入您的宝贵意见" maxlength="100" v-model="feedbackText"></yd-textarea>
		        </yd-cell-item>
		    </yd-cell-group>
	    </div>
	    <div class="feedbackBottom">
	    	<yd-button size="large" type="warning" @click.native="getFeedback()">立刻提交</yd-button>
	    	<p>车小安感谢您的宝贵意见！</p>
	    </div>
	</div>
</template>

<script>
import header from '@/components/header/header';	
export default {
	data() {
		return {
			headerName:'反馈意见',  //header头部信息名
			tabbar:false,	//判断是否为tabbar的页面，如果是back按钮去掉
			feedbackText:''
		};
	},
	components: {
      'v-header': header
    },
    created() {
    },
    methods:{
    	getFeedback(){
    		if(this.feedbackText == ''){
    			this.$dialog.alert({mes: '反馈意见不能为空！'});
    		}else {
    			this.$dialog.loading.open('提交中');
    			setTimeout(() => {
                    this.$dialog.loading.close();
                    this.$dialog.toast({
	                    mes: '提交成功',
	                    timeout: 1500,
	                    icon: 'success'
	                });
                }, 1500);
    		}
    	}
    }
}
</script>

<style>  
	.feedbackText {
		margin-top: 1rem;
	}
	.yd-cell-box { margin-bottom: 0rem; } 
	.yd-textarea > textarea {
		height: 20rem;
	}
	.feedbackBottom { padding: 0rem 3.8rem; text-align: center; }
	.feedbackBottom p { font-size: 12px; color: #a2a1a1; margin-top: 1.3rem; }
</style>