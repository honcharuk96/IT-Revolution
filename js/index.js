  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 15,
                    },
                        notEmpty: {
                        message: 'Введіть коректні дані'
                    }
                }
            },
             date: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Введіть коректну дату народження'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Введіть свою email адресу'
                    },
                    emailAddress: {
                        message: 'Будь ласка, введіть дійсну email адресу'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Введіть свій номер телефону'
                    },
                    phone: {
                        country: 'UA',
                        message: 'Будь ласка, введіть дійсний номер телефону'
                    }
                }
            },
            group_un: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Введіть коректні дані'
                    }
                }
            },
            team_name: {
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Введіть коректні дані'
                    }
                }
            },
            university: {
                validators: {
                     stringLength: {
                        min: 3,
                    },
                    notEmpty: {
                        message: 'Будь ласка, введіть вірно свій навчальний заклад'
                    }
                }
            },
            category: {
                validators: {
                    notEmpty: {
                        message: 'Будь ласка, виберіть категорію'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Будь ласка, виберіть місто проживання'
                    }
                }
            }
         }
    })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});