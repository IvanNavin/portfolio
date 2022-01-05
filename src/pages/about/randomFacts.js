const randomFacts = (factsArray) => {
  const factsWrapper = document.querySelector('[data-facts]');
  const facts = new Map(factsArray);
  let i = 0;
  factsWrapper.innerHTML = '';
  while (i < 4) {
    const random = Math.floor(Math.random() * facts.size);

    if (facts.has(random)) {
      const randomFact = facts.get(random);
      const li = document.createElement('li');

      li.textContent = randomFact;
      factsWrapper.append(li);
      facts.delete(random);
      i++;
    }
  }
};

export default randomFacts;
