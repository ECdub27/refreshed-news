
import {fetchBusinessNews} from '../../store/businessSectionSlice';
import {useSelector, useDispatch} from '@reduxjs/toolkit';
import { selectBusinessNews } from '../../store/businessSectionSlice';
import { useEffect } from 'react';



const BusinessSection = () =>{

const dispatch = useDispatch();
const selectedBusinessArticles = useSelector(selectBusinessNews);

useEffect(() =>{
dispatch(getu)
},[]);




};

export default BusinessSection;