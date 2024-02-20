import {useDispatch,useSelector} from 'react-redux';
import LinearBuffer from '../../linearBuffer';
import { useGetAllArticlesQuery, useGetBusinessArticlesQuery} from '../../store/newsApiSlice'
// consolidate news apis here

const NewsArticle = () =>{ 
  
 const {data, error, isLoading} = useGetBusinessArticlesQuery();

  const dispatch = useDispatch();
   
  
// one fix is JSON.stringify(data)

return (
    <div>
       <main id="mainContent">
        
         <h3>Business Sources </h3>
         {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading... <LinearBuffer /> </>
      ) : data ? (
       
        <>
        {data.sources.map((article, index) => (
          <div key={index}>
           <p>{article.name}</p> 
           <p>{article.description}</p>
          <a  rel='noreferrer'href={article.url} target='_blank' alt='business news sources' >{article.url}</a>
          </div>
        ))} 
        </>
      ) : null}
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