import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Moment from "react-moment"
import withStyles from "@material-ui/core/styles/withStyles"
import ArtTrack from "@material-ui/icons/ArtTrack"
import SubjectIcon from "@material-ui/icons/Subject"
import NotesIcon from "@material-ui/icons/Notes"
import Skeleton from "@material-ui/lab/Skeleton"
import GridContainer from "../../Components/Grid/GridContainer"
import GridItem from "../../Components/Grid/GridItem"
import Button from "../../Components/CustomButtons/Button"
import Card from "../../Components/Card/Card"
import CardHeader from "../../Components/Card/CardHeader"
import CardIcon from "../../Components/Card/CardIcon"
import CardBody from "../../Components/Card/CardBody"
import CardFooter from "../../Components/Card/CardFooter"
import feedStyle from "../../Style/Pages/feedStyle"

import { FeedAction } from "../../redux/actions"

const propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getFeed: PropTypes.func.isRequired,
  feedData: PropTypes.oneOfType([PropTypes.object])
}

const defaultProps = {
  feedData: {}
}

const mapStateToProps = state => ({
  feedData: state.feed.feedData || {},
  error: state.feed.error || {}
})

const mapActionCreators = {
  getFeed: FeedAction.feed
}

class FeedPage extends React.Component {
  componentDidMount() {
    const { getFeed } = this.props
    getFeed()
  }

  render() {
    const { classes, feedData } = this.props
    const { status } = feedData

    return (
      <div>
        {status === "success" ? (
          <>
            {feedData.data.map(prop => {
              if (prop.article) {
                return (
                  <div key={prop.id * 999}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={9}>
                        <Card>
                          <CardHeader color="success" icon>
                            <CardIcon color="success">
                              <SubjectIcon />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>
                              {prop.title}
                            </h4>
                          </CardHeader>
                          <CardBody>{prop.article}</CardBody>
                          <CardFooter product>
                            <div className={classes.date}>
                              <Moment fromNow>{prop.createdOn}</Moment>
                            </div>
                            <Link to={`/home/pages/articles/${prop.id}`}>
                              <Button
                                color="primary"
                                round
                                className={classes.marginRight}
                              >
                                <NotesIcon className={classes.icons} /> MORE
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    </GridContainer>
                    <br /> <br /> <br />
                  </div>
                )
              }
              return (
                <div key={prop.id}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={9}>
                      <Card product className={classes.cardHover}>
                        <CardHeader image className={classes.cardHeaderHover}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img src={prop.imageUrl} alt="..." />
                          </a>
                        </CardHeader>
                        <CardBody>
                          <div className={classes.cardHoverUnder}>
                            <Link to={`/home/pages/gifs/${prop.id}`}>
                              <Button color="transparent" simple>
                                <ArtTrack className={classes.underChartIcons} />
                                view
                              </Button>
                            </Link>
                          </div>
                          <h4 className={classes.cardProductTitle}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              {prop.title}
                            </a>
                          </h4>
                        </CardBody>
                        <CardFooter product>
                          <div className={classes.price}>
                            <Moment fromNow>{prop.createdOn}</Moment>
                          </div>
                        </CardFooter>
                      </Card>
                    </GridItem>
                  </GridContainer>
                  <br /> <br /> <br />
                </div>
              )
            })}
          </>
        ) : (
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Skeleton variant="rect" height={300}>
                <Skeleton height={18} width="25%" className={classes.center} />
                <Skeleton height={18} style={{ marginBottom: 8 }} />
                <Skeleton height={18} style={{ marginBottom: 8 }} />
                <Skeleton height={18} style={{ marginBottom: 8 }} />
                <Skeleton height={18} style={{ marginBottom: 8 }} />
                <Skeleton height={18} style={{ marginBottom: 8 }} />
                <Skeleton height={18} style={{ marginBottom: 8 }} />
                <Skeleton height={18} width="80%" />
              </Skeleton>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Skeleton variant="rect" height={300} style={{ marginTop: 20 }}>
                <Skeleton
                  variant="rect"
                  height={200}
                  style={{ marginLeft: 10, marginRight: 10 }}
                />
                <Skeleton
                  height={18}
                  style={{ marginLeft: 10, marginRight: 10, marginBottom: 8 }}
                />
                <Skeleton
                  height={18}
                  style={{ marginLeft: 10, marginRight: 10, marginBottom: 8 }}
                />
                <Skeleton
                  height={18}
                  style={{ marginLeft: 10, marginRight: 10, marginBottom: 8 }}
                />
                <Skeleton height={18} width="80%" />
              </Skeleton>
            </GridItem>
          </GridContainer>
        )}
      </div>
    )
  }
}

FeedPage.propTypes = propTypes
FeedPage.defaultProps = defaultProps

export default connect(
  mapStateToProps,
  mapActionCreators
)(withStyles(feedStyle)(FeedPage))
