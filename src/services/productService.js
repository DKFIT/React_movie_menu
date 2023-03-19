const searchProduct = async (searchWord) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=c6547346&s=${searchWord}`);
    const products = await response.json();
    return products
}
export default searchProduct