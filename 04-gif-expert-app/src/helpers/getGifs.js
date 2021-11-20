export const getGifs = async ( category ) => {
    const url =
        `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=NCNkWMp16Y5WfMHRmSgYUH52BuaP7Zrh`
    const response = await fetch(url);
    const { data } = await response.json();
    return data.map(({id, title, images}) => {
        return {
            id, title, url: images?.downsized_medium.url
        }
    });
}
