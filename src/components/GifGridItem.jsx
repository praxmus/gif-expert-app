// eslint-disable-next-line react/prop-types
export default function GifGridItem({title, image}) {
  return (
    <div className="card">        
        <img src={image} alt={title} />
        <p>{title}</p>        
    </div>
  )
}
