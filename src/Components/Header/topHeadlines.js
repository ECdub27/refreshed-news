import {useGetAllArticlesQuery} from '../../store/newsApiSlice';
import LinearBuffer from '../../linearBuffer';
import './topHeadlines.css';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import  Link  from '@mui/material/Link';
const TopHeadlines = () =>{

    const {data, isLoading, error } = useGetAllArticlesQuery();
 // use image list with subheader for links and to format the return data..


    return (
 <div>
 <h2>Here Are Your Top Headlines</h2>
 {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading... <LinearBuffer /> </>
      ) : data ? (
       
        <>
        <ImageList sx={{width: 900, height: 700}}>
        {data.articles.map((article, index) => (
          <ImageListItem key={article.urlToImage}> 
           <img className='All-news-img'src={article.urlToImage} alt={article.title}/>
           <ImageListItemBar title={article.title}
           subtitle={article.description & article.url }
          
           position="below"/>
            
          <div className='headlines-div'key={index}>
           
          
          
          </div>
          </ImageListItem>
        ))} 
        </ImageList>
        </>
      ) : null}
 </div>
    );

}

export default TopHeadlines;