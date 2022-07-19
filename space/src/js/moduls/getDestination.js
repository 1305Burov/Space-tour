export const getDestination = () => {
    return fetch(`http://localhost:4000/destinations`) 
        .then((response) => response.json())
        .catch((err) => {
            alert(err);
        })
}
// ?name=${destName}
