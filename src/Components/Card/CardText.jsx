/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons

// core components
import cardTextStyle from "../../Style/Components/cardTextStyle"

function CardText({ ...props }) {
  const { classes, className, children, color, ...rest } = props
  const cardTextClasses = classNames({
    [classes.cardText]: true,
    [classes[`${color}CardHeader`]]: color,
    [className]: className !== undefined
  })
  return (
    <div className={cardTextClasses} {...rest}>
      {children}
    </div>
  )
}

CardText.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ])
}

export default withStyles(cardTextStyle)(CardText)
