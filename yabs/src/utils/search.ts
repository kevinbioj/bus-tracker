type Searchable = { id: string | number };

export function linearSearch<T extends Searchable>(items: T[], id: string | number) {
  return items.find((item) => item.id === id) ?? null;
}

export function linearSearchSort<T extends Searchable>(a: T, b: T) {
  return 0;
}

export function binarySearch<T extends Searchable>(items: T[], id: string | number) {
  return recursiveBinarySearch(items, id, 0, items.length - 1);
}

export function binarySearchSort<T extends Searchable>(a: T, b: T) {
  return String(a.id).localeCompare(b.id.toString());
}

export const search = binarySearch;
export const searchSort = binarySearchSort;

function recursiveBinarySearch<T extends Searchable>(items: T[], id: string | number, start: number, end: number) {
  if (start > end) return null;
  const middleIndex = Math.floor(start + (end - start) / 2);
  const comparison = String(id).localeCompare(items[middleIndex].id.toString());
  if (comparison > 0) return recursiveBinarySearch(items, id, middleIndex + 1, end);
  if (comparison < 0) return recursiveBinarySearch(items, id, start, middleIndex - 1);
  return items[middleIndex];
}
