import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8AKaqgpbRvYel5LCAMdt_O-MOB31oXDA",
  authDomain: "ecommerce-dunas.firebaseapp.com",
  projectId: "ecommerce-dunas",
  storageBucket: "ecommerce-dunas.appspot.com",
  messagingSenderId: "730190945901",
  appId: "1:730190945901:web:078d779012e53e66802964"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funciones para interactuar con Firestore
export const getProducts = async () => {
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProduct = async (id) => {
  const productRef = doc(db, "products", id);
  const productDoc = await getDoc(productRef);
  return productDoc.exists() ? { id: productDoc.id, ...productDoc.data() } : null;
};

export const getProductsByCategory = async (category) => {
  const q = query(collection(db, "products"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Función para agregar una orden
export const addOrder = async (order) => {
    const orderRef = doc(collection(db, "orders"));
    await setDoc(orderRef, order);
    return orderRef.id;
};
