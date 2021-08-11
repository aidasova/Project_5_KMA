import {Component, limit} from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <div>{this.props.requiredAmount}/1</div>
            </div>
        )
    }
}
export default Card;