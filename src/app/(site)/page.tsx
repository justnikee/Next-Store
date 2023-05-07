"use client"

export default function Home() {
    
    const makeApiCall = async () => {
        await fetch('api/posts', {
             method: "POST",
            body: JSON.stringify({ hello: "there" })
})
    }


    return (
        <>
            <button onClick={makeApiCall} >Post</button>
        </>
)
}