import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import CreateTeam from './components/CreateTeam'
import DashTeam from './components/DashTeam'
import DashEditor from './components/DashEditor'

const styles = theme => ({
  root: {
    display: 'flex'
  },
  card: {
    display: 'flex',
    width: '100%'
  },
  cardDetails: {
    display: 'flex',
    flex: 1
  },
  cardContent: {
    flex: 1
  },
  cardMedia: {
    flex: 1,
    width: 160,
    height: 160,
    justifyContent: 'flex-start'
  },
  buttonRight: {
    justifyContent: 'flex-end'
  },
  aawebMedia: {
    width: '100%',
    height: 320
  }
})

export class Overview extends Component {
  render () {
    const { classes } = this.props
    return (
      <Grid container spacing={24}>
        <Grid container spacing={24}>
          <Grid item>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent className={classes.createCardContent}>
                  <CreateTeam classes={classes} />
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
        <DashTeam classes={classes} />
        <DashEditor classes={classes} />
      </Grid>
    )
  }
}
Overview.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Overview)
