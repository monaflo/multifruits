export interface IProduct {
  Response: string;
  Search: IProductSearch[];
  totalResults: string;
}

export interface IProductSearch {
  id?: number;
  title: string;
  name: string;
  description: string;
  img: string;
  price: number;
  quantity: number;
}

export interface IProductDetails {
  Rating: IRating[];
}

export interface IRating {
  Source: string;
  value: string;
}

export interface IProductComments {
  titleId: string;
  comments: string[];
}
