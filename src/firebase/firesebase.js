import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8AKaqgpbRvYel5LCAMdt_O-MOB31oXDA",
  authDomain: "ecommerce-dunas.firebaseapp.com",
  projectId: "ecommerce-dunas",
  storageBucket: "ecommerce-dunas.appspot.com",
  messagingSenderId: "730190945901",
  appId: "1:730190945901:web:078d779012e53e66802964",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener un producto por ID
export async function getProduct(id) {
  const productRef = doc(db, "products", id);
  try {
    const productDoc = await getDoc(productRef);
    if (productDoc.exists()) {
      return { id: productDoc.id, ...productDoc.data() };
    } else {
      console.log('El documento no existe!');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

// Obtener todos los productos
export async function getProducts() {
  try {
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al obtener los documentos: ', error);
  }
}

// Filtrar productos por categoría
export async function getProductsByCategory(category) {
  const q = query(collection(db, "products"), where("category", "==", category));
  try {
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al filtrar productos: ', error);
  }
}

// Agregar una nueva orden
export async function addOrder(order) {
  const orderRef = doc(collection(db, "orders"));
  try {
    await setDoc(orderRef, order);
    console.log('Nueva orden generada: ' + orderRef.id);
    return orderRef.id;
  } catch (error) {
    console.error('Error al agregar el documento: ', error);
  }
}
