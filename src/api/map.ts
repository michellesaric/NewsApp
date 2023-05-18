import {
  fetchAllNews,
  fetchAllNewsByPage,
  fetchAllSources,
  fetchNewsByCategory,
  fetchNewsBySearch,
  fetchNewsBySearchAndCategory,
} from "./fetch";
import { v4 as uuidv4 } from "uuid";

interface MainNews {
  id: number;
  imageUrl: string;
  newsUrl: string;
  category: string;
  title: string;
  author: string;
  source: string;
}

interface LatestNews {
  id: number;
  title: string;
  publishedAt: Date;
}

interface Sources {
  name: string;
  category: string;
}

export async function mapSourcesData() {
  const allSources = await fetchAllSources();
  const sourceList: Sources[] = allSources.map((sources: any) => {
    return {
      name: sources.name,
      category: sources.category,
    };
  });
  return sourceList;
}

export async function mapNewsData() {
  const storedIds = localStorage.getItem("newsIds");
  const previousIds = storedIds ? JSON.parse(storedIds) : {};

  const allNews = await fetchAllNews();
  const sourceList = await mapSourcesData();

  const newsList: MainNews[] = allNews.map((news: any) => {
    const newsId = previousIds[news.title] || uuidv4();

    previousIds[news.title] = newsId;
    localStorage.setItem("newsIds", JSON.stringify(previousIds));

    return {
      id: newsId,
      imageUrl: news.urlToImage,
      newsUrl: news.url,
      category:
        sourceList.find((source) => source.name === news.source.name)
          ?.category || "Viral",
      title: news.title,
      author: news.author,
      source: news.source.name,
    };
  });
  return newsList;
}

export async function mapLatestNewsData(pageNumber: number) {
  const allLatestNews = await fetchAllNewsByPage(pageNumber);
  const newsList: LatestNews[] = allLatestNews.map((news: any) => {
    return {
      id: uuidv4(),
      title: news.title,
      publishedAt: new Date(news.publishedAt),
    };
  });
  return newsList;
}

export async function mapNewsDataByCategory(category: string | null) {
  const storedIds = localStorage.getItem("newsIds");
  const previousIds = storedIds ? JSON.parse(storedIds) : {};

  const allNewsByCategory = await fetchNewsByCategory(category);

  const newsList: MainNews[] = allNewsByCategory.map((news: any) => {
    const newsId = previousIds[news.title] || uuidv4();

    previousIds[news.title] = newsId;
    localStorage.setItem("newsIds", JSON.stringify(previousIds));
    return {
      id: newsId,
      imageUrl: news.urlToImage,
      newsUrl: news.url,
      category: category,
      title: news.title,
      author: news.author,
    };
  });
  return newsList;
}

export async function mapNewsDataBySearch(search: string | null) {
  const storedIds = localStorage.getItem("newsIds");
  const previousIds = storedIds ? JSON.parse(storedIds) : {};

  const allNewsByCategory = await fetchNewsBySearch(search);
  const sourceList = await mapSourcesData();

  const newsList: MainNews[] = allNewsByCategory.map((news: any) => {
    const newsId = previousIds[news.title] || uuidv4();

    previousIds[news.title] = newsId;
    localStorage.setItem("newsIds", JSON.stringify(previousIds));
    return {
      id: newsId,
      imageUrl: news.urlToImage,
      newsUrl: news.url,
      category:
        sourceList.find((source) => source.name === news.source.name)
          ?.category || "Viral",
      title: news.title,
      author: news.author,
    };
  });
  return newsList;
}

export async function mapNewsDataBySearchAndCategory(
  search: string | null,
  category: string | null
) {
  const storedIds = localStorage.getItem("newsIds");
  const previousIds = storedIds ? JSON.parse(storedIds) : {};

  const allNewsByCategory = await fetchNewsBySearchAndCategory(
    search,
    category
  );

  const newsList: MainNews[] = allNewsByCategory.map((news: any) => {
    const newsId = previousIds[news.title] || uuidv4();

    previousIds[news.title] = newsId;
    localStorage.setItem("newsIds", JSON.stringify(previousIds));
    return {
      id: newsId,
      imageUrl: news.urlToImage,
      newsUrl: news.url,
      category: category,
      title: news.title,
      author: news.author,
    };
  });
  return newsList;
}
