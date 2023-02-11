export interface InfoType {
  cardinfo: CardInfo;
  snippet: Snippet;
  statistics: Statistics;
}
export interface CardInfo {
  snippet: Snippet;
  statistics: Statistics;
}
export interface Snippet {
  publishedAt: string;
  title: string;
  thumbnails: Thumbnails;
}
export interface Thumbnails {
  medium: Medium;
}
export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface Statistics {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}
