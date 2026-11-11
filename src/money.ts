export type Line = { amount: number };

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  // ISO 4217 defines a different minor-unit exponent for each currency.
  // CLDR's currency data, exposed through Intl, includes all of those exponents.
  const { maximumFractionDigits } = new Intl.NumberFormat('en', {
    style: 'currency',
    currency,
  }).resolvedOptions();

  return sum.toFixed(maximumFractionDigits);
}
