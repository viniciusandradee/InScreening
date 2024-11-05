import { StyleSheet } from 'react-native';
import { colors, fonts } from '@/Styles/variables';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 20,

    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 25,
    },

    ArrowLeftBlue: {
        width: 60,
        height: 35,
        marginRight: 60,
    },

    logo: {
        width: 220,
        height: 91,
        resizeMode: 'contain',
        marginRight: 40,
    },


    textContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 35,
        marginTop: 30,
    },
    olaTexto: {
        fontSize: 30,
        fontWeight: '500',
        //fontFamily: fonts.fontInterSemiBold,
        color: '#164E63',
    },
    iconTriagem: {
        width: 40,
        height: 40,
        marginRight: 15,
    },

    infos: {
        fontSize: 22,
        //fontFamily: fonts.fontInterSemiBold,
        color: '#000',
        marginTop: 25,
        marginLeft: 20,
    },


    caixaDados: {
        backgroundColor: '#0891B2',
        width: 370,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },

    dadosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 7,
    },

    dadosLabel: {
        fontSize: 16,
        color: '#fff',
        //fontFamily: fonts.fontInterMedium
    },
    data: {
        fontSize: 16,
        //fontFamily: fonts.fontInterMedium,
        color: '#09445B',

    },

    inputs: {
        borderColor: '#0891B2',
        borderWidth: 2,
        width: 330,
        height: 50,
        borderRadius: 10,
        //fontFamily: fonts.fontInterMedium,
        fontSize: 15,
        paddingLeft: 7,

    },

    inputsOutros: {
        borderColor: '#0891B2',
        borderWidth: 2,
        width: 330,
        height: 80,
        borderRadius: 10,
        marginBottom: 10,
        //fontFamily: fonts.fontInterMedium,
        fontSize: 15,
        paddingLeft: 7,
        marginTop: 30,
    },

    middleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },

    hospitalView: {
        borderColor: '#0891B2',
        borderWidth: 2,
        borderRadius: 8,
    },

    mapa: {
        marginTop: 30,
        width: 350,
        height: 200,
        borderWidth: 1,
        borderColor: '#000'
    },

    borderMap: {

        width: '100%',
        marginTop: 30,
        borderWidth: 2,
        borderColor: '#0891B2',
        borderRadius: 4,
    },



    sintomasTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 40,
        
    },

    sintomasContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        
    },

    sintomaContainer: {
        marginBottom: 10,
        flex: 1,
        
    },

    buttonWrapper: {
        alignItems: 'center',
        width: 280,
        

    },

    buttonContainer: {
        marginTop: 70,
        marginBottom: 100,
        backgroundColor: '#164E63',
        borderRadius: 10,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        //fontFamily: fonts.fontInterMedium
    },
    setaDireita: {
        width: 35,
        height: 35
    }

});


export default styles;