import { useState } from "react";
import { ActionButton } from "../components/ActionButton";


export const Omikuji = () => {

    const [omikujiResult, setOmikujiResult] = useState("");

    const getOmikuji = () => {
        const result = ["大吉", "中吉", "吉", "小吉", "末吉"][
            Math.floor(Math.random() * 5)
        ];

        console.log(result);
        setOmikujiResult(result);

    }


    return (
        <>
            <p className="m-[30px] text-center font-semibold rounded-md h-10">おみくじの画面</p>

            <div className="m-[30px]">
                <ActionButton type="button" text="おみくじ" action={getOmikuji} />
                {/* <Omikuji_pic type="picture" action={getOmikuji} /> */}
            </div>

            <div>
                <p>{omikujiResult}</p>

            </div>
        </>
    );
};
