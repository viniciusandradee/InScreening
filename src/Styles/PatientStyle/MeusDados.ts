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

    logo: {
        width: 220,
        height: 91,
        resizeMode: 'contain',
    },


    textContainer: {
        width: '100%',
        paddingLeft: 30,
        marginTop: 40,
    },
    dadosTexto: {
        fontSize: 30,
        //fontFamily: fonts.fontInterSemiBold,
        color: '#164E63',
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
        width: 375,
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },

    dadosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
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

    editIcon: {
        width: 15,
        height: 14,
        tintColor: '#fff',
    },
    lockIcon: {
        width: 15,
        height: 18,
        tintColor: '#fff',
    },


    logout: {
        marginTop: 20,
        backgroundColor: colors.blueInput,

        textAlign: 'center',
        alignItems: 'center',

        fontSize: 20,
        color: '#fff',

        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '15%',
        paddingRight: '15%',
        
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
    }
});

export default styles;