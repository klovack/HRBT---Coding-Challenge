export function capitalize([ first, ...rest ]: string) {
  return [ first.toLocaleUpperCase(), ...rest ].join('');
}