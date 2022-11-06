
function extractKey(arrayOfObject, keyName) {
    let result = arrayOfObject.map(item => item[keyName])
    return result;
  }
  
  console.log(
    extractKey(
      [
        { name: "Elie", isInstructor: true },
        { name: "Tim", isInstructor: true },
        { name: "Matt", isInstructor: true },
      ],
      "name"
    )
  );

  //exercise 2

  function filterLetters(arrayOfObjectLetters, letters) {
    let result = arrayOfObjectLetters.filter(numberOfOccurences => numberOfOccurences.toLowerCase() === letters.toLowerCase() )

    return result.length;
  }
console.log(filterLetters(["a","a","b","c","A"], "a"))
console.log(filterLetters(["a", "a", "b", "c", "A"], "z"));
console.log(filterLetters(["a", "a", "b", "c", "A"], "B"));
  


//exercise 3
// Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.
// printFirstAndLast(['awesome','example','of','forEach'])

// // ae
// ee
// of
// fh

function printFirstAndLast(arrayOfObject) {
    let result = arrayOfObject.map(Element =>  Element.at(0) + Element.at(-1))
    return result;
}
    console.log(printFirstAndLast(['awesome','example','of','forEach']))

  
//exercise 4.
//Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

function valTimesIndex(arrayOfNumbers) {
    let multiplied = arrayOfNumbers.map(function(number, index){
        return (number * index)
    })
    return multiplied;
}

// //Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value has been added. You can do this a few ways, either by reducing starting with an empty array and making copies of the object or by starting with the actual array!
// addKeyAndValue([{name:'Joshua'},{name:'Mark'},{name:'Arthur'}],"isInstructor", true);



function addKeyAndValue(arrayOfObjects, key, value) {
    return arrayOfObjects.reduce((acc, element) => {
        acc = Object.assign(arrayOfObjects);
        element[key] = value;
        return acc;
    }, []);
}
console.log(addKeyAndValue([{name:'Joshua'},{name:'Mark'},{name:'Arthur'}],"isInstructor", true));

//exercise 6

let users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
function printEmails(arrayOfObject)  {
  let result = arrayOfObject.map(function(emails){
    return emails.email
   })
   return result
}
console.log(printEmails(users))

// exercise 7.
function printHobbies(arrayOfObject,)  {
    result = arrayOfObject.map(function(hobby){
        hobby.hobbies.map(function(hobby){
            console.log(hobby);
        })
    } )
}
 printHobbies(users);

 //exercise 8.

//  Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in

 function findHometownByState(anArrayOfObject, state) {
   return anArrayOfObject.find(function(element){
        return element.hometown.state === state 
          
        
    })
 }
 console.log(findHometownByState(users, 'CA'))


 //exercise 9

// Write a function called allLanguages which returns an array of all of the unique values

function allLanguages(uniqueValues) {
    let newArray = [];
     uniqueValues.map(function(arr){
        arr.favoriteLanguages;{
        arr.favoriteLanguages.map(function (element) {
            if (newArray.includes(element) === false) {
                newArray.push(element);
            }
         }
    )}
    })
    return newArray

    
}
console.log(allLanguages(users))

//exercise 10

//Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in
function hasFavoriteEditor(arrayOfObject, editorName) {
  return arrayOfObject.some(function(element){
        return element.favoriteEditor === editorName 
    });
}

console.log(hasFavoriteEditor(users, 'VS Code'))

//exercise 11

//Write a function called findByUsername which takes in a string and returns an object in the users array that has that username

function findByUsername(arrayOfObject, string) {
    return arrayOfObject.find(function(element){
        return element.username === string
    })
}
console.log(findByUsername(users, 'david'))
console.log(findByUsername(users, 'jane'))

//PART 2

// //Write a function called vowelCount that accepts a string and returns an object with each key being the 
// vowel and the value being 
// the number of times the vowel occurs in the string (the order of keys in the object does not matter).
 const vowels = ["a", "e", "i", "o", "u"];
function vowelCount(aString) {
  let newObject = {};
  for (let letter of aString) {
    if (vowels.includes(letter)) {
      if (newObject.hasOwnProperty(letter)) {
        newObject[letter] = newObject[letter] + 1;
      } else {
        newObject[letter] = 1;
      }
    }
  }
  return newObject;
}
console.log(vowelCount("awesome"));

