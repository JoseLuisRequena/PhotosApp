import React from "react";

export function getPhotos() {
    const fromStorage = localStorage.getItem('favourite_photos');
    return fromStorage ? JSON.parse(fromStorage) : [];
}

export const reducer = (action) => {

    let currentItem = JSON.parse(localStorage.getItem('favourite_photos'));

    switch (action.type){
        case 'addToFavorite':{
            const date = new Date();
            const data = {
                id: action.payload.id,
                thumb: action.payload.urls.thumb,
                date: date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear(),
                likes: action.payload.likes,
                description: action.payload.description || "undefined",
                width: action.payload.width,
                height: action.payload.height,
                urlsFull: action.payload.urls.full
            }
 
            if (!action.payload.id == currentItem.filter( state => state.id == action.payload.id ) && currentItem){
                currentItem.push(data);
            } else if (!currentItem){ currentItem = [data] }

            console.log(currentItem) // = console.log(JSON.parse(localStorage.getItem('favourite_photos')))
            localStorage.setItem('favourite_photos', JSON.stringify(currentItem))
            break;
        }

        case 'removeFavorite':{
           currentItem = currentItem.filter( state => state.id !== action.payload.id );
           localStorage.setItem('favourite_photos', JSON.stringify(currentItem));
           break;
        }
        
        case 'editToFavorite':{
            const index = currentItem.findIndex(p => p.id === action.payload.id)
            console.log('estoy en editToF')
            currentItem[index].description = action.payload.description;
            localStorage.setItem('favourite_photos', JSON.stringify(currentItem));
            break;
        }
        default: {
            return currentItem;
        }
    }
}
    

//const addToFavorite = {
//    type: 'addToFavorite'
//
//}
//const removeFavorite = {
//    type: 'removeFavorite'
//}