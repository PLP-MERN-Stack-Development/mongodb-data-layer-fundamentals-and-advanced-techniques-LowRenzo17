
// Database: plp_bookstore
// Collection: books

// Task 2: Basic CRUD Operations

// 2.1 Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// 2.2 Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } });

// 2.3 Find books by a specific author
db.books.find({ author: "Ngũgĩ wa Thiong'o" });

// 2.4 Update the price of a specific book
db.books.updateOne(
  { title: "Weep Not, Child" },
  { $set: { price: 10.99 } }
);

// 2.5 Delete a book by its title
db.books.deleteOne({ title: "The Ivory Merchant" });

// Task 3: Advanced Queries

// 3.1 Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 3.2 Use projection to return only title, author, and price
db.books.find(
  { genre: "Fiction" },
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 3.3 Implement sorting by price (ascending and descending)
// Ascending
db.books.find().sort({ price: 1 });

// Descending
db.books.find().sort({ price: -1 });

// 3.4 Implement pagination (5 books per page)
// Page 1
db.books.find().limit(5).skip(0);

// Page 2
db.books.find().limit(5).skip(5);

// Page 3
db.books.find().limit(5).skip(10);

// Task 4: Aggregation Pipeline

// 4.1 Calculate average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      totalBooks: { $sum: 1 }
    }
  },
  {
    $sort: { averagePrice: -1 }
  }
]);

// 4.2 Find author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 },
      books: { $push: "$title" }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);

// 4.3 Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      title: 1,
      published_year: 1,
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      bookCount: { $sum: 1 },
      books: { $push: "$title" }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);

// Task 5: Indexing

// 5.1 Create an index on the title field
db.books.createIndex({ title: 1 });

// 5.2 Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 5.3 Use explain() to demonstrate performance improvement
// Without index (simulated - run before creating index)
db.books.find({ title: "Weep Not, Child" }).explain("executionStats");

// With index (after creating the title index)
db.books.find({ title: "Weep Not, Child" }).explain("executionStats");

// Compound index query
db.books.find({ 
  author: "Ngũgĩ wa Thiong'o", 
  published_year: { $gt: 1960 } 
}).explain("executionStats");

// Additional verification queries

// Count total books
db.books.countDocuments();

// List all genres
db.books.distinct("genre");

// Find books by Meja Mwangi with projection
db.books.find(
  { author: "Meja Mwangi" },
  { title: 1, published_year: 1, price: 1, _id: 0 }
).sort({ published_year: 1 });

// Find available books under $12
db.books.find({
  in_stock: true,
  price: { $lt: 12 }
});

// Update multiple books - apply discount to books published before 1980
db.books.updateMany(
  { published_year: { $lt: 1980 } },
  { $mul: { price: 0.9 } }
);

// Verify the update
db.books.find(
  { published_year: { $lt: 1980 } },
  { title: 1, price: 1, _id: 0 }
);