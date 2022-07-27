const fav = ({ query, cuisine, type }) => {
        return (
            <div className='recipe' key={query}>
                <div>
                    <p>{type}</p>
                </div>
                <div>
                    <span>{cuisine}</span>
                    <h3>{query}</h3>
                </div>
            </div>
        );

    }

    export default fav