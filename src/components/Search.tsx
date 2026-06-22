import { useState } from "react"

function Search(props) {

    const [search, setSearch] = useState("")
    
    const onSearchChange = (event) => {
        setSearch(event.target.value)
        props.onSearchChange(event.target.value)
    }

    return (
        <>
            <div>
                Cari artikel : <input onChange={onSearchChange}></input>
            </div>
            <br />
            <small>Ditemukan {} data dengan pencarian kata {search}</small>
        </>
    )
}

export default Search