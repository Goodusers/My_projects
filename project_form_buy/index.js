$(function(){

	$('.form_button_buy').css({'width':'100%','height':'100vh'});
	$('content').slideUp();

	function active_script(){
		$('.form_button_buy > button').click(function( event ){
			event.preventDefault();
			$('.form_button_buy').slideUp(2000);
			$('content').css({'width':'100%','height':'100%', 'background-color':'rgb(128, 0, 128, 0.8)'});
			$('content').slideDown(2000);
		});
	}
	$('content').click(function( event ){
	if(!$(event.target).closest('form').length){
			$('content').slideUp();
			$('.form_button_buy').slideDown();
		}
	});
	active_script();
	// $("#frm").validate();	
});