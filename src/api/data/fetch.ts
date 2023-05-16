import axios from "axios";

export async function fetchAllNews() {
  const url =
    "https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=df5df4e7b94145c484398ac69aa0a98f";
  try {
    const response = await axios.get(url);
    const allNews = response.data.articles;
    return allNews;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchAllSources() {
  const url =
    "https://newsapi.org/v2/top-headlines/sources?apiKey=df5df4e7b94145c484398ac69aa0a98f";
  try {
    const response = await axios.get(url);
    const allSources = response.data.sources;
    return allSources;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchNewsByCategory(category: string | null) {
  const url = `https://newsapi.org/v2/everything?sortBy=publishedAt&category=${category}&apiKey=df5df4e7b94145c484398ac69aa0a98f`;
  try {
    const response = await axios.get(url);
    const allNewsByCategory = response.data.articles;
    return allNewsByCategory;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchNewsBySearch(search: string | null) {
  const url = `https://newsapi.org/v2/everything?sortBy=publishedAt&=q${search}&searchIn=title&apiKey=df5df4e7b94145c484398ac69aa0a98f`;
  try {
    const response = await axios.get(url);
    const allNewsBySearch = response.data.articles;
    return allNewsBySearch;
  } catch (error) {
    console.log(error);
    return [];
  }
}
