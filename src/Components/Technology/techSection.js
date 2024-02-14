import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { fetchTechArticles } from "../../store/technoloySectionSlice";
import { useEffect } from "react";
import LinearBuffer from "../../linearBuffer";



const TechnologySection = () => {
const dispatch = useDispatch();
const technologyArticles =  useSelector((state) => state.technologyNews);
const {techArticles, error, status, isLoading } = techArticles;





useEffect(() =>{
 let mounted = true 

dispatch(fetchTechArticles());

 return () =>{
    mounted = false;
 }


},[status, dispatch]);


let bodyContent
if (status === 'loading'  || isLoading ? true: false){
 bodyContent = <div className='loader'>  <LinearBuffer /> </div>
} else if (status === 'successful'){
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