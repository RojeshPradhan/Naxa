import './card.css'
function Card(props){
    const apiData = props.data;
    return(
        <div className = "mycontr" id={apiData.id}>
            <div className="photo"><img src={apiData.photo} alt="" /></div>
            <div className="des">
                <div className="logo"><img src={apiData.icon} alt="" /></div>
                <div className="title">{apiData.title} </div>
                <div className="des1"dangerouslySetInnerHTML={{ __html: apiData.description1 }}></div>
                <div className="des2"dangerouslySetInnerHTML={{ __html: apiData.description2 }}></div>
            </div>
        </div>
    );
}
export default Card;