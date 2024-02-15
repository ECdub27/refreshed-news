import {  useDispatch, useSelector } from "react-redux";
import { fetchTechArticles, selectTechArticles , getTechArticlesStatus} from "../../store/technoloySectionSlice";
import { useEffect } from "react";
import LinearBuffer from "../../linearBuffer";



const TechnologySection = () => {

const dispatch = useDispatch();
const technologyArticles =  selectTechArticles;
const {error, status, isLoading } = getTechArticlesStatus;





useEffect(() =>{
 let mounted = true 

dispatch(fetchTechArticles());

 return () =>{
    mounted = false;
    console.log(technologyArticles)
 }


},[status, technologyArticles, dispatch]);


let bodyContent
if (status === 'loading'  || isLoading ? true: false){
 bodyContent = <div className='loader'>  <LinearBuffer /> </div>
} else if (status === 'idle'){
let sortedArticles;

 sortedArticles = technologyArticles.slice().sort((a,b) => b.id -a.id)


    bodyContent = sortedArticles.map((article) => (
        <div className='card' key= {article.id}>
<ul key={article.id}>
                <li className='list-item'key={article.id}>{article.name} <p>{article.description}</p>
                <p> {article.url}</p>
                </li>
                

            </ul>
           
        </div>
    ))
} else {
    bodyContent = <div>{error}</div>
}

return (
    <div>
       <h2>Technology</h2>
       
       {bodyContent}
    </div>
   
)



};

export default  TechnologySection;