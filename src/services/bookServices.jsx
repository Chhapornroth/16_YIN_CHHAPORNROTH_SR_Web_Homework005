export const getAllBookCategories = async () => {
    try {
        const response = await fetch("https://nextjs-homework005.vercel.app/api/book_category");
        return response.json();
    } catch (error){
        console.error(error);
    }
}

export const getAllBooks = async () => {
    try {
        const response = await fetch("https://nextjs-homework005.vercel.app/api/book");
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export const findBookById = async (id) => {
    try {
        const response = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}