//prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB || 
window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || 
window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

function init() {
  return new Promise((resolve, reject) => {
    var request = window.indexedDB.open("newDatabase", 1);
    
    request.onerror = function(event) {
      reject(event);
    };
    
    request.onsuccess = function(event) {
      // resolve database
      resolve(request.result)
    };
  })
}

const employeeData = [
  { id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },
  { id: "00-02", name: "prasad", age: 32, email: "prasad@tutorialspoint.com" }
];

function add(db) {
  return new Promise((resolve, reject) => {
    var request = db.transaction(["employee"], "readwrite")
      .objectStore("employee")
      .add({ id: "01", name: "prasad", age: 24, email: "prasad@tutorialspoint.com" });
    
    request.onsuccess = function(event) {
      resolve(event);
    };
    
    request.onerror = function(event) {
      reject(event);
    }
  })
}

function read(db) {
  var transaction = db.transaction(["employee"]);
  var objectStore = transaction.objectStore("employee");
  var request = objectStore.get("00-03");
  
  request.onerror = function(event) {
    console.log("Unable to retrieve daa from database!");
  };
  
  request.onsuccess = function(event) {
     if(request.result) {
        console.log("Name: " + request.result.name + ", Age: " + request.result.age + ", Email: " + request.result.email);
     } else {
        console.log("Kenny couldn't be found in your database!");  
     }
  };
}

init().then((db) => {
  add(db);
  setInterval(() => {
    read(db);
  }, 5000);
}).catch(err => console.log(err))