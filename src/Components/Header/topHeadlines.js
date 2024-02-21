import {useGetAllArticlesQuery} from '../../store/newsApiSlice';
import LinearBuffer from '../../linearBuffer';
import './topHeadlines.css';
import Container from '@mui/material/Container';
const TopHeadlines = () =>{

    const {data, isLoading, error } = useGetAllArticlesQuery();
 // use image list with subheader for links and to format the return data..


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
          <div className='headlines-div'key={index}>
            <li className='list-item-topHeadlines'>
              <Container>
                <p>{article.title}</p>
           <p className='topheadlines-name'>{article.name}</p> 
           <p className='topheadlines-description'>{article.description}</p>
          <a  rel='noreferrer'href={article.url} target='_blank' alt='business news sources' >{article.url}</a>
          <img className='All-news-img'src={article.urlToImage} alt='news article flick'/>
          </Container>
          </li>
          
          </div>
        ))} 
        </>
      ) : null}
 </div>
    );

}

export default TopHeadlines;