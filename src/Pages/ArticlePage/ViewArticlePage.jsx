import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Moment from "react-moment"
import withStyles from "@material-ui/core/styles/withStyles"
import Delete from "@material-ui/icons/Delete"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Edit from "@material-ui/icons/Edit"
import Skeleton from "@material-ui/lab/Skeleton"
import CustomInput from "../../Components/CustomInput/CustomInput"
import GridContainer from "../../Components/Grid/GridContainer"
import GridItem from "../../Components/Grid/GridItem"
import Button from "../../Components/CustomButtons/Button"
import Card from "../../Components/Card/Card"
import CardBody from "../../Components/Card/CardBody"
import CardFooter from "../../Components/Card/CardFooter"
import feedStyle from "../../Style/Pages/feedStyle"
import { ArticleAction, GeneralAction } from "../../redux/actions"
import { AuthToken } from "../../Utils"

const propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getArticle: PropTypes.func.isRequired,
  getInputData: PropTypes.func.isRequired,
  editArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  articleData: PropTypes.oneOfType([PropTypes.object]),
  editData: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]).isRequired
}

const defaultProps = {
  articleData: {},
  editData: {}
}

const mapStateToProps = state => ({
  articleData: state.article.specificArticleData.data || {},
  editData: state.article.editedArticleData || {},
  error: state.article.error || {}
})

const mapActionCreators = {
  getArticle: ArticleAction.getArticle,
  getInputData: GeneralAction.getInputData,
  editArticle: ArticleAction.editArticle,
  deleteArticle: ArticleAction.deleteArticle
}

class ViewArticlePage extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      openDeleteDl: false
    }
  }

  componentDidMount() {
    const { getArticle, match } = this.props
    const { id } = match.params
    getArticle(id)
  }

  componentDidUpdate(prevProps) {
    const { editData, getArticle, match } = this.props
    const { id } = match.params

    if (prevProps.editData !== editData) {
      getArticle(id)
    }
  }

  handleInput = (name, value) => {
    const { getInputData } = this.props

    getInputData({
      key: name,
      value
    })
  }

  handleClickOpen = () => {
    const { articleData } = this.props
    this.setState({
      open: true,
      openDeleteDl: false,
      CurrentTitle: articleData.title,
      CurrentArticle: articleData.article
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
      openDeleteDl: false
    })
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    })

    this.handleInput(name, value)
  }

  handleSubmit = () => {
    const { editArticle, articleData } = this.props
    const { id } = articleData
    editArticle(id)
    this.handleClose()
  }

  handleDeleteButton = () => {
    this.setState({
      openDeleteDl: true,
      open: false
    })
  }

  handleDelete = () => {
    const { deleteArticle, match } = this.props
    const { id } = match.params
    deleteArticle(id)
  }

  render() {
    const { classes, articleData } = this.props
    const { article, title, createdOn, authorId } = articleData
    const { open, openDeleteDl, CurrentTitle, CurrentArticle } = this.state
    const author = AuthToken.getConfirm().userId === authorId

    return (
      <div>
        <div>
          <Dialog
            open={open || openDeleteDl}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Article</DialogTitle>
            {open && (
              <>
                <DialogContent>
                  <DialogContentText>
                    You Can Edit Your Article
                  </DialogContentText>
                  <CustomInput
                    labelText="Article Title"
                    id="articleTitle"
                    name="articleTitle"
                    onChange={this.handleInput}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: CurrentTitle,
                      type: "text",
                      name: "articleTitle",
                      onChange: this.handleChange("CurrentTitle")
                    }}
                  />
                  <CustomInput
                    labelText="Article Title"
                    id="CurrentArticle"
                    name="CurrentArticle"
                    onChange={this.handleInput}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      value: CurrentArticle,
                      name: "article",
                      onChange: this.handleChange("CurrentArticle"),
                      multiline: true,
                      rows: 8
                    }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.handleSubmit} color="primary">
                    EDIT
                  </Button>
                </DialogActions>
              </>
            )}
            {openDeleteDl && open === false && (
              <>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are You Sure You Want Delete This Article This cannot be
                    Undone
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    NO
                  </Button>
                  <Button onClick={this.handleDelete} color="primary" autoFocus>
                    YES
                  </Button>
                </DialogActions>
              </>
            )}
          </Dialog>
        </div>

        <GridContainer justify="center">
          {article ? (
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h3 className={classes.center}>{title}</h3>
                  <div>{article}</div>
                </CardBody>
                <CardFooter product>
                  <div className={classes.date}>
                    <Moment fromNow>{createdOn}</Moment>
                  </div>
                  {author && (
                    <div>
                      <Button
                        color="primary"
                        round
                        className={classes.marginRight}
                        onClick={this.handleClickOpen}
                      >
                        <Edit className={classes.icons} /> EDIT
                      </Button>
                      <Button
                        color="primary"
                        round
                        className={classes.marginRight}
                        onClick={this.handleDeleteButton}
                      >
                        <Delete className={classes.icons} /> DELETE
                      </Button>
                    </div>
                  )}
                </CardFooter>
              </Card>
            </GridItem>
          ) : (
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
          )}
        </GridContainer>
      </div>
    )
  }
}

ViewArticlePage.propTypes = propTypes
ViewArticlePage.defaultProps = defaultProps

export default connect(
  mapStateToProps,
  mapActionCreators
)(withStyles(feedStyle)(ViewArticlePage))
