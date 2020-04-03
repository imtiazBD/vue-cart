var app = new Vue(
{
	el:'#app',
	data: {
		product: 'Socks',
		description:'A pair of warm, fuzzy socks',
		image:'vgreen.jpg',
		inventory:10,
		items:['80% Cotton','Free Delevary','Bata'],
		variants:[
		{   variantId:2234,
			variantColor:"Green",
			variantImage:'vgreen.jpg'
		},
		{   variantId:2235,
			variantColor:"Blue",
            variantImage:'vblue.jpg',
		}],
		cart:0,
	},
	methods:{
		addToCart:function(){
			this.cart+=1
		},
		updateProduct:function(variantImage){
			this.image=variantImage
		},
		subToCart(){
			this.cart-=1
		}
	}
})