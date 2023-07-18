import SingleQuestion from "./SingleQuestion"

const Questions = (props) => {
  return (
    <section className="container">
        <h1>Questions</h1>
        {
            props.questions.map((question)=>{
                return (
                  <SingleQuestion
                    key={question.id}
                    {...question}
                    activeId={props.activeId}
                    toggleQuestion={props.toggleQuestion}
                  />
                );
            })
        }
    </section>
  )
}
export default Questions