// insert_books.js - Script to populate MongoDB with sample book data

// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Sample book data
const books = [
  {
    title: "Weep Not, Child",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Fiction",
    published_year: 1964,
    price: 9.99,
    in_stock: true,
    pages: 136,
    publisher: "Heinemann",
    country: "Kenya"
  },
  {
    title: "Petals of Blood",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Fiction",
    published_year: 1977,
    price: 14.99,
    in_stock: true,
    pages: 432,
    publisher: "Heinemann",
    country: "Kenya"
  },
  {
    title: "Dust",
    author: "Yvonne Adhiambo Owuor",
    genre: "Fiction",
    published_year: 2014,
    price: 16.99,
    in_stock: true,
    pages: 368,
    publisher: "Granta Books",
    country: "Kenya"
  },
  {
    title: "The River and the Source",
    author: "Margaret Ogola",
    genre: "Fiction",
    published_year: 1994,
    price: 11.99,
    in_stock: true,
    pages: 256,
    publisher: "Focus Publishers",
    country: "Kenya"
  },
  {
    title: "Unbowed: A Memoir",
    author: "Wangari Maathai",
    genre: "Autobiography",
    published_year: 2006,
    price: 15.99,
    in_stock: true,
    pages: 314,
    publisher: "Alfred A. Knopf",
    country: "Kenya"
  },
  {
    title: "Coming to Birth",
    author: "Marjorie Oludhe Macgoye",
    genre: "Fiction",
    published_year: 1986,
    price: 10.99,
    in_stock: false,
    pages: 192,
    publisher: "Heinemann",
    country: "Kenya"
  },
  {
    title: "Nairobi Heat",
    author: "Mukoma Wa Ngugi",
    genre: "Mystery",
    published_year: 2009,
    price: 12.99,
    in_stock: true,
    pages: 224,
    publisher: "Melville House",
    country: "Kenya"
  },
  {
    title: "The Ivory Merchant",
    author: "Muthoni Likimani",
    genre: "Fiction",
    published_year: 1974,
    price: 8.99,
    in_stock: true,
    pages: 168,
    publisher: "East African Educational Publishers",
    country: "Kenya"
  },
  {
    title: "Kofi and the Rapist",
    author: "Philomena Mwaura",
    genre: "Drama",
    published_year: 1993,
    price: 9.99,
    in_stock: false,
    pages: 142,
    publisher: "East African Educational Publishers",
    country: "Kenya"
  },
  {
    title: "The Cockroach Dance",
    author: "Meja Mwangi",
    genre: "Fiction",
    published_year: 1979,
    price: 11.99,
    in_stock: true,
    pages: 216,
    publisher: "Longman",
    country: "Kenya"
  },
  {
    title: "Going Down River Road",
    author: "Meja Mwangi",
    genre: "Fiction",
    published_year: 1976,
    price: 10.99,
    in_stock: true,
    pages: 204,
    publisher: "East African Educational Publishers",
    country: "Kenya"
  },
  {
    title: "The Big Chiefs",
    author: "Meja Mwangi",
    genre: "Political Fiction",
    published_year: 2006,
    price: 13.99,
    in_stock: true,
    pages: 278,
    publisher: "East African Educational Publishers",
    country: "Kenya"
  },
  {
    title: "Across the Bridge",
    author: "M.G. Vassanji",
    genre: "Fiction",
    published_year: 1993,
    price: 12.99,
    in_stock: true,
    pages: 230,
    publisher: "McClelland & Stewart",
    country: "Kenya"
  },
  {
    title: "The In-Between World of Vikram Lall",
    author: "M.G. Vassanji",
    genre: "Historical Fiction",
    published_year: 2003,
    price: 14.99,
    in_stock: false,
    pages: 416,
    publisher: "Doubleday Canada",
    country: "Kenya"
  },
  {
    title: "The Promised Land",
    author: "Grace Ogot",
    genre: "Fiction",
    published_year: 1966,
    price: 8.99,
    in_stock: true,
    pages: 144,
    publisher: "East African Educational Publishers",
    country: "Kenya"
  },
  {
    title: "The Strange Bride",
    author: "Grace Ogot",
    genre: "Fiction",
    published_year: 1983,
    price: 9.99,
    in_stock: true,
    pages: 156,
    publisher: "East African Educational Publishers",
    country: "Kenya"
  },
  {
    title: "The Trial of Dedan Kimathi",
    author: "Ngũgĩ wa Thiong'o and Micere Githae Mugo",
    genre: "Drama",
    published_year: 1976,
    price: 10.99,
    in_stock: true,
    pages: 96,
    publisher: "Heinemann",
    country: "Kenya"
  },
  {
    title: "A Grain of Wheat",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Historical Fiction",
    published_year: 1967,
    price: 12.99,
    in_stock: true,
    pages: 272,
    publisher: "Heinemann",
    country: "Kenya"
  },
  {
    title: "The Girl Who Can",
    author: "Ama Ata Aidoo",
    genre: "Short Stories",
    published_year: 1997,
    price: 9.99,
    in_stock: true,
    pages: 128,
    publisher: "Sub-Saharan Publishers",
    country: "Kenya"
  },
  {
    title: "The Whale Caller",
    author: "Zakes Mda",
    genre: "Fiction",
    published_year: 2005,
    price: 13.99,
    in_stock: false,
    pages: 240,
    publisher: "Penguin Books",
    country: "Kenya"
  }
];

// Function to insert books into MongoDB
async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if collection already has documents
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    // Insert the books
    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books were successfully inserted into the database`);

    // Display the inserted books
    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
    });

  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Run the function
insertBooks().catch(console.error);

/*
 * Example MongoDB queries you can try after running this script:
 *
 * 1. Find all books:
 *    db.books.find()
 *
 * 2. Find books by a specific author:
 *    db.books.find({ author: "George Orwell" })
 *
 * 3. Find books published after 1950:
 *    db.books.find({ published_year: { $gt: 1950 } })
 *
 * 4. Find books in a specific genre:
 *    db.books.find({ genre: "Fiction" })
 *
 * 5. Find in-stock books:
 *    db.books.find({ in_stock: true })
 */ 