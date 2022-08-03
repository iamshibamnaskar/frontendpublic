import { BottomNavigation } from '@mui/material';
import * as React from 'react';
import BasicCard from '../components/contactusForm';
import StandardImageList from '../components/imagelist';
import AlignItemsList from '../components/notice';

export default function MainPage() {
    return(
        <div>
            <div style={{display:"flex",justifyContent:"center"}}>
            
            
            <StandardImageList/>

            <AlignItemsList/>

            
        </div>
        <BasicCard/>
        </div>
    )
}