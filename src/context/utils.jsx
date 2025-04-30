export function setLocalStorage(user){
    localStorage.setItem('User', JSON.stringify(user));
}

export function getLocalStorage(){
    const json = localStorage.getItem('User');

    if (!json){
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;
}