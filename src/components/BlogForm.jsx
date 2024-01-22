import { userContext } from "../context/userContext";
import { historyContext } from "../context/historyContext";

export default function BlogForm() {
  let { blogForm, setBlogForm } = userContext();
  const { setFormDataHistory } = historyContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blogForm);
    setFormDataHistory((prevHistory) => [...prevHistory, blogForm]);
    setBlogForm({ title: "", content: "" });
  };
  const handleTitle = (e) => {
    setBlogForm({
      ...blogForm,
      title: e.target.value,
    });
  };

  const handleContent = (e) => {
    setBlogForm({
      ...blogForm,
      content: e.target.value,
    });
  };

  return (
    <div className="container border m-3 p-3">
      <h3>Fill the title and form to add to the blog</h3>
      <form onSubmit={handleSubmit} name="blogForm">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={blogForm.title}
            onChange={handleTitle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            value={blogForm.content}
            onChange={handleContent}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
