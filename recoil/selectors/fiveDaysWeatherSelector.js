import { getWeatherToday } from "../../api/services/weather";
import { weatherAtom } from "../atoms/wetherAtom";
import {
    selector,
    useRecoilState
} from 'recoil';


const fiveDaysWeatherSelector = selector({
    key: 'fiveWeatherSelector',
    get:  ({ get }) => {
       return 'hello'
    },
});

export default weatherSelector;