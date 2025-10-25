import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot,
  query,
  orderBy,
  where
} from 'firebase/firestore';
import { db } from '../config/firebase';

// Custom hook for Firestore operations
export const useFirestore = (collectionName) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDocuments(docs);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching documents:', error);
        setError(error.message);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [collectionName]);

  // Add a new document
  const addDocument = async (data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  };

  // Update an existing document
  const updateDocument = async (id, data) => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  };

  // Delete a document
  const deleteDocument = async (id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  };

  return {
    documents,
    loading,
    error,
    addDocument,
    updateDocument,
    deleteDocument
  };
};

// Hook for filtered queries
export const useFirestoreQuery = (collectionName, queryConstraints = []) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, ...queryConstraints);

    const unsubscribe = onSnapshot(q,
      (snapshot) => {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDocuments(docs);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching documents:', error);
        setError(error.message);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [collectionName, queryConstraints]);

  return { documents, loading, error };
};