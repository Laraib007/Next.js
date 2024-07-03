
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json()
  return { props: { labi, } }
}


const   Cards=({labi})=> {
        return (
          <div>
            {labi && labi.map((labiP) => {
return(<h1 key={labiP.id}>{labiP.id} 234</h1>)

})}
            {console.log(labi)}
          </div>
        );
      }
      export default Cards