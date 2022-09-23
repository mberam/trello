

export interface Board {
  id: number;
  name: string;
  list: CardList[];
}

export interface CardList {
  id: number;
  name: string;
  cards: Card[]
}

export interface Card {
  id: number;
  name: string
  description: string;
}
