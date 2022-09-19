function setLocalStorage(obj){
    var{key, value} = obj;
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  return localStorage.getItem(key);
}

function removeLocalStorage(key) {
  return localStorage.removeItem(key);
}

function clearAllLocalStorage(){
    localStorage.clear();
}