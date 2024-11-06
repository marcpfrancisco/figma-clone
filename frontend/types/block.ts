export interface BlockWithCategory {
  get: (key: 'category') => string;
  set: (key: 'category', value: { id: string; label: string }) => void;
}
