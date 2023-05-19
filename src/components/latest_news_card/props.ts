interface LatestNews {
  id: number;
  title: string;
  publishedAt: Date;
}

export interface LatestNewsCardProps {
  news: LatestNews;
}
