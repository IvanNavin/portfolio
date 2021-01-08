window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

const navigation = () => {
    const links = document.querySelectorAll('[data-href]');

    links.forEach(link => link.addEventListener('click', function () {
        const linkName = this.dataset.href;
        const navigationWrapper = document.querySelector('[data-nav-wrapper]');

        navigationWrapper.setAttribute('data-nav-wrapper', linkName);
    }));
};

class formManager {
    constructor() {
        this.focusCls = 'fld-focus';
        this.completeCls = 'fld-complete'
        this.fields = document.querySelectorAll('[data-fld]')

        this.init();
    }

    fldFocus (fld) {
        const wrap = fld.closest('[data-form-block]');

        if(fld.value === '') {
            wrap.classList.remove(this.completeCls);
        }

        wrap.classList.add(this.focusCls);
    }

    fldBlur (fld) {
        const wrap = fld.closest('[data-form-block]');

        wrap.classList.remove(this.focusCls);

        if(fld.value !== '') {
            wrap.classList.add(this.completeCls);
        } else {
            wrap.classList.remove(this.completeCls);
        }
    }

    init () {
        if(this.fields.length) {
            this.fields.forEach(fld => {
                fld.addEventListener('focus', () => {
                    this.fldFocus(fld);
                });
            });

            this.fields.forEach(fld => {
                fld.addEventListener('blur', () => {
                    this.fldBlur(fld);
                });
            });

            this.fields.forEach(fld => this.fldBlur(fld));
        }
    }
};

const sendForm = () => {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_p87kxia', 'template_s5whvsc', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.error('FAILED...', error);
            });
    });
}

const validator = () => {

}

const buttons = {
    0: {
        firstName: 'Привет!',
        secondName: 'Обо мне',
        dataHref: 'about'
    },
    1: {
        firstName: 'Меня',
        secondName: 'Мои работы',
        dataHref: 'my-works'
    },
    2: {
        firstName: 'зовут',
        secondName: 'контаты',
        dataHref: 'contacts'
    },
    3: {
        firstName: 'Иван',
        secondName: 'Доклады',
        dataHref: 'performances'
    },
};

const facts = new Map ([
        [0, 'Не курю'],
        [1, 'Не пью алкоголь'],
        [2, 'Пью много чая'],
        [3, 'Мне нравится интерьерный дизайн'],
        [4, 'Играю на гитаре'],
        [5, 'Люблю готовить мясо'],
        [6, 'Люблю свою семью'],
        [7, 'Люблю путешествовать'],
        [8, 'Не пью кофе'],
        [9, 'Весёлый'],
        [10, 'Общительный'],
        [11, 'Люблю смотреть сериалы'],
        [12, 'Коммуникабельный'],
        [13, 'Оптимист']
    ]);

document.addEventListener('DOMContentLoaded', function () {

    emailjs.init('user_zvgv0ouqyrlxggmY5RXt7');

    const mainPage = document.querySelector('.main-page');
    const navMenu = document.querySelector('[data-nav-menu]')
    const factsWrapper = document.querySelector('[data-facts]');
    let i = 0;

    if (mobileAndTabletCheck()) {
        document.body.classList.add('mobile-platform');
        mainPage.addEventListener('click', function () {
            this.classList.toggle('tapped')
        });
    }

    Object.values(buttons).forEach(button => {
        const html = `
            <button data-href="${button.dataHref}"><span data-name-button="${button.firstName}" data-second-name-button="${button.secondName}"></span></button>
        `;

        navMenu.insertAdjacentHTML( 'beforeend', html );
    })

    while (i < 4) {
        const random = Math.floor(Math.random() * facts.size);

        if (facts.has(random)) {
            const randomFact = facts.get(random);
            const li = document.createElement('li');

            li.textContent = randomFact;
            factsWrapper.append(li);
            facts.delete(random);
            i++
        }
    }

    navigation();
    new formManager();
    sendForm();
});
