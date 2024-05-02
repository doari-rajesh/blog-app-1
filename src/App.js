import NavBar from "./components/common/NavBar/NavBar";
import NavLinks from "./components/common/NavBar/NavLinks";
import BlogContent from "./components/BlogContent";
import BlogsPostsContent from "./components/BlogsPostsContent";

function App() {
  return (
    <div className="w-11/12 mx-auto h-screen max-w-[1024px] font-serif">
      <NavBar />
      <div className="">
        <NavLinks />
        <BlogContent />
        <BlogsPostsContent/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maiores, totam facere vel, architecto in, assumenda sed laboriosam rerum fugit hic deserunt molestias? Facilis vero saepe iure. Animi, voluptas mollitia.
      </div>
    </div>
  );
}

export default App;
