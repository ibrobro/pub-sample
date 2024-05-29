

export function numToCurrString (
  x: number,
  countryCode: string,
  currencyCode: string
) {
  return x.toLocaleString(countryCode, {
    style: 'currency',
    currency: currencyCode
  });

}