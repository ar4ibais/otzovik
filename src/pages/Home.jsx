import { Link } from "react-router-dom";
import ReviewItem from "../components/ReviewItem";
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("https://65dcbccfe7edadead7eccbda.mockapi.io/reviews")
            .then(({ data }) => setItems(data))
    }, [])
    return (
        <main className="main">
            <div className="container">
                <h3 className="main__title">тестовое приложение - список отзывов</h3>
                <div className="review__items">
                    {
                        items.map(obj => (
                            <ReviewItem key={obj.id} {...obj} />
                        ))
                    }
                </div>
                <Link to="/reviews/add">
                    <button className='btn'>Добавить отзыв</button>
                </Link>
            </div>
        </main>
    );
}

export default Home;