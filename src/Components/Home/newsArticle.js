import { useEffect} from 'react';
import { fetchNewsArticles } from '../../store/newsArticleSlice';
import {useDispatch,useSelector} from 'react-redux';
import { selectArticles } from '../../store/newsArticleSlice';



const NewsArticle = (props) =>{ 
  const { error, status} = selectArticles;
  const selectedArticles = useSelector(selectArticles);
    const dispatch = useDispatch();

   




 useEffect(() =>{

  let mounted = true 
  if(status === 'idle'){
dispatch(fetchNewsArticles())
  }
return () => {
  mounted = false;
}
},[status, dispatch]);


let bodyContent
if (status === 'loading'){
 bodyContent = <div className='loader'></div>
} else if (status === 'successful'){
selectedArticles.slice().sort((a,b) => b.id -a.id)

bodyContent = selectedArticles.map((article) => (
  <div className='card' key= {article.id}>
<ul key={article.id}>
          <li className='list-item'key={article.id}>{article.name} <p>{article.description}</p>
          <p> {article.url}</p>
          </li>
          

      </ul>
     
  </div>
))

} else {
  bodyContent = <div>{error}</div>
}

return (
    <div>
       <h2>Top Headline News!!</h2>
       {bodyContent}
        
    </div>

);


};

export default NewsArticle;