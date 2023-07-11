function Order(){

return{
	
	cartTotal:0,
large:0,

incrementLarge(){
this.large++;
this.cartTotal+=98.99;

},

decrementLarge(){
	
	
	if(this.large>0){
this.large--;
this.cartTotal-=98.99;

}
},

	
medium:0,
incrementMedium(){
this.medium++;
this.cartTotal+=78.99;
},

decrementMedium(){
	
	if(this.medium>0){
this.medium--;
this.cartTotal-=78.99;
}
},


small:0,
incrementSmall(){
this.small++;
this.cartTotal+=68.99;
},

decrementSmall(){

	if(this.small>0){
this.small--;
this.cartTotal-=68.99;
}
},


addToCart(){

this.cartTotal++;
},


};
}


document.addEventListener("alpine:init",()=>{

Alpine.data("order",Order);

}

);
