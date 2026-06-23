import { useEffect, useState } from "react";
import initialPosts from "../assets/posts.json"
import Article from "../components/Article";
import Search from "../components/Search"

interface Post {
    title: string;
    content: string;
    tags?: string[];
}

function Index() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const postsData = initialPosts as Post[]
            setPosts(postsData)
        }
        fetchData()
    }, [])

    const searchChange = (value: string) => {
        const filteredPosts = initialPosts.filter((item) => 
            item.title.toLowerCase().includes(value.toLowerCase()) || item.content.toLowerCase().includes(value.toLowerCase())
        )
        setPosts(filteredPosts)
    }

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