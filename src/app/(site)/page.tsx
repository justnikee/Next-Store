
export default async function Home() {
    const res = await fetch('api/createProducts')
    const data = res.json()
    console.log(data)
    return (
        <>
           Home
        </>
)
}