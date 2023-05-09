import placeholder from "../../assets/images/PlaceholderImage.png";

interface News {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  dateTime: Date;
  author: string;
}

export const news: Array<News> = [
  {
    id: 1,
    imageUrl: placeholder,
    category: "Technology",
    title: "Compare Prices Find The Best Computer Accessory",
    dateTime: new Date("2023-04-25T12:00:00Z"),
    author: "Bertie Campbell",
  },
  {
    id: 2,
    imageUrl: placeholder,
    category: "General",
    title: "Simple Ways To Save Money When Buying A New computer",
    dateTime: new Date("2023-04-24T12:00:00Z"),
    author: "Caroline Parsons",
  },
  {
    id: 3,
    imageUrl: placeholder,
    category: "Sports",
    title:
      "A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Dollars Every Time",
    dateTime: new Date("2023-04-21T12:00:00Z"),
    author: "Jim Gonzalez",
  },
  {
    id: 4,
    imageUrl: placeholder,
    category: "Health",
    title: "Compare Prices Find The Best Computer Accessory",
    dateTime: new Date("2023-04-28T12:00:00Z"),
    author: "John Doe",
  },
  {
    id: 5,
    imageUrl: placeholder,
    category: "Science",
    title: "Maintain Your Pc S Performance With Pc Programs",
    dateTime: new Date("2023-04-09T12:00:00Z"),
    author: "Jane Doe",
  },
  {
    id: 6,
    imageUrl: placeholder,
    category: "Business",
    title: "6 Powerful Tips To Creating Testimonials That Sell Your Products",
    dateTime: new Date("2023-04-15T12:00:00Z"),
    author: "Isaac Salazar",
  },
  {
    id: 7,
    imageUrl: placeholder,
    category: "Viral",
    title: "Download anything nowadays",
    dateTime: new Date("2023-04-13T12:00:00Z"),
    author: "Lou Fisher",
  },
  {
    id: 8,
    imageUrl: placeholder,
    category: "Technology",
    title: "Steps In Installing Rack Mount Lcd Monitors",
    dateTime: new Date("2023-03-14T19:00:00Z"),
    author: "Joe Hernandez",
  },
  {
    id: 9,
    imageUrl: placeholder,
    category: "Technology",
    title: "Going Wireless With Your Technology",
    dateTime: new Date("2023-02-21T17:30:00Z"),
    author: "Winnie Osbourne",
  },
  {
    id: 10,
    imageUrl: placeholder,
    category: "Native Ad",
    title:
      "This Is A Random Ad Put On The Page To Make It Look Like There Are Ads",
    dateTime: new Date("2023-04-14T10:15:00Z"),
    author: "Google",
  },
  {
    id: 11,
    imageUrl: placeholder,
    category: "Fun",
    title: "Look At News Products Ladies Like To Use On Their Nails",
    dateTime: new Date("2023-04-14T11:00:00Z"),
    author: "Some Woman",
  },
  {
    id: 12,
    imageUrl: placeholder,
    category: "Health",
    title: "How To Program 24/7 And Not Burn Out, Confirmed By DUMP Members",
    dateTime: new Date("2023-04-14T12:15:00Z"),
    author: "Mathew Mogue",
  },
  {
    id: 13,
    imageUrl: placeholder,
    category: "Fun",
    title:
      "I Love Throwing My Kids Birthday Parties, See How I Do It For Cheap",
    dateTime: new Date("2023-04-28T12:31:00Z"),
    author: "Karen Karensky",
  },
  {
    id: 14,
    imageUrl: placeholder,
    category: "Viral",
    title: "Man Accusses Tik Tok Of Stealing His Content, People Blame China",
    dateTime: new Date("2023-04-28T12:30:00Z"),
    author: "Susan Mom",
  },
  {
    id: 15,
    imageUrl: placeholder,
    category: "Health",
    title:
      "I Am Seriously Not Healthy Anymore, Like I Need Help This Instant But I Am Writing A Blog Instead",
    dateTime: new Date("2023-04-27T12:30:00Z"),
    author: "Susan Mom",
  },
];
