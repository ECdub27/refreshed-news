import { useEffect} from 'react';
import { fetchNewsArticles } from '../../store/newsArticleSlice';
import {useDispatch,useSelector} from 'react-redux';
import LinearBuffer from '../../linearBuffer';



const NewsArticle = () =>{ 
  
  const selectedArticles = useSelector((state) => state.articles);
  const { articles, error, isLoading, status } = selectedArticles;
    const dispatch = useDispatch();

   




 useEffect(() =>{

  let mounted = true 
  if(status === 'idle'){
dispatch(fetchNewsArticles())
  }
return () => {
  mounted = false;
}
},[dispatch, status])


let bodyContent
if (status === 'loading' ? isLoading : true){
 bodyContent = <div className='loader'>
  <LinearBuffer />
 </div>
} else if (status === 'successful'){
  let sortedNewsArticles;

sortedNewsArticles = selectedArticles.slice().sort((a,b) => b.id - a.id)

bodyContent = sortedNewsArticles.map((article) => (
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