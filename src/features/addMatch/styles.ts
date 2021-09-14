import { StyleSheet } from "react-native";
import { background, primary, white } from "../../constants/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    padding: 25,
    backgroundColor: background,
  },
  title: {
  },
  contentInput: {
    marginBottom: 10,
    elevation: 3,
    backgroundColor: white,
    height: 50,
  },

  contentInputRow: {
    marginBottom: 10,
    elevation: 3,
    backgroundColor: white,
    height: 50,
    width: '45%'
  },

  datePicker: {
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: white,
    elevation: 3,
  },
  dateInput: {
    marginLeft: 36,
    borderWidth: 0,
  },
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0,
  },
  dateItem: {
    backgroundColor: white,
    width: '100%',
    marginLeft: 0,
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
    elevation: 3
  },
  contentImage: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  buttonChooseImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: primary,
    elevation: 3,
    borderRadius: 30,
    marginTop: 15,
    opacity: 0.7,
  },
  buttonSubmit: {
    backgroundColor: white,
    elevation: 3,
    height: 50,
    justifyContent: 'center'
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75
  }
});