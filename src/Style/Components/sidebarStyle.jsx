// ##############################
// // // Sidebar styles
// #############################

import {
  drawerWidth,
  drawerMiniWidth,
  transition,
  boxShadow,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor
} from "../Genaral/GeneralStyle";

const sidebarStyle = theme => ({
  drawerPaperRTL: {
    [theme.breakpoints.up("md")]: {
      left: "auto !important",
      right: "0 !important"
    },
    [theme.breakpoints.down("sm")]: {
      left: "0  !important",
      right: "auto !important"
    }
  },
  drawerPaper: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1032",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    // overflow: 'auto',
    ...boxShadow,
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "fixed",
      height: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      ...boxShadow,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...transition
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      top: "0"
    }
  },
  blackBackground: {
    color: "#FFFFFF",
    "&:after": {
      background: "#000",
      opacity: ".8"
    }
  },
  blueBackground: {
    color: "#FFFFFF",
    "&:after": {
      background: "#00acc1",
      opacity: ".93"
    }
  },
  whiteBackground: {
    color: "#3C4858",
    "&:after": {
      background: "#FFFFFF",
      opacity: ".93"
    }
  },
  whiteAfter: {
    "&:after": {
      backgroundColor: "hsla(0,0%,71%,.3) !important"
    }
  },
  drawerPaperMini: {
    width: drawerMiniWidth + "px!important"
  },
  logo: {
    padding: "15px 0px",
    margin: "0",
    display: "block",
    position: "relative",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "hsla(0,0%,100%,.3)"
    }
  },
  logoMini: {
    transition: "all 300ms linear",
    opacity: 1,
    float: "left",
    textAlign: "center",
    width: "30px",
    display: "inline-block",
    maxHeight: "30px",
    marginLeft: "22px",
    marginRight: "18px",
    marginTop: "7px",
    color: "inherit"
  },
  logoMiniRTL: {
    float: "right",
    marginRight: "30px",
    marginLeft: "26px"
  },
  logoNormal: {
    ...defaultFont,
    transition: "all 300ms linear",
    display: "block",
    opacity: "1",
    transform: "translate3d(0px, 0, 0)",
    textTransform: "uppercase",
    padding: "5px 0px",
    fontSize: "18px",
    whiteSpace: "nowrap",
    fontWeight: "400",
    lineHeight: "30px",
    overflow: "hidden",
    "&,&:hover,&:focus": {
      color: "inherit"
    }
  },
  logoNormalRTL: {
    textAlign: "right"
  },
  logoNormalSidebarMini: {
    opacity: "0",
    transform: "translate3d(-25px, 0, 0)"
  },
  logoNormalSidebarMiniRTL: {
    transform: "translate3d(25px, 0, 0)"
  },
  img: {
    width: "35px",
    verticalAlign: "middle",
    border: "0"
  },
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    transition: "all 300ms linear"
  },
  list: {
    marginTop: "15px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    color: "inherit",
    "&:before,&:after": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  },
  item: {
    color: "inherit",
    position: "relative",
    display: "block",
    textDecoration: "none",
    margin: "0",
    padding: "0"
  },
  userItem: {
    "&:last-child": {
      paddingBottom: "0px"
    }
  },
  itemLink: {
    paddingLeft: "10px",
    paddingRight: "10px",
    transition: "all 300ms linear",
    margin: "10px 15px 0",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    backgroundColor: "transparent",
    ...defaultFont,
    width: "auto",
    "&:hover": {
      outline: "none",
      backgroundColor: "rgba(200, 200, 200, 0.2)",
      boxShadow: "none"
    },
    "&,&:hover,&:focus": {
      color: "inherit"
    }
  },
  itemIcon: {
    color: "inherit",
    width: "30px",
    height: "24px",
    float: "left",
    position: "inherit",
    top: "3px",
    marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    opacity: "0.8"
  },
  itemIconRTL: {
    float: "right",
    marginLeft: "15px",
    marginRight: "1px"
  },
  itemText: {
    color: "inherit",
    ...defaultFont,
    margin: "0",
    lineHeight: "30px",
    fontSize: "14px",
    transform: "translate3d(0px, 0, 0)",
    opacity: "1",
    transition: "transform 300ms ease 0s, opacity 300ms ease 0s",
    position: "relative",
    display: "block",
    height: "auto",
    whiteSpace: "nowrap"
  },
  userItemText: {
    lineHeight: "22px"
  },
  itemTextRTL: {
    marginRight: "45px",
    textAlign: "right"
  },
  itemTextMini: {
    transform: "translate3d(-25px, 0, 0)",
    opacity: "0"
  },
  itemTextMiniRTL: {
    transform: "translate3d(25px, 0, 0) !important"
  },
  collapseList: {
    marginTop: "0"
  },
  collapseItem: {
    position: "relative",
    display: "block",
    textDecoration: "none",
    margin: "10px 0 0 0",
    padding: "0"
  },
  collapseActive: {
    outline: "none",
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    boxShadow: "none"
  },
  collapseItemLink: {
    transition: "all 300ms linear",
    margin: "0 15px",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "10px",
    backgroundColor: "transparent",
    ...defaultFont,
    width: "auto",
    "&:hover": {
      outline: "none",
      backgroundColor: "rgba(200, 200, 200, 0.2)",
      boxShadow: "none"
    },
    "&,&:hover,&:focus": {
      color: "inherit"
    }
  },
  collapseItemMini: {
    color: "inherit",
    ...defaultFont,
    textTransform: "uppercase",
    width: "30px",
    marginRight: "15px",
    textAlign: "center",
    letterSpacing: "1px",
    position: "relative",
    float: "left",
    display: "inherit",
    transition: "transform 300ms ease 0s, opacity 300ms ease 0s",
    fontSize: "14px"
  },
  collapseItemMiniRTL: {
    float: "right",
    marginLeft: "30px",
    marginRight: "1px"
  },
  collapseItemText: {
    color: "inherit",
    ...defaultFont,
    margin: "0",
    position: "relative",
    transform: "translateX(0px)",
    opacity: "1",
    whiteSpace: "nowrap",
    display: "block",
    transition: "transform 300ms ease 0s, opacity 300ms ease 0s",
    fontSize: "14px"
  },
  collapseItemTextRTL: {
    textAlign: "right"
  },
  collapseItemTextMiniRTL: {
    transform: "translate3d(25px, 0, 0) !important"
  },
  collapseItemTextMini: {
    transform: "translate3d(-25px, 0, 0)",
    opacity: "0"
  },
  caret: {
    marginTop: "13px",
    position: "absolute",
    right: "18px",
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "2px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  userCaret: {
    marginTop: "10px"
  },
  caretRTL: {
    left: "11px",
    right: "auto"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  purple: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: primaryColor,
      ...primaryBoxShadow
    }
  },
  blue: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: infoColor,
      boxShadow:
        "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)"
    }
  },
  green: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: successColor,
      boxShadow:
        "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)"
    }
  },
  orange: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: warningColor,
      boxShadow:
        "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)"
    }
  },
  red: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: dangerColor,
      boxShadow:
        "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)"
    }
  },
  white: {
    "&,&:hover,&:focus": {
      color: "#3C4858",
      backgroundColor: "#FFFFFF",
      boxShadow:
        "0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(60,72,88,.4)"
    }
  },
  rose: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: roseColor,
      boxShadow:
        "0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4)"
    }
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
    overflowScrolling: "touch",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    color: "inherit",
    paddingBottom: "30px"
  },
  sidebarWrapperWithPerfectScrollbar: {
    overflow: "hidden !important"
  },
  user: {
    paddingBottom: "20px",
    margin: "20px auto 0",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      right: "15px",
      height: "1px",
      width: "calc(100% - 30px)",
      backgroundColor: "hsla(0,0%,100%,.3)"
    }
  },
  photo: {
    transition: "all 300ms linear",
    width: "34px",
    height: "34px",
    overflow: "hidden",
    float: "left",
    zIndex: "5",
    marginRight: "11px",
    borderRadius: "50%",
    marginLeft: "23px",
    ...boxShadow
  },
  photoRTL: {
    float: "right",
    marginLeft: "12px",
    marginRight: "24px"
  },
  avatarImg: {
    width: "100%",
    verticalAlign: "middle",
    border: "0"
  },
  userCollapseButton: {
    margin: "0",
    padding: "6px 15px",
    "&:hover": {
      background: "none"
    }
  },
  userCollapseLinks: {
    marginTop: "-4px",
    "&:hover,&:focus": {
      color: "#FFFFFF"
    }
  }
});

export default sidebarStyle;



// WEBPACK FOOTER //
// ./src/assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx