$(function(){
	$("form[name='login']").validate({
		rules:
		{
			username:
			{
				required: true,
				text: true
			},
			password:
			{
				required: true,
				minlength: 5
			}
		},
		messages:
		{
			name:"Enter valid email id",
			password:
			{
				required:"Enter password",
				
			}
		},
    	errorElement : 'span',
    	errorLabelContainer: '.error-div'

	});
});