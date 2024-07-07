export default function (){

    return
}

export async function  getStaticProps ({params}) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const repo = await res.json()
    return { props: {
        todo: data
    },
 }
  }