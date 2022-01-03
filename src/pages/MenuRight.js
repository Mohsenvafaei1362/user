import React,{useEffect , useState} from 'react'
import {Grid , Button , Menu , Tab  ,Row  , Col  , MenuItem ,Icon , styled} from '@mui/material'
import {useSelector , useDispatch} from 'react-redux'
import  'bootstrap/dist/css/bootstrap.min.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {importCartabl , exporttcartabl} from '../redux/action/actions'

export const MenuRight = () => {


    const stateimport = useSelector(state =>state.import);
    const stateexport = useSelector(state =>state.export);
    const dispatch = useDispatch();


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  const handleimport = () =>{
    dispatch(importCartabl());
  }
  const handleexport = () =>{
    dispatch(exporttcartabl());
  }
   
    return (
        <div>
            <Grid container style={{display:'flex' , justifyContent:'right'}}>
                <Grid item xs={12} >
                       <br/>
                      <Button style={{width:'150px' , width:'100%'}} variant='contained' onClick={handleexport}> کارتابل صادره</Button><br/><br/>
                      <Button style={{width:'150px' , width:'100%'}} variant='contained' onClick={handleimport}> کارتابل وارده</Button>

                </Grid>
            </Grid>
        </div>
    )
}
