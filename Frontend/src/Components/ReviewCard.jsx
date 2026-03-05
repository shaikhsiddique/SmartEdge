import React from "react";

function ReviewCard({ review }) {
  const renderStars = (rating) => {
    return (
      <div className="flex text-lg text-yellow-400 gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black/90 text-white max-w-sm w-full rounded-2xl border border-white/10 p-4 sm:p-5 hover:border-white/20 hover:shadow-lg transition duration-300 shadow-[#1D79D3] shadow-sm">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h3 className="text-base font-semibold truncate max-w-[60%]">@{review.clientName}</h3>
        <span className="text-xs bg-neutral-900 border border-neutral-700 px-2.5 py-1 rounded-full text-gray-300 shrink-0">
          {review.service}
        </span>
      </div>

      {/* Rating */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          {renderStars(review.overallExperience.rating)}
          <span className="text-sm text-gray-400">
            {review.overallExperience.rating}/5
          </span>
        </div>
        <span className="text-xs text-gray-500 shrink-0">
          {review.overallExperience.label}
        </span>
      </div>

      {/* Review */}
      <div className="bg-neutral-900/40 rounded-xl p-3 mb-4 border border-white/5">
        <p className="text-sm text-gray-200 leading-relaxed">
          <span className="text-yellow-400 mr-1">★</span>
          {review.likedMost && `${review.likedMost}. `}
          {review.reviewText || "Good experience working together."}
        </p>
      </div>

      {/* Recommendation */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs text-gray-500">Would recommend?</span>
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium shrink-0 ${
            review.recommend === "Yes"
              ? "bg-green-900/40 text-green-300 border border-green-700/40"
              : review.recommend === "No"
              ? "bg-red-900/40 text-red-300 border border-red-700/40"
              : "bg-yellow-900/40 text-yellow-300 border border-yellow-700/40"
          }`}
        >
          {review.recommend}
        </span>
      </div>
    </div>
  );
}

export default ReviewCard;