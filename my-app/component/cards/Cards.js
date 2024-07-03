
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos")
  const labi = await res.json()
  console.log(res)
  return { props: { labi, } }

}


const Cards = ({labi})=> {
        return (
          <div>
            {labi && labi.map((labiP) => {
              {console.log(labiP.id)}
return(<h1 key={labiP.id}>{labiP.id} 234</h1>
  
)

})}
            
          </div>
        );
      }
      export default Cards