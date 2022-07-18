import React from "react";

export function getPhotos() {
    const fromStorage = localStorage.getItem('favourite_photos');
    return fromStorage ? JSON.parse(fromStorage) : [];
}





export const reducer = (action) => {

    switch (action.type){
        case 'addToFavorite':{
           // let arrayPhoto = getPhotos()
           // const savePhoto = (photo) => {
           //     return 
           //     {localStorage.setItem("favourite_photos", JSON.stringify(photo)); 
           //     console.log(JSON.parse(localStorage.getItem('favourite_photos')))}
           // }
           const data = {
               id: action.payload.id,
               thumb: action.payload.urls.thumb
           }
           let newItems = [] ;
           let currentItem = localStorage.getItem('favourite_photos');
           console.log(currentItem)
           if ( currentItem ){
                newItems = JSON.parse(currentItem)
                newItems.push(data)
            } else {
                newItems = [data]
            }

            localStorage.setItem('favourite_photos', JSON.stringify(newItems))
            console.log(JSON.parse(localStorage.getItem('favourite_photos')))

        }
             case 'removeFavorite':{
                let currentItem = JSON.parse(localStorage.getItem('favourite_photos'))
                let newItems = currentItem.filter( item => item.id !== action.id )
                localStorage.setItem('favourite_photos', newItems)

             }
        }
    }
    

const addToFavorite = {
    type: 'addToFavorite'

}
//const removeFavorite = {
//    type: 'removeFavorite'
//}