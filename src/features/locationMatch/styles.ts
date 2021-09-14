import { StyleSheet, Dimensions } from 'react-native';
import { primary } from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  ViewButton: {
    position: 'absolute',
    width: '100%',
    zIndex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 20
  },
  button: {
    backgroundColor: primary,
    borderRadius: 30,
    width: '80%',
    elevation: 3,
  }
})