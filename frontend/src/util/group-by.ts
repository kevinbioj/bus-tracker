export function groupBy<K extends string | number | symbol, V>(data: V[], fn: (data: V) => K): Map<K, V[]> {
  const grouped = new Map<K, V[]>();
  data.forEach((data) => {
    const key = fn(data);
    if (grouped.has(key)) grouped.get(key)!.push(data);
    else grouped.set(key, [data]);
  });
  return grouped;
}
