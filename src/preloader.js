const preloader = () => {
  const allElements = document.querySelectorAll('img,video');
  const progress = document.querySelector('[data-progress]');
  const allLength = allElements.length;
  let percent = 0;
  let loaded = 1;

  const handleEvent = () => {
    percent = Math.floor((++loaded / allLength) * 100);
    progress.textContent = `${percent}%`;
  };

  Object.values(allElements).forEach((element) => element.addEventListener('load', handleEvent, true));
};

export default preloader;
