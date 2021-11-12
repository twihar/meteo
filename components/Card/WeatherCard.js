import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import React from 'react';
import styles from '../../styles/Card.module.css'
import CloudIcon from '@mui/icons-material/Cloud';
import degreeSelector from '../../recoil/selectors/degreeSelector';

import {
    useRecoilState,
    useRecoilValue,
} from 'recoil';

function WetherCard({ weather, main, name }) {

    const degree = useRecoilValue(degreeSelector)


    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <img src={'http://openweathermap.org/img/w/' + (weather[0]?.icon + '.png')} />
            </div>
            <Typography variant="h3" >
                {!degree ? Math.floor(main?.temp) + '°C' : Math.floor(main?.temp * 9 / 5) + 32 + '°F'}
            </Typography>
            <Typography variant="h4" >
                {name}
            </Typography>
        </div>
    )
}

export default WetherCard;