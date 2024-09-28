export interface KeyValuePair<TKey extends keyof string, TValue> {
  key: TKey;
  value: TValue;
}
