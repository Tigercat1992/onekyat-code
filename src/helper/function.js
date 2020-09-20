export function copyArrayObjByNoRef(paramArrObj) { 
  let arrObj = [];
  paramArrObj = paramArrObj || [];
  for (var i = 0; i < paramArrObj.length; i++) {
    arrObj[i] = {};
    for (var prop in paramArrObj[i]) {
      arrObj[i][prop] = paramArrObj[i][prop];
    }
  }
  return arrObj;
}