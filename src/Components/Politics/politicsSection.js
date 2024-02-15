import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinearBuffer from "../../linearBuffer";
import { fetchPoliticsArticles } from "../../store/politicsSectionSlice";





const PoliticsSection = () => {
  const dispatch = useDispatch();
  const pollyArticles = useSelector((state) =>  state.politicsNews);
  const {politicsArticles, status, error, isLoading} = pollyArticles;

    useEffect(() =>{
    let mounted = true;
    dispatch(fetchPoliticsArticles())

    return () => {
    mounted = false;
     
    }
    },[status, dispatch])


    let bodyContent
if (status === 'loading' ||  isLoading ? true: false){
 bodyContent = <div className='loader'>  <LinearBuffer /> </div>
} else if (status === 'idle'){
let sortedArticles;

 sortedArticles = pollyArticles.slice().sort((a,b) => b.id -a.id)


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
       <h2>Politics</h2>
       
       {bodyContent}
    </div>
   
)

};

export default  PoliticsSection;