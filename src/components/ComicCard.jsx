const ComicCard = ({src, title}) => {
    return (
        <div className="card max-w-40">
            <figure>
                <img className="w-full" src={src} alt={title}/>
                <figcaption className="text-wrap">{title}</figcaption>
            </figure>
        </div>
    )
}
export default ComicCard