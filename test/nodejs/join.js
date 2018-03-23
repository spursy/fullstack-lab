function fakeJoin(arr, connector) {
    var str = "";
    for (var i=0; i<arr.length; i++) {
        if (i>0) {
            str += connector;
        }
        if (arr[i] !== undefined) {
            arr == arr[i];
        }
    }
    console.log(str);
}
var a = new Array(3);
fakeJoin(a, "-");