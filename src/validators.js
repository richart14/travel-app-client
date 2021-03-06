export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
  value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value =>
  value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
};
export const isEmail = value => {
  // eslint-disable-next-line
  const re = new RegExp('[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}','i');
  return re.test(value) ? undefined : `${value} is not an email format`;
};
export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Does not match';

