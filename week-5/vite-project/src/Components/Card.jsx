import "./Card.css"

const Card = (props) => {

    return (<>
        <div className="card-container">
            <h2> {props.name}</h2>
            <div className="description">{props.description}</div>
            <div className="interests">
            <h3 >Interests</h3>
                <ul className="interest-list">
                    <li>
                        {props.interest[0]}
                    </li>
                    <li>
                        {props.interest[1]}
                    </li>
                    <li>
                        {props.interest[2]}
                    </li>
                </ul>
            </div>
            <div className="social-handles">
                <button className="btn linkedin-btn">LinkedIn</button>
                <button className="btn twitter-btn">Twitter</button>
            </div>

        </div>
    </>)

}

export default Card;

