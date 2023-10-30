const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {
                Array(12).fill().map((_,index) => (
                    <div key={index} className="shimmer-card"> 
                        <div className="shimmer-img"></div>
                        <div className="shimmer-name"></div>
                        <div className="shimmer-info"></div>
                        <div className="shimmer-rating"></div>
                        <div className="shimmer-cost"></div>
                    </div>    
                    )
                )
            }
        </div>
    );
};

export default Shimmer;