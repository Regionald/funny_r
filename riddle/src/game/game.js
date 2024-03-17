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
import ExamDataContext from './data';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


var Colors = {
    "Default": "#81b71a",
    "Blue": "#00B1E1",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "Yellow": "#F6BB42",
};


const Game = ({ navigation }) => {

    const { examData, setexamData,level,setLevel} = useContext(ExamDataContext);


    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [showFirstPressable, setFirstPressable] = useState(false);
    const [showSecondPressable, setShowSecondPressable] = useState(false);
    const [showThrirdPressable, setShowThirdPressable] = useState(false);
   
   

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [chances, setChances] = useState(3);

    const Mark = (option) => {

        console.log(option);
        


        const currentQuestion = examData[level]['content'][currentQuestionIndex].correct_answer;
        console.log(currentQuestion)

        if (option === currentQuestion) {
            setScore(score + 1);
            const new_examDate = [...examData];

            console.log('The is inside the marking function');
            console.log('upper',showFirstPressable);


            setFirstPressable(false);


            console.log('lower',showFirstPressable);


            setShowSecondPressable(false);
            setShowThirdPressable(false);
            new_examDate[currentQuestionIndex].score = score;
            setexamData(new_examDate);

        }
        else {
            setChances(chances - 1);
        }
        nextQuestion();

    };

    const nextQuestion = () => {

        console.log(currentQuestionIndex)

        if (currentQuestionIndex + 1 < examData.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }

    };


    useEffect(() => {

        const genesitimeout = setTimeout(() => {
            setFirstPressable(true);
            console.log("Second box 7");
        }, 500);


        const timeout = setTimeout(() => {
            setShowSecondPressable(true);
            console.log("Second box 7");
        }, 800);

        const timeout1 = setTimeout(() => {
            setShowThirdPressable(true),
                console.log("Second box 7");
        }, 1000);

        return () => {
            clearTimeout(genesitimeout);
            clearTimeout(timeout);
            clearTimeout(timeout1);
        };

    }, [examData]);

        if (chances < 0) {

            return <SafeAreaView >
                <ScrollView showsVerticalScrollIndicator={false} >

                    <View onLayout={() => {
                        setTimeout(() => {
                            navigation.navigate('Home'); // Replace 'NextScreen' with the name of the screen you want to navigate to.
                        }, 1000);
                    }} style={styles.Gamelost}>

                        <Text style={styles.SorryMsg}>Sorry</Text>
                        <Text style={styles.GameLost}>Game Lost</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>

        }

        else if (score < 5) {

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

                            <Text style={styles.GameTxt}>ANCIENT RIDDLES</Text>
                        </View>

                        <View style={styles.points}>
                            <Text style={styles.texter}>Chances:<Text style={{ fontFamily: 'Nine' }} >{""}{chances}</Text></Text>
                            <Text style={styles.texter}>Points:<Text>{score}</Text></Text>
                        </View>
                      
                        <View style={styles.container}>

                            {/* First row  */}

                            <Pressable key={111} style={styles.color_cell}>
                                <Text style={styles.question}>{examData[level]['content'][currentQuestionIndex].question}</Text>
                            </Pressable>


                        </View>
                        <Text>
                            {"\n"}
                        </Text>

                        <View style={styles.container}>


                            {showFirstPressable && (
                                <Pressable
                                    onPress={() =>
                                        Mark(examData[level]['content'][currentQuestionIndex].options[0])
                                    }
                                    key={111}
                                    style={styles.color_cell_1}>
                                    <Text style={styles.option_Text}>{examData[level]['content'][currentQuestionIndex]['options'][0]}</Text>
                                </Pressable>)}

                            {showSecondPressable && (
                                <Pressable
                                    onPress={() =>
                                        Mark(examData[level]['content'][currentQuestionIndex].options[1])
                                    }
                                    key={112}
                                    style={[styles.color_cell_2]}
                                >
                                    <Text style={styles.option_Text}>{examData[level]['content'][currentQuestionIndex].options[1]}</Text>
                                </Pressable>
                            )}

                            {showThrirdPressable && (
                                <Pressable
                                    onPress={() =>
                                        Mark((examData[level]['content'][currentQuestionIndex].options[2]))
                                    }
                                    key={113}
                                    style={styles.color_cell_3}>
                                    <Text style={styles.option_Text}>{examData[level]['content'][currentQuestionIndex].options[2]}</Text>
                                </Pressable>)
                            }

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        }
        else {
            return <SafeAreaView >
                <ScrollView showsVerticalScrollIndicator={false} >

                    <View onLayout={() => {
                        console.log('This has mounted')
                        setTimeout(() => {
                            navigation.navigate('Home'); // Replace 'NextScreen' with the name of the screen you want to navigate to.
                        }, 1000);
                    }} style={styles.GameWon}>

                        <Text style={styles.SorryMsg}>5</Text>

                        <Text style={styles.SorryMsg}>congratulations</Text>
                        <Text style={styles.GameLost}>You won</Text>
                    </View>

                </ScrollView>
            </SafeAreaView>
        }
    

};

export default Game;


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#ecf39e',
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

    option_Text:{


        fontSize: 22,
        fontFamily: 'Recoleta',

    },
    texter: {
        fontSize: 22,
        fontFamily: 'Assassin',
    },
    container: {
        width: windowWidth,
        // margin: 1,
        // backgroundColor: '#ffd166',
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
        fontFamily: 'Assassin',
        color: '#37BC9B',
        fontWeight: '600',

    },
    question: {
        fontSize: 25,
        fontFamily: 'Recoleta',

    },
    color_cell: {
        backgroundColor: '#95d5b2',
        display: 'flex',
        borderRadius: 11,
        height: windowHeight / 3,
        width: windowWidth - 12,
        marginLeft: 6,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',

    },

    color_cell_1: {
        backgroundColor: '#6a994e',
        display: 'flex',
        borderRadius: 11,
        marginLeft: 6,
        marginBottom: 6,
        marginRight: 6,
        height: windowWidth / 6,
        width: windowWidth - 12,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,

    },

    color_cell_2: {
        backgroundColor: '#90a955',
        display: 'flex',
        borderRadius: 11,
        marginLeft: 6,
        marginBottom: 6,
        marginRight: 6,
        height: windowWidth / 6,
        width: windowWidth - 12,
        justifyContent: 'center',
        alignItems: 'center',

    },

    color_cell_3: {
        backgroundColor: '#a7c957',
        display: 'flex',
        borderRadius: 11,
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