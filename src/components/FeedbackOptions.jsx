import PropTypes from "prop-types";

const FeedbackOption = ({ options, onLeaveFeedback }) => {
    return (
        <ul className="btn-list">{options.map(text => <li key={text}><button style={{ textTransform: 'capitalize' }} type="button" onClick={() => onLeaveFeedback(text)}>{text}</button></li>)}</ul>
    );
};

export default FeedbackOption;

FeedbackOption.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}