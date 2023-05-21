const Search = ({ p2 }) => {

    const handleRecherche = (event) => {
        const value = event.target.value;
        p2(value);
    };

    return (
        <div className="Search">
            <input type="text" placeholder='Search...' onChange={handleRecherche} />
        </div>

    );
}

export default Search;