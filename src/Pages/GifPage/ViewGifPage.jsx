import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Moment from "react-moment"
import withStyles from "@material-ui/core/styles/withStyles"
import Delete from "@material-ui/icons/Delete"
import GridContainer from "../../Components/Grid/GridContainer"
import GridItem from "../../Components/Grid/GridItem"
import Button from "../../Components/CustomButtons/Button"
import Card from "../../Components/Card/Card"
import CardHeader from "../../Components/Card/CardHeader"
import CardBody from "../../Components/Card/CardBody"
import CardFooter from "../../Components/Card/CardFooter"
import feedStyle from "../../Style/Pages/feedStyle"
import { GifAction } from "../../redux/actions"

const propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getGif: PropTypes.func.isRequired,
  gifData: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]).isRequired
}

const defaultProps = {
  gifData: {}
}

const mapStateToProps = state => ({
  gifData: state.gif.specificGifData.data || {},
  error: state.gif.error || {}
})

const mapActionCreators = {
  getGif: GifAction.getGif
}

class ViewGifPage extends React.PureComponent {
  componentDidMount() {
    const { getGif, match } = this.props
    const { id } = match.params
    getGif(id)
  }

  render() {
    const { classes, gifData } = this.props
    const { imageUrl, title, createdOn } = gifData

    return (
      <div>
        <br />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={imageUrl} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Button simple color="info">
                    <Delete className={classes.underChartIcons} />
                    Delete
                  </Button>
                </div>
                <h4 className={classes.cardProductTitle}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    {title}
                  </a>
                </h4>
              </CardBody>
              <CardFooter product>
                <div className={classes.price}>
                  <Moment fromNow>{createdOn}</Moment>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

ViewGifPage.propTypes = propTypes
ViewGifPage.defaultProps = defaultProps

export default connect(
  mapStateToProps,
  mapActionCreators
)(withStyles(feedStyle)(ViewGifPage))