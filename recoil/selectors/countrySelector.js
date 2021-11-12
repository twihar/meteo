
import {
    selector,
} from 'recoil';
import countryAtom from "../atoms/countryAtom";


const countrySelector = selector({
    key: 'countrySelector',
    get: ({ get }) => {
        const country = get(countryAtom);
        return country;

    },
});

export default countrySelector;