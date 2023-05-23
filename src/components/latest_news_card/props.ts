interface LatestNews {
  id: number;
  title: string;
  newsUrl: string;
  publishedAt: Date;
}

export interface LatestNewsCardProps {
  news: LatestNews;
}
