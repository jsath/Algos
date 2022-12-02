/* 
findByIdAndUpdate(id, updateObject, arr)
Given an id, an object that has keys with corresponding updated values, and an array of objects
Find the object by "id" key that matches the given id value and then update that object's
keys with the provided new values.
Return the updated object, or null if no object was found

check 
someObj.hasOwnProperty("key")
Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

const c = (arg) => {console.log(arg)}

/*
iterate over collection with for of loop
find id in collection 
use a for in loop to loop over updated values
check if the updated values key is present in the collection's object where the id==id
change those keys values to the ones in updated vals
return the object after being edited
return "no edits made" if no object was edited 
*/


function findByIdAndUpdate(id, updatedVals, collection) {
    for(object of collection){
        if(object["id"] === id){
            for(key in updatedVals){
                if(object.hasOwnProperty(key)){
                    object[key] = updatedVals[key];
                }
            }
            return object;
        }
    }
    return null;
}


c(findByIdAndUpdate(3, { redBeltStatus: true }, students));
c(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
c(findByIdAndUpdate(5, {}, students));