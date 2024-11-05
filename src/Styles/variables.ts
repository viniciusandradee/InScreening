import { StyleSheet } from 'react-native';



export const colors = {
    primaryColor: '#fff',
    secondaryColor: '#000',
    blueInput: '#0891B2',
};

export const fonts = {
    primaryFont: 'Arial',
    secondaryFont: 'Verdana',
    
    fontQuando: 'Quando-Regular',

    fontOpenSansRegular: 'OpenSans-Regular',
    fontOpenSansSemiBold: 'OpenSans-SemiBold',
    fontOpenSansBold: 'OpenSans-Bold',

    fontInterRegular: 'Inter-Regular',
    fontInterMedium: 'Inter-Medium',
    fontInterSemiBold: 'Inter-SemiBold',
    fontInterBold: 'Inter-Bold',
};



const globalStyles = StyleSheet.create({
    backgroudImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%"
    },
});

export default globalStyles; 