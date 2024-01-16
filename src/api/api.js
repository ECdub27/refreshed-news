const newsUrl = 'https://extract-news.p.rapidapi.com/v0/article?url=https%3A%2F%2Fwww.nbcnews.com%2Fnbcblk';
const newsOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa968e4618msh6e8627ff304e4e8p1c6e92jsn493cecc285d2',
		'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
	}
};

export const getNewsArticle = async () =>{
    const response  =  await fetch(newsUrl,newsOptions).then((response) => response.json())
    .then(data => response.data);
    console.log(response.data);
}