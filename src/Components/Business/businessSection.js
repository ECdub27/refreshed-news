
import {fetchBusinessNews} from '../../store/businessSectionSlice';
import {useSelector, useDispatch} from 'react-redux';
import { selectBusinessNews } from '../../store/businessSectionSlice';
import { useEffect } from 'react';



const BusinessSection = () =>{

const dispatch = useDispatch();
const selectedBusinessArticles = useSelector(selectBusinessNews);

useEffect(() =>{
dispatch(fetchBusinessNews());
},[dispatch]);
// map out return promise also send the right headers
return (
    <div >
       {fetchBusinessNews(selectedBusinessArticles)}
    </div>
);


};

export default BusinessSection;