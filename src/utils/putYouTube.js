export const putYouTubeAfterEl = (el, path) => {
  const img = document.createElement('iframe');
  img.src = path;
  el.insertAdjacentHTML(
    'afterend',
    `<iframe
            width="560"
            height="315"
            src="${path}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen=""
          />`,
  );
};
