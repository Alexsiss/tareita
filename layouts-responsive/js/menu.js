$(document).ready(main);

var estado = true
function main(){
/*	$('#menu').click(function(){
	if(estado==true){
		$('nav').fadeIn("slow",function(){

		});
		estado = false
		 }else{
		 	$('nav').fadeOut("slow",function(){

		 	});
		 	estado= true
		 
	};
	});
			


*/
	/*	$('#menu').click(function(){
		$('nav').animate{
		  	height:'toggle'
         })
	});
       */
         	

		$('#menu').click(function(){
		   $('nav').toggle("slow",function()){
         });
	});
	
	/*alert('HOLA TI31');
	$('#menu').click(function(){
		$('nav').toggle();

	});
	
*/
};