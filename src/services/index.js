import axios from 'axios'

const getMeasures = async (startDate, endDate) => {
    const options = {
        "url": "http://localhost:8000/measure",
        "method": "GET",
        "params": {
            "startDate": startDate,
            "endDate": endDate,
        },
    }

    return await axios(options).then((response) => { return response.data.measures })
}

export { getMeasures }