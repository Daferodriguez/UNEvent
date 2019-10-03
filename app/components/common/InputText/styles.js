import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  input:{
    width: WIDTH - 55,
    height: 40,
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 25,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal:25,
    marginVertical:  7
  }
});