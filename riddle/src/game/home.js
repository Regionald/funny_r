import React, { useContext, useState, useEffect } from "react";
import {
    View,
    H1,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Pressable,
    StatusBar,
    Dimensions,
    ScrollView,
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

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const Home = ({ navigation }) => {


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);



    useEffect(() => {

        console.log('Reggy')

    }, []);


    return <SafeAreaView >
        <ScrollView showsVerticalScrollIndicator={false} >
            <View>
                <View>

                    <StatusBar
                        statusbarStyle='light-content'
                        backgroundColor={Colors.Primary}
                    />

                </View>
                <View style={styles.GameInfo}>

                    <Text style={styles.GameTxt}>Funny Riddle</Text>
                </View>


                {/* First row anagram */}


                <Text>
                    {"\n"}
                </Text>

                <View style={styles.container}>

                    {/* First row  */}

                    <Pressable
                        onPress={() =>
                            Mark(examData[level]['content'][currentQuestionIndex].options[0])
                        }
                        key={111} style={styles.color_cell}>
                        <Text>Range</Text>
                    </Pressable>

                    
                    <Pressable
                        onPress={() =>
                            Mark(examData[level]['content'][currentQuestionIndex].options[0])
                        }
                        key={112} style={styles.color_cell}>
                        <Text>Range</Text>
                    </Pressable>


                </View>
            </View>
        </ScrollView>
    </SafeAreaView>


};

export default Home;


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f4f3ee',
        display: 'flex',
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight,
    },
    header: {
        fontSize: 60,
    },
    texter: {
        fontSize: 22,
    },
    container: {
        width: windowWidth,
        // margin: 1,
        backgroundColor: '#ffd166',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Gamelost: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#bc4749',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    GameWon: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#8CC152',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    SorryMsg: {

        fontSize: 50,
    },
    GameLost: {

        fontSize: 50,
    }
    ,
    GameTxt: {
        fontSize: 25,

    },
    question: {
        fontSize: 20,

    },
 
    color_cell: {
        backgroundColor: '#37BC9B',
        display: 'flex',
        marginLeft: 6,
        marginBottom: 6,
        marginRight: 6,
        height: windowWidth / 6,
        width: windowWidth - 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    GameInfo: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30,

    },
    points: {
        color: '#37BC9B',
        padding: 3,

    },
    cancleBTN: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    cancelIcon: {
        height: 80,
        width: 80
    },
    icon: {
        height: windowWidth / 8.4,
        width: windowWidth / 8.4,
    },
})