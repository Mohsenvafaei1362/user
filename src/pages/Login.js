import React,{useEffect , useState} from 'react'
import {Typography ,Button , Container , Grid , CssBaseline  , TextField , Modal , Box} from '@mui/material'
import axios from 'axios'
import logo from '../images/logo.png'
import {useNavigate} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux'
import {login} from '../redux/action/actions'

export const Login = () => {

    const stateLogin = useSelector(state =>state.login);
    const dispatch = useDispatch();
  

    console.log(stateLogin)
    const [data, setData] = useState([]);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  
 
    const validation = (e) =>{
        e.preventDefault();
        axios.get(`https://fakestoreapi.com/users/`).then(response=>{
            const data = response.data;
            setData(data);
            dispatch(login());
           
      }).catch(err=>{
          console.log(err)
      })
    }
    return (
        <>
        <CssBaseline />
            <div style={{backgroundColor:'#f5f5f5' , height:'100vh' , display:'flex' , justifyContent:'center', alignItems:'center'}}>
              <Container maxWidth="xl" >
                <Typography
                  variant='h5'
                  component={'div'}
                  textAlign={'center'}
                  fontWeight={'bold'}
                  color={'#f8b010'}
                  margin={'15px 0'}
                >
                    گروه کارخانجات مقصود
                </Typography>
                  <Grid Container spacing={1} >
                        <Grid xl={4} style={{margin:'auto'  , padding:'30px' , borderRadius:'15px' , background:'#fff'}}  sx={{ boxShadow: 3 }}>
                                <TextField fullWidth label="نام کاربری" id="fullWidth"
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }} variant="standard" />
                            <br/><br/>
                            <TextField fullWidth label="رمز عبور" id="fullWidth"
                                type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} variant="standard"
                                />
                                <br/><br/>
                                <Button
                                variant="contained"
                                className="m-1"
                                style={{width:'200px' , fontWeight:'bold' , fontSize:'16px'}}
                            onClick={validation}
                            >ورود به پنل کاربری</Button><br/><br/>
              <img src={logo} alt={logo} width={'23%'}/>
                        </Grid>
                  </Grid>
              </Container>
            {data.map((info) => (
                <div key={info.id}>
                    {info.username === userName && info.password === password ? (navigate(`/ShowInfo/${info.id}`)):(console.log('not ok'))}
                </div>
            ))}
            </div>
        </>
    )
}
