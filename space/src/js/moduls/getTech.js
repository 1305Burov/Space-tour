export const getTech = () => {
    return fetch(`http://localhost:4000/technology`)  
        .then((response) => response.json())
        .catch((err) => {
            alert(err);
        })
}