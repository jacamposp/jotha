function sendEmail() {
    var params = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
    };

    const serviceID = 'service_usi4sqd';
    const templateID = 'template_fh16k5o';

    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (err) {
            console.log('FAILED...', err);
        });
}
