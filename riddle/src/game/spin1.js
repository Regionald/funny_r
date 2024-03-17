import {
    View,
    Text,
} from 'react-native';
import * as d3shape from 'd3-shape';
import Svg from 'react-native-svg';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';

const {Path}=Svg;

const segments = 6;

const MakeWheel = () => {

    const Prices = [500, 75, 100, 125, 150, 400];
    const arcs = d3shape.pie()(Prices);

    return arcs.map((arc, index) => {

        const instance=d3shape
        .arc()
        .padAngle(0.01)
        .outerRadius(200)
        .innerRadius(20)


        return {
            path:instance(arc),
            color: '#fefae0',
            value:20,
            centroid:instance.centroid(arc)

        }
    })
}

MakeWheel();
const Spin = () => {

    return (

        <View>

            <Text>Reggie</Text>
        </View>
    )
}

export default Spin;