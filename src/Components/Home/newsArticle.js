import {useState, useEffect} from 'react';
import { getNewsArticlesStatus,getNewsArticleSuccess,getNewsArticleFailure,fetchNewsArticles } from '../../store/newsArticleSlice';
import {useDispatch,useSelector} from 'react-redux';
import { selectArticles } from '../../store/newsArticleSlice';



const NewsArticle = () =>{ 
const dispatch = useDispatch();
const articles = useSelector(selectArticles);

useEffect(() =>{
dispatch(fetchNewsArticles);
},[dispatch]

);


return (
    <div>
        
    </div>

);


};

export default NewsArticle;