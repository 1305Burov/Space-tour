export const getCrew = () => {
    return fetch(`http://localhost:4000/crew`)  
        .then((response) => response.json())
        .catch((err) => {
            alert(err);
        })
}