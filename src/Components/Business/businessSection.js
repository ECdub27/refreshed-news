
import {fetchBusinessNews, getBusinessNewsStatus, getBusinessNewsError,
} from '../../store/businessSectionSlice';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import LinearBuffer from '../../linearBuffer';
import './businessSection.css';
import { selectBusArticles } from '../../store/businessSectionSlice';

const BusinessSection = () =>{

const dispatch = useDispatch();
// const {articles, isLoading} = useSelector((state) => state.businessNews.articles)
 const articles = selectBusArticles
console.log(useSelector)


useEffect(() =>{
    dispatch(fetchBusinessNews())
},[dispatch])
// promise ismapped out; lets use no referrer might need Router

if(getBusinessNewsStatus === 'loading'){
    return <p>Hold Up I working on it! <LinearBuffer/></p>
 } 


return (
    <div>
       <h2>Business News</h2>
       
       {Object.values(articles)?.map((busArticle) =>(
        <div>
        <p key={busArticle.id}>{busArticle.title}</p>
        <ol>
            <li>{busArticle.description}</li>
        </ol>
        </div>
       ))}
    </div>
   
)


};

export default BusinessSection;