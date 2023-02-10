const Card = ({ data, remove, done }) => {
  return (
    <div key={data.id} className="compo-box">
      제목:{data.todoTitle}
      <br />
      할일:{data.todoContent}
      <br />
      <button onClick={() => done(data.id)}>
        {data.isDone ? "되돌리기" : "완료"}
      </button>
      <button onClick={() => remove(data.id)}>삭제</button>
    </div>
  );
};

export default Card;
