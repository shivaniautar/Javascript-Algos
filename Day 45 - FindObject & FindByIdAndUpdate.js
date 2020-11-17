/**
 * takes in a "searched for" object
 * and an array of objects
 * returns an array of objects that matches
 * the keys/values of the given searched for object
 */

function findObjects(searchFor, items) {
    // your code here
  }
  
  const searchFor = {
    firstName: "Bob",
    age: 31
  };
  
  const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
  ];
  
  console.log(findObjects(searchFor, items));
  // should log [
  //   { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
  //   { firstName: 'Bob', lastName: 'White', age: 31 }   
  // ]
  
  
  /**
   * takes in an integer (ID),
   * an "update" object,
   * and an array of objects to search
   * return the updated object or null if not found
   */
  
  function findByIdAndUpdate(id, updateObj, collection) {
    // your code here
  }
  
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
  
  console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
  
  // should log {
  //   id: 3,
  //   name: "student3",
  //   isLateToday: false,
  //   lateCount: 0,
  //   redBeltStatus: true
  // }
  
  console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
  
  // should log {
  //   id: 1,
  //   name: "student1",
  //   isLateToday: true,
  //   lateCount: 16,
  //   redBeltStatus: false
  //   randomKey: "randomValue"
  // }
  
  console.log(findByIdAndUpdate(5, {}, students));
  // should log null
  
  // GROUP WORK
  /**
   * takes in a "searched for" object
   * and an array of objects
   * returns an array of objects that matches
   * the keys/values of the given searched for object
   */
  const searchFor = {
    firstName: "Bob",
    age: 31
  };
  
  const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
  ];
  
  function findObjects(searchFor, items) {
    var newArr = []
    for (i = 0; i < items.length; i++) {
      if (items[i].age === searchFor.age && items[i].firstName === searchFor.firstName) {
        newArr.push(items[i])
      }
    }
    return newArr
  }
  
  
  
  
  console.log(findObjects(searchFor, items));
    // should log [
    //   { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
    //   { firstName: 'Bob', lastName: 'White', age: 31 }   
    // ]
  ///////////////////////////////////////////////////////////////////////////////////////
  
  /**
   * takes in an integer (ID),
   * an "update" object,
   * and an array of objects to search
   * return the updated object or null if not found
   *///for(var key in obj) {
  
  
  function findByIdAndUpdate(id, updateObj, collection) {
      for(i=0;i<students.length;i++){
          if(students[i].id===id){
            for(var key in updateObj){
              students.add(updateObj.key, updateObj.value)
            }
            
              //students[i].updateObj=Object.keys(updateObj)
              //updateObj 
  
          }
      }
      return students;
    }
    
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
    
    console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
    
    // should log {
    //   id: 3,
    //   name: "student3",
    //   isLateToday: false,
    //   lateCount: 0,
    //   redBeltStatus: true
    // }
    
    console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
    
    // should log {
    //   id: 1,
    //   name: "student1",
    //   isLateToday: true,
    //   lateCount: 16,
    //   redBeltStatus: false
    //   randomKey: "randomValue"
    // }
    
    console.log(findByIdAndUpdate(5, {}, students));
    // should log null
  
  
  
  // SOLUTIONS
  /**
   * takes in a "searched for" object
   * and an array of objects
   * returns an array of objects that matches
   * the keys/values of the given searched for object
   */
  
  function findObjects(searchFor, items) {
    var solutionArr = []
  
    for (var objKey = 0; objKey<items.length; objKey++){
        var match = true;
        for (var key in searchFor){
            if (items[objKey][key]!==searchFor[key]){
                match = false;
                break;
            }
        }
        if (match == true){
            solutionArr.push(items[objKey]);
        }
    }
    return solutionArr;
  }
  
  const searchFor = {
    firstName: "Bob",
    age: 31
  };
  
  const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
  ];
  
  console.log(findObjects(searchFor, items));
  // should log [
  //   { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
  //   { firstName: 'Bob', lastName: 'White', age: 31 }   
  // ]
  
  function findByIdAndUpdate(id, updateObj, collection) {
    let arr = Object.keys(updateObj);
    for (let i = 0; i < collection.length; i++){
        if (collection[i].id == id){
            for (let j = 0; j < arr.length; j++){
                collection[arr[j]] = updateObj[arr[j]]
            }
            return collection[i];
        }
    }
    return null;
  }
  
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
  console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
  console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
  console.log(findByIdAndUpdate(5, {}, students));