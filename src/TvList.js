import React, {useState} from 'react';
import axios from "axios";

const TvList = () => {

    const [tvs, setTvs] = useState([])
    console.log(tvs)

    const getTvData = async (e) => {
        e.preventDefault()
        try {
            const url = "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1"

            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDBlODNjOWE2YjBhMzBkNjUwMDk4ODk1ZTE0ZjQzMyIsIm5iZiI6MTcxOTYyMjYyMi45NTQ0Mywic3ViIjoiNjY3NjJmMDZmYWUwOTc1MTcxM2FmNzJiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5bG1X9NYAVBiXLT9scnCHeh7rHRqoZTsm-AY0DfHpWk"
                }
            }

            const {data, status} = await axios.get(url, config)

            if (status === 200) {
                setTvs(data.results)
            }
        } catch (err) {
            console.log(err.messages)
        }
    }

    return (
        <div>
            <h1>TV</h1>
            {tvs.map(tv => (
                <div>
                    <h1>{tv.name}</h1>
                    <h2>{tv.vote_average}</h2>
                    <p>{tv.overview}</p>
                </div>
            ))}
            <button onClick={getTvData}>TV 데이터 불러오기</button>
        </div>
    );
};

export default TvList;