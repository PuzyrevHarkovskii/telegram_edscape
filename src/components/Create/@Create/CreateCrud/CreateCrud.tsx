import { FC } from 'react';
import "./CreateCrud.scss"
import CreateFlex from "../CreateFlex/CreateFlex";
import CreateWrapper from "../CreateWrapper/CreateWrapper";
import CreateButton from "../@Buttons/CreateButton/CreateButton";
import { ICardGeneral } from "../../../@types/cardItemTypes";
import { ICard } from "../../../../redux/services/cardService";
import { ISteps } from '../../../../redux/types/createQuizTypes';
import { createQuizAPI } from '../../../../redux/services/createQuizService';

interface ICreateCrud {
    card: ICardGeneral
    steps?: ISteps[]
    createCard?: (arg: ICard) => void
    change: boolean,
    handleCreateQuizOperation?: (args: any) => void
}

const CreateCrud: FC<ICreateCrud> = (
    {
        card,
        steps,
        change,
        handleCreateQuizOperation
    }) => {

    const [createQuiz, { isLoading, isError, isSuccess }] = createQuizAPI.useCreateQuizMutation()

    console.log(isLoading, isError, isSuccess)

    const transformedSteps = steps && steps.map(step => {
        const { type, quiz } = step;
        const { timer, question, answers, corrects } = quiz;

        const transformedAnswers = answers.map(answer => answer.answer);
        const transformedCorrects = answers.map(answer =>
            corrects.find(correct => correct.id === answer.id) ? answer.answer : null
        );

        return {
            type,
            isTimer: timer.isTimer,
            seconds: timer.seconds,
            question,
            answers: transformedAnswers,
            corrects: transformedCorrects,
        };
    });

    const handleCreateQuiz = async () => {
        await createQuiz({ card, steps: transformedSteps });
        // handleCreateQuizOperation &&
        //     handleCreateQuizOperation({
        //         operationType: CreateQuizOperationType.ResetStateQuizType,
        //         args: {},
        //     });
    };




    return (
        <>
            {change
                ? (
                    <CreateFlex>
                        <CreateWrapper>
                            <CreateButton
                                onClick={() => {
                                }}
                                backgroundColor={"red"}
                            >
                                Удалить карточку
                            </CreateButton>
                        </CreateWrapper>

                        <CreateWrapper>
                            <CreateButton
                                onClick={() => {
                                }}
                                backgroundColor={"orange"}
                            >
                                Изменить карточку
                            </CreateButton>
                        </CreateWrapper>

                    </CreateFlex>
                )
                : (
                    <>
                        {!isLoading && !isError && !isSuccess && (
                            <CreateWrapper>
                                <CreateButton
                                    onClick={() => {
                                        handleCreateQuiz()
                                    }
                                    }
                                    backgroundColor={"green"}
                                >
                                    Создать карточку
                                </CreateButton>
                            </CreateWrapper>
                        )
                        }
                        {isLoading &&
                            <div>Загрузка...</div>
                        }
                        {isError &&
                            <div>Ошибка!</div>
                        }
                        {isSuccess &&
                            <div>Успешно создан!</div>
                        }
                    </>
                )
            }
        </>
    );
};

export default CreateCrud;