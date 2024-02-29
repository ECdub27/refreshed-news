import {useGetAllArticlesQuery} from '../../store/newsApiSlice';
import LinearBuffer from '../../linearBuffer';
import './topHeadlines.css';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import  Typography  from '@mui/material/Typography';

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
        <ImageList sx={{width: 900, height: 700, padding:2}}>
        {data.articles.map((article, index) => (
          <ImageListItem key={article.urlToImage}> 
          <Container> 
           <img className='All-news-img'src={article.urlToImage} alt={article.title}/>
           <Typography  sx={{alignContent: 'center'}}fontFamily="League Spartan"
           color='#E0607E'>

           <ImageListItemBar cols={3} rowHeight={120} 
           title={article.title}
           subtitle={article.description & article.url }
           position="below"
           />
           <a rel='noreferrer' href={article.urlToImage} alt='article url'><a href={article.url} alt='article url'> {article.url} </a></a>
           </Typography>
            </Container>
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