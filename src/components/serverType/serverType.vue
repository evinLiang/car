<template>
	<div>
	<yd-cell-group>
        <yd-cell-item type="checkbox" v-for="item in serverTypes" :key="item.id">
            <span slot="left">{{item.name}}</span>
            <span slot="right" class="margin-r-10">{{item.money}}元</span>
            <input slot="right" type="checkbox" :value="item.value" v-model="checkedNames"/>
        </yd-cell-item>
    </yd-cell-group>
    </div>
</template>

<script>
export default {
	data() {
		return {
			checkedNames:[],
			moneySum:0
		};
	},
	created(){
		this.checkedNames.push(this.serverTypes[0].value)
		this.moneySum=this.serverTypes[0].money
	},
	props: {
      serverTypes: {
        type: Array
      }
    },
    methods:{
    	addMoney(){
    		console.log(this.checkedNames);
    	}
    },
    watch:{
		checkedNames:{
			handler(newValue,oldValue){
				var num = newValue.length;
				this.moneySum = 0;
				for(let i = 0; i < num; i++){
					this.moneySum=this.moneySum+this.serverTypes[i].money
				}
				this.$emit('showMondy',this.moneySum);
			}
		}
	}
}
</script>

<style>
.yd-cell-right input[type=checkbox]:not(.yd-switch):checked+.yd-cell-checkbox-icon:after, .yd-cell-right input[type=radio]:checked+.yd-cell-checkbox-icon:after {
	color: #ffa938;
}
.margin-r-10 { margin-right: 10px; }

</style>