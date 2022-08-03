import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
    const [name,setname]=React.useState("")
    const [email,setemail]=React.useState("")
    const [title,settitle]=React.useState("")
    const [desc,setdesc]=React.useState("")

    const onSend = ()=>{
        fetch('https://backend-shibam.herokuapp.com/createresp', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            title:title,
            description:desc
        })
        }).then((data)=>{
        if(data.status==200){
            alert("Meeesge sent successfully")
        }
        })
    }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <TextField onChange={(e)=>{setname(e.target.value)}} id="outlined-basic" label="Name" variant="outlined" />
      <TextField onChange={(e)=>{setemail(e.target.value)}} id="outlined-basic" label="Email" variant="outlined" />
      <TextField onChange={(e)=>{settitle(e.target.value)}} id="outlined-basic" label="Title Of Query" variant="outlined" />
      <TextField onChange={(e)=>{setdesc(e.target.value)}} id="outlined-basic" label="description" variant="outlined" />
      </CardContent>
      <CardActions>
        <Button onClick={onSend} size="small">Send</Button>
      </CardActions>
    </Card>
  );
}
