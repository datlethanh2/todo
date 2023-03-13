import { styled } from '@mui/material';

export const StyledScroll = styled('div')({
    overflowY:'auto',
    '&::-webkit-scrollbar': {
        width:'1px',
        height:'10px'
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: "#f1f1f1",
      },
      
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "gray" 
    }
});

export const styleBox:any={
    margin: "auto",
    border:'1px solid gray',
    borderRadius:'5px',
    padding:'20px 20px 25px 20px',
    textAlign:'center',
    color:"gray",
    overflowY: 'auto',
}

export const styleInput:any={
    backgroundColor:"#3b4148",
    border:'1px solid gray',
    height:'30px',
    width:'320px',
    color:"gray",
    borderRadius:'5px',
    margin:'8px 0',
  }

export const styleButton:any={
    backgroundColor:"#3b4148",
    color:"gray",
    height:'32px',
    border:'1px solid gray',
    borderRadius:'5px',
    margin:'4px 4px', 
}