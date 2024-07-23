
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  
  import { getFirestore,collection, addDoc,getDocs  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

   
  const firebaseConfig = {
    apiKey: "AIzaSyCwOlPxBOXaF4AKycAOXqxj1AnKlKvpxxM",
    authDomain: "my-second-project-d5b60.firebaseapp.com",
    projectId: "my-second-project-d5b60",
    storageBucket: "my-second-project-d5b60.appspot.com",
    messagingSenderId: "60241274432",
    appId: "1:60241274432:web:0ce2e80a4797b9712761a5",
    measurementId: "G-JBNX25K89G"
  };


  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
//   console.log("db=>", db);

//   let collectionNumbers = collection(db, 'numbers')
//   addNumbersToDb()
//   async function addNumbersToDb() {
//     try {

//         const docRef = await addDoc(collectionNumbers, {
//             numbers : Math.round(Math.random()*1000000)
//         })
//   console.log('docRef=>',docRef);
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
      
    
//   }

const todo_input = document.getElementById('todo_input')
const addTodo = document.getElementById('addTodo')
const todo_list = document.getElementById('todo_list')

let todosCollection = collection(db,'todos')
addTodo.addEventListener('click', addTodosToDb)
async function addTodosToDb() {
    
try {
    const obj ={
        todo: todo_input.value,
        createdAt: new Date().toISOString()
    }

    const docRef = await addDoc(todosCollection,obj)
    todo_input.value=""
    console.log('Todo Added=>',docRef);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

getTodofromDb()
async function getTodofromDb() {
    try {

        const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log('Doc=>', doc.id);
  const {todo, createdAt} = doc.data()
  const ele = `<li id="${doc.id}">${todo} - ${new Date().toLocaleDateString()}</li>`
  todo_list.innerHTML += ele
});
        
    } catch (error) {
        console.log(error);
    }
    
}
