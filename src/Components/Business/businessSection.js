
import {fetchBusinessNews, getBusinessNewsStatus, getBusinessNewsError,
} from '../../store/businessSectionSlice';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import LinearBuffer from '../../linearBuffer';
import './businessSection.css';
import { selectBusArticles } from '../../store/businessSectionSlice';
import  Stack  from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import  Typography  from '@mui/material/Typography';


const BusinessSection = () =>{
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

const dispatch = useDispatch();
// const {articles, isLoading} = useSelector((state) => state.businessNews.articles)
 const articles = selectBusArticles
console.log(useSelector)


useEffect(() =>{
    dispatch(fetchBusinessNews())
},[])
// promise ismapped out; lets use no referrer might need Router

if(getBusinessNewsStatus === 'loading'){
    return <p>Hold Up I working on it! <LinearBuffer/></p>
 } 


return (
    <div>
       <h2>Business News</h2>
       
       {Object.values(articles)?.map((busArticle) =>(
        <Stack
        direction='column'
        divider={<Divider orientation='vertical' flexItem />}
        spacing={0}
        justifyContent="space-around"
        alignContent="flex-start"
        paddingLeft={2}>
        <div>
            <Typography variant='subtitle1' component="caption">
       <Item> <p key={busArticle.id}>{busArticle.title}</p></Item>
        <ol>
            <Item><li>{busArticle.description}</li></Item>
        </ol>
        </Typography>
        </div>
        </Stack>
       ))}
       
    </div>
   
)


};

export default BusinessSection;