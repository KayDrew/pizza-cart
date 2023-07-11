function Order(){

return{
	
cartTotal:0,
large:0,
roundedLarge:0,
paymentAmount:0,
total:0,
total2:0,
error:"",
incrementLarge(){
	
this.large+=98.99;
this.cartTotal+=98.99;
this.total++;
this.total2=this.cartTotal.toFixed(2);
this.roundedLarge=this.large.toFixed(2);
},

decrementLarge(){
	
	if(this.large>0){
		
this.large-=98.99;
this.cartTotal-=98.99;
this.total--;
this.total2=this.cartTotal.toFixed(2);
this.roundedLarge=this.large.toFixed(2);

}
},

	
medium:0,
roundedMedium:0,
incrementMedium(){
this.medium+=78.99;
this.cartTotal+=78.99;
this.total++;
this.total2=this.cartTotal.toFixed(2);
this.roundedMedium=this.medium.toFixed(2);
},

decrementMedium(){
	
	if(this.medium>0){
this.medium-=78.99;
this.cartTotal-=78.99;
this.total--;
this.total2=this.cartTotal.toFixed(2);
this.roundedMedium=this.medium.toFixed(2);
}
},


small:0,
roundedSmall:0,
incrementSmall(){
this.small+=68.99;
this.cartTotal+=68.99;
this.total++;
this.total2=this.cartTotal.toFixed(2);
this.roundedSmall=this.small.toFixed(2);
},

decrementSmall(){

	if(this.small>0){
this.small-=68.99;
this.cartTotal-=68.99;
this.total--;
this.total2=this.cartTotal.toFixed(2);
this.roundedSmall=this.small.toFixed(2);
}
},


pay(){


if(this.paymentAmount<this.total2){

this.error="The amount is insufficient";


}


},


};
}


document.addEventListener("alpine:init",()=>{

Alpine.data("order",Order);

}

);
