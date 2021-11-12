import React, { useEffect, useState } from 'react'

import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"
import { useRecoilValue } from 'recoil'
import positionSelector from '../../recoil/selectors/positionSelector'

const GMap = withScriptjs(withGoogleMap((props) => {
    const position = useRecoilValue(positionSelector)


    return (<GoogleMap
        defaultZoom={12}
        defaultCenter={position}
    >
        {props.isMarkerShown && <Marker position={position} />}
    </GoogleMap>)
}
))

export default GMap