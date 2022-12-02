/* 
Recreate Object.entries() method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
  ];
  
  
  const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  };
  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];
  
  obj1.__proto__ = obj2;
  //   obj1.firstName = 'Jon';

/* 
create return array 
loop over object
add to array with key and value 
add values to return array 
return return array

  */
  
function entries(obj) {
    returnArr = []
  // remember to pseudocode the steps FIRST!
        for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            returnArr.push([key,obj[key]]);
        }
    }
    return(returnArr)
}

//console.log(entries(obj1));
//console.log(entries(obj2));


/* ==== B O N U S ====
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

//   // Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

/* 
make two array
add keys to one array
.join array
format strings with parathensis 
f string insert into ${table} (first string) values (last string)
*/

function insert(tableName, columnValuePairs) {
    keys = []
    values = []
    for(key in columnValuePairs){
        keys.push(key)
        values.push(columnValuePairs[key])
    }
    return `INSERT INTO ${tableName}(${keys.join(", ")}) VALUES(${values.join(", ")});`
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));