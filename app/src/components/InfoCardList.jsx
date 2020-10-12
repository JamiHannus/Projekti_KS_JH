import React from 'react'

import MainInfoCard from './MainInfoCard'

export default function Testi(props) {
    return (
        <div>
            <div>
                {
                    props.items.map(item => (
                    <MainInfoCard key={item.station_data}{...item} />)
                    )
                }
            </div>
        </div>
    )
}