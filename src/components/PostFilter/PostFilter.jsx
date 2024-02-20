import React from "react"
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
                placeholder="search post..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort by"
                options={[
                    { value: "title", name: "title" },
                    { value: "body", name: "body" },
                ]}
            />
        </div>
    )
}

export default PostFilter