import {
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

let windowSize = 'xs';

if(width > 300){
    windowSize = 'md';
} else {
    windowSize = 'lg';
}

export default {
    windowSize,
}
