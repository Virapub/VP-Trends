const express = require('express');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } = require('firebase/firestore');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

app.use(express.static('public'));
app.use(express.json());

// Get products
app.get('/api/products/:category', async (req, res) => {
  const category = req.params.category;
  const snapshot = await getDocs(collection(db, category));
  const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(products);
});

// Add product
app.post('/api/products/:category', async (req, res) => {
  const category = req.params.category;
  const product = req.body;
  await addDoc(collection(db, category), product);
  res.status(201).send('Product added');
});

// Delete product
app.delete('/api/products/:category/:id', async (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  await deleteDoc(doc(db, category, id));
  res.status(200).send('Product deleted');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
