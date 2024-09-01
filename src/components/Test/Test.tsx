import Container from "../@UI/Container/Container";
import {Link} from "react-router-dom";

const Test = () => {
    return (
        <div>
            <Container>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "80vh"
                    }}
                >
                    <div>
                        Страница тестируется!
                        <Link to={"/"} style={{display: "block"}}>Вернуться назад</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Test;