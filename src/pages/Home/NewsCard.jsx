import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export const NewsCard = ({ news: { _id, title, image_url, details } }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-4">
      <h2 className="card-title">{title}</h2>
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        {details.length > 150 ? (
          <p className="font-normal">
            {details.slice(0, 150)}....
            <Link to={`/news/${_id}`} className="text-orange-400">
              Read More
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  news: PropTypes.object,
};
