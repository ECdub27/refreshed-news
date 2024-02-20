import {useGetAllArticlesQuery} from '../../store/newsApiSlice';
import LinearBuffer from '../../linearBuffer';


const TopHeadlines = () =>{

    const {data, isLoading, error } = useGetAllArticlesQuery();



    return (
 <div>
 <h2>Here are your top headlines</h2>
 {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading... <LinearBuffer /> </>
      ) : data ? (
       
        <>
        {data.articles.map((article, index) => (
          <div key={index}>
            <li>
                <p>{article.title}</p>
           <p>{article.name}</p> 
           <p>{article.description}</p>
          <a  rel='noreferrer'href={article.url} target='_blank' alt='business news sources' >{article.url}</a>
          <img src={article.urlToImage} alt='news article flick'/>
          </li>
          </div>
        ))} 
        </>
      ) : null}
 </div>
    );

}

export default TopHeadlines;