import { useState, type ChangeEvent } from "react"

interface SearchProps {
    onSearchChange: (value: string) => void
}

function Search(props: SearchProps) {

    const [search, setSearch] = useState("")
    
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        props.onSearchChange(event.target.value)
    }

    return (
        <>
            <div>
                Cari artikel : <input onChange={onSearchChange}></input>
            </div>
            <br />
            <small>Ditemukan {} data dengan pencarian kata : {search}</small>
        </>
    )
}

export default Search