import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {API, graphqlOperation} from 'aws-amplify';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {listVcProfiles} from '../../graphql/queries';

const styles = theme => ({
  main: {
    with: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const Profile = ({classes}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const listQuery = async () => {
    console.log('Listing profile...');
    const allProfiles = await API.graphql(graphqlOperation(listVcProfiles));
    alert(JSON.stringify(allProfiles));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log(ev.target)
  }

  return (
    <main>
      <Paper className={classes.main}>
        <Typography component="h1" variant="h6">
          Hồ Sơ Ban Viên {firstName}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel>Họ và tên lót</InputLabel>
            <Input
              id="lastName"
              name="lastName"
              autoFocus
              onChange={ev => setFirstName(ev.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel>Tên</InputLabel>
            <Input
              id="firstName"
              name="firstName"
              onChange={ev => setLastName(ev.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel>Số điện thoại</InputLabel>
            <Input
              id="phoneNumber"
              onChange={ev => setPhoneNumber(ev.target.value)}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth>
            Lưu
          </Button>
        </form>
      </Paper>
    </main>
  );
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
