import PropTypes from 'prop-types'; 
function SectionTitle({ title }) {
    return (
        <div className="text-center my-4">
            <h2 className="text-3xl font-bold">{title}</h2>
        </div>
    )
}
SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,  // Ensures 'title' is a required string
};
export default SectionTitle;