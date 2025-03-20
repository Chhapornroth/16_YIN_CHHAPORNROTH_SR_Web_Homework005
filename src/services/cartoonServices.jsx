export const getAllCartoonGenres = async () => {
    try{
        const response = await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre");
        return response.json();
    }catch(error){
        console.error(error);
    }
}

export const findAllComics = async () => {
    try{
        const response = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");
        return response.json();
    }catch(error){
        console.error(error);
    }
}

export const findComicBookById = async (id) => {
    try{
        const response = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${id}`);
        return response.json();
    }catch(error){
        console.error(error);
    }
}

export const findComicsByTitle = async (title) => {
    try {
        const response = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?search=${title}`);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}