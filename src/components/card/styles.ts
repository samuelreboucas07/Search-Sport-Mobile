import { StyleSheet } from 'react-native';
import { attention, error, greenLine } from '../../constants/color';

export const styles = StyleSheet.create({
  rowTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  commentAmount: {
    fontSize: 15,
    color: greenLine,
    fontWeight: 'bold'
  },

  card: {
    marginBottom: 15,
  },

  buttonCancel: {
    width: '100%',
    backgroundColor: error,
  },

  image: {
    margin: 10,
  },

  date: {
    fontWeight: 'bold',
    color: attention
  }
});