function Order(){

return{
	
showCheckout: false,
showInput:false,
showPay:false,
showCart:false,
toPayText:false,
orderItems:false,
empty:true,
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

if(this.total2>0){

this.showCheckout=true;

}

else{

this.showCheckout=false;
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

if(this.total2>0){

this.showCheckout=true;

}

else{

this.showCheckout=false;
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
if(this.total2>0){

this.showCheckout=true;

}

else{

this.showCheckout=false;
}

},


pay(){


if(Number(this.paymentAmount)<this.total2){
this.error="The amount is insufficient";
}

else{
	
this.cartTotal=0;
this.large=0;
this.paymentAmount=0;
this.total=0;
this.total2=0;
this.medium=0;
this.small=0;
this.roundedLarge=0;
this.roundedSmall=0;
this.roundedMedium=0;
	
this.error="";

}

},


displayCart(){

this.showCart=true;

if(this.total2>0){
	
this.empty=false;
this.orderItems=true;
this.showCheckout=true;
console.log(this.empty);

}

else{

this.showCheckout=false;
this.empty=true;
this.orderItems=false;
console.log(this.empty);
}

},

};
}


document.addEventListener("alpine:init",()=>{

Alpine.data("order",Order);

}

);
