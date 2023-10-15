export const prettierStr = (str: string): string => {
  const strUppercase = str.charAt(0).toUpperCase() + str.slice(1)
  return str.endsWith('.') ? strUppercase : strUppercase + '.'
}
