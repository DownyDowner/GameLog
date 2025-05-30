import { MAX_RATING } from "../models/Constants";
import { Icon } from "@mdi/react";
import { mdiStar, mdiStarOutline } from "@mdi/js";

interface GameDetailsReviewProps {
  rating: number;
  review: string;
}

function GameDetailsReview({ rating, review }: GameDetailsReviewProps) {
  return (
    <div className="col-12 col-md-6">
      <div className="p-3 bg-light border rounded">
        <h5 className="fw-bold">Note</h5>
        <div className="mb-2 text-danger d-flex gap-1 fs-4">
          {[...Array(MAX_RATING)].map((_, i) => (
            <Icon
              key={i}
              path={i < rating ? mdiStar : mdiStarOutline}
              size={1}
            />
          ))}
        </div>

        <h5 className="fw-bold">Critique</h5>
        <div>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
}

export default GameDetailsReview;
