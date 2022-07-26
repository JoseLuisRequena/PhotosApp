
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
            currentItems[index].description = action.payload.description;
            localStorage.setItem('favourite_photos', JSON.stringify(currentItems));
            break;
        }
        case 'date':
            newCurrentItems.sort((a,b) => a.date - b.date);
            localStorage.setItem('favourite_photos', JSON.stringify(newCurrentItems));  
            break;
        case 'width': 
            newCurrentItems.sort((a,b) => a.width - b.width);
            localStorage.setItem('favourite_photos', JSON.stringify(newCurrentItems));  
            break;
        case 'height':
            newCurrentItems.sort((a,b) => a.height - b.height);  
            localStorage.setItem('favourite_photos', JSON.stringify(newCurrentItems));  
            break;
        case 'likes':
            newCurrentItems.sort((a,b) => b.likes - a.likes);  
            localStorage.setItem('favourite_photos', JSON.stringify(newCurrentItems));  
            break;
        default: {
            return currentItems;
        }
    }
}
    