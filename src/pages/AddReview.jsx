import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddReview = () => {
    const [name, setName] = useState('');
    const [rate, setRate] = useState(0);
    const [review, setReview] = useState('');
    const [error, setError] = useState(null);
    const [added, setAdded] = useState(false);

    const timeOutError = () => {
        setTimeout(() => {
            setError(null)
        }, 3000);
    }

    const notAllData = () => {
        timeOutError()
        return <p className="red-text">Введите все данные!</p>
    }

    const serverError = () => {
        timeOutError()
        return <p className="red-text">Что-то пошло не так...</p>
    }

    const postedForm = () => {
        setTimeout(() => {
            setAdded(false);
        }, 3000);
        return <p className="green-text">Спасибо за Ваш отзыв!</p>
    }

    const resetForm = () => {
        setName('');
        setRate('');
        setReview('');
    }

    const postData = async (e) => {
        e.preventDefault()
        try {
            if (name && rate && review) {
                await axios.post("https://65dcbccfe7edadead7eccbda.mockapi.io/reviews", {
                    name,
                    rate,
                    date: `${new Date().getDate()}.${(new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1}.${new Date().getFullYear()}`,
                    text: review
                })
                setAdded(true)

            } else {
                setError('Not All')
            }
        } catch (e) {
            setError('Error with server')
        }
        resetForm()
    }
    return (
        <main className="main">
            <div className="container">
                <h3 className="main__title">тестовое приложение - оставить отзыв</h3>
                <div className="row">
                    <form className="col s12" onSubmit={(e) => postData(e)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" id="first_name" type="text" className="validate" />
                            </div>
                            <div className="input-field col s6">
                                <input value={rate} onChange={(e) => {
                                    if (+e.target.value < 6 && +e.target.value > 0) {
                                        setRate(e.target.value)
                                    } else {
                                        setRate('')
                                    }
                                }} placeholder="оценка от 1 до 5" id="last_name" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Введите Ваш отзыв" id="textarea1" className="materialize-textarea"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn">Отправить</button>
                        <Link to="/">
                            <button className="right btn pink darken-3">Вернуться назад</button>
                        </Link>
                    </form>
                </div>
                {
                    error === 'Not All' && notAllData()
                }
                {error === 'Error with server' && serverError()}
                {added && postedForm()}
            </div>
        </main>
    );
}

export default AddReview;