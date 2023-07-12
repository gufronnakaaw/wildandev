function chunk<T>(arr: Array<T>, size: number): Array<T[]> {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}

export default chunk;
