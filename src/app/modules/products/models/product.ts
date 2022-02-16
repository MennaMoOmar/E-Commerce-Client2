import { ReviewRequestDTO } from "./reviews";

export interface ProductRequestDTO {
  Id: String,
  Name: String,
  Price: Number,
  Code: Number,
  Description: String,
  SearchText: String,
  CategoryId: String,
  Discount: Number,
  Rate: Number,
  Status: Number,
  Reviews: Array<ReviewRequestDTO>,
}
