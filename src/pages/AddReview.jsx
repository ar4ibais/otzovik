const AddReview = () => {
    return (
        <main className="main">
            <div className="container">
                <h3 className="main__title">тестовое приложение - оставить отзыв</h3>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Ваше имя" id="first_name" type="text" className="validate" />
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="оценка от 1 до 5" id="last_name" type="text" className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea placeholder="Введите Ваш отзыв" id="textarea1" className="materialize-textarea"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn">Отправить</button>
                        <button className="right btn pink darken-3">Вернуться назад</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default AddReview;