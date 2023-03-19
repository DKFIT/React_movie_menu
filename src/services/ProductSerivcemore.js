const searchProductmore = async (searchWordMore) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=c6547346&t=${searchWordMore}`);
    const products = await response.json();
    return products
}
export default searchProductmore