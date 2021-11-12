
import {
    selector,
    useRecoilState
} from 'recoil';
import degreeAtom from "../atoms/degreeAtom";


const degreeSelector = selector({
    key: 'degreeSelector',
    get: ({ get }) => {
        const degree = get(degreeAtom);
        return degree;

    },
});

export default degreeSelector;