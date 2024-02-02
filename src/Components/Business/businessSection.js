
import {fetchBusinessNews, getBusinessNewsStatus} from '../../store/businessSectionSlice';
import {useSelector, useDispatch} from 'react-redux';
 import { selectBusinessNews } from '../../store/businessSectionSlice';
import { useEffect,useState } from 'react';
import { Troubleshoot } from '@mui/icons-material';



const BusinessSection = () =>{

const dispatch = useDispatch();
 const businessArticles = useSelector((state) => state.businessNews);
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
// map out return promise also send the right headers
let bodyContent
if (status === 'loading'){
 bodyContent = <div className='loader'></div>
} else if (status === 'successful'){
let sortedArticles;

 sortedArticles = articles.slice().sort((a,b) => b.id -a.id)


    bodyContent = sortedArticles.map((article) => (
        <div className='card' key= {article.id}>
<ul key={article.id}>
                <li key={article.id}>{article.name} <p>{article.description}</p></li>
                

            </ul>
        </div>
    ))
} else {
    bodyContent = <div>{error}</div>
}

return (
    <div>
       <h2>Business News</h2>
       {bodyContent}
    </div>
   
)


};

export default BusinessSection;