import { StoryType } from "@/util/types";
import { BsThreeDotsVertical } from "react-icons/bs";
import DeleteModal from "./DeleteModal";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";
interface PropsType {
  unit: StoryType;
  stories: StoryType[];
  setStories: Dispatch<SetStateAction<StoryType[] | undefined>>;
}

export default function Story(props: PropsType): JSX.Element {
  const { unit, stories, setStories } = props;
  const data = unit;

  return (
    <tr className="border-t-2 border-white">
      <td className="p-4">{data._id.slice(0, 5)}...</td>
      <td>{data.title}</td>
      <td>
        <picture>{data.province}</picture>
      </td>

      <td>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle className="toggle">
              <BsThreeDotsVertical />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href={`/stories/story/${data._id}`}>
                <Button className="button">засварлах</Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <DeleteModal
                  stories={stories}
                  setStories={setStories}
                  id={data._id}
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </td>
    </tr>
  );
}
