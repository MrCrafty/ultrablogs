import React from 'react'

type BlogItemProps = {
    title: string,
    categories: { title: string }[],
}

const BlogItem = (data: BlogItemProps) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <ul>
                {data.categories?.map((item, index) => <li key={index}>{item?.title}</li>)}
            </ul>
        </div>
    )
}

export default BlogItem