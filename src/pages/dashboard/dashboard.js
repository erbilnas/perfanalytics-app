import React, { useEffect, useState, useCallback } from 'react'
import { DatetimePickerContainer, ChartContainer, ChartGroup } from '../../styles'
import { Space } from 'antd'
import Chart from '../../components/chart'
import DatetimePicker from '../../components/datetimepicker'
import { getMeasures } from '../../services'
import moment from 'moment'
import _ from 'lodash'

const Dashboard = () => {
    const [date, setDate] = useState({ startDate: null, endDate: null })
    const [measures, setMeasures] = useState(null)

    useEffect(() => {
        if (date.endDate) {
            getMeasures(date.startDate, date.endDate).then((measure) => {
                setMeasures(measure)
            })
        }
    }, [date.endDate])

    const datetimeHandler = useCallback((dates, datesAsString, info) => {
        if (info.range === 'end' && dates !== null) {
            let startDate = moment(dates[0]).valueOf()
            let endDate = moment(dates[1]).valueOf()

            setDate({ startDate: startDate, endDate: endDate })
        }
    }, [])


    const disabledDate = (current) => {
        // Can not select days before today and today
        return current > moment().endOf('day');
    }

    return (
        <>
            <DatetimePickerContainer>
                <DatetimePicker
                    showTime={true}
                    datetimeFormat="DD-MM-YYYY HH:mm:ss"
                    disabledDate={disabledDate}
                    handler={datetimeHandler}
                />
            </DatetimePickerContainer>
            <ChartContainer>
                <Space wrap>
                    {
                        measures
                            ? ( 
                                    Object.keys(Object.keys(_.groupBy(measures, 'url'))).map(i=> {
                                        return (
                                                <Chart
                                                    key={i}
                                                    label={Object.keys(_.groupBy(measures, 'url'))[i]}
                                                    data={Object.values(_.groupBy(measures, 'url'))[i]}
                                                />
                                        )
                                    })
                            )
                            : <Chart emptyChart={true} />
                    }
                </Space>
            </ChartContainer>
        </>
    )
}

export default Dashboard