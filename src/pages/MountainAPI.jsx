import { useEffect, useState } from "react";
import { ActionButton } from "../components/ActionButton";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import weatherJson from "../static/weather.json";


<script src="https://maps.googleapis.com/maps/api/js?key=[API_KEY]"></script>

export const MountainAPI = () => {

    const [area, setArea] = useState("")
    const [name, setName] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [prefectures, setPrefectures] = useState("")
    const [gsiUrl, setGsiUrl] = useState("")
    const [id, setID] = useState('396')
    const [place, setPlace] = useState("");
    const [weather, setWeather] = useState("");
    const [shop, setShop] = useState("");

    const ids = Array.from({ length: 1200 }, (_, i) => i + 1);

    const getRandomID = () => {
        const _id = ids[Math.floor(Math.random() * ids.length)]
        setID(_id)
    }
    useEffect(() => {
        fetch(`https://mountix.codemountains.org/api/v1/mountains/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setName(data.name)
                setArea(data.area)
                setPrefectures(data.prefectures)
                setLatitude(data.location.latitude)
                setLongitude(data.location.longitude)
                setGsiUrl(data.location.gsiUrl)
            })
            .catch(error => {
                console.error(error)
            })
    }, [id]);

    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlace(data.display_name)
            })
            .catch(error => {
                console.error(error)
            })
    });


    useEffect(() => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setWeather(weatherJson[data.daily.weathercode[0]])
            })
            .catch(error => {
                console.error(error)
            })
    });

    useEffect(() => {
        const API_KEY = 'APIKEY';
        axios.get(
            `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}&lat=${latitude}&lng=${longitude}&range=5&order=4&format=json`
        )
            .then(res => res.data)
            .then(data => {
                console.log(data)
                setShop(data.results.shop[0].name)
                setOpen(data.results.shop[0].open)

            })
            .catch(error => {
                console.error(error)
            })
    });

    return (
        <>
            <p className="m-[30px] text-center font-semibold rounded-md h-10">APIを取るぞ</p>
            <div>
                <ActionButton text="ID変更" action={getRandomID} />
            </div>
            <div>
                <p className="m-[30px]">{name}は
                    {area}({prefectures})にあるです。</p>
            </div>
            <p>経度：{latitude}</p>
            <p>緯度：{longitude}</p><br></br>
            <p onChange={(e) => placeData(e.target.value)}>
                住所：{place}
            </p><br></br>
            <p>天気：{weather}</p><br></br>
            <p>オススメのレストラン：{shop}</p><br></br>
            <p></p>
            <iframe src={gsiUrl}></iframe><br></br>

        </>
    );
};
