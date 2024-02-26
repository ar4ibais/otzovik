import ReviewItem from "../components/ReviewItem";

const Home = () => {
    return (
        <main className="main">
            <div className="container">
                <h3 className="main__title">тестовое приложение - список отзывов</h3>
                <div className="review__items">
                    <ReviewItem />
                    <ReviewItem />
                    <ReviewItem />
                </div>
                <button className='btn'>Добавить отзыв</button>
            </div>
        </main>
    );
}

export default Home;