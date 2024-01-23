import {useState, useEffect} from 'react';
import { fetchNewsArticles } from '../../store/newsArticleSlice';
import {useDispatch,useSelector} from 'react-redux';
import { selectArticles } from '../../store/newsArticleSlice';
import Card from '@mui/material/Card';


const NewsArticle = () =>{ 


    const dispatch = useDispatch();
   const articles = useSelector(selectArticles);
   const [newsArticle, setNewsArticle] = useState([]);




 useEffect(() =>{
dispatch(setNewsArticle(fetchNewsArticles));
},[dispatch]

);


return (
    <div>
        <Card classname='article-card'>
          {articles.map((article) => (
            <p key={article.id}
            className= 'returned article'
            > {newsArticle}</p>
          ))}
        </Card>
    </div>

);


};

export default NewsArticle;