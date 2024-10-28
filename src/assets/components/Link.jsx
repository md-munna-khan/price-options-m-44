import PropTypes from "prop-types";

const Link = ({ value }) => {
    const { name, path } = value;
    return (
        <div>
            <ul>
                <li className="ml-10 rounded hover:bg-green-400  ">
                    <a href={path}>{name}</a>
                </li>
            </ul>
        </div>
    );
};

Link.propTypes = {
    value: PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    }).isRequired,
};

export default Link;
