export default async function cardFilter(dataSearch, dataCards) {
  let { name: key, checkbox } = dataSearch;
  key = key.toLowerCase();

  return checkbox
    ?
    dataCards.filter(card => {
      const { nameRU, duration } = card;

      return nameRU.toLowerCase().indexOf(key) !== -1 && duration < 40;
    })
    :
    dataCards.filter(card => card.nameRU.toLowerCase().indexOf(key) !== -1);
}