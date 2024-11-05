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
      paddingLeft: 30,
      marginTop: 40,
    },
    dadosTexto: {
      fontSize: 30,
      //fontFamily: fonts.fontInterSemiBold,
      color: '#164E63',
      marginBottom: 60
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
  
  
    caixaDados: {
      backgroundColor: '#0891B2',
      width: 310,
      marginTop: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
    },
  
    dadosContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 5,
    },
  
    dadosLabel: {
      fontSize: 16,
      color: '#fff',
      //fontFamily: fonts.fontInterMedium
    },
  
  
  
    buttonWrapper: {
      alignItems: 'center',
      width: 280,
  
    },
  
    buttonContainer: {
      marginTop: 70,
      marginBottom: 20,
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
    },
  

  });

export default styles;