import Text from './Text';
import Timeline from './Timeline';

const objText = new Text();
const timeline = new Timeline('timeline-area', objText);
objText.timeline = timeline;
