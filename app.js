new Vue({
	el:'#vue-app',
	data:{
		health:100,
		ended:false,
		click:false
	},
	methods:{
		punch:function(){
			this.health-=10;
			if (this.health<=0){
				this.ended=true;
			}
			this.click=true;
			

		},
		restart:function(){
			this.health=100;
			this.ended=false;
			this.click=false;
			
		}
	},
	computed:{

	}

})