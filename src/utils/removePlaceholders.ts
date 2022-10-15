const removePlaceholders = (valueWithPlaceholders: string): string =>
  valueWithPlaceholders.replaceAll("X", "");

export { removePlaceholders };
