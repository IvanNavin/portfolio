import IAM from '../../assets/img/iam-wb-1.png';
import { mobOrDescHandler } from '../../utils/mobOrDescHandler';

export default () => {
  const fluid = document.querySelector('#fluid');

  fluid.insertAdjacentHTML(
    'afterend',
    `
    <img src="${IAM}" alt="Ivan's head on the photo" usemap="iammap"/>
    <map name="iammap">
      <area shape="rect" coords="0,0,0,0" href="index.html" alt="Ivan's head on the photo">
    </map>
  `,
  );
  mobOrDescHandler();
};
