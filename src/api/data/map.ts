import {
  fetchAllNews,
  fetchAllSources,
  fetchNewsByCategory,
  fetchNewsBySearch,
} from "./fetch";

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
  const allNews = await fetchAllNews();
  const sourceList = await mapSourcesData();
  const newsList: MainNews[] = allNews.map((news: any) => {
    return {
      id: news.id,
      imageUrl: news.imageUrl,
      newsUrl: news.url,
      category: sourceList.find((source) => source.name === news.source.name)
        ?.category,
      title: news.title,
      author: news.author,
      source: news.source.name,
    };
  });
  return newsList;
}

export async function mapLatestNewsData() {
  const allLatestNews = await fetchAllNews();
  const newsList: LatestNews[] = allLatestNews.map((news: any) => {
    return {
      id: news.id,
      title: news.title,
      publishedAt: news.publishedAt,
    };
  });
  return newsList;
}

export async function mapNewsDataByCategory(category: string | null) {
  const allNewsByCategory = await fetchNewsByCategory(category);
  const newsList: MainNews[] = allNewsByCategory.map((news: any) => {
    return {
      id: news.id,
      imageUrl: news.imageUrl,
      newsUrl: news.url,
      category: news.category,
      title: news.title,
      author: news.author,
    };
  });
  return newsList;
}

export async function mapNewsDataBySearch(search: string | null) {
  const allNewsBySearch = await fetchNewsBySearch(search);
  const sourceList = await mapSourcesData();
  const newsList: MainNews[] = allNewsBySearch.map((news: any) => {
    return {
      id: news.id,
      imageUrl: news.imageUrl,
      category: sourceList.find((source) => source.name === news.source.name)
        ?.category,
      title: news.title,
      author: news.author,
    };
  });
  return newsList;
}
