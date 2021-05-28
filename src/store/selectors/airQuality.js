export const selectByCountry = state => countryName => {
  if (!countryName || countryName.length < 2) {
    return state.airQuality.items;
  }

  return state.airQuality.items.filter(item =>
    item.country.includes(countryName),
  );
};

// i18n - ir_EN
// l10n - en / ru / ua
