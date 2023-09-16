import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnImg: {
    height: "50%",
    marginBottom:"6%",
    objectFit: "contain",
  },
  btn: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    paddingTop: 20,
    paddingBottom: 20,
    border: "none",
    borderRadius:SIZES.medium,
    display: "flex",
    alignItems: "center",
    
   
    
  },
  icon:{
    height: 18,
    width:18,
  },
  normalFlex: {
    display: "flex",
    gap:3
  },
  btnText:{
    color: "white",
    fontSize:SIZES.medium
  },
  footer: {
    
    width: "100%",
    display: "flex",
    paddingBottom:20,
    paddingLeft: 20,

    paddingRight: 20,
    border: "none",
    backgroundColor: COLORS.lightWhite2,
    borderTopEndRadius: SIZES.xLarge,
    borderTopStartRadius: SIZES.xLarge,

    
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,
    paddingBottom:20
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontWeight: "800",
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginTop: 20,
    paddingBottom:10

  },
});
export default styles;
