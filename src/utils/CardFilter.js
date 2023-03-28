export default function cardFilter(dataSearch, dataCards) {
  let { name: key, checkbox } = dataSearch;
  key = key.toLowerCase().split(' ');

  function includesKeys(name) {
    return key.reduce((prev, curr) => prev && name.toLowerCase().includes(curr), true)
  }

  return checkbox
    ?
    dataCards.filter(card => {
      const { nameRU, duration } = card;

      return includesKeys(nameRU) && duration < 40;
    })
    :
    dataCards.filter(card => includesKeys(card.nameRU));
}