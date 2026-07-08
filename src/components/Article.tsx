import { newestRange } from "../utils/date-utils"

function Article(props: any) {
    return (
        <>
            <article>
                <h3>
                    {props.title} 
                    {newestRange(props.created_at) && <span className="badge-new">New</span>}</h3> 
                <p>{props.content}</p>
                <p>Tags: {
                        props.tags.map((tag: string, index: number) => {
                            return <span key={index}>{
                                    index == props.tags.length - 1 ? tag : tag + ", "
                                }</span>
                        })
                    }
                </p>
            </article>
        </>
    )
}

export default Article