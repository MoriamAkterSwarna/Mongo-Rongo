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

| বৈশিষ্ট্য           | MongoDB                                 | RDBMS                             |
| ------------------- | --------------------------------------- | --------------------------------- |
| **ডাটা স্ট্রাকচার** | ডকুমেন্ট-ভিত্তিক (JSON/BSON ফরম্যাট)    | টেবিল-ভিত্তিক (Rows & Columns)    |
| **স্কিমা**          | স্কিমালেস (Flexible)                    | নির্দিষ্ট স্কিমা প্রয়োজন         |
| **স্কেলিং**         | সহজে হরাইজন্টাল স্কেলিং                 | মূলত ভার্টিকাল স্কেলিং            |
| **কোয়েরি Language** | MongoDB Query Language (MQL)            | SQL (Structured Query Language)   |
| **ব্যবহার ক্ষেত্র** | রিয়েল-টাইম অ্যাপ, IoT, Big Data        | ফাইন্যান্স, এন্টারপ্রাইজ সিস্টেম  |
| **পারফরম্যান্স**    | Non-relational ডাটার ক্ষেত্রে effective | রিলেশনাল ডাটার ক্ষেত্রে effective |

---

যেখানে দ্রুত পরিবর্তনশীল ডাটার প্রয়োজন এবং বড় আকারের ডাটা হ্যান্ডল করতে হবে, সেখানে MongoDB বেশি কার্যকর। তবে traditional ডাটাবেস (যেমন MySQL, PostgreSQL) স্ট্রাকচারড ডাটার জন্য এবং ট্রানজ্যাকশন-ভিত্তিক অপারেশনে ভালো পারফর্ম করে। সুতরাং, প্রয়োজনের ভিত্তিতে সঠিক ডাটাবেস নির্বাচন করাই বুদ্ধিমানের কাজ।

---

**MongoDB-তে প্রয়োজনীয় Operator, Syntax এবং Example**

---

### **1. `insert`, `insertOne`, `insertMany`: ডাটাবেজে ডাটা add করা**

#### **`insertOne`: একক ডকুমেন্ট insert/add করতে**

- **Syntax:**

```javascript
db.collectionName.insertOne({ key: value });
```

- **Example:**

```javascript
db.students.insertOne({ name: "Rahim", age: 22, grade: "A" });
```

#### **`insertMany`: একাধিক ডকুমেন্ট insert/add করতে**

- **Syntax:**

```javascript
db.collectionName.insertMany([{ key1: value1 }, { key2: value2 }]);
```

- **Example:**

```javascript
db.students.insertMany([
  { name: "Karim", age: 23, grade: "B" },
  { name: "Jamal", age: 24, grade: "A" },
]);
```

---

### **2. `find`, `findOne`: ডাটা রিট্রিভ/খুঁজে বের করা**

#### **`find`: এক বা একাধিক ডকুমেন্ট খুঁজে পেতে**

- **Syntax:**

```javascript
db.collectionName.find(query);
```

- **Example:**

```javascript
db.students.find({ grade: "A" });
```

#### **`findOne`: একটি ডকুমেন্ট খুঁজে পেতে**

- **Syntax:**

```javascript
db.collectionName.findOne(query);
```

- **Example:**

```javascript
db.students.findOne({ name: "Rahim" });
```

---

### **3. ফিল্ড ফিল্টারিং এবং `project`: নির্দিষ্ট ফিল্ড রিট্রিভ করা**

- **Syntax:**

```javascript
db.collectionName.find(query, { field1: 1, field2: 0 });
```

- **Example:**

```javascript
db.students.find({ grade: "A" }, { name: 1, _id: 0 });
```

**Output:**

```json
[{ "name": "Rahim" }]
```

---

### **4. `eq`, `ne`, `gt`, `gte`, `lt`, `lte`: কন্ডিশনাল অপারেটর ব্যবহার**

#### **`eq` (সমান):**

```javascript
db.collectionName.find({ field: { $eq: value } });
```

**Example:**

```javascript
db.students.find({ age: { $eq: 22 } });
```

#### **`ne` (সমান নয়):**

```javascript
db.collectionName.find({ field: { $ne: value } });
```

**Example:**

```javascript
db.students.find({ grade: { $ne: "B" } });
```

#### **`gt` (বড়):**

```javascript
db.collectionName.find({ field: { $gt: value } });
```

**Example:**

```javascript
db.students.find({ age: { $gt: 22 } });
```

#### **`gte` (বড় বা সমান):**

```javascript
db.collectionName.find({ field: { $gte: value } });
```

**Example:**

```javascript
db.students.find({ age: { $gte: 23 } });
```

#### **`lt` (ছোট):**

```javascript
db.collectionName.find({ field: { $lt: value } });
```

**Example:**

```javascript
db.students.find({ age: { $lt: 23 } });
```

#### **`lte` (ছোট বা সমান):**

```javascript
db.collectionName.find({ field: { $lte: value } });
```

**Example:**

```javascript
db.students.find({ age: { $lte: 24 } });
```

---

### **5. `sort`: ডাটা সাজানো**

- **Syntax:**

```javascript
db.collectionName.find(query).sort({field: 1 or -1})
```

- **Example:**

```javascript
db.students.find().sort({ age: 1 }); // Ascending
db.students.find().sort({ age: -1 }); // Descending
```

---

### **6. `in`, `nin`: ডাটা সেটের মধ্যে বা বাইরে খোঁজা**

#### **`in`: নির্দিষ্ট ভ্যালুগুলোর মধ্যে**

```javascript
db.collectionName.find({ field: { $in: [value1, value2] } });
```

**Example:**

```javascript
db.students.find({ grade: { $in: ["A", "B"] } });
```

#### **`nin`: নির্দিষ্ট ভ্যালুগুলোর বাইরে**

```javascript
db.collectionName.find({ field: { $nin: [value1, value2] } });
```

**Example:**

```javascript
db.students.find({ grade: { $nin: ["A", "C"] } });
```

---

### **7. Implicit `and`: একাধিক কন্ডিশন**

- **Syntax:**

```javascript
db.collectionName.find({ field1: value1, field2: value2 });
```

- **Example:**

```javascript
db.students.find({ grade: "A", age: { $gte: 22 } });
```

---

### **8. Complex Query with `in`, `nin`: জটিল কোয়েরি**

- **Example:**

```javascript
db.students.find({
  $and: [{ grade: { $in: ["A", "B"] } }, { age: { $nin: [22, 24] } }],
});
```

**Output:** এমন ডকুমেন্ট রিটার্ন করবে যেখানে গ্রেড "A" বা "B" এবং বয়স ২২ বা ২৪ নয়।

---

### `AND` অপারেটরের `Implicit` এবং `Explicit`

MongoDB-তে `AND` অপারেটর দুটি উপায়ে ব্যবহার করা যায়: `Implicit` (অলিখিত বা সরাসরি ব্যবহার না করে) এবং `Explicit` (স্পষ্টভাবে উল্লেখ করে)।

---

#### ১. **Implicit AND **

MongoDB-তে আপনি যখন একাধিক শর্ত ব্যবহার করেন, তখন ডিফল্টভাবে এটি `AND` অপারেটর হিসেবে কাজ করে। আপনাকে আলাদা করে `$and` অপারেটর লিখতে হয় না।

##### **Syntax**:

```json
{
  "field1": "value1",
  "field2": "value2"
}
```

##### **Example **:

ধরা যাক, আমাদের একটি `students` কালেকশন আছে যেখানে প্রতিটি ডকুমেন্টে শিক্ষার্থীদের নাম, ক্লাস এবং রেজাল্টের তথ্য আছে। আমরা এমন শিক্ষার্থীদের খুঁজতে চাই যারা `class: "10"` এবং `result: "A"`।

```javascript
db.students.find({
  class: "10",
  result: "A",
});
```

##### **Result**:

এই কোয়েরি এমন ডকুমেন্ট খুঁজে বের করবে যেখানে **class = "10"** এবং **result = "A"** উভয় শর্ত পূরণ হয়।

---

#### ২. **Explicit AND **

যদি আপনি স্পষ্টভাবে `AND` অপারেটর ব্যবহার করতে চান, MongoDB-তে `$and` অপারেটর ব্যবহার করতে হবে। এটি একাধিক শর্তকে একটি অ্যারে হিসেবে গ্রহণ করে।

##### **Syntax**:

```json
{
  "$and": [{ "field1": "value1" }, { "field2": "value2" }]
}
```

##### **Example **:

উপরের একই `students` কালেকশনের ক্ষেত্রে, এবার `$and` অপারেটর ব্যবহার করে একই শর্তগুলো লিখি:

```javascript
db.students.find({
  $and: [{ class: "10" }, { result: "A" }],
});
```

##### **Result**:

এই কোয়েরি-ও একই ফলাফল দেবে, তবে এখানে স্পষ্টভাবে `AND` অপারেটর ব্যবহৃত হয়েছে।

---

#### **Implicit AND বনাম Explicit AND**

- **Implicit AND**: সহজ এবং সরাসরি লেখার জন্য ব্যবহৃত হয়। এটি যখন ব্যবহার করা যায়, তখন কোড আরও সংক্ষিপ্ত এবং পড়তে সহজ হয়।
- **Explicit AND**: এমন ক্ষেত্রে প্রয়োজন যখন শর্তগুলো আরও জটিল হয়, যেমন: একই ফিল্ডে একাধিক শর্ত বা ডায়নামিক কোয়েরি।

---

#### OR অপারেটর

`OR` অপারেটরের জন্য MongoDB-তে `$or` ব্যবহার করতে হয়। এটি একাধিক শর্তের মধ্যে যেকোনো একটি পূরণ হলে ডকুমেন্ট রিটার্ন করে।

##### **Syntax**:

```json
{
  "$or": [{ "field1": "value1" }, { "field2": "value2" }]
}
```

##### **Example **:

উপরের একই `students` কালেকশনের ক্ষেত্রে, এবার আমরা এমন শিক্ষার্থীদের খুঁজতে চাই যারা হয় `class: "10"` অথবা `result: "A"`।

```javascript
db.students.find({
  $or: [{ class: "10" }, { result: "A" }],
});
```

##### **Result**:

এই কোয়েরি এমন ডকুমেন্টগুলো দেবে যেখানে `class = "10"` অথবা `result = "A"`।

---

#### In Summary:

- **Implicit AND**:
  ```javascript
  { "field1": "value1", "field2": "value2" }
  ```
- **Explicit AND**:
  ```javascript
  { "$and": [ { "field1": "value1" }, { "field2": "value2" } ] }
  ```
- **OR**:
  ```javascript
  { "$or": [ { "field1": "value1" }, { "field2": "value2" } ] }
  ```

---

---

###  **`$exists` অপারেটর**

`$exists` ব্যবহার করে চেক করা যায়, কোনো ফিল্ড ডকুমেন্টে আছে কি নেই।

#### **Syntax**:
```json
{
  "field": { "$exists": <boolean> }
}
```
- `<boolean>`: `true` হলে ফিল্ডটি ডকুমেন্টে থাকতে হবে।  
- `false` হলে ফিল্ডটি ডকুমেন্টে থাকা যাবে না।

#### **Example **:
ধরা যাক, `products` কালেকশনে কিছু পণ্য আছে। আমরা এমন পণ্য খুঁজতে চাই যেগুলোতে `discount` নামে ফিল্ড আছে।

```javascript
db.products.find({
  "discount": { "$exists": true }
})
```

##### **Result**:
এই কোয়েরি শুধুমাত্র সেই ডকুমেন্টগুলো ফিরিয়ে দেবে যেখানে `discount` ফিল্ড আছে।

---

###  **`$size` অপারেটর**

`$size` অপারেটর ব্যবহার করে কোনো অ্যারের সঠিক আকার (length) চেক করা যায়।

#### **Syntax**:
```json
{
  "arrayField": { "$size": <number> }
}
```
- `<number>`: অ্যারের আইটেমের সংখ্যা (লম্বা)।

#### **Example **:
ধরা যাক, `orders` নামে একটি কালেকশন আছে যেখানে প্রতিটি অর্ডারের `items` নামে একটি অ্যারে ফিল্ড আছে। আমরা এমন অর্ডার খুঁজতে চাই যেখানে ঠিক ৩টি আইটেম আছে।

```javascript
db.orders.find({
  "items": { "$size": 3 }
})
```

##### **Result**:
এই কোয়েরি শুধুমাত্র সেই ডকুমেন্টগুলো ফিরিয়ে দেবে যেখানে `items` অ্যারে-তে ঠিক ৩টি উপাদান আছে।

---

###  **`$type` অপারেটর**

`$type` ব্যবহার করে নির্দিষ্ট ফিল্ডের ডেটা টাইপ চেক করা যায়। MongoDB-তে বিভিন্ন ডেটা টাইপের জন্য নম্বর বা স্ট্রিং ব্যবহৃত হয়। উদাহরণস্বরূপ:
- `1`: Double  
- `2`: String  
- `3`: Object  
- `4`: Array  
- `10`: Null  
- `Date`: "date" (স্ট্রিং হিসেবে ব্যবহার করা হয়)

#### **Syntax**:
```json
{
  "field": { "$type": <type> }
}
```
- `<type>`: ডেটা টাইপ (নাম বা নম্বর)।

#### **Example **:
ধরা যাক, `employees` নামে একটি কালেকশন আছে। আমরা এমন ডকুমেন্ট খুঁজতে চাই যেখানে `salary` ফিল্ডের ডেটা টাইপ `double`।

```javascript
db.employees.find({
  "salary": { "$type": 1 }
})
```

অথবা স্ট্রিং ফরম্যাটে:
```javascript
db.employees.find({
  "salary": { "$type": "double" }
})
```

##### **Result**:
এই কোয়েরি শুধুমাত্র সেই ডকুমেন্টগুলো ফিরিয়ে দেবে যেখানে `salary` ফিল্ডের ডেটা টাইপ `double`।

---

ধরা যাক, আমাদের `library` কালেকশনে বইয়ের তথ্য আছে। আমরা এমন বই খুঁজতে চাই:
1. যেগুলোর `published` ফিল্ড আছে।  
2. যেগুলোর `authors` ফিল্ডে ২ জন লেখক আছে।  
3. যেগুলোর `price` ফিল্ডের ডেটা টাইপ `double`।

```javascript
db.library.find({
  "$and": [
    { "published": { "$exists": true } },
    { "authors": { "$size": 2 } },
    { "price": { "$type": "double" } }
  ]
})
```

##### **Result**:
এই কোয়েরি এমন ডকুমেন্ট রিটার্ন করবে যেখানে:
- `published` ফিল্ড আছে,  
- `authors` অ্যারে-তে ২টি আইটেম আছে,  
- এবং `price` ফিল্ডের ডেটা টাইপ `double`।

---

### In Summary:
| অপারেটর   | কাজ                                            | উদাহরণ                                                                                   |
|------------|------------------------------------------------|------------------------------------------------------------------------------------------|
| `$exists`  | ফিল্ড আছে কি নেই তা চেক করে                  | `{ "field": { "$exists": true } }`                                                       |
| `$size`    | অ্যারের সঠিক আকার চেক করে                     | `{ "arrayField": { "$size": 3 } }`                                                       |
| `$type`    | ফিল্ডের ডেটা টাইপ চেক করে                     | `{ "field": { "$type": "double" } }`                                                     |

--- 
---

###  **`$all` অপারেটর**

`$all` অপারেটর ব্যবহার করে কোনো অ্যারে ফিল্ডে একাধিক মান আছে কিনা তা চেক করা হয়। এটি নিশ্চিত করে যে অ্যারে-তে নির্দিষ্ট মানগুলো **অবশ্যই থাকা উচিত**, তবে মানগুলোর ক্রম গুরুত্বপূর্ণ নয়।

#### **Syntax**:
```json
{
  "arrayField": { "$all": [ <value1>, <value2>, ... ] }
}
```

#### **Example **:
ধরা যাক, `products` নামে একটি কালেকশন আছে যেখানে প্রতিটি পণ্যের `tags` নামে একটি অ্যারে ফিল্ড আছে। আমরা এমন পণ্য খুঁজতে চাই যার `tags` অ্যারে-তে `electronics` এবং `sale` উভয়ই আছে।

```javascript
db.products.find({
  "tags": { "$all": ["electronics", "sale"] }
})
```

##### **Result**:
এই কোয়েরি সেই ডকুমেন্টগুলো রিটার্ন করবে যেখানে `tags` অ্যারে-তে **`electronics`** এবং **`sale`** উভয়ই আছে, তবে তারা যেকোনো ক্রমে থাকতে পারে।

---

###  **`$elemMatch` অপারেটর**

`$elemMatch` ব্যবহার করে অ্যারে ফিল্ডের একক উপাদানের উপর একাধিক শর্ত আরোপ করা যায়। এটি তখন ব্যবহার করা হয় যখন অ্যারে-এর একটি নির্দিষ্ট আইটেমকে একাধিক শর্ত পূরণ করতে হয়।

#### **Syntax**:
```json
{
  "arrayField": { "$elemMatch": { <condition1>, <condition2>, ... } }
}
```

#### **Example **:
ধরা যাক, আমাদের `students` নামে একটি কালেকশন আছে যেখানে প্রতিটি ডকুমেন্টে `grades` নামে একটি অ্যারে ফিল্ড আছে। প্রতিটি আইটেম একটি অবজেক্ট যা `subject` এবং `marks` ফিল্ড ধারণ করে। আমরা এমন শিক্ষার্থী খুঁজতে চাই যিনি `Math` বিষয় থেকে ৮০ এর বেশি নম্বর পেয়েছেন।

```javascript
db.students.find({
  "grades": {
    "$elemMatch": {
      "subject": "Math",
      "marks": { "$gt": 80 }
    }
  }
})
```

##### **Result**:
এই কোয়েরি সেই ডকুমেন্টগুলো রিটার্ন করবে যেখানে `grades` অ্যারে-তে অন্তত একটি অবজেক্ট আছে যেটিতে:
- **`subject`** ফিল্ডের মান `Math`, এবং  
- **`marks`** ফিল্ডের মান ৮০-এর বেশি।

---

### **`$all` বনাম `$elemMatch` পার্থক্য**

| বৈশিষ্ট্য            | `$all`                                  | `$elemMatch`                                  |
|----------------------|------------------------------------------|-----------------------------------------------|
| **কাজ**             | অ্যারে-তে নির্দিষ্ট মানগুলো আছে কিনা চেক করে। | অ্যারে-র একটি উপাদান একাধিক শর্ত পূরণ করছে কিনা চেক করে। |
| **প্রয়োগ**          | মানগুলো আলাদাভাবে চেক করা হয়।             | একটি নির্দিষ্ট উপাদানে একাধিক শর্ত প্রয়োগ করা হয়।       |
| **Syntax উদাহরণ**    | `{ "tags": { "$all": ["tag1", "tag2"] } }`| `{ "grades": { "$elemMatch": { ... } } }`      |

---

### আরও উদাহরণ দিয়ে দুই অপারেটর ব্যাখ্যা

#### **`$all` এর উদাহরণ:**
ধরা যাক, আমাদের `books` কালেকশনে প্রতিটি বইয়ের `genres` নামে একটি অ্যারে ফিল্ড আছে। আমরা এমন বই খুঁজতে চাই যেগুলো `fiction` এবং `mystery` উভয় জনরায় পড়ে।

```javascript
db.books.find({
  "genres": { "$all": ["fiction", "mystery"] }
})
```

##### **Result**:
এই কোয়েরি সেই ডকুমেন্টগুলো রিটার্ন করবে যেখানে `genres` অ্যারে-তে `fiction` এবং `mystery` উভয়ই আছে।

---

#### **`$elemMatch` এর উদাহরণ:**
ধরা যাক, `orders` কালেকশনে প্রতিটি অর্ডারের `items` নামে একটি অ্যারে ফিল্ড আছে। প্রতিটি আইটেমে পণ্যের `name` এবং `quantity` আছে। আমরা এমন অর্ডার খুঁজতে চাই যেখানে একটি পণ্য `name: "Laptop"` এবং তার `quantity` ২-এর বেশি।

```javascript
db.orders.find({
  "items": {
    "$elemMatch": {
      "name": "Laptop",
      "quantity": { "$gt": 2 }
    }
  }
})
```

##### **Result**:
এই কোয়েরি সেই ডকুমেন্টগুলো রিটার্ন করবে যেখানে `items` অ্যারে-তে অন্তত একটি পণ্য আছে যেটির `name` **"Laptop"** এবং `quantity` ২-এর বেশি।

---

### In Summary:

| অপারেটর     | কাজ                                      | উদাহরণ                                                                                  |
|-------------|------------------------------------------|-----------------------------------------------------------------------------------------|
| `$all`      | অ্যারে-তে নির্দিষ্ট মানগুলো আছে কিনা তা যাচাই করে। | `{ "tags": { "$all": ["tag1", "tag2"] } }`                                              |
| `$elemMatch`| অ্যারে-র নির্দিষ্ট একটি উপাদান একাধিক শর্ত পূরণ করছে কিনা তা যাচাই করে। | `{ "arrayField": { "$elemMatch": { "key1": "value1", "key2": { "$gt": value2 } } } }` |

----

MongoDB-তে **`$set`**, **`$addToSet`**, **`$each`**, এবং **`$push`** অপারেটরগুলি ডকুমেন্ট আপডেট করার জন্য ব্যবহার করা হয়। এগুলোর মাধ্যমে ফিল্ডের মান সেট করা, অ্যারে-তে নতুন আইটেম add করা বা বিদ্যমান আইটেম ম্যানেজ করা যায়। নিচে প্রতিটির ব্যাখ্যা, সিনট্যাক্স এবং উদাহরণ বাংলায় দেওয়া হলো।

---

###  **`$set` অপারেটর**
**`$set`** ব্যবহার করে ডকুমেন্টে একটি ফিল্ডের মান সেট বা আপডেট করা হয়। যদি ফিল্ডটি আগে থেকে না থাকে, তাহলে এটি নতুন ফিল্ড হিসেবে add/insert হয়।

#### **Syntax**:
```json
{
  "$set": { "field": <value> }
}
```

#### **Example **:
ধরা যাক, `students` নামে একটি কালেকশন আছে। আমরা একটি student এর `name` আপডেট করতে চাই।

```javascript
db.students.updateOne(
  { "_id": 1 },
  { "$set": { "name": "Rahim" } }
)
```

##### **Result**:
ডকুমেন্টে `name` ফিল্ডের মান "Rahim" হিসেবে আপডেট হবে। যদি `name` ফিল্ডটি আগে না থাকে, তবে এটি নতুনভাবে add/insert হবে।

---

###  **`$push` অপারেটর**
**`$push`** অপারেটর ব্যবহার করে অ্যারে-তে নতুন একটি আইটেম add করা হয়।

#### **Syntax**:
```json
{
  "$push": { "arrayField": <value> }
}
```

#### **Example **:
ধরা যাক, `courses` নামে একটি কালেকশন আছে, যেখানে প্রতিটি student এর একটি `subjects` অ্যারে আছে । আমরা `Math` সাবজেক্ট add করতে চাই।

```javascript
db.courses.updateOne(
  { "_id": 1 },
  { "$push": { "subjects": "Math" } }
)
```

##### **Result**:
ডকুমেন্টের `subjects` অ্যারে-তে নতুন একটি আইটেম **"Math"** add হবে।

---

###  **`$addToSet` অপারেটর**
**`$addToSet`** অপারেটর অ্যারে-তে নতুন একটি আইটেম add করে **যদি সেটি আগে থেকে না থাকে**। এটি ডুপ্লিকেট আইটেম add/insert হতে বাধা দেয়।

#### **Syntax**:
```json
{
  "$addToSet": { "arrayField": <value> }
}
```

#### **Example **:
উপরের `courses` কালেকশনের ক্ষেত্রে, আমরা `Math` add করতে চাই, তবে নিশ্চিত করতে চাই যে এটি আগে থেকে অ্যারে-তে না থাকে।

```javascript
db.courses.updateOne(
  { "_id": 1 },
  { "$addToSet": { "subjects": "Math" } }
)
```

##### **Result**:
যদি **`subjects`** অ্যারে-তে **"Math"** আগে থেকে থাকে, এটি কোনো পরিবর্তন করবে না। তবে, না থাকলে এটি add করবে।

---

###  **`$each` অপারেটর**
**`$each`** অপারেটর ব্যবহার করে একাধিক আইটেম একসঙ্গে অ্যারে-তে add করা যায়। এটি সাধারণত **`$push`** বা **`$addToSet`** এর সাথে ব্যবহার হয়।

#### **Syntax**:
```json
{
  "$push": { "arrayField": { "$each": [ <value1>, <value2>, ... ] } }
}
```

#### **Example **:
উপরের `courses` কালেকশনে, আমরা একাধিক সাবজেক্ট `["Math", "Science", "English"]` একবারে add করতে চাই।

```javascript
db.courses.updateOne(
  { "_id": 1 },
  { "$push": { "subjects": { "$each": ["Math", "Science", "English"] } } }
)
```

##### **Result**:
**`subjects`** অ্যারে-তে **"Math"**, **"Science"**, এবং **"English"** একবারে add হবে।

---

### **`$push` এবং `$addToSet` এর সাথে `$each` ব্যবহারের পার্থক্য**

- **`$push` + `$each`**: অ্যারে-তে ডুপ্লিকেট সহ একাধিক আইটেম add করতে দেয়।  
- **`$addToSet` + `$each`**: অ্যারে-তে ডুপ্লিকেট বাদ দিয়ে একাধিক আইটেম add করে।

---

### উদাহরণ: সব অপারেটর একত্রে ব্যবহার

ধরা যাক, `students` কালেকশনে প্রতিটি student এর তথ্য আছে। আমরা এমন একটি আপডেট করতে চাই যেখানে:
1. `name` ফিল্ডের মান **"Karim"** হিসেবে সেট হবে।  
2. `subjects` অ্যারে-তে **"Math"** এবং **"Science"** add হবে।  
3. `clubs` অ্যারে-তে **"Chess"** add হবে তবে ডুপ্লিকেট এড়ানো হবে।  

```javascript
db.students.updateOne(
  { "_id": 2 },
  {
    "$set": { "name": "Karim" },
    "$push": { "subjects": { "$each": ["Math", "Science"] } },
    "$addToSet": { "clubs": "Chess" }
  }
)
```

---

### In Summary:

| অপারেটর     | কাজ                                            | উদাহরণ                                                                                   |
|-------------|------------------------------------------------|------------------------------------------------------------------------------------------|
| `$set`      | একটি ফিল্ডের মান সেট বা আপডেট করে              | `{ "$set": { "name": "Rahim" } }`                                                        |
| `$push`     | অ্যারে-তে নতুন একটি আইটেম add করে              | `{ "$push": { "subjects": "Math" } }`                                                    |
| `$addToSet` | অ্যারে-তে ডুপ্লিকেট ছাড়া নতুন আইটেম add করে   | `{ "$addToSet": { "subjects": "Math" } }`                                                |
| `$each`     | একাধিক আইটেম একবারে অ্যারে-তে add করতে ব্যবহার হয়| `{ "$push": { "subjects": { "$each": ["Math", "Science"] } } }`                           |

----
