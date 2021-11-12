import { getWeatherToday } from "../../api/services/weather";
import { weatherAtom } from "../atoms/wetherAtom";
import {
    selector,
    useRecoilState
} from 'recoil';


const weatherSelector = selector({
    key: 'weatherSelector',
    get:  ({ get }) => {
       return 'hello'
    },
});

export default weatherSelector;