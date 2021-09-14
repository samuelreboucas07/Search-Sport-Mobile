import { StyleSheet } from 'react-native';
import { primary, error } from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    marginBottom: 40,
  },
  buttonParticipate: {
    backgroundColor: primary,
  },
  buttonCancel: {
    borderColor: 'red',
    borderWidth: 2,
    marginTop: 10
  },
  contentButton: {
    marginTop: 30
  },
  contentImage: {
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
  },
  nameMatch: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  amount: {
    color: error,
  },
  titleItem: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  contentInfo: {
    backgroundColor: '#f2f3f2',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    marginBottom: 7,
  },
  contentDate: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});