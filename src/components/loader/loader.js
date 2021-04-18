import React from 'react'
import { Spin } from 'antd'

const Loader = (props) => {
    const { size } = props

    return (
        <Spin
            size={size}
        />
    )
}

export default Loader