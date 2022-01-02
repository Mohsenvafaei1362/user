import React,{useEffect , useState} from 'react'
import {Paper ,Box , Container , Grid , Avatar  , Modal , styled , Typography , CssBaseline , MenuItem , Button, Divider ,Select ,FormControl ,InputLabel  } from '@mui/material'
import img from '../images/person.jpg'
import ok from '../images/ok.png'
import {useSelector , useDispatch} from 'react-redux'
import {login} from '../redux/action/actions'
import axios from 'axios'
import { useParams  , Link} from 'react-router-dom';
import {logout} from '../redux/action/actions'

export const ShowInfo = (props) => {

    const stateLogin = useSelector(state =>state.login);
    const dispatch = useDispatch();

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  

    console.log(stateLogin)
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/users/${id}`).then(response=>{
            const data = response.data;
            setData(data);
        })
    }, [])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const MyComponent = styled('div')({
        color: 'darkslategray',
        backgroundColor: 'aliceblue',
        padding: 8,
        borderRadius: 4,
      });

      const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
   
  
    const style_1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        <>
        <CssBaseline />
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style_1}>
          <Typography id="modal-modal-title" variant="h4" component="h2" textAlign={'center'} color={'#7aa054'}>
              <img src={ok} alt={ok} width={'20%'}/><br/>
            موفق!
          </Typography>
          <Typography id="modal-modal-description" variant='h5' component={'h5'} color={'#677077'} fontWeight={'bold'} textAlign={'center'}  sx={{ mt: 2 }}>
          با موفقیت وارد شدید
          </Typography><br/>
               <Button variant='contained' onClick={()=>handleClose()} style={{margin:'auto' , display:'flex' , width:'30%'}}>ok</Button>
        </Box>
      </Modal>
           <Container maxWidth="false" >
           <Grid container spacing={1}>
                        <Grid item xs={10}  style={{height:'100px' ,background:'#fff' , display:'flex'}}>
                        <FormControl sx={{ m:0.3, minWidth: 100 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">{data.username}</InputLabel>
                            <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            label="Age"
                            >
                            <MenuItem value="">
                                <em>انتخاب</em>
                            </MenuItem>
                            <MenuItem value={10}>
                            <Link to="/logout" style={{ textDecoration: 'none', color: '#333' , fontWeight:'bold' , marginTop:'10px'}} onClick={()=>dispatch(logout())}> 
                                    خروج
                                </Link>
                            </MenuItem>
                            <MenuItem value={21}>پروفایل</MenuItem>
                            <MenuItem value={22}>تغییر رمز عبور</MenuItem>
                            </Select>
                        </FormControl>
                        {/* {stateLogin === '1' ? (
                                <Link to="/logout" style={{ textDecoration: 'none', color: '#333' , fontWeight:'bold' , marginTop:'10px'}} onClick={()=>dispatch(logout())}> 
                                    خروج
                                </Link>
                        ):(null)} */}
                               
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
               <Grid Container xl={12}>
                  <Grid>
                  <div style={{backgroundColor:'#f5f5f5'}}>
                   
                    </div>
                  </Grid>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={10} style={{background:'#8ac0db' , padding:'15px' ,height:'100vh'}}>
                            <h1>Page Show Information Users</h1>
                        </Grid>
                        <Grid item xs={2} style={{background:'#668ea2' , padding:'15px'}}>
                        <Avatar alt="Cindy Baker" src={img} style={{margin:'auto' , width:'20%', height:'10%'}}
                        />
                            <Typography
                             variant='text'
                             component={'text'}
                             textAlign={'center'}
                             color={'#b5b5b7'}
                             fontWeight={'bold'}
                             >
                                 {data.username}<br/>
                                
                             </Typography>
                            <Typography
                             variant='text'
                             component={'p'}
                             textAlign={'left'}
                             color={'#fff'}
                             fontWeight={'bold'}
                             margin={'20px 0'}
                             padding={'15px 0'}
                             fontSize={'15px'}
                             >
                                 <span>Name : </span>{data.username}<br/>
                                 <Divider/>
                                <span>Password :</span>{data.password}<br/>
                                <Divider/>
                                <span>Email :</span>{data.email}<br/>
                                <Divider/>
                                <span>Phone :</span>{data.phone}<br/>
                             </Typography>
                        </Grid>
                    </Grid>
                    </Box>
               </Grid>
           </Container>
        </>
    )
}
