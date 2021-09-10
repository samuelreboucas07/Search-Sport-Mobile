import { StyleSheet } from "react-native";
import { primary, greenLine, title, span } from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 25,
  },
  
  contentInput: {
    marginBottom: 15,
    elevation: 3
  },
  
  button: {
    backgroundColor: primary,
    elevation: 3
  },

  title: {
    paddingBottom: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: title,
    letterSpacing: 1
  },
  
  subTitle: {
    fontSize: 14,
    color: primary,
    fontWeight: 'bold'
  },

  legend: {
    marginTop: 20,
    color: span,
  }
});