import { btn } from '../btn';

const ru = {
  text: 'Просто написал игру Сапер.',
};
const ua = {
  text: 'Просто написав гру Сапер.',
};
const en = {
  text: 'Just made the Miner game.',
};

const minerText = { ru, ua, en };

export default () => {
  const wrapper = document.querySelector('.miner');
  const paragraph = wrapper.querySelector('p');
  const { local = 'en' } = window;
  const { text } = minerText[local];

  paragraph.innerText = text;
  btn(wrapper);
};
