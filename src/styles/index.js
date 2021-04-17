import styled from 'styled-components'

const DatetimePickerContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 5%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

const ChartContainer = styled.div`
    margin: 100px 0 0 25%;
    max-width: 60%;
    @media screen  and (max-width: 768px) {
        margin: 100px 0 0 0;
    }
`

const ChartGroup = styled.div`
    display: flex;
`

export { DatetimePickerContainer, ChartContainer, ChartGroup }