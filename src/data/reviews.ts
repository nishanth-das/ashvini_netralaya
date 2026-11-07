export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  bengaliComment?: string;
  source: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "review-1",
    author: "SAJAL DEBBARMA",
    rating: 5,
    date: "Google Review",
    comment:
      "I had visited Ashvini Netralaya for my Son’s eye checkup and I must say that, Finally We the people of Tripura get a quality Eye Hospital which is equipped with all needed modern technologies. Neat and clean, All the staff are polite and friendly. Caring Doctors, Fast service.",
    bengaliComment:
      "অবশেষে আমরা ত্রিপুরার মানুষ একটি মানসম্পন্ন চক্ষু হাসপাতাল পেয়েছি যা সমস্ত প্রয়োজনীয় আধুনিক প্রযুক্তিতে সজ্জিত। ঝরঝরে এবং পরিষ্কার, সমস্ত কর্মীরা বিনয়ী এবং বন্ধুত্বপূর্ণ।",
    source: "Google",
  },
  {
    id: "review-2",
    author: "Manik Das",
    rating: 5,
    date: "Google Review",
    comment:
      "Excellent experience for all arrangements. The doctors explained the condition clearly and the hospital team made the visit comfortable and completely reassuring.",
    source: "Google",
  },
  {
    id: "review-3",
    author: "Papiya Dey Sen",
    rating: 5,
    date: "Google Review",
    comment:
      "It was a really nice experience. Modern diagnostic facilities, zero waiting hassle, and compassionate care by Tripura's best ophthalmologists.",
    source: "Google",
  },
  {
    id: "review-4",
    author: "Litan Das",
    rating: 5,
    date: "Google Review",
    comment:
      "Very nice service. The surgery care and post-operative follow-up were smooth, transparent, and high quality. Highly recommended.",
    source: "Google",
  },
  {
    id: "review-5",
    author: "Milan Gupta",
    rating: 5,
    date: "Google Review",
    comment:
      "Excellent hospital for superspeciality eye care in Agartala. World-class treatment without having to travel outside the state.",
    source: "Google",
  },
];
