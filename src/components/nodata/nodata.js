import React from 'react'
import { Empty } from 'antd'

const NoData = (props) => {
    const { description } = props
    return (
        <Empty
            description={<span>{description}</span>}
        />
    )
}

export default NoData