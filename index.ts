// * insert a single data in mongodb
db.test.insertOne({ name: "Something" });

// * insert multiple data in mongodb

 db.test.insertMany([
  { name: "Complete Web Development" },
  {
    name: "Next Level Web Development",
  },
]);

// * find a single data from database

db.test.findOne({ age: 17 });

// ? Field Filtering 

// * find data with a single field 

db.test.find({ gender: "Male" }, { gender: 1 });

// * show specific data 

db.test.find({ gender: "Male" }, { name: 1, email: 1, gender: 1 });

// * field filtering using project => but it won't work on findOne method 

db.test.find({ gender: "Male" }).project({ name: 1, email: 1, gender: 1 });

// * eq operator  => equal to 

// ? Syntax => {fieldName: {$eq: value} } 

db.test.findOne({ gender: { $eq: "Male" } });


// * ne operator => not equal to 
// ? Syntax => {fieldName: {$ne: value} } 

db.test.find({ age: { $ne: 14 } });

// * gt operator => greater than
// ? Syntax => {fieldName: {$gt: value} } 
db.test.find({ age: { $gt: 20 } });


// * gte operator => greater than or equal
// ? Syntax => {fieldName: {$gte: value} } 
db.test.find({ age: { $gte: 20 } });

// * lt operator => less than
// ? Syntax => {fieldName: {$lt: value} } 
db.test.find({ age: { $lt: 20 } });

// * lte operator => less than or equal
// ? Syntax => {fieldName: {$lte: value} } 
db.test.find({ age: { $lte: 20 } });


// * sort operator => ascending: 1, descending: -1 
// ? Syntax => sort({fieldName: 1 or -1}) 
db.test.find({ age: { $gt: 20 } }).sort({ age: 1 });


// * $in => mile gelei data diye dibe => the value of a field equals any value in the specified array.

// ? Syntax => {field: {$in: [value1, value2, .... , valueN]}}

db.test.find({gender: "Female",age: {$in: [18, 22, 26, 30]}},{age: 1,gender:1})



// * handle multiple case => implicit and 
db.test.find({ age: { $gt: 18, $lt: 30 } }, { age: 1 });

db.test.find({gender: "Female",age: {$gt:18, $lt:30}},{age: 1})


// * $nin => $nin selects the documents where:

/*  1. the specified field value is not in the specified array or

2. the specified field does not exist. */

db.test.find(
  { gender: "Female", age: { $nin: [18, 22, 26, 30] } },
  { age: 1, gender: 1 }
);


db.test.find(
  { gender: "Female", age: { $nin: [18, 22, 26, 30] }, interests: "Cooking" },
  { age: 1, gender: 1, interests: 1 }
);


db.test.find(
  {
    gender: "Female",
    age: { $nin: [18, 22, 26, 30] },
    interests: { $in: ["Cooking", "Gaming"] },
  },
  { age: 1, gender: 1, interests: 1 }
);