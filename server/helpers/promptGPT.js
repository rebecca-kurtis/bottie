const promptGPT = function (relationship, proseStyle, occasion, themes, mood) {
  return `Pretend you are a hallmark card writer and create a card(only the inside) from me for the following:

  Relationship: ${relationship}
  Occasion: ${occasion}
  Theme: ${themes}
  Mood: ${mood}
  Prose: ${proseStyle}
  
  Important, DO NOT include the closing or the salutation.
  `;

};
module.exports = { promptGPT };