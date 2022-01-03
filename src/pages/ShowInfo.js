import React,{useEffect , useState} from 'react'
import {Paper ,Box , Container , Grid , Avatar  , Modal , styled , Typography , CssBaseline , MenuItem , Button, Divider ,Select ,FormControl ,InputLabel  , TextField} from '@mui/material'
import img from '../images/person.jpg'
import ok from '../images/ok.png'
import {useSelector , useDispatch} from 'react-redux'
import axios from 'axios'
import { useParams  , Link} from 'react-router-dom';
import {logout , login , modalmodify} from '../redux/action/actions'
import { MenuRight } from './MenuRight'
import {importCartabl , exporttcartabl} from '../redux/action/actions'
import { ImportCartabl } from './ImportCartabl'
import { ExportCartabl } from './ٍExportCartabl'
import { Modify } from './Modify'

export const ShowInfo = (props) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [confirm, setConfirm] = useState(false);
    const stateLogin = useSelector(state =>state.login);
    const stateimport = useSelector(state =>state.import);
    const stateexport = useSelector(state =>state.export);
    const statemodify = useSelector(state =>state.modify);
    const dispatch = useDispatch();

   
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  

    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/users/${id}`).then(response=>{
            const data = response.data;
            setData(data);
        });
    }, [])

const modify = () =>{
  dispatch(modalmodify());
}
     

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
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

    const handletest = () =>{
      alert('test')
      setConfirm(true);
      setOpen(false);
    }
    
    
    return (
        <>
        <CssBaseline />
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
                            <MenuItem value={22}>
                            <Button onClick={handleOpen}>تغییر رمز عبور</Button>
                            </MenuItem>
                            </Select>
                        </FormControl>
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
                            {/* <h1>Page Show Information Users</h1> */}
                            {stateimport === '1' ? <ImportCartabl /> : null}
                            {stateexport === '1' ? <ExportCartabl /> : null}
                            {stateexport === '0' && stateimport === '0' ? <h1>Page Show Information Users</h1> : null}
                                
                        </Grid>
                        <Grid item xs={2} style={{background:'#668ea2' , padding:'15px'}}>
                        <Avatar alt="Cindy Baker" src={img} style={{margin:'5px auto' , width:'22%', height:'7%'}}
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
                             <MenuRight />
                        </Grid>
                    </Grid>
                    </Box>
               </Grid>
           </Container>
           <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h6" textAlign={'right'}>
              فرم تغییر پسورد
              </Typography>
              <TextField fullWidth label=" رمز عبور قدیم" id="fullWidth"
                      type="password"
                       onChange={(e) => {
                      setPassword(e.target.value);
                  }} variant="standard"
                      />
                      <div style={{display:'flex' , justifyContent:'space-around'}}>
                      <TextField fullWidth label=" رمز عبور جدید" id="fullWidth"
                      type="password"
                      sx={{margin:'2px'}}
                       onChange={(e) => {
                      setPassword(e.target.value);
                  }} variant="standard"
                      />
              <TextField fullWidth label="  تکرار رمز عبور جدید " id="fullWidth"
                      type="password"
                      sx={{margin:'2px'}}
                       onChange={(e) => {
                        setconfirmPassword(e.target.value); 
                      }} variant="standard"
                      />
                      </div><br/>
                      {password > '0' && confirmPassword > '0'  ? (

                      password !== confirmPassword ? <h6 style={{textAlign:'right' , color:'red' , fontWeight:'bold'}}>!رمز عبور مطابقت ندارد</h6>  : null
                      ):null}
                      {/* {confirm === '1' ?  'رمز عبور مطابقت ندارد!' : null} */}
                  <br/>
                  {password !== confirmPassword ? (
                    <Button variant='contained' disabled onClick={handletest}>ثبت</Button>
                  ):(
                    <Button variant='contained' onClick={handletest}>ثبت</Button>
                  )}
              </Box>
          </Modal>
        </>
    )
}
