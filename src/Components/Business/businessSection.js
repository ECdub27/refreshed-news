
import {fetchBusinessNews, getBusinessNewsStatus} from '../../store/businessSectionSlice';
import {useSelector, useDispatch} from 'react-redux';
import { selectBusinessNews } from '../../store/businessSectionSlice';
import { useEffect } from 'react';



const BusinessSection = () =>{

const dispatch = useDispatch();
const selectedBusinessArticles = useSelector(selectBusinessNews);
const businessNewsStatus = useSelector(getBusinessNewsStatus);

useEffect(() =>{
dispatch(fetchBusinessNews());
},[dispatch]);
// map out return promise also send the right headers
return (
    <div>
       <div>{selectedBusinessArticles} </div>

<button onClick={() => dispatch(fetchBusinessNews())}>fetch news</button>
    <p>{businessNewsStatus === 'loading' && <div>fetching News...</div>}</p>
    </div>
   
)


};

export default BusinessSection;