import React, {useState, useEffect} from 'react'
import {db} from '../firebase-configuration'
import {collection, getDocs} from 'firebase/firestore'

export default function Users() {
    const [subscriber, setSubscriber] = useState([])
    const userCollectionRef = collection(db, "Subscriber")

    useEffect(()=>{
        const getUsers = async () =>{
        const data = await getDocs(userCollectionRef )
        setSubscriber(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
        console.log(subscriber)
    };

        getUsers();
    }, [])  
  return (
   <>
   {
    subscriber.map((users) =>
        <ul key={users.id}>
            <li><h1 >Name: {users.name}</h1></li>
            <li><h1 >Email: {users.email}</h1></li>
        </ul>
        
    )
   }
   
   </>
  )
}
