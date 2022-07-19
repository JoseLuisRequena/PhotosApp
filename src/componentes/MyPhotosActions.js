import React from "react";

export function getPhotos() {
    const fromStorage = localStorage.getItem('favourite_photos');
    return fromStorage ? JSON.parse(fromStorage) : [];
}

export const reducer = (action) => {

    switch (action.type){
        case 'addToFavorite':{
            const f = new Date();
            const data = {
                id: action.payload.id,
                thumb: action.payload.urls.thumb,
                date: f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(),
                likes: action.payload.likes,
                description: action.payload.description || "undefined",
                width: action.payload.width,
                height: action.payload.height,
                urlsFull: action.payload.urls.full
            }
 
            let currentItem = JSON.parse(localStorage.getItem('favourite_photos'));
            
            if (!action.payload.id == currentItem.filter( state => state.id == action.payload.id && currentItem)){
                currentItem.push(data);
            } else { currentItem = [data] }

            console.log(currentItem) // = console.log(JSON.parse(localStorage.getItem('favourite_photos')))
            localStorage.setItem('favourite_photos', JSON.stringify(currentItem))
            
            break;
        }

        case 'removeFavorite':{
           let currentItem = JSON.parse(localStorage.getItem('favourite_photos'));
           currentItem = currentItem.filter( state => state.id !== action.payload.id );
           localStorage.setItem('favourite_photos', JSON.stringify(currentItem));
           console.log(('favourite_photos', JSON.stringify(currentItem)));
           break;
        }
        
        //case 'editFavorite';{
        //    
        //}
    }
}
    

const addToFavorite = {
    type: 'addToFavorite'

}
//const removeFavorite = {
//    type: 'removeFavorite'
//}