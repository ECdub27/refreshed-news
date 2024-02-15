import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinearBuffer from "../../linearBuffer";
import { fetchPoliticsArticles, selectPollyArticles, getPoliticsArticlesStatus } from "../../store/politicsSectionSlice";





const PoliticsSection = () => {
  const dispatch = useDispatch();
  // const {politicsArticles, status, isLoading} = useSelector((state) => state.politicsNews.politicsArticles)
  const politicsArticles = useSelector(selectPollyArticles)
  console.log()
  
    useEffect(() =>{
    
    dispatch(fetchPoliticsArticles())

    return () => {
   
     
    }
    },[ dispatch])


    
if ( fetchPoliticsArticles === 'loading'){
    return <p>Hold Up I working on it! <LinearBuffer/></p>
}

return (
    <div>
       <h2>Politics</h2>
       
       {Object.values(politicsArticles)?.map((pollyArticle) =>(
        <div>
        <p key={pollyArticle.id}>{pollyArticle.title}</p>
        <ol>
            <li>{pollyArticle.description}</li>
        </ol>
        </div>
       ))}
    </div>
   
)

};

export default  PoliticsSection;