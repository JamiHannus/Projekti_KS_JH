import React from 'react'
export default function testi() {
    
import InfoCardList from './InfoCardList'

export default function Testi(props) {
    return (
        <div>
            <div>
                {
                    props.items.map(item => (
                    <InfoCardList key={item.station_data}{...item} />)
                    )
                }
            </div>
        </div>
    )
}