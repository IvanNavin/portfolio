(function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const button = this.querySelector('button[type="submit"]');

        const templateParams = {
            from_name: this.name.value,
            message: this.message.value
        };

        const successHandler = _ => {
            button.classList.add('sent');
        };

        const errorHandler = error => {
            button.classList.add('error');
            console.error('FAILED...', error)
        };

        const finallyHandler = _ => button.classList.remove('send', 'load');

        if (!validator(this)) {
            return false;
        } else {
            button.classList.add('send');

            setTimeout(_ => {
                if (button.classList.contains('send')) {
                    button.classList.add('load');
                }
            }, 1000);

            emailjs.send(
                'service_p87kxia',
                'template_s5whvsc',
                templateParams,
                'user_zvgv0ouqyrlxggmY5RXt7'
            ).then(successHandler, errorHandler)
                .finally(finallyHandler);
        }
    });
})();