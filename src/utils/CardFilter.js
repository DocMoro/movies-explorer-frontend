export default async function cardFilter(data, dataCards) {
  const { name: key, checkbox } = data;

  return checkbox
    ?
    dataCards.filter(card => {
      const { nameRU, duration } = card;

      return nameRU.indexOf(key) !== -1 && duration < 40;
    })
    :
    dataCards.filter(card => card.nameRU.indexOf(key) !== -1);
}