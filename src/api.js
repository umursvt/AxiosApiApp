import axios from 'axios';
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID Ze5OrXA1mHxmC7aqRuTFRK-etx2Pn4k-a0m4BC1W6Zc',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default searchImages;
