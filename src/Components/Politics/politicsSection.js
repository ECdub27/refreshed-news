
import LinearBuffer from "../../linearBuffer";
import { useGetPoliticsArticlesQuery } from "../../store/newsApiSlice";
import  Typography  from "@mui/material/Typography";



const PoliticsSection = () => {
   const {data, isLoading, error} = useGetPoliticsArticlesQuery();
 


    


return (
    <div>
       <h2>Politics</h2>
       
       
       {error ? (
               <>Oh no, there was an error</>
             ) : isLoading ? (
               <>Loading... <LinearBuffer /> </>
             ) : data ? (
              
               <>
               {data.articles.map((article, index) => (
                 <div key={index}>
                  <Typography  sx={{alignContent: 'center'}}fontFamily="League Spartan"
           color='#E0607E'>
                   <li>
                       <p>{article.title || 'no title given'}</p>
                  <p>{article.name || 'no title given'}</p> 
                  <p>{article.description || 'no title given'}</p>
                 <a  rel='noreferrer'href={article.url} target='_blank' alt='business news sources' >{article.url}</a>
                 <img src={article.urlToImage} alt='news article flick'/>
                 </li>
                 </Typography>
                 </div>
               ))} 
               </>
             
    
            
             ) : null}
    </div>
   
)

};

export default  PoliticsSection;