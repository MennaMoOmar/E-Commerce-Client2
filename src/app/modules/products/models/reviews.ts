import { CommentRequestDTO } from "./comment";

export interface ReviewRequestDTO {
  UserId: String;
  Rating: String;
  Comment: Array<CommentRequestDTO>;
}
