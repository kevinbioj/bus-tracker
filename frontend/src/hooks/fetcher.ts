const fetcher = <T>(path: string) =>
  fetch(path).then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status} - Could not fetch data.`);
    return response.json() as Promise<T>;
  });

export default fetcher;
