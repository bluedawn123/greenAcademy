

export default async function Read(props){
  const response = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  const topic = await response.json();

  return(
    <div>
      <h2>글제목 : {topic.title}</h2>
      <p>parameter : {topic.body}</p>
    </div>
  )
}
