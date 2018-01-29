async function rejectionWithReturnAwait () {
    try {
        return await Promise.reject(new Error());
    } catch (e) {
        return 'Saved!';
    }
}
async function rejectionWithReturn () {
    try {
        return Promise.reject(new Error());
    } catch (e) {
        return 'Saved!';
    }
}
rejectionWithReturnAwait().then(function (v) {
    console.log(JSON.stringify(v)); // Saved!
});
rejectionWithReturn().then(function (v) {
    console.log(JSON.stringify(v));
});
