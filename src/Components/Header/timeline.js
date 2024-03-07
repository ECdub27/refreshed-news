import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {useGetAllArticlesQuery} from '../../store/newsApiSlice';
import LinearBuffer from '../../linearBuffer';
import  Typography  from '@mui/material/Typography';

export default function BasicTimeline() {
    const {data, isLoading, error } = useGetAllArticlesQuery();
  return (
    <div>
    {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading... <LinearBuffer /> </>
      ) : data ? (
       
        <> 
        <Timeline>
        {data.articles.map((article, index) => (
         <div>
          <TimelineItem key={index.id}>
          <TimelineSeparator>
          <TimelineDot />
   <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>

           <Typography  sx={{alignContent: 'center'}}fontFamily="League Spartan"
    color='#E0607E'>
            <li>
                <p>{article.title}</p>
           <p>{article.name}</p> 
           <p>{article.description}</p>
          <a  rel='noreferrer'href={article.url} target='_blank' alt='business news sources' >{article.url}</a>
          <img src={article.urlToImage} alt='news article flick'/>
          </li>
          </Typography>
          </TimelineContent>
          </TimelineItem>
          </div>
        ))} 
        </Timeline>
        </>
      

     
      ) : null}
      </div>
  );
  
};
