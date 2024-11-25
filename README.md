**MongoDB কী?**  
MongoDB হলো একটি NoSQL ডাটাবেস, যা ডকুমেন্ট-ভিত্তিক স্টোরেজ সিস্টেম। এটি ডাটা store করতে JSON-এর মতো ফরম্যাট (BSON) ব্যবহার করে। MongoDB সাধারণত স্কিমালেস, অর্থাৎ এটি নির্দিষ্ট টেবিল বা কলাম ফরম্যাটে থাকে না, ফলে এটি অত্যন্ত ফ্লেক্সিবল এবং Developer Friendly।  

---

**কেন MongoDB ব্যবহার করবেন?**  
1. **Scalability:** MongoDB সহজে হরাইজন্টাল স্কেলিং সাপোর্ট করে। অর্থাৎ, বড় আকারের ডাটাবেস সহজেই বিভক্ত করা যায়।  
2. **Flexibility:** কোনো নির্দিষ্ট স্কিমা দরকার নেই। ফলে ডাটা মডেলিং দ্রুত এবং সহজ হয়।  
3. **Performance:** MongoDB-তে document-oriented স্ট্রাকচার থাকায় রিড এবং রাইট অপারেশন দ্রুত হয়।  
4. **Complex Query Support:** MongoDB complex কোয়েরি এবং অ্যাগ্রিগেশন সাপোর্ট করে, যা deep data analysis এর জন্য effective।  

---

**MongoDB VS Traditional Databases:**  

## MongoDB vs Traditional Databases

| বৈশিষ্ট্য               | MongoDB                              | RDBMS                                  |
|-------------------------|--------------------------------------|----------------------------------------|
| **ডাটা স্ট্রাকচার**     | ডকুমেন্ট-ভিত্তিক (JSON/BSON ফরম্যাট) | টেবিল-ভিত্তিক (Rows & Columns)         |
| **স্কিমা**              | স্কিমালেস (Flexible)                | নির্দিষ্ট স্কিমা প্রয়োজন               |
| **স্কেলিং**             | সহজে হরাইজন্টাল স্কেলিং             | মূলত ভার্টিকাল স্কেলিং                 |
| **কোয়েরি Language**     | MongoDB Query Language (MQL)        | SQL (Structured Query Language)        |
| **ব্যবহার ক্ষেত্র**     | রিয়েল-টাইম অ্যাপ, IoT, Big Data    | ফাইন্যান্স, এন্টারপ্রাইজ সিস্টেম        |
| **পারফরম্যান্স**        | Non-relational ডাটার ক্ষেত্রে effective | রিলেশনাল ডাটার ক্ষেত্রে effective     |

---

 যেখানে দ্রুত পরিবর্তনশীল ডাটার প্রয়োজন এবং বড় আকারের ডাটা হ্যান্ডল করতে হবে, সেখানে MongoDB বেশি কার্যকর। তবে traditional ডাটাবেস (যেমন MySQL, PostgreSQL) স্ট্রাকচারড ডাটার জন্য এবং ট্রানজ্যাকশন-ভিত্তিক অপারেশনে ভালো পারফর্ম করে। সুতরাং, প্রয়োজনের ভিত্তিতে সঠিক ডাটাবেস নির্বাচন করাই বুদ্ধিমানের কাজ।

 ---- 

 **MongoDB-তে প্রয়োজনীয় Operator, Syntax এবং Example**  

---

### **1. `insert`, `insertOne`, `insertMany`: ডাটাবেজে ডাটা যোগ করা**  

#### **`insertOne`: একক ডকুমেন্ট insert/add করতে**  
- **Syntax:**  
```javascript
db.collectionName.insertOne({key: value})
```
- **Example:**  
```javascript
db.students.insertOne({name: "Rahim", age: 22, grade: "A"})
```

#### **`insertMany`: একাধিক ডকুমেন্ট insert/add করতে**  
- **Syntax:**  
```javascript
db.collectionName.insertMany([{key1: value1}, {key2: value2}])
```
- **Example:**  
```javascript
db.students.insertMany([
  {name: "Karim", age: 23, grade: "B"},
  {name: "Jamal", age: 24, grade: "A"}
])
```

---

### **2. `find`, `findOne`: ডাটা রিট্রিভ/খুঁজে বের করা**  

#### **`find`: এক বা একাধিক ডকুমেন্ট খুঁজে পেতে**  
- **Syntax:**  
```javascript
db.collectionName.find(query)
```
- **Example:**  
```javascript
db.students.find({grade: "A"})
```

#### **`findOne`: একটি ডকুমেন্ট খুঁজে পেতে**  
- **Syntax:**  
```javascript
db.collectionName.findOne(query)
```
- **Example:**  
```javascript
db.students.findOne({name: "Rahim"})
```

---

### **3. ফিল্ড ফিল্টারিং এবং `project`: নির্দিষ্ট ফিল্ড রিট্রিভ করা**  

- **Syntax:**  
```javascript
db.collectionName.find(query, {field1: 1, field2: 0})
```
- **Example:**  
```javascript
db.students.find({grade: "A"}, {name: 1, _id: 0})
```

**Output:**  
```json
[{ "name": "Rahim" }]
```

---

### **4. `eq`, `ne`, `gt`, `gte`, `lt`, `lte`: কন্ডিশনাল অপারেটর ব্যবহার**  

#### **`eq` (সমান):**  
```javascript
db.collectionName.find({field: {$eq: value}})
```
**Example:**  
```javascript
db.students.find({age: {$eq: 22}})
```

#### **`ne` (সমান নয়):**  
```javascript
db.collectionName.find({field: {$ne: value}})
```
**Example:**  
```javascript
db.students.find({grade: {$ne: "B"}})
```

#### **`gt` (বড়):**  
```javascript
db.collectionName.find({field: {$gt: value}})
```
**Example:**  
```javascript
db.students.find({age: {$gt: 22}})
```

#### **`gte` (বড় বা সমান):**  
```javascript
db.collectionName.find({field: {$gte: value}})
```
**Example:**  
```javascript
db.students.find({age: {$gte: 23}})
```

#### **`lt` (ছোট):**  
```javascript
db.collectionName.find({field: {$lt: value}})
```
**Example:**  
```javascript
db.students.find({age: {$lt: 23}})
```

#### **`lte` (ছোট বা সমান):**  
```javascript
db.collectionName.find({field: {$lte: value}})
```
**Example:**  
```javascript
db.students.find({age: {$lte: 24}})
```

---

### **5. `sort`: ডাটা সাজানো**  

- **Syntax:**  
```javascript
db.collectionName.find(query).sort({field: 1 or -1})
```
- **Example:**  
```javascript
db.students.find().sort({age: 1}) // Ascending
db.students.find().sort({age: -1}) // Descending
```

---

### **6. `in`, `nin`: ডাটা সেটের মধ্যে বা বাইরে খোঁজা**  

#### **`in`: নির্দিষ্ট ভ্যালুগুলোর মধ্যে**  
```javascript
db.collectionName.find({field: {$in: [value1, value2]}})
```
**Example:**  
```javascript
db.students.find({grade: {$in: ["A", "B"]}})
```

#### **`nin`: নির্দিষ্ট ভ্যালুগুলোর বাইরে**  
```javascript
db.collectionName.find({field: {$nin: [value1, value2]}})
```
**Example:**  
```javascript
db.students.find({grade: {$nin: ["A", "C"]}})
```

---

### **7. Implicit `and`: একাধিক কন্ডিশন**  
- **Syntax:**  
```javascript
db.collectionName.find({field1: value1, field2: value2})
```
- **Example:**  
```javascript
db.students.find({grade: "A", age: {$gte: 22}})
```

---

### **8. Complex Query with `in`, `nin`: জটিল কোয়েরি**  

- **Example:**  
```javascript
db.students.find({
  $and: [
    {grade: {$in: ["A", "B"]}},
    {age: {$nin: [22, 24]}}
  ]
})
```

**Output:** এমন ডকুমেন্ট রিটার্ন করবে যেখানে গ্রেড "A" বা "B" এবং বয়স ২২ বা ২৪ নয়।  

--- 

