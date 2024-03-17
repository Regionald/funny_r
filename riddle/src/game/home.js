import React, { useContext, useState, useEffect } from "react";
import {
    View,
    H1,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    Pressable,
    StatusBar,
    Dimensions,
    ScrollView,
    Modal,
} from 'react-native';
// import { Colors, Fonts, windowHeight, windowWidth } from '../../utils/util';

var Colors = {
    "Default": "#81b71a",
    "Blue": "#00B1E1",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "Yellow": "#F6BB42",
};
import ExamDataContext from './data';
// import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds } from 'react-native-google-mobile-ads';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// AppOpenAd.createForAdRequest(TestIds.APP_OPEN);

const Home = ({ navigation }) => {

    const { examData, setexamData, level, setLevel } = useContext(ExamDataContext);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [spinVisible, setSpinVisible] = useState(false);

    const start_Game = (level) => {


        setLevel(level);
        navigation.navigate('Game');

    };


    useEffect(() => {

        console.log('Reggy')

    }, []);


    return <SafeAreaView >

        <View style={styles.GameHeading}>

            <Text style={styles.Header}>ANCIENT RIDDLES</Text>
        </View>


        <ScrollView showsVerticalScrollIndicator={false} >
            <View>
                <View>

                    <StatusBar
                        statusbarStyle='light-content'
                        backgroundColor={Colors.Primary}
                    />

                </View>

                <View style={styles.container}>


                    {examData.map((level_info, index) => {

                        return <Pressable
                            onPress={() =>
                                start_Game(level_info.level)
                            }
                            key={index} style={styles.Cell}>
                            <Text style={styles.Level}>Level {level_info.level + 1}</Text>
                        </Pressable>

                    })}

                </View>
            </View>
        </ScrollView>

        <View style={styles.Semi_circle}>
            <View style={styles.row_1}>
                <Pressable>
                    <Image source={require('./replay.png')} style={styles.icon} />

                </Pressable>
                <Pressable>
                    <Image source={require('./replay.png')} style={styles.icon} />

                </Pressable>

            </View>
            <View style={styles.row_2}>
                <Pressable>
                    <Image source={require('./replay.png')} style={styles.icon} />

                </Pressable>
                <Pressable>
                    <Image source={require('./replay.png')} style={styles.icon} />

                </Pressable>

            </View>
            <View style={styles.row_3}>
                <Pressable onPress={() => setSpinVisible(true)}>
                    <Image source={require('./replay.png')} style={styles.icon} />
                </Pressable>

            </View>
            {/* <BannerAd unitId={TestIds.BANNER} /> */}

        </View>
        <Modal
            transparent={true}
            visible={spinVisible}
        >

            <View style={styles.modal_container}>

                <View style={styles.popup}>

                    <View style={styles.popuprow}>

                        <Text style={styles.popupHeader}>LUCKY SPIN</Text>
                    </View>

                    <View style={styles.spin}>

                    </View>


                    <Pressable style={styles.playButton} >

                        <Image style={styles.playIcon} source={require('./replay.png')} />
                    </Pressable>


                    <Pressable style={styles.closeButton_div} onPress={() => setSpinVisible(false)}>
                        <Image style={styles.playIcon} source={require('./replay.png')} />
                    </Pressable>

                </View>

            </View>

        </Modal>

    </SafeAreaView>
};

export default Home;


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c7f9cc',
        display: 'flex',
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight,
    },
    container: {
        width: windowWidth,
        height: windowHeight * 0.45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#c7f9cc',
    },
    GameHeading: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: windowHeight * 0.2,
        alignItems: 'center',
    },
    Header: {
        fontSize: 25,
        fontFamily: 'Assassin',
        color: '#37BC9B',
        fontWeight: '600',
    },
    Cell: {
        backgroundColor: '#a7c957',
        display: 'flex',
        marginLeft: 6,
        marginBottom: 6,
        marginRight: 6,
        height: windowWidth / 6,
        width: windowWidth - 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Level: {
        fontFamily: 'Astron',
        fontSize: 25,
    },
    Semi_circle: {
        // backgroundColor: '#E9573F',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: windowHeight * 0.2,
        alignItems: 'center',
    },
    row_1: {
        display: 'flex',
        flexDirection: 'row',
        width: windowWidth * 0.95,
        justifyContent: 'space-between',
        // backgroundColor: '#a7c957',
        height: windowHeight * 0.2 * 0.33,

    },
    row_2: {
        display: 'flex',
        flexDirection: 'row',
        width: windowWidth * 0.7,
        justifyContent: 'space-between',
        // backgroundColor: '#a7c957',
        height: windowHeight * 0.2 * 0.33,
    },
    row_3: {
        width: windowWidth,
        // backgroundColor: '#a7c5',
        height: windowHeight * 0.2 * 0.33,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        height: windowHeight * 0.2 * 0.33,
        width: windowHeight * 0.2 * 0.33,
    },
    icon_description: {
        fontSize: '10',
    },

    modal_container: {
        backgroundColor: '#000000aa',
        width: windowWidth,
        height: windowHeight,
    },
    popup: {

        width: windowWidth * 0.95,
        height: windowHeight * 0.7,
        marginLeft: windowWidth * 0.05 * 0.5,
        marginTop: windowHeight * 0.3 * 0.5,
        backgroundColor: '#caf0f8',
        borderColor: '#023047',
        borderWidth: 2,
        borderRadius: 10,
    },
    popuprow: {
        backgroundColor: '#bde0fe',
        display: 'flex',
        height: windowWidth / 6,
        width: windowWidth * 0.94,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    popupHeader: {
        fontSize: 25,
        fontFamily: 'Assassin',
        fontWeight: '600',
    },

    spin: {
        width: windowWidth * 0.95 * 0.9,
        height: windowWidth * 0.95 * 0.9,
        backgroundColor: '#cbf3f0',
        alignSelf: 'center',

    },
    playButton: {
        backgroundColor: '#003566',
        display: 'flex',
        height: windowWidth / 8,
        width: windowWidth * 0.5,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 40,
    },
    playIcon: {
        height: windowHeight * 0.2 * 0.33,
        width: windowHeight * 0.2 * 0.33,
        alignSelf: 'center',
    },
    closeButton_div: {
        position: 'absolute',
        bottom: 0 - windowHeight * 0.2 * 0.33 * 0.5,
        height: windowHeight * 0.2 * 0.33,
        width: windowHeight * 0.2 * 0.33,
        alignSelf: 'center',
    },
    closeIcon: {
        height: windowHeight * 0.2 * 0.33,
        width: windowHeight * 0.2 * 0.33,
        alignSelf: 'center',
    },


})