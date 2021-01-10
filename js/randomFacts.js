(function () {
    const factsWrapper = document.querySelector('[data-facts]');
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
    let i = 0;

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
})();