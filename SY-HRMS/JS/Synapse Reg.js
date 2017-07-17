$(function(){
	$("form[name='registration']").validate({
		rules:
		{
			firstname:
			{
				required: true,
			},
			lastname:
			{
				required: true,
			},
			
			email:
			{
				required: true,
				email: true
			},
			password:
			{
				required: true,
				minlength: 5
			},
			cpassword:
			{
				required: true,
				minlength: 5
			}
		},
		messages:
		{
			firstname:
			{
				required: "Firstname required, ",
			},
			
			lastname:
			{
				required: "Lastname required, ",
			},
			email:"Enter valid email id, ",
			password:
			{
				required:"Enter password, ",
				minlength: "Password length must of 5, "
			},
			cpassword:
			{
				required:"Re-enter your password, ",
				minlength: "Confirm Password length must of 5, "
			}
		},
/*
		submitHandler: function(form)
    	{
      		form.submit();
    	}*/

    	errorElement : 'span',
    	errorLabelContainer: '.error-div'

	});
});