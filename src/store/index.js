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
import { getDatabase, ref, set } from "firebase/database";
//import { FirebaseError } from 'firebase/app';

const auth = getAuth();

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    SET_USER (state, user){
      state.user = user
    },
    CLEAR_USER(state){
      state.user = null
    }
  },
  actions: {

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

    async writeUserData(userId, name, email, imageUrl) {
      const db = getDatabase();
      set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    },

    async register({ commit }, details){
      /* eslint-disable */
      const { email, password, text } = details;
      alert(text);
      alert(email);
      try {
        // Create the user account
        const user = await createUserWithEmailAndPassword(auth, email, password);
        /*
          WHAT MIGHT NEED TO HAPPEN -
          - Check if user is signed in
          - GET the users profile: 
            const user = auth.currentUser 
              if(user!== null){
                const displayName = user.displayName
              }
          - to check? -
              if(user !== null){
                user.providerData.forEach((profile) => {
                  console.log("  Name: " + profile.displayName);
                })
              }
          - using the updateProfile:
              import { getAuth, updateProfile } from "firebase/auth";
                const auth = getAuth();
                updateProfile(auth.currentUser, {
                  displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                  // Profile updated!
                  // ...
                }).catch((error) => {
                  // An error occurred
                  // ...
                });
        */
    
                //update the profile with the submitted name
      updateProfile(auth.currentUser, {
        displayName: this.text
        })
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

    async userInfo(user){
      if(user){
        console.log(user.email);
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
    
  
