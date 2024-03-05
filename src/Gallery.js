function Gallery(props){
    return (
        <div style={{'width': '100%'}}>
            <img src={props.currentPhoto} alt={props.title} />
            <p>{props.artist}</p>
        </div>
    )
}

export default Gallery;