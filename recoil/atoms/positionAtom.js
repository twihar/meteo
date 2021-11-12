
import {
    atom
} from 'recoil';

const positionAtom = atom({
    key: 'currentPosition',
    default: { lat: -32.4735715, lng: 150.8323153 }
})


export default positionAtom