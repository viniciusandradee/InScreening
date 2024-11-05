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
      marginRight: 15,
    },
  
  
    caixaDados: {
      backgroundColor: '#0891B2',
      width: 370,
      marginTop: 40,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
    },

    caixaNome: {
      backgroundColor: '#0891B2',
      width: 350,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      borderRadius: 8,
    },

    dadosNome: {
      color: '#FFFFFF', 
      fontSize: 18,
      textAlign: 'center',
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
    data: {
      fontSize: 16,
      //fontFamily: fonts.fontInterMedium,
      color: '#09445B',
  
    },
  
    horario: {
      marginRight: 60,
    },

  });
  
export default styles;