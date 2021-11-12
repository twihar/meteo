
import {
    selector,
    useRecoilState
} from 'recoil';
import timeAtom from '../atoms/timeAtom';


const timeSelector = selector({
    key: 'timeSelector',
    get: ({ get }) => {
        const time = get(timeAtom);
        const now = new Date(Date.now()).getHours();
        return (time / 3) - 1;

    },
});

export default timeSelector;