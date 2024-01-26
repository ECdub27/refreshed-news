
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

return (
    <div >
       {fetchBusinessNews(selectedBusinessArticles)}
    </div>
);


};

export default BusinessSection;