import "./Leaderboard.scss"

const users = [
    {
        id: 1,
        place: "🥇",
        name: "@ilyachapyshev",
        number: "23941",
    },
    {
        id: 2,
        place: "🥈",
        name: "@ilyachapyshe",
        number: "5394",
    },
    {
        id: 3,
        place: "🥉",
        name: "@ilyachapysh",
        number: "3239",
    },
    {
        id: 4,
        place: "4",
        name: "@ilyachapys",
        number: "2494",
    },
    {
        id: 5,
        place: "5",
        name: "@ilyachapy",
        number: "1231",
    },
    {
        id: 6,
        place: "6",
        name: "@ilyachap",
        number: "931",
    },
    {
        id: 7,
        place: "7",
        name: "@ilyacha",
        number: "872",
    },
    {
        id: 8,
        place: "8",
        name: "@ilyac",
        number: "840",
    },
    {
        id: 9,
        place: "9",
        name: "@ilya",
        number: "754",
    },
    {
        id: 10,
        place: "10",
        name: "@ily",
        number: "666",
    },
]

// const buttons = [
//     "Неделя",
//     "Месяц"
// ]

const Leaderboard = () => {

    return (
        <div className="leaderboard">

                <div className="leaderboard__inner">

                    <div className="leaderboard__item">

                        <div className="leaderboard__users">

                            {users.map(user =>
                                <div key={user.id} className="leaderboard__user">
                                    <div className="leaderboard__place">
                                        {user.place}
                                    </div>
                                    <div className="leaderboard__name">
                                        {user.name}
                                    </div>
                                    <div className="leaderboard__exp">
                                        <div className="leaderboard__exp-number">
                                            {user.number}
                                        </div>
                                        <div className="leaderboard__exp-name">
                                            XP
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                </div>

        </div>
    );
};

export default Leaderboard;