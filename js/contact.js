(function ($) {
    $(document).ready(function () {
        $('#contact_form').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                first_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please supply your first name'
                        }
                    }
                },
                last_name: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please supply your last name'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Please supply your email address'
                        },
                        emailAddress: {
                            message: 'Please supply a valid email address'
                        }
                    }
                },
                phone: {
                    validators: {
                        stringLength: {
                            min: 10,
                            max: 12
                        },
                        notEmpty: {
                            message: 'Please supply your phone number'
                        },
                    }
                },
                subject: {
                    validators: {
                        stringLength: {
                            min: 2,
                        },
                        notEmpty: {
                            message: 'Please supply your subject'
                        }
                    }
                },
                comment: {
                    validators: {
                        stringLength: {
                            min: 10,
                            max: 400,
                            message: 'Please enter at least 10 characters and no more than 400'
                        },
                        notEmpty: {
                            message: 'Please supply a description of your project'
                        }
                    }
                }
            }
        }).on('success.form.bv', function (e) {
            $('#success_message').slideDown({opacity: "show"}, "slow");// Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.get($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });
    });

    $(document).on('submit','.myForm',function(){
        emailjs.send("default_service","my_tamplate",{
            firstName: $('#contactFirstName').val(),
            lastName: $('#contactLastName').val(),
            from:$('#contactEmail').val(),
            subject:$('#contactSubject').val(),
            content:$('#contactComment').val(),
            phone:$('#contactPhone').val()
        })
            .then(
                function(response) {
                    console.log("SUCCESS", response);
                },
                function(error) {
                    console.log("FAILED", error);
                }
            );
    });
}(jQuery));

