import "./Card.css"
import Icon from "../Icon/Icon";


export default function Card({onPlay, player, index, gameEnd}) { 

    let icon= <Icon />
    if(player == "X") {
        icon = <Icon name={"cross"} />
    } else if (player == "0") {
        icon = <Icon name={"circle"} />
    } 
    return (
        <div className="card" onClick={() => !gameEnd && player=="" && onPlay(index)}>
            {icon}
        </div>
    );
};