export default async function cardFilter(data, dataCards) {
  const { name: key, checkbox } = data;

  const searchCards = checkbox
    ?
    dataCards.filter(card => {
      const { nameRU, duration } = card;

      return nameRU.indexOf(key) !== -1 && duration < 40;
    })
    :
    dataCards.filter(card => card.nameRU.indexOf(key) !== -1);
  
  if(!searchCards.length) {
    throw new Error('Ничего не найдено');
  }

  return searchCards
}