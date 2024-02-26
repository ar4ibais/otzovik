const ReviewItem = () => {
    return (
        <div className="card">
            <div className="card-content">
                <p>{"I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.".slice(0, 10) + "..."}</p>
                <span className="more pink-text accent-1">Читать полностью</span>
            </div>
            <div className="card-action">
                <span>Date: 21.02.2024</span>
                <span className="right">Author: Rick James</span>
            </div>
        </div>
    );
}

export default ReviewItem;