import "./CreateQuizBottom.scss"

const CreateQuizBottom = () => {
    return (
        <div className="create-quiz-bottom">
            <div className="create-quiz-bottom__name">
                Результат:
            </div>
            <div className="create-quiz-bottom__wrapper">
                <div
                    className="create-quiz-block__input"
                    defaultValue={"question"}
                    onInput={(e) => {
                        const value = e.currentTarget.textContent;
                        if (value !== null) {
                            console.log();
                        }
                    }}
                    contentEditable
                    data-placeholder="Описание отличного резльтата"
                />
            </div>
            <div className="create-quiz-bottom__wrapper">
                <div
                    className="create-quiz-block__input"
                    defaultValue={"question"}
                    onInput={(e) => {
                        const value = e.currentTarget.textContent;
                        if (value !== null) {
                            console.log();
                        }
                    }}
                    contentEditable
                    data-placeholder="Описание плохого резльтата"
                />
            </div>
        </div>
    );
};

export default CreateQuizBottom;