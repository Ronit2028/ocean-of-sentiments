"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// Define a function to get the sentiment emoji and color based on the sentiment label
const getSentimentEmojiAndColor = (sentiment: string) => {
  switch (sentiment) {
    case "Positive":
      return { emoji: "😊", color: "text-green-500" };
    case "Negative":
      return { emoji: "😞", color: "text-red-500" };
    case "Neutral":
      return { emoji: "😐", color: "text-gray-500" };
    default:
      return { emoji: "", color: "text-black" };
  }
};

const GameDetails: React.FC = () => {
  const { id } = useParams(); // Get the current game ID from the URL
  const [game, setGame] = useState<any | null>(null);
  const [review, setReview] = useState<string>(""); // The review text entered by the user
  const [reviews, setReviews] = useState<any[]>([]); // Raw reviews for the game
  const [processedReviews, setProcessedReviews] = useState<any[]>([]); // Processed reviews for the game
  const [loadingProcessedReview, setLoadingProcessedReview] = useState<boolean>(false);
  const [processedReviewIds, setProcessedReviewIds] = useState<Set<string>>(new Set()); // Store processed review IDs
  const [rawReviewsIds, setRawReviewsIds] = useState<Set<string>>(new Set()); // Store raw review IDs

  useEffect(() => {
    if (id) {
      const fetchGameDetails = async () => {
        try {
          const response = await fetch(`/api/games/${id}`);
          const gameData = await response.json();
          setGame(gameData);

          // Fetch reviews for the game
          const reviewsResponse = await fetch(`/api/raw-reviews`);
          const reviewsData = await reviewsResponse.json();
          const filteredReviews = reviewsData.filter((review: any) => review.gameId === id);
          setReviews(filteredReviews);

          // Extract raw review IDs
          const rawReviewsIdsSet = new Set(filteredReviews.map((review: any) => review.id));
          setRawReviewsIds(rawReviewsIdsSet);

          // Fetch all processed reviews
          const processedReviewsResponse = await fetch(`/api/processed-reviews`);
          const processedReviewsData = await processedReviewsResponse.json();

          // Filter processed reviews to include only those related to the raw reviews of this game
          const filteredProcessedReviews = processedReviewsData.filter(
            (processedReview: any) => rawReviewsIdsSet.has(processedReview.rawReviewId)
          );
          setProcessedReviews(filteredProcessedReviews);
        } catch (error) {
          console.error("Error fetching game details:", error);
        }
      };

      fetchGameDetails();
    }
  }, [id]);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/raw-reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: review, gameId: id }),
      });
  
      if (response.ok) {
        const newReview = await response.json();
        setReviews((prevReviews) => [...prevReviews, newReview]);
  
        // Add the new review ID to processedReviewIds
        setProcessedReviewIds((prevIds) => new Set(prevIds).add(newReview.id));
  
        // Show loader while processed review is being fetched
        setLoadingProcessedReview(true);
  
        // Simulate a delay of at least 5 seconds before fetching processed reviews
        setTimeout(async () => {
          // Fetch and update raw reviews
          const reviewsResponse = await fetch(`/api/raw-reviews`);
          const reviewsData = await reviewsResponse.json();
          const filteredReviews = reviewsData.filter((review: any) => review.gameId === id);
          setReviews(filteredReviews);
  
          // Extract raw review IDs
          const rawReviewsIdsSet = new Set(filteredReviews.map((review: any) => review.id));
          setRawReviewsIds(rawReviewsIdsSet);
  
          // Fetch processed reviews and filter based on raw reviews
          const processedReviewsResponse = await fetch(`/api/processed-reviews`);
          const processedReviewsData = await processedReviewsResponse.json();
  
          const filteredProcessedReviews = processedReviewsData.filter(
            (processedReview: any) => rawReviewsIdsSet.has(processedReview.rawReviewId)
          );
  
          setProcessedReviews(filteredProcessedReviews);
  
          // Hide loader after fetching processed reviews
          setLoadingProcessedReview(false);
        }, 5000); // 5000 milliseconds = 5 seconds
  
        setReview(""); // Clear the textarea
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-4xl font-bold">{game.name}</h1>
      <img
        src={game.image}
        alt={game.name}
        className="w-full h-96 object-cover rounded my-4"
      />
      <p className="text-lg">{game.description}</p>
      <p className="text-sm text-gray-500">Genre: {game.genre}</p>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Add a Review</h2>
        <form onSubmit={handleReviewSubmit} className="mt-4 bg-black text-white">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={4}
            className="w-full border rounded p-2 bg-black text-white"
            placeholder="Write your review here..."
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit Review
          </button>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-5">Our  Reviews</h2>

        {/* Show loading indicator (spinner) while processed review is being fetched */}
        {loadingProcessedReview ? (
          <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : processedReviews.length > 0 ? (
          processedReviews.map((processedReview) => {
            // Get sentiment emoji and color
            const { emoji, color } = getSentimentEmojiAndColor(processedReview.sentimentLabel);

            return (
              <div key={processedReview.id} className=" py-4 border rounded-md p-5 my-3">
                <div className="flex items-center mb-4 gap-4"> 
                <img src="https://i.pinimg.com/736x/f2/09/9a/f2099ab7aa48240b8da2b8e618068023.jpg" alt="" className="w-20 h-20 rounded-full bg-cover bg-gray-100 mb-4" />
                <p className="text-xl font-bold">Guest User</p>
                </div>
                 <p className="text-lg mb-5">{reviews.find((r: any) => r.id === processedReview.rawReviewId)?.content}</p>
                <div className="flex flex-wrap gap-2 justify-between"><p><strong>Sentiment: </strong><span className={`font-semibold ${color}`}>{emoji} {processedReview.sentimentLabel}</span></p>
                <p><strong>Score: </strong>{processedReview.sentimentScore}</p>
                <p><strong>Keywords: </strong>{processedReview.keywords.join(', ')}</p></div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">No processed reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default GameDetails;
