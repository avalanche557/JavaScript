//local storage is read only property of document object
//no expiry time
window.localStorageWithExpiry = {
    setItem: function(key,value, expiry) {
        let result = {
            value,
            expiryTime: Date.now() + expiry
        }
        localStorage.setItem(key, JSON.stringify(result))
    },
    getItem: function(key) {
        let data = JSON.parse(localStorage.getItem(key))
        if(data.expiryTime <= Date.now()) {
            localStorage.removeItem(key)
            return null
        }
        return data.value
    },
    removeItem: function(key) {
        localStorage.removeItem(key)
    },
    clear: function() {
        localStorage.clear()
    }
}