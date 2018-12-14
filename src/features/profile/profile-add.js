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
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
      padding: '0 10px 10px 10px',
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
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [addressDistrict, setAddressDistrict] = useState('');
  const [addressNo, setAddressNo] = useState('');
  const [addressWard, setAddressWard] = useState('');
  const [dayOfFaith, setDayOfFaith] = useState('');
  const [dayOfJoin, setDayOfJoin] = useState('');
  const [job, setJob] = useState('');
  const [facebookId, setFacebookId] = useState('');


  const listQuery = async () => {
    console.log('Listing profile...');
    const allProfiles = await API.graphql(graphqlOperation(listVcProfiles));
    alert(JSON.stringify(allProfiles));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log(ev.target)
  }

  const [openGender, setOpenGender] = useState(true);


  return (
    <main>
      <Paper className={classes.main} >
        <Typography component="h1" variant="h6">
          Hồ Sơ Ban Viên
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>

          <FormControl margin="normal" required fullWidth>
            <InputLabel>Họ của thành viên</InputLabel>
            <Input
              id="lastName"
              name="lastName"
              autoFocus
              onChange={ev => setFirstName(ev.target.value)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel>Tên của thành viên</InputLabel>
            <Input
              id="firstName"
              name="firstName"
              onChange={ev => setLastName(ev.target.value)}
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
             <TextField
                id = "dateOfBirth"
                label = "Ngày sinh"
                type ="date"
                defaultValue = "1994-01-01"                
                InputLabelProps={{
                  shrink:true,
                }}
                onChange={ev=> setDateOfBirth(ev.target.value)}
             />              
          </FormControl>

        

          <FormControl margin="normal" fullWidth>
            <InputLabel>Số điện thoại</InputLabel>
            <Input
              id="phoneNumber"
              onChange={ev => setPhoneNumber(ev.target.value)}
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
              <InputLabel>Email</InputLabel>
              <Input
                id="email"
                type="email"
                onChange={ev => setEmail(ev.target.value)}
              />
          </FormControl>           

            <FormControl margin="normal" fullWidth>
              <InputLabel>Địa chỉ nhà</InputLabel>
              <Input
                id="addressNo"
                onChange={ev => setAddressNo(ev.target.value)}
              />
          </FormControl> 
            
          <FormControl margin="normal" fullWidth>
              <InputLabel>Phường</InputLabel>
              <Input
                id="addressWard"
                onChange={ev => setAddressWard(ev.target.value)}
              />
          </FormControl>

          <FormControl margin="normal" fullWidth>
              <InputLabel>Quận</InputLabel>
              <Input
                id="addressDistrict"
                onChange={ev => setAddressDistrict(ev.target.value)}
              />
          </FormControl>

           <FormControl margin="normal" fullWidth>
              <InputLabel>Facebook Id</InputLabel>
              <Input
                id="facebookId"
                onChange={ev => setFacebookId(ev.target.value)}
              />
          </FormControl> 

           <FormControl margin="normal" fullWidth>
             <TextField
                id = "dayOfFaith"
                label = "Năm tin chúa"
                type ="date"
                defaultValue = "2010-01-01"                
                InputLabelProps={{
                  shrink:true,
                }}
                onChange={ev=> setDayOfFaith(ev.target.value)}
             />              
          </FormControl>

           <FormControl margin="normal" fullWidth>
             <TextField
                id = "dayOfJoin"
                label = "Năm gia nhập"
                type ="date"
                defaultValue = "2010-01-01"                
                InputLabelProps={{
                  shrink:true,
                }}
                onChange={ev=> setDayOfJoin(ev.target.value)}
             />              
          </FormControl>

          <FormControl margin="normal" fullWidth>
              <InputLabel>Công việc</InputLabel>
              <Input
                id="job"
                onChange={ev => setJob(ev.target.value)}
              />
          </FormControl> 
        

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
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
