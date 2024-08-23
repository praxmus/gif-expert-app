export const getGifs = async (category) => {
    const appId = import.meta.env.VITE_API_KEY
    const limit = 10
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${appId}&q=${category}&limit=${limit}`
        
    const resp = await fetch(url)
    const {data} = await resp.json()
    
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      image: img.images.downsized_medium.url,
    }))
  
    //console.log(gifs)
    return gifs
  }
  