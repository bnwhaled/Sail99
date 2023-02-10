const Addbox = ({
  title,
  titlechange,
  content,
  contentchange,
  addbtnchange,
  setcontent,
  settitle,
}) => {
  return (
    <div className="todoaddbox">
      <div>
        Adding Todo List
        <br />
        제목
        <input value={title} onChange={titlechange} />
        <br />
        내용
        <input value={content} onChange={contentchange} />
        <br />
        {/* 인풋추가하기버튼기능 
          클릭시 컴포추가, input초기화 */}
        <button onClick={() => addbtnchange(setcontent(""), settitle(""))}>
          추가하기
        </button>
      </div>
    </div>
  );
};

export default Addbox;
