// eslint-disable-next-line react/prop-types
export default function Blog({ title, content }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
    </>
  );
}
