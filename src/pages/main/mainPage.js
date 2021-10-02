import IAM from '../../assets/img/iam-wb-1.png';
import { mobOrDescHandler } from '../../utils/mobOrDescHandler';

export default () => {
  const fluid = document.querySelector('#fluid');

  fluid.insertAdjacentHTML('afterend', `<img src="${IAM}" alt="Ivan's head on the photo"/>`);
  mobOrDescHandler();
};
