export interface IJoke {
  type: string;
  value: Value;
}

export interface Value {
  id: number;
  joke: string;
  categories: string[];
}
