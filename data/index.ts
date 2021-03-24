export interface Slide {
  primary: string;
  secondary: string;
}

export const slides: Slide[] = [
  {
    primary: "Why startups aren't hiring",
    secondary: "people like you",
  },
  {
    primary: "What the second slide",
    secondary: "says",
  },
];

export const finalSlide: Slide = {
  primary: "Thanks for listening",
  secondary: "🙏",
};
