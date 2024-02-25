import {  useDispatch, useSelector } from "react-redux";
import { useGetTechnologyArticlesQuery } from "../../store/newsApiSlice";
import { useEffect } from "react";
import LinearBuffer from "../../linearBuffer";

const TechnologySection = () => {


const {data, isLoading,error } = useGetTechnologyArticlesQuery();






return (
    
        <div>
        <h2>Technology</h2>
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
           
   
)



};

export default  TechnologySection;