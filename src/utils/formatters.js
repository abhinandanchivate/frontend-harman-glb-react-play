export const formatCurrency = (amount, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: currency === 'JPY' ? 0 : 2,
  }).format(amount);
};

export const formatDate = (date, locale) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const formatNumber = (number, locale) => {
  return new Intl.NumberFormat(locale).format(number);
};

export const getDirection = (locale) => {
  const rtlLocales = ['ar', 'he', 'fa', 'ur'];
  const langCode = locale.split('-')[0];
  return rtlLocales.includes(langCode) ? 'rtl' : 'ltr';
};

export const getCurrencyForLocale = (locale) => {
  const currencyMap = {
    'en-US': 'USD',
    'ar-AE': 'AED',
    'zh-CN': 'CNY',
    'de-DE': 'EUR',
    'he-IL': 'ILS',
    'ja-JP': 'JPY',
  };
  return currencyMap[locale] || 'USD';
};
