import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  const [rows,setRows]=React.useState([])
  React.useEffect(()=>{
    Getall()
  })
  function Getall(params) {
    fetch('https://backend-shibam.herokuapp.com/getposts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      setRows(data)
    });
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',height:680 ,margin:2,overflow:'scroll'}}>
      {rows.map((row)=>(
        <div>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={row.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {row.description}
              </Typography>
              {row.description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
        </div>
      ))}
      
    </List>
  );
}
