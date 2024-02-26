import { Link } from "react-router-dom";

const ReviewItem = ({
    id,
    name,
    rate,
    date,
    text
}) => {
    return (
        <div className="card">
            <div className="card-content">
                <p>{`${text}`.slice(0, 10) + '...'}</p>
                <Link to={`/reviews/${id}`}>
                    <span className="more pink-text accent-1">Читать полностью</span>
                </Link>
            </div>
            <div className="card-action">
                <span>Date: {date}</span>
                <span className="right">Author: {name}</span>
            </div>
        </div>
    );
}

export default ReviewItem;