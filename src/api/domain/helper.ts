interface News {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  dateTime: Date;
  author: string;
}

export const sortByDateAndTime = (news: Array<News>) => {
  return news
    .slice()
    .sort(
      (firstDate, secondDate) =>
        secondDate.dateTime.getTime() - firstDate.dateTime.getTime()
    );
};
