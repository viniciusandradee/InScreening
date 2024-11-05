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
        flex: 1,
        marginTop: 30,
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

    CadastroTexto: {
        fontSize: 30,
        fontWeight: 'semibold',
        //fontFamily: fonts.fontInterSemiBold,
        color: '#164E63',
        marginBottom: 20,
    },
    DadosPessoais: {
        fontSize: 20,
        fontWeight: 'medium',
        //fontFamily: fonts.fontInterMedium,
        color: '#000',
        marginBottom: 20,
    },
    Endereco: {
        fontSize: 20,
        fontWeight: 'medium',
        //fontFamily: fonts.fontInterMedium,
        color: '#000',
        marginTop: 20,
        marginBottom: 20,
    },

    inputs: {
        borderColor: '#0891B2',
        borderWidth: 2,
        width: 330,
        height: 50,
        borderRadius: 10,
        marginBottom: 10,
        //fontFamily: fonts.fontInterMedium,
        fontSize: 15,
        paddingLeft: 7,
    },

    inputsDuplosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 330,
    },
    inputsDuplos: {
        borderColor: '#0891B2',
        borderWidth: 2,
        width: '48%',
        height: 50,
        borderRadius: 10,
        marginBottom: 10,
        //fontFamily: fonts.fontInterMedium,
        fontSize: 15,
        paddingLeft: 7,
    },

    buttonWrapper: {
        alignItems: 'center',
    },

    buttonContainer: {
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: '#164E63',
        borderRadius: 5,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        //fontFamily: fonts.fontInterMedium
    },

    loginExistente: {
        fontSize: 15,
        fontWeight: 'medium',
        //fontFamily: fonts.fontInterMedium
    },
    logar: {
        fontSize: 16,
        fontWeight: 'medium',
        color: '#0891B2',
        //fontFamily: fonts.fontInterMedium,
    }
});

export default styles;