
export const reducer = (action) => {
    
    let currentItems = [];
    if (localStorage.getItem('favourite_photos')){
        currentItems = JSON.parse(localStorage.getItem('favourite_photos'));
    }
    const newCurrentItems = [...currentItems];

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
 
            if (!action.payload.id == currentItems.filter( state => state.id == action.payload.id ) && currentItems){
                currentItems.push(data);
            } else if (!currentItems){ currentItems = [data] }

            console.log(currentItems) // = console.log(JSON.parse(localStorage.getItem('favourite_photos')))
            localStorage.setItem('favourite_photos', JSON.stringify(currentItems))
            break;
        }

        case 'removeFavorite':{
           currentItems = currentItems.filter( state => state.id !== action.payload.id );
           localStorage.setItem('favourite_photos', JSON.stringify(currentItems));
           break;
        }
        
        case 'editToFavorite':{
            const index = currentItems.findIndex(p => p.id === action.payload.id)
            console.log(action.image)
            currentItems[index].description = action.payload.description;
            localStorage.setItem('favourite_photos', JSON.stringify(currentItems));
            break;
        }
        case 'date':
            console.log('estoy en data');
            newCurrentItems.sort((a,b) => a.date - b.date);
            localStorage.setItem('favourite_photos', JSON.stringify(newCurrentItems));  
            break;
        case 'width': 
            console.log('estoy en Width');
            newCurrentItems.sort((a,b) => a.width - b.width);
            localStorage.setItem('favourite_photos', JSON.stringify(newCurrentItems));  
            break;
        case 'height':
            console.log('estoy en height');
            newCurrentItems.sort((a,b) => a.height - b.height);  
            localStorage.setItem('favourite_photos', JSON.stringify(newCurrentItems));  
            break;
        case 'likes':
            console.log('estoy en Likes');
            newCurrentItems.sort((a,b) => b.likes - a.likes);  
            localStorage.setItem('favourite_photos', JSON.stringify(newCurrentItems));  
            break;
        default: {
            return currentItems;
        }
    }
}
    