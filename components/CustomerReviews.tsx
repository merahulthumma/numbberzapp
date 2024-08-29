import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

interface Review {
  id: number;
  name: string;
  handle: string;
  comment: string;
  rating: number;
}

const CustomerReviews: React.FC = () => {
  const [activeReview, setActiveReview] = useState<number>(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Ganesh Ayyanki",
      handle: "@ganesh_a",
      comment:
        "I'm with Numbers Insights for more than two years. Here I wanna say about @iteesha she provided me with some great tax advice. She's friendly, helpful, clear to the point. Always responsive and supportive and offer a good advice at reasonable rates. It's been excellent working with you.",
      rating: 5,
    },
    {
      id: 2,
      name: "Divya Teja Reddy Thumma",
      handle: "@divya_trt",
      comment:
        "The staff were very friendly, responsive, and helpful. They gave detailed and specific information when I asked. I highly recommend to go and let's get your tax returns done.",
      rating: 4,
    },
    {
      id: 3,
      name: "Bhargavi Matam",
      handle: "@bhargavi_m",
      comment: "Awesome experience. Great support and work. Thank you",
      rating: 5,
    },
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="customer-reviews">
      <h2>What Our Customers Say</h2>
      <div className="review-carousel">
        <button className="nav-button prev" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <ReviewCard review={reviews[activeReview]} />
        <button className="nav-button next" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <div className="review-dots">
        {reviews.map((review, index) => (
          <span
            key={review.id}
            className={`dot ${index === activeReview ? "active" : ""}`}
            onClick={() => setActiveReview(index)}
          ></span>
        ))}
      </div>
      <style jsx>{`
        .customer-reviews {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
          color: #fff;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .customer-reviews::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0) 80%
          );
          animation: rotate 20s linear infinite;
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        h2 {
          font-size: 3rem;
          margin-bottom: 2rem;
          color: #00ffff;
          text-transform: uppercase;
          letter-spacing: 3px;
          position: relative;
          display: inline-block;
        }
        h2::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background: #00ffff;
          box-shadow: 0 0 10px #00ffff;
        }
        .review-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }
        .nav-button {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          font-size: 2rem;
          color: #00ffff;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.7;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .nav-button:hover {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }
        .nav-button.prev {
          left: -25px;
        }
        .nav-button.next {
          right: -25px;
        }
        .review-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          position: relative;
          z-index: 1;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot.active {
          background-color: #00ffff;
          box-shadow: 0 0 10px #00ffff;
        }
      `}</style>
    </section>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <h3>{review.name}</h3>
        <span className="handle">{review.handle}</span>
      </div>
      <StarRating rating={review.rating} />
      <p className="comment">
        <FaQuoteLeft className="quote-icon left" />
        {review.comment}
        <FaQuoteRight className="quote-icon right" />
      </p>
      <div className="social-icons">
        <FaTwitter className="icon twitter" />
        <FaFacebook className="icon facebook" />
        <FaLinkedin className="icon linkedin" />
      </div>
      <style jsx>{`
        .review-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem;
          width: 100%;
          max-width: 600px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        .review-card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(0, 255, 255, 0.1) 0%,
            rgba(0, 255, 255, 0) 70%
          );
          animation: pulse 5s ease-out infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        .review-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }
        .review-header {
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
          color: #00ffff;
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
        }
        .handle {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .comment {
          font-size: 1rem;
          line-height: 1.6;
          margin: 1rem 0;
          position: relative;
          padding: 0 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          z-index: 1;
        }
        .quote-icon {
          position: absolute;
          font-size: 1.2rem;
          color: rgba(0, 255, 255, 0.3);
        }
        .quote-icon.left {
          left: 0;
          top: 0;
        }
        .quote-icon.right {
          right: 0;
          bottom: 0;
        }
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
          position: relative;
          z-index: 1;
        }
        .icon {
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.5);
        }
        .icon:hover {
          transform: scale(1.2);
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? "star filled" : "star"}
        />
      ))}
      <style jsx>{`
        .star-rating {
          display: flex;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
        }
        .star {
          color: rgba(255, 255, 255, 0.2);
          font-size: 1.2rem;
        }
        .star.filled {
          color: #00ffff;
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
};

export default CustomerReviews;
