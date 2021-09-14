import { StyleSheet } from "react-native";
import { primary, greenLine, background, title, span, white } from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: background
  },
  
  contentInput: {
    marginBottom: 15,
    elevation: 3,
    backgroundColor: white,
  },
  
  button: {
    backgroundColor: primary,
    elevation: 3,
    marginBottom: 20,
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
    marginBottom: 20,
    color: span,
  },

  buttonSignUp: {
    backgroundColor: white,
    elevation: 3,
  },
  viewLogo: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 200,
  },
  contentLogin: {
    flex: 1
  }
});