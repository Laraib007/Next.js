// export default function (props){
//     const {todo} = props;
//     if(!todo){
//         return <div>Loading......</div>
//     }
//     return (
//         <div>{todo.title}</div>
//     )
// }

// export async function  getStaticProps ({params}) {
//     const {todoId} = params;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
//     const data = await res.json()
//     return { 
//       props: {
//         todo: data
//     },revalidate: 10,
//  }
//   }

//   export async function getStaticPaths ()  {
//     return {
//       paths: [
//         {
//           params: {
//             todoId: "1",
//           },
//         }, // See the "paths" section below
//       ],
//       fallback: "blocking", // false or "blocking"
//     }
//   }