const PokemonCard = props => {
    const {poke} = props;


    return(
        <div className ="card col-2">
            <h4 className ="card-title">{poke.name}</h4>
        </div>
    );
}

export default PokemonCard;
