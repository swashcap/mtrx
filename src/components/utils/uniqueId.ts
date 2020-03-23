let guid = 0;

export const uniqueId = (prefix: string = '') => `${prefix}${++guid}`;
