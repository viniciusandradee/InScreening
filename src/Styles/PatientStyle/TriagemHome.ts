import { StyleSheet } from 'react-native';
import { colors, fonts } from '@/Styles/variables';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingBottom: 4,
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
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 55,
      marginTop: 60,
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
      marginRight: 5,
    },
    iconesInput: {
      width: 30,
      height: 30,
      marginRight: 20,
      marginLeft: 20,
    },
    allButtons: {
      marginTop: 30,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: '#0891B2',
      borderRadius: 5,
      width: 300,
      height: 60,
      paddingHorizontal: 0,
    },
    buttonContainer2: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30,
      backgroundColor: '#0891B2',
      borderRadius: 5,
      width: 300,
      height: 60,
      justifyContent: 'center'
    },
    buttonText: {
      color: '#fff',
      fontSize: 26,
      fontWeight: '400',
      //fontFamily: fonts.fontInterMedium
    },

  });
  
export default styles;