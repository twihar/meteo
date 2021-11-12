import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import styles from '../../styles/days.module.css'
import CloudIcon from '@mui/icons-material/Cloud';
import degreeSelector from '../../recoil/selectors/degreeSelector';

import {
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import timeSelector from '../../recoil/selectors/timeSelector';

function DaysCard({ main }) {

    const today = Number(new Date(Date.now()).getDay())
    const days = [
        {
            id: 6,
            name: 'saturday',
            code: 'Sa'
        },
        {
            id: 0,
            name: 'sunday',
            code: 'Su'
        },
        {
            id: 1,
            name: 'monday',
            code: 'Mo'
        },
        {
            id: 2,
            name: 'tusday',
            code: 'Tu'
        },
        {
            id: 3,
            name: 'wednsday',
            code: 'We'
        },
        {
            id: 4,
            name: 'thursday',
            code: 'Th'
        },
        {
            id: 5,
            name: 'friday',
            code: 'Fr'
        },
    ]
    const degree = useRecoilValue(degreeSelector)
    const time = useRecoilValue(timeSelector)

    useEffect(() => {
        console.log('time ', time)
    }, [time])

    const getTemp = (main) => {
        const v = main ?? { main: { temp: 0 } }
        const cc = Math.floor(v.main.temp)
        const ff = Math.floor(v.main.temp * 9 / 5) + 32
        return !degree ? (cc + ' °C') : (ff + ' °F')
    }


    const getIcon = (main) => {
        return 'http://openweathermap.org/img/w/' + (main?.weather[0]?.icon + '.png')
    }

    const getDate = (main) => {
        const dt = new Date(main?.dt_txt)
        const n = Number(dt.getDay())
        return days.filter(d => d.id === n)[0]?.code
    }

    return (
        <div className={styles.card}>
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={{ xs: 2, sm: 2, md: 5, lg: 5, xl: 5 }}
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
                className={styles.stack}
            >
                <div className={styles.card}>

                </div>
                <div className={styles.card}>
                    <Typography variant="h4" >
                        {getDate(main[time])}
                    </Typography>
                    <div className={styles.icon}>
                        <img src={getIcon(main[time])} alt='icon' />
                    </div>
                    <Typography variant="h3" >
                        {getTemp(main[time])}
                    </Typography>
                </div>
                <div className={styles.card}>
                    <Typography variant="h4" >
                        {getDate(main[time + 8])}
                    </Typography>
                    <div className={styles.icon}>
                        <img src={getIcon(main[time + 8])} alt='icon' />

                    </div>
                    <Typography variant="h3" >
                        {getTemp(main[time + 8])}

                    </Typography>
                </div>
                <div className={styles.card}>
                    <Typography variant="h4" >
                        {getDate(main[time + 16])}

                    </Typography>
                    <div className={styles.icon}>
                        <img src={getIcon(main[time + 16])} alt='icon' />

                    </div>
                    <Typography variant="h3" >
                        {getTemp(main[time + 16])}

                    </Typography>
                </div>
                <div className={styles.card}>
                    <Typography variant="h4" >
                        {getDate(main[time + 24])}
                    </Typography>
                    <div className={styles.icon}>
                        <img src={getIcon(main[time + 24])} alt='icon' />

                    </div>
                    <Typography variant="h3" >
                        {getTemp(main[time + 24])}

                    </Typography>
                </div>
                <div className={styles.card}>
                    <Typography variant="h4" >
                        {getDate(main[time + 32])}
                    </Typography>
                    <div className={styles.icon}>
                        <img src={getIcon(main[time + 32])} alt='icon' />

                    </div>
                    <Typography variant="h3" >
                        {getTemp(main[time + 32])}

                    </Typography>
                </div>
                <div className={styles.card}>

                </div>
            </Stack>
        </div>
    )
}

export default DaysCard;