import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Janken = () => {

    const [jankenResult, setJankenResult] = useState({
        myHand: "入力待ち",
        comHand: "待機中",
        result: "未対戦",
    });

    const [history, setHistory] = useState([]);

    const getJankenResult = (myHand) => {
        const hand = ["グー", "チョキ", "パー"];
        const myIndex = hand.indexOf(myHand);
        const comIndex = Math.floor(Math.random() * 3);
        const resultSheet = [
            ["Draw", "Win", "Lose"],
            ["Lose", "Draw", "Win"],
            ["Win", "Lose", "Draw",],
        ];


        return {
            myHand: myHand,
            comHand: hand[comIndex],
            result: resultSheet[myIndex][comIndex],
        };
    };

    const getJanken = (myHand) => {
        const result = getJankenResult(myHand);
        setJankenResult(result);
        setHistory([result, ...history]);
    };

    return (
        <>
            <p className="m-[30px] flex justify-center font-semibold rounded-md">じゃんけんの画面</p>
            {/* <div className="flex font-semibold rounded-md border border-slate-200 text-slate-900"> */}
            <div className="h-20">
                <ActionButton text="グー" action={() => getJanken("グー")} />
                <ActionButton text="チョキ" action={() => getJanken("チョキ")} />
                <ActionButton text="パー" action={() => getJanken("パー")} />
            </div>

            <div className="h-50 text-left">
                <p className="h-10">自分の手：{jankenResult.myHand}</p>
                <p className="h-10">相手の手：{jankenResult.comHand}</p>
                <p className="h-10">結果：{jankenResult.result}</p>
            </div>
            <div className="h-40">
                <p className="">履歴</p>
                <div className="text-center">
                    <table className="md:table">
                        <thead>
                            <tr>
                                <th>自分の手</th>
                                <th>相手の手</th>
                                <th>結果</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((x, i) => (
                                <tr key={i}>
                                    <td>{x.myHand}</td>
                                    <td>{x.comHand}</td>
                                    <td>{x.result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
