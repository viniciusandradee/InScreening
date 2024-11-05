import { StyleSheet } from 'react-native';
import { colors, fonts } from '@/Styles/variables';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    parteInferior: {
      height: 200,
      backgroundColor: '#fff',
    },
  
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  
      marginTop: 25,
    },
    XIcon: {
      width: 30,
      height: 30,
      marginRight: 60,
    },
    logo: {
      width: 220,
      height: 91,
      resizeMode: 'contain',
    },
  
  
    loginInfos: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 50,
      marginRight: 150,
      marginBottom: 30,
    },
    personIcon: {
      width: 28,
      height: 31,
      marginRight: 10,
    },
    textoLogin: {
      fontSize: 26,
      fontWeight: 'semibold',
      //fontFamily: fonts.fontInterMedium,
      color: '#164E63',
    },
  
  
    inputs: {
      borderColor: '#0891B2',
      borderWidth: 2,
      width: 293,
      height: 55,
      borderRadius: 10,
      marginBottom: 10,
      paddingLeft: 10,
      paddingTop: 4,
      //fontFamily: fonts.fontInterMedium,
      fontSize: 15,
    },
    esqueceuSenha: {
      color: '#0891B2',
      fontSize: 16,
      fontWeight: 'medium',
      //fontFamily: fonts.fontInterMedium
  
    },
  
    buttonWrapper: {
      alignItems: 'center',
    },
  
    buttonContainer: {
      marginTop: 40,
      marginBottom: 30,
      backgroundColor: '#0891B2',
      borderRadius: 5,
      width: 180,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      //fontFamily: fonts.fontInterMedium
    },
  
    semConta: {
      fontSize: 17,
      fontWeight: 'medium',
      //fontFamily: fonts.fontInterMedium
    },
    cadastrar: {
      fontSize: 18,
      fontWeight: 'medium',
      color: '#0891B2',
      //fontFamily: fonts.fontInterMedium
    }
  });

export default styles;