<!-- # MongoDB Fundamentals - Week 1


## Setup Instructions

Before you begin this assignment, please make sure you have the following installed:

1. **MongoDB Community Edition** - [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
2. **MongoDB Shell (mongosh)** - This is included with MongoDB Community Edition
3. **Node.js** - [Download here](https://nodejs.org/)

### Node.js Package Setup

Once you have Node.js installed, run the following commands in your assignment directory:

```bash
# Initialize a package.json file
npm init -y

# Install the MongoDB Node.js driver
npm install mongodb
```

## Assignment Overview

This week focuses on MongoDB fundamentals including:
- Creating and connecting to MongoDB databases
- CRUD operations (Create, Read, Update, Delete)
- MongoDB queries and filters
- Aggregation pipelines
- Indexing for performance

## Submission

Complete all the exercises in this assignment and push your code to GitHub using the provided GitHub Classroom link.

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)  -->



# PLP Bookstore MongoDB Assignment - Kenyan Books Edition

## Project Overview
This project demonstrates MongoDB fundamentals using exclusively Kenyan literature data, including CRUD operations, aggregation pipelines, and indexing.

## Kenyan Authors Featured
- Ngũgĩ wa Thiong'o
- Margaret Ogola
- Wangari Maathai
- Yvonne Adhiambo Owuor
- Meja Mwangi
- Grace Ogot
- Marjorie Oludhe Macgoye
- Mukoma Wa Ngugi
- Muthoni Likimani

## Files Structure
- `insert_books.js` - Script to populate the database with Kenyan book data
- `queries.js` - Contains all MongoDB queries using Kenyan books
- `README.md` - Setup instructions

## Setup Instructions

### 1. MongoDB Installation
- Install MongoDB Community Edition from [MongoDB Website](https://www.mongodb.com/try/download/community)
- OR set up a free MongoDB Atlas cluster at [MongoDB Atlas](https://www.mongodb.com/atlas)

### 2. Database Setup
```bash
# Start MongoDB service
mongod

# Connect to MongoDB
mongosh