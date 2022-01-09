import axios from "axios";

var API_KEY = "24211699-fe52f20aaf965cfae8cea3f33";
axios.defaults.baseURL = "https://pixabay.com/api/";

const Api = {
  fetchWithQuery(searchQuery, page) {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: searchQuery,
      page: page,
      per_page: 12,
      orientation: "horizontal",
      image_type: "photo",
    });

    return axios.get(`?${searchParams}`).then((res) =>
      res.data.hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
        id,
        webformatURL,
        largeImageURL,
        tags,
      }))
    );
  },
};

export { Api };
