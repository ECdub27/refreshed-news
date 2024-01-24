import NewsArticle from "./Components/Home/newsArticle";
import { render, screen } from '@testing-library/react';
import { fetchNewsArticles } from "./store/newsArticleSlice";
test('the data is newsArticle', async () => {
    const data = await fetchNewsArticles();
    expect(data).toBe('news articles here');
    console.log(data)
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchNewsArticles();
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toMatch('error');
      console.log(error)
    }
  });