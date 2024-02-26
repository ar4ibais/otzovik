const Review = () => {
    return (
        <main className="main">
            <div className="container">
                <h3 className="main__title">тестовое приложение - отзыв Rick James</h3>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Rick James</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <span className="orange-text darken-1">Дата размещения: 21.02.2024</span>
                        <span className="orange-text darken-1 right">Оценка: 4</span>
                    </div>
                </div>
                <button className="btn">Вернуться к списку отзывов</button>
            </div>
        </main>
    );
}

export default Review;