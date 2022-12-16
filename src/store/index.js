 /* eslint-disable */

import { createStore } from 'vuex'
import router from '../router'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  sendPasswordResetEmail,
  getAuth,
  updateProfile
} from 'firebase/auth'
//import { FirebaseError } from 'firebase/app';
import { db, fireStore } from '@/firebase/index';
import { collection, onSnapshot, doc } from 'firebase/firestore';
import { ref } from 'vue';

const auth = getAuth();

  // onSnapshot(collection(db, "/userInfo"), (querySnapshot) => {
  //   const realTimeDb = [];
  //   querySnapshot.forEach((doc) => {
  //       const realTimeDbContent = {
  //         id: doc.id,
  //         content: doc.data().name,
  //         done: doc.data().done
  //       }
  //       realTimeDb.push(realTimeDbContent)
  //   })
  //   console.log(realTimeDb);
  // });

export default createStore({
  state: {
    content: []
  },
  getters: {
  },
  mutations: {
    //settings the messages
    setContent(state, content){
      state.content = content
    },
    SET_USER (state, user){
      state.user = user
    },
    CLEAR_USER(state){
      state.user = null
    }
  },
  actions: {

    async fetchContent({ commit }){
      onSnapshot(collection(db, "/userInfo"), (querySnapshot) => {
        const content = []
        querySnapshot.forEach(doc =>{
          content.push({
            id: doc.id,
            name: doc.data().name,
          })
        })
        commit("setContent", content)
        console.log(content);
      })
    },

    async resetPass({ commit }, details){
      const { email }  = details;
      try{
        await sendPasswordResetEmail(auth, email)
      } 
      catch(error){
        switch(error.code){
          case "":
            
        }
        return;
      }

      commit("SET_USER", auth.currentUser);
    },

    async login ({ commit }, details){
      const { email, password} = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error){
        switch(error.code){
          case "auth/user-not-found":
            alert("User not found")
            break
          case "auth/wrong-password":
            alert("Wrong password")
            break
          default:
            alert(error.message);
        }

        return;
      }
        commit("SET_USER", auth.currentUser);

        router.push("/");
    },

    async register({ commit }, details){
      /* eslint-disable */
      const { email, password, text } = details;
      console.log(text);
      try {
        // Create the user account
        const user = await createUserWithEmailAndPassword(auth, email, password, text);
       //if the user gets given an account - 
       // get the current user, and update their displayName 
       //I will also be able to update the profile picture from here too
        if(user){
            updateProfile(auth.currentUser,{
              displayName: text
            })
        }
      //update the profile with the submitted name
      }
      catch (error){
        switch(error.code){
          case "auth/email-already-in-use":
            alert("Email already in use")
            break
          case "auth/invalid-email":
            alert("Invalid email")
            break
          case "auth/operation-not-allowed":
            alert("Operation not allowed")
            break
          case "auth/weak-password":
            alert("Weak password")
            break
          default:
            alert(error.message);
        }

        return;
      }
        commit("SET_USER", auth.currentUser);

        router.push("/");
    },

    async editName({ commit }, details){
      //get the name passed in
      const { name } = details;
      //get the current user that is signed in 
      const user = auth.currentUser;
      //if the user is not null - 
      if(user !== null){
        //get the users current info
        user.providerData.forEach((profile) => {
        //then update the profile with the passed in name
          updateProfile(auth.currentUser,{
            displayName: name
          }).then(() => {
            //will need to display a 'updated' screen here
            console.log("updated name with" + name);
          }).catch((error) => {
            console.log(error)
          })
        })
      }
    },

    // logout
    async logout({ commit }){
      await signOut(auth)

      commit("CLEAR_USER")

      router.push("login")
    },

    fetchUser({ commit }){
      auth.onAuthStateChanged(async user => {
        if(user == null){
          commit("CLEAR_USER")
        }
        else{
          commit("SET_USER", user)
        }

        console.log(user);

        if(router.isReady() && router.currentRoute.value.path === "/login"){
          router.push("/")
        }
      })
    }, 
  }
})
    
  
