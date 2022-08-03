import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  const [rows,setRows]=React.useState([])
  React.useEffect(()=>{
    Getall()
  })
  function Getall(params) {
    fetch('https://backend-shibam.herokuapp.com/getimages', {
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
    <ImageList sx={{ width: 1000, height: 700 }} cols={3} rowHeight={164}>
      {rows.map((item) => (
        <ImageListItem key={item._id}>
          <img
            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item._id}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}