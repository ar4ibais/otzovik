import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";

const Review = () => {
    const id = +window.location.href.slice(-2) ? +window.location.href.slice(-2) : +window.location.href.slice(-1)
    const [item, setItem] = useState({})


    useEffect(() => {
        axios.get(`https://65dcbccfe7edadead7eccbda.mockapi.io/reviews/${id}`)
            .then(({ data }) => setItem(data))
    }, [id])

    return (
        <main className="main">
            <div className="container">
                <h3 className="main__title">тестовое приложение - отзыв {item.name}</h3>
                {!Object.keys(item).length ? <Preloader /> : (
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{item.name}</span>
                            <p>{item.text}</p>
                        </div>
                        <div className="card-action">
                            <span className="orange-text darken-1">Дата размещения: {item.date}</span>
                            <span className="orange-text darken-1 right">Оценка: {item.rate}</span>
                        </div>
                    </div>
                )}
                <Link to="/">
                    <button className="btn">Вернуться к списку отзывов</button>
                </Link>
            </div>
        </main>
    );
}

export default Review;