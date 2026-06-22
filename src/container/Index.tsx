import { useEffect, useState } from "react";
import posts from "../assets/posts.json"
import Article from "../components/Article";
import Search from "../components/Search"

interface Post {
    title: string;
    content: string;
    tags?: string[];
}

function Index() {
    const [posts, setPosts] = useState<Post[]>([])
    const searchChange = (value) => {
        setPosts(value.target.value)
        
    }

    useEffect(() => {
        const fetchData = async () => {
            const postsData = posts as Post[]
            console.log(typeof postsData);
            setPosts(postsData)
        }
        fetchData()
    }, [])

    return (
        <>
            <Search onSearchChange={searchChange}/>
            {
                posts?.map((props, index) => (
                    <Article key={index} {...props} />
                ))
            }
        </>
    )
}
export default Index