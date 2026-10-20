import { newestRange } from "../utils/date-utils"
import { BadgeNew } from "./BadgeNew"

function Article(props: any) {

    const onClickEvent = e => {
        
    }
    return (
        <>
            <article onClick={onClickEvent}>
                <h3>
                    {props.title} 
                    {newestRange(props.created_at) && <BadgeNew text="new"/>}</h3> 
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