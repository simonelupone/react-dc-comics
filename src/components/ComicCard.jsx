const ComicCard = (props) => {
    return (
            <div className="card max-w-40">
                <figure>
                    <img className="w-full" src={props.src} alt={props.title}/>
                    <figcaption className="text-wrap">{props.title}</figcaption>
                </figure>
            </div>
    )
}
export default ComicCard