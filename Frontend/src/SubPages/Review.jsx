import React from "react";
import ReviewCard from "../Components/ReviewCard";

function Review() {
  const reviews = [
    {
      clientName: "Swad Chinese",
      service: "Website Development",
      overallExperience: { rating: 5, label: "Very smooth" },
      satisfaction: { rating: 5, label: "Very satisfied" },
      likedMost: "Design",
      reviewText: "It was very easy to communicate.",
      recommend: "Yes",
    },
    {
      clientName: "TradeFit Ak",
      service: "Website Development",
      overallExperience: { rating: 5, label: "Very smooth" },
      satisfaction: { rating: 5, label: "Very satisfied" },
      likedMost: "",
      reviewText: "",
      recommend: "Yes",
    },
    {
      clientName: "Swaleha Amir Mulla",
      service: "Website Development",
      overallExperience: { rating: 5, label: "Very smooth" },
      satisfaction: { rating: 5, label: "Very satisfied" },
      likedMost: "The product",
      reviewText:
        "We had good interaction related to the project and we are very satisfied with the product.",
      recommend: "Yes",
    },
    {
      clientName: "Arpita Khade",
      service: "App Development",
      overallExperience: { rating: 5, label: "Very smooth" },
      satisfaction: { rating: 5, label: "Very satisfied" },
      likedMost: "Clear understanding communication with customer",
      reviewText:
        "Helped in every circumstance and solved my doubts.",
      recommend: "Yes",
    },
    {
      clientName: "Shridhar Shinde",
      service: "Website Development",
      overallExperience: { rating: 5, label: "Very smooth" },
      satisfaction: { rating: 5, label: "Very satisfied" },
      likedMost: "Editing part",
      reviewText: "Great work. Had a good experience.",
      recommend: "Yes",
    },
    {
      clientName: "RoopDarshan Sunil Shinde",
      service: "Website Development",
      overallExperience: { rating: 5, label: "Very smooth" },
      satisfaction: { rating: 5, label: "Very satisfied" },
      likedMost: "Every change was made as per our instructions",
      reviewText: "Excellent.",
      recommend: "Yes",
    },
  ];

  // Split reviews into two groups
  const firstRow = reviews.slice(0, 3);
  const secondRow = reviews.slice(3, 6);

  return (
    <div className="min-h-screen w-screen bg-black relative overflow-hidden">
      {/* Header */}
      <div className="m-14 mt-[20vh]">
        <div className="inline-flex items-center gap-2 text-[#e0e7ef] bg-[#1D79D3] px-4 py-2 rounded-full shadow-lg shadow-[#1D79D3]/20">
          <i className="ri-discuss-line"></i>
          <span className="text-sm font-medium">Review</span>
        </div>

        <div className="text-white md:text-5xl text-3xl review-header py-4">
          <h3>Our Customer Reviews</h3>
        </div>
      </div>

      {/* First 3 Reviews */}
      <div className="flex justify-center gap-8 flex-wrap px-6 mb-6 md:-ml-32">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      {/* Second 3 Reviews (Different Styling Section) */}
      <div className="flex justify-center gap-8 flex-wrap px-6 pb-20 opacity-90 md:-mr-32">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}

export default Review;