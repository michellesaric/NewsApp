import { news } from "../data/data";
import { sortByDateAndTime } from "./helper";

interface MainNews {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  author: string;
}

interface LatestNews {
  id: number;
  title: string;
  dateTime: Date;
}

const sortedNews = sortByDateAndTime(news);

export const getAllNews = () => {
  const newsList: MainNews[] = [];

  sortedNews.forEach((news) => {
    const temporaryNews: MainNews = {
      id: news.id,
      imageUrl: news.imageUrl,
      category: news.category,
      title: news.title,
      author: news.author,
    };

    newsList.push(temporaryNews);
  });

  return newsList;
};

export const getNewsByCategory = (category: string | null) => {
  const newsList = getAllNews();
  return category === "Home" || category === ""
    ? newsList
    : newsList.filter((news) => news.category === category);
};

export const getLatestNews = () => {
  const newsList: LatestNews[] = [];

  sortedNews.forEach((news) => {
    const temporaryNews: LatestNews = {
      id: news.id,
      title: news.title,
      dateTime: news.dateTime,
    };

    newsList.push(temporaryNews);
  });

  return newsList;
};
