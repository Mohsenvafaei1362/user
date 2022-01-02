import React,{useEffect , useState} from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {useSelector , useDispatch} from 'react-redux'
import {logout} from '../redux/action/actions'
import {Navbar} from 'react-bootstrap';
import {Button ,Box , Container , Grid , MenuItem  , Menu , styled , Typography} from '@mui/material'
// const useStyles = makeStyles({});

const MenuHeader = () => {


    const stateLogin = useSelector(state =>state.login);
    const dispatch = useDispatch();
    //   const classes = useStyles();


    return (
        <div>
         {/* <Container maxWidth="false" >
               <Grid Container xl={12}>
                  <Box >
                    <Grid container spacing={1}>
                        <Grid item xs={10}  style={{height:'100px' ,background:'#fff' , display:'flex'}}>
                      

                        {stateLogin === '1' ? (
                                <Link to="/logout" style={{ textDecoration: 'none', color: '#333' , fontWeight:'bold' , marginTop:'10px'}} onClick={()=>dispatch(logout())}> 
                                    خروج
                                </Link>
                        ):(null)}
                               
                        </Grid>
                        <Grid item xs={2}  style={{height:'100px' , background:'#6f4343'}}>
                        <Typography
                        variant='h5'
                        component={'h5'}
                        textAlign={'center'}
                        color={'#fff'}
                        marginTop={'15px'}
                        >
                           گروه کارخانجات مقصود
                        </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Container> */}
        </div>
    )
}
export default MenuHeader