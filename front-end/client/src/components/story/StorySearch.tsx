import { useRouter } from "next/router";

export default function StorySearch(): JSX.Element {
  const router = useRouter();
  const pathname = "/stories";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SearchHandler(e: any) {
    e.preventDefault();
    router.push({
      pathname,
      query: { ...router.query, search: e.target.story.value.trim() },
    });
    console.log(e.target.value);
  }
  return (
    <>
      <form onSubmit={SearchHandler}>
        <input type="text" className="border-2 p-2 rounded-lg " name="story" />
        <button type="submit" className="border-2 p-2 rounded-lg">
          Search
        </button>
      </form>
    </>
  );
}
