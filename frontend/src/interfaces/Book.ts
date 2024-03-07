import { ApiResource } from "../utils/types";

export interface Book extends ApiResource {
  title?: string;
  description?: string;
  genre?: string;
  publicationDate?: string;
  author?: string[];
  reviews?: string[];
}
