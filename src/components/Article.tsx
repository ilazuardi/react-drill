function Article(props: any) {
    return (
        <>
            <article>
                <h3>{props.title}</h3>
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