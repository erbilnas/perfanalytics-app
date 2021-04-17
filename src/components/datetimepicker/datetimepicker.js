import React from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'

const { RangePicker } = DatePicker;

const DatetimePicker = (props) => {
    const { disabledDate, handler, datetimeFormat, showTime } = props

    return (
        <>
            <RangePicker
                showTime={showTime}
                disabledDate={disabledDate}
                format={datetimeFormat}
                onCalendarChange={(dates, dateStrings, info) => { handler(dates, dateStrings, info) }}
            />
        </>
    )
}
 
export default DatetimePicker