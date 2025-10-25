// src/services/firebaseService.js
import { 
    collection, 
    doc, 
    getDoc, 
    getDocs, 
    setDoc, 
    updateDoc, 
    deleteDoc,
    query,
    where,
    onSnapshot
  } from 'firebase/firestore';
  import { db } from '../config/firebase';
  
  // Collections
  const EMPLOYEES_COLLECTION = 'employees';
  const ADMIN_COLLECTION = 'admin';
  
  // Initialize default data in Firestore (run once)
  export const initializeFirestoreData = async () => {
    try {
      // Check if employees data already exists
      const employeesSnapshot = await getDocs(collection(db, EMPLOYEES_COLLECTION));
      
      // Check if admin data already exists
      const adminSnapshot = await getDocs(collection(db, ADMIN_COLLECTION));
      
      if (employeesSnapshot.empty) {
        console.log('Initializing Firestore with default employee data...');
        
        // Default employees data
        const employees = [
          {
            id: "E001",
            name: "John",
            email: "john@me.com",
            password: "123",
            taskCount: {
              active: 2,
              completed: 1,
              failed: 0,
              new: 2
            },
            tasks: [
              {
                taskTitle: "Prepare Q3 Report",
                taskDescription: "Compile the financial report for Q3",
                taskDate: "2025-07-28",
                category: "Finance",
                active: true,
                completed: false,
                failed: false,
                new: true
              },
              {
                taskTitle: "Client Follow-Up",
                taskDescription: "Call and update client about proposal",
                taskDate: "2025-07-25",
                category: "Client Relations",
                active: false,
                completed: true,
                failed: false,
                new: false
              },
              {
                taskTitle: "Team Meeting",
                taskDescription: "Conduct weekly sync with sales team",
                taskDate: "2025-07-30",
                category: "Meetings",
                active: true,
                completed: false,
                failed: false,
                new: true
              }
            ]
          },
          {
            id: "E002",
            name: "Jane",
            email: "jane.smith@example.com",
            password: "123",
            taskCount: {
              active: 1,
              completed: 2,
              failed: 1,
              new: 1
            },
            tasks: [
              {
                taskTitle: "UI Bug Fixes",
                taskDescription: "Fix styling issues in landing page",
                taskDate: "2025-07-29",
                category: "Development",
                active: true,
                completed: false,
                failed: false,
                new: true
              },
              {
                taskTitle: "Code Review",
                taskDescription: "Review pull requests for login module",
                taskDate: "2025-07-28",
                category: "Development",
                active: false,
                completed: true,
                failed: false,
                new: false
              },
              {
                taskTitle: "Write Unit Tests",
                taskDescription: "Add test cases for profile component",
                taskDate: "2025-07-26",
                category: "Testing",
                active: false,
                completed: false,
                failed: true,
                new: false
              },
              {
                taskTitle: "UX Research",
                taskDescription: "Collect feedback from beta users",
                taskDate: "2025-07-24",
                category: "Design",
                active: false,
                completed: true,
                failed: false,
                new: false
              }
            ]
          }
        ];
  
        // Add employees to Firestore
        for (const employee of employees) {
          await setDoc(doc(db, EMPLOYEES_COLLECTION, employee.id), employee);
        }
  
        // Add admin
        await setDoc(doc(db, ADMIN_COLLECTION, 'A001'), {
          id: "A001",
          email: "admin@me.com",
          name: "Admin",
          password: "123"
        });
  
        console.log('Firestore initialized successfully!');
      } else {
        console.log('Firestore already has data');
      }
    } catch (error) {
      console.error('Error initializing Firestore:', error);
      throw error;
    }
  };
  
  // Get all employees
  export const getAllEmployees = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, EMPLOYEES_COLLECTION));
      const employees = [];
      querySnapshot.forEach((doc) => {
        employees.push(doc.data());
      });
      return employees;
    } catch (error) {
      console.error('Error getting employees:', error);
      throw error;
    }
  };
  
  // Get single employee by ID
  export const getEmployeeById = async (employeeId) => {
    try {
      const docRef = doc(db, EMPLOYEES_COLLECTION, employeeId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error('Employee not found');
      }
    } catch (error) {
      console.error('Error getting employee:', error);
      throw error;
    }
  };
  
  // Get employee by email
  export const getEmployeeByEmail = async (email) => {
    try {
      const q = query(collection(db, EMPLOYEES_COLLECTION), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
      }
      return null;
    } catch (error) {
      console.error('Error getting employee by email:', error);
      throw error;
    }
  };
  
  // Add new employee
  export const addEmployee = async (employee) => {
    try {
      await setDoc(doc(db, EMPLOYEES_COLLECTION, employee.id), employee);
      return employee.id;
    } catch (error) {
      console.error('Error adding employee:', error);
      throw error;
    }
  };
  
  // Update employee
  export const updateEmployee = async (employeeId, updates) => {
    try {
      const docRef = doc(db, EMPLOYEES_COLLECTION, employeeId);
      await updateDoc(docRef, updates);
    } catch (error) {
      console.error('Error updating employee:', error);
      throw error;
    }
  };
  
  // Delete employee
  export const deleteEmployee = async (employeeId) => {
    try {
      await deleteDoc(doc(db, EMPLOYEES_COLLECTION, employeeId));
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  };
  
  // Real-time listener for employees
  export const subscribeToEmployees = (callback) => {
    const unsubscribe = onSnapshot(
      collection(db, EMPLOYEES_COLLECTION),
      (snapshot) => {
        const employees = [];
        snapshot.forEach((doc) => {
          employees.push(doc.data());
        });
        callback(employees);
      },
      (error) => {
        console.error('Error in real-time listener:', error);
      }
    );
    
    return unsubscribe;
  };
  
  // Check admin credentials
  export const checkAdminCredentials = async (email, password) => {
    try {
      const docRef = doc(db, ADMIN_COLLECTION, 'A001');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const admin = docSnap.data();
        return admin.email === email && admin.password === password;
      }
      return false;
    } catch (error) {
      console.error('Error checking admin credentials:', error);
      return false;
    }
  };