import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinearBuffer from "../../linearBuffer";
import { fetchPoliticsArticles, selectPollyArticles, getPoliticsArticlesStatus } from "../../store/politicsSectionSlice";





const PoliticsSection = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // const {politicsArticles, status, isLoading} = useSelector((state) => state.politicsNews.politicsArticles)
  const politicsArticles = useSelector(selectPollyArticles);
  
  
    useEffect(() =>{
    
    dispatch(fetchPoliticsArticles())

    return () => {
   
     
    }
    },[])


    
if ( fetchPoliticsArticles === 'loading'){
    return <p>Hold Up I working on it! <LinearBuffer/></p>
}
let bodyContent= Object.values(politicsArticles).map(({title, description, url}) =>{
    return {title, description, url} 
})

return (
    <div>
       <h2>Politics</h2>
       {bodyContent.title}
       {bodyContent.description}
       {bodyContent.title} 
    
            
       
    </div>
   
)

};

export default  PoliticsSection;