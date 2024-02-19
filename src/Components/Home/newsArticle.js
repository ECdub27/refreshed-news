import { useEffect} from 'react';
import { fetchNewsArticles, selectedTopHeadlineArticles,getNewsArticlesStatus, getNewsArticleError} from '../../store/newsArticleSlice';
import {useDispatch,useSelector} from 'react-redux';
import LinearBuffer from '../../linearBuffer';

// consolidate news apis here

const NewsArticle = () =>{ 
  
  const selectedArticles = useSelector(selectedTopHeadlineArticles);

  const dispatch = useDispatch();

   




 useEffect(() =>{

  let mounted = true 

dispatch(fetchNewsArticles())

return () => {
  mounted = false;
}
},[])


let bodyContent
if (getNewsArticlesStatus === 'loading') {
 bodyContent = <div className='loader'>
  <LinearBuffer />
 </div>
} else {
  bodyContent = <div>{getNewsArticleError}</div>
}

console.log(selectedArticles);

let newsContent= Object.values(selectedArticles).map(({title, description, url}) =>{
  return JSON.stringify(title, description,url);
})

console.log(selectedArticles)
return (
    <div>
       <h2>Top Headline News</h2>
       <p>{newsContent.map((article, index) => (
        <div key={index}>
          <ul>
            <li>{article}</li>
            </ul>      
            </div>
       ))}</p>
       
       <main id="mainContent">
      <div className="container-fluid">
        <div className="row">
          <div className='side-bar-style'>
            side bar header
            <div className="list-group list-group-flush border-bottom">
              list item here
              <li>

              </li>
            </div>
          </div>
          some type of detail here
          
        </div>
      </div>
      
    </main>
    </div>


);


};

export default NewsArticle;