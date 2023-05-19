interface MainNews {
  id: number;
  imageUrl: string;
  newsUrl: string;
  category: string;
  title: string;
  author: string;
}
export interface NewsCardProps {
  news: MainNews;
}
