
import {fetchBusinessNews, getBusinessNewsStatus} from '../../store/businessSectionSlice';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import LinearBuffer from '../../linearBuffer';
import './businessSection.css';
import { selectBusArticles } from '../../store/businessSectionSlice';

const BusinessSection = () =>{

const dispatch = useDispatch();
 const businessArticles = useSelector(selectBusArticles);
 const {articles,status, error, isLoading} = businessArticles
 const businessNewsStatus = useSelector(getBusinessNewsStatus);




useEffect(() =>{
    let isMounted = true
if(status === 'idle'){
    dispatch(fetchBusinessNews())
}
return () => {
    isMounted = false
}
},[status, dispatch])
// promise ismapped out; lets use no referrer might need Router

if (status === 'loading' || isLoading ? true: false){
    let bodyContent;
 bodyContent = <div className='loader'>  <LinearBuffer /> </div>
} 
else {
    let bodyContent
    bodyContent = <div>{error}</div>
}


const renderedBusinessArticles =  businessArticles.map((businessArticle) => {
    return <ul key={businessArticle.id}>
        <li key={businessArticle.id}>
            {articles.description}</li>
    </ul>
})
return (
    <div>
       <h2>Business News</h2>
       
       {renderedBusinessArticles}
    </div>
   
)


};

export default BusinessSection;