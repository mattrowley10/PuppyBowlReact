const cohortName = '2301-FTB-ET-WEB-AM';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
    const response = await fetch(`${APIURL}players`);
    const result = await response.json();
    if(result.error) {
        throw result.error
    }
    return result.data.players;
    }  
    catch (error) {
    console.error(`Oh no! Trouble fetching players`, error)
} 
};
export const fetchSinglePlayer = async (playerId) => {
    try {
    const response = await fetch(`${APIURL}players/${playerId}`);
    const result = await response.json();
    return result.data.player
    }
    catch (error){ 
        console.error(`Oh no! Trouble fetching player`, error)
    }
};
export const addNewPlayer = async (name, email, breed) => {
    try{
    const response = await fetch(`${APIURL}players`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name, 
            email,
            breed,
        })
    });
    const onePup = await response.json();
    return onePup
} catch (error) {
    console.error("Uh Oh! Problem catching the pup!", error)
}
}

export const removePlayer = async (playerId) => {
    try{
        const response = await fetch(`${APIURL}players/${playerId}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            },
        });
        let erasedPup = await response.json();
        console.log(erasedPup)
        return erasedPup 
    } catch (error){
        console.error(`Uh Oh! Problem removing the pup!`)
    }
};