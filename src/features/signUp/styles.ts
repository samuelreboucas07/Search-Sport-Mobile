import { StyleSheet } from 'react-native';
import { background, primary, white } from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
    backgroundColor: background
  },

  contentInput: {
    marginBottom: 15,
    elevation: 3,
    backgroundColor: white
  },
  
  button: {
    backgroundColor: primary,
    elevation: 3,
    marginBottom: 20,
    marginTop: 30
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 75,
    resizeMode: 'contain',

  },
  contentImage: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    elevation: 3,
    position: 'absolute',
  },
  buttonChooseImage: {
    marginLeft:'auto',
    marginRight:'auto',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
});