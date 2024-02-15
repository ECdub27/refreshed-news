import { useEffect} from 'react';
import { fetchNewsArticles, selectedTopHeadlineArticles,getNewsArticlesStatus, getNewsArticleError} from '../../store/newsArticleSlice';
import {useDispatch,useSelector} from 'react-redux';
import LinearBuffer from '../../linearBuffer';



const NewsArticle = () =>{ 
  
  const selectedArticles = useSelector(selectedTopHeadlineArticles);

  const dispatch = useDispatch();

   




 useEffect(() =>{

  let mounted = true 
  if(getNewsArticlesStatus === 'idle'){
dispatch(fetchNewsArticles())
  }
return () => {
  mounted = false;
}
},[dispatch])


let bodyContent
if (getNewsArticlesStatus === 'loading') {
 bodyContent = <div className='loader'>
  <LinearBuffer />
 </div>
} else if (getNewsArticlesStatus === 'idle'){
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
  bodyContent = <div>{getNewsArticleError}</div>
}

return (
    <div>
       <h2>Top Headline News!!</h2>
        { Object.values(selectedArticles)?.map((article) => (
          <div>
            <p key={article.id}>{article.title}</p>
        <ol>
            <li>{article.description}</li>
        </ol>
            </div>
               
       ))}
        
    </div>


);


};

export default NewsArticle;