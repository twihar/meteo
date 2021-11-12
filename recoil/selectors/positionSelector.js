
import {
    selector,
    useRecoilState
} from 'recoil';
import positionAtom from "../atoms/positionAtom";


const positionSelector = selector({
    key: 'positionSelector',
    get: ({ get }) => {
        const position = get(positionAtom);
        return position;

    },
});

export default positionSelector;