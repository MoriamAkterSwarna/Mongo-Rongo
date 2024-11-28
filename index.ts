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

db.test.find(
  { gender: "Female", age: { $in: [18, 22, 26, 30] } },
  { age: 1, gender: 1 }
);

// * handle multiple case => implicit and
db.test.find({ age: { $gt: 18, $lt: 30 } }, { age: 1 });

// ? ==============================
db.test.find({ gender: "Female", age: { $gt: 18, $lt: 30 } }, { age: 1 });

// * $nin => $nin selects the documents where:

/*  1. the specified field value is not in the specified array or

2. the specified field does not exist. */

db.test.find(
  { gender: "Female", age: { $nin: [18, 22, 26, 30] } },
  { age: 1, gender: 1 }
);

// ? ==============================
db.test.find(
  { gender: "Female", age: { $nin: [18, 22, 26, 30] }, interests: "Cooking" },
  { age: 1, gender: 1, interests: 1 }
);

// ? ==============================
db.test.find(
  {
    gender: "Female",
    age: { $nin: [18, 22, 26, 30] },
    interests: { $in: ["Cooking", "Gaming"] },
  },
  { age: 1, gender: 1, interests: 1 }
);

// ? ==============================
// * Implicit and => for same field only
db.test.find({ age: { $ne: 15, $lte: 30 } });

// ? ==============================
// * Explicit and => $and operator

db.test
  .find({
    $and: [{ age: { $ne: 15 } }, { age: { $lte: 30 } }],
  })
  .project({ age: 1 })
  .sort({ age: 1 });

// ? ==============================
db.test
  .find({
    $and: [{ gender: "Female" }, { age: { $ne: 15 } }, { age: { $lte: 30 } }],
  })
  .project({ age: 1, gender: 1 })
  .sort({ age: 1 });

// ? ==============================
// * Explicit or => $or operator

db.test
  .find({
    $or: [
      { interests: "Travelling" },
      {
        interests: "Cooking",
      },
    ],
  })
  .project({ interests: 1, gender: 1 })
  .sort({ age: 1 });

// -----------

db.test
  .find({
    $or: [
      {
        "skills.name": "JAVASCRIPT",
      },
      {
        "skills.name": "PYTHON",
      },
      { interests: "Travelling" },
      {
        interests: "Cooking",
      },
    ],
  })
  .project({ skills: 1, gender: 1 })
  .sort({ age: 1 });

// ? ==============================

db.test
  .find({ "skills.name": { $in: ["JAVASCRIPT"] } })
  .projection({ skills: 1 });

// ? ==============================

//* <!-- * $exists operator -->

db.test.find({ phone: { $exists: false } });

// ? ==============================
db.test.find({ phone: { $exists: true } });

// ? ==============================
//* <!-- * type operator  -->

db.test.find({ age: { $type: "string" } });

// ? ==============================

db.test.find({ age: { $type: "number" } });

// ? ==============================

db.test.find({ friends: { $type: "array" } });

// ? ==============================

//* <!-- * $size operator  -->

db.test.find({ friends: { $size: 4 } });

// ? ==============================

db.test.find({ skills: { $size: 0 } });

// ? ==============================
db.test.find({ interests: ["Travelling", "Reading", "Cooking"] });

// ? ==============================
// *$elemMatch operator

db.test
  .find({
    skills: {
      $elemMatch: { name: "JAVASCRIPT", level: "Intermidiate" },
    },
  })
  .project({ skills: 1 });

// ? ==============================

// * $all operator

db.test
  .find({
    interests: { $all: ["Travelling", "Gaming", "Reading"] },
  })
  .project({ interests: 1 });

// ? ==============================

// * Mongodb Update Query
// * $set operator => it can change non-primitive to primitive

db.test.updateOne(
  // kake update korbo
  // ki update korbo

  {
    _id: ObjectId("6406ad63fc13ae5a40000065"),
  },
  {
    $set: {
      age: 80,
    },
  }
);

// ? ==============================

// * $addToSet operator

db.test.updateOne(
  // kake update korbo
  // ki update korbo

  {
    _id: ObjectId("6406ad63fc13ae5a40000065"),
  },
  {
    $addToSet: {
      interests: "Gaming",
    },
  }
);

// ? ==============================
// * $each Operator

db.test.updateOne(
  // kake update korbo
  // ki update korbo

  {
    _id: ObjectId("6406ad63fc13ae5a40000065"),
  },
  {
    $addToSet: {
      interests: { $each: ["Gaming", "Driving"] },
    },
  }
);

// ? ==============================
// * $push operator

db.test.updateOne(
  // kake update korbo
  // ki update korbo

  {
    _id: ObjectId("6406ad63fc13ae5a40000065"),
  },
  {
    $push: {
      interests: { $each: ["Writing", "Driving"] },
    },
  }
);

// ? ==============================

// * $unset operator => remove a field 

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $unset: { birthday: "" },
  }
);


// ? ==============================

// * $pop operator => remove the first or last element of an array

// ? Syntax => {field: {$pop: 1 or -1}}  => 1 for last element, -1 for first element 


db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $pop: { friends: 1 },
  }
);


// ? ==============================

// * $pull operator => remove a specific value from an array 

// ? Syntax => {field: {$pull: value}} 

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $pull: { friends: "Mir Hussain" },
  }
);
// ========================== 


db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  {
    $pull: { languages: "Catalan" },
  }
);

// ? ==============================

// * $pullAll operator => remove multiple values from an array 

// ? Syntax => {field: {$pullAll: [value1, value2, .... , valueN]}} 

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $pullAll: { languages: ["German", "Thai"] } }
);


// ? ==============================

// * More about $set operator => it can change non-primitive to primitive 


db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },

  {
    $set: {
      "address.city": "dhaka",
      "address.postalCode": "0000",
      "address.country": "bangladesh",
    },
  }
);


// ? ==============================

//  *  $ positional operator => it can update a specific element of an array 


db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065"), "education.major": "Art" },

  {
    $set: {
      "education.$.major": "CSE",
    },
  }
);

// ? ==============================

// * $inc operator => increment a field value by a specific amount

db.test.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },

  {
    $inc: {
      age: 1,
    },
  }
);

// ? ==============================

// * deleteOne method => delete a single document 

db.test.deleteOne({ _id: ObjectId("6406ad63fc13ae5a40000065") }); 

// ? ==============================

// * create a collection => createCollection method 
db.createCollection("posts"); 

// ? ==============================

// * drop a collection => drop method

db.posts.drop();


