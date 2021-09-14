import { StyleSheet } from 'react-native';
import { background } from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
  
  content: {
    margin: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: background,
  },
  
  contentCards: {
    flex: 1,
    marginTop: 12,
  },

  warningEmpty: {
    margin: 20,
    fontWeight: 'bold'
  }
});