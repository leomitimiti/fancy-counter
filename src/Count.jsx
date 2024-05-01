const Count = ({ number }) => {
    console.log('Count component rendering...');
    return (
        <p className="count">{number}</p>
    );
};

export default Count;