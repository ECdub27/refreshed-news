import {  useDispatch, useSelector } from "react-redux";
import { fetchTechArticles, selectTechArticles , getTechArticlesStatus} from "../../store/technoloySectionSlice";
import { useEffect } from "react";
import LinearBuffer from "../../linearBuffer";



const TechnologySection = () => {

const dispatch = useDispatch();
const technologyArticles =  useSelector(selectTechArticles);
const {status, isLoading } = getTechArticlesStatus;




useEffect(() =>{
 let mounted = true 

dispatch(fetchTechArticles());

 return () =>{
    mounted = false;
   
 }


},[]);


let bodyContent
if (status === 'loading'  || isLoading ? true: false){
 bodyContent = <div className='loader'>  <LinearBuffer /> </div>
} 

let techContent = Object.values(technologyArticles).map(({title, description, url})  =>{
    return JSON.stringify(title, description,url);
})

return (
    <div>
       <h2>Technology</h2>
       {Object.values(technologyArticles)?.map((techArticle) =>(
        <div>
        <p key={techArticle.id}>{techArticle.title}</p>
        <ol>
            <li>{techArticle.description}</li>
        </ol>
        </div>
       ))}
    </div>
   
)



};

export default  TechnologySection;