import {useState, useEffect} from 'react';
import { fetchNewsArticles } from '../../store/newsArticleSlice';
import {useDispatch,useSelector} from 'react-redux';
import { selectArticles } from '../../store/newsArticleSlice';

import Card from '@mui/material/Card';
import  Button  from '@mui/material/Button';

const NewsArticle = (props) =>{ 
  const {article} = props;

    const dispatch = useDispatch();
   const selectedArticles = useSelector(selectArticles);
   const [newsArticle, setNewsArticle] = useState({});




 useEffect(() =>{
dispatch(fetchNewsArticles());
},[dispatch]

);


return (
    <div>
      
        <Card dispatch ={dispatch(fetchNewsArticles())} className='article-card'>
          {selectedArticles.map((article) => (
            <p key={article.id}
            className= 'returned article'
            > {newsArticle}</p>
          ))}

          {selectedArticles?.article?.data?.map((i) =>  (
             <ul>
              <li>{i.article}</li>
              <li></li>
            </ul>
          ))}
        </Card>
    </div>

);


};

export default NewsArticle;