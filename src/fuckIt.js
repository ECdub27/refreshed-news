
<main>
<HeroSlide />
<NewsArticle/>



</main>

<div className="Business.Section.div">
<div>
<hr className='divider-3'/>
   <h3>Whos that pokemon!!</h3>
   {error ? (
     <>Oh no, there was an error</>
   ) : isLoading ? (
     <>Loading...</>
   ) : data ? (
     <>
     <p>{data.species.name}</p> 
     <img src={data.sprites.front_shiny} alt={data.species.name}/>  
     </>
   ) : null
 }
   
    </div>
    
</div>


<hr className='divider-3'/>

<div className='Technology.Section.div'>
 <Container>
   <TechnologySection />
   </Container>
</div>

<div className='Politics.Section.div'>
<hr/>

 <PoliticsSection />
 
</div>


<hr className='divider-4'/>


 <div className='footer-container'>
   Refreshed news
  <Footer />
 </div>
 
 
 </ThemeProvider>
</div>