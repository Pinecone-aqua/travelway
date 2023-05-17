import { TravelType } from "@/util/types";
import { Button, Dropdown } from "react-bootstrap";

interface PropType {
  unit: TravelType;
}
export default function Travel(props: PropType): JSX.Element {
  const data = props.unit;
  return (
    <>
      <tr className="border-t-2 border-gray-300">
        <td className="p-4">{data._id.slice(0, 5)}...</td>
        <td className="px-4">{data.title}</td>

        <td className="px-4">{data.createdAt}</td>
        <td className="px-4">
          <div className="relative">
            <Dropdown>
              <Dropdown.Toggle className="toggle">{}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href={`travel/${data._id}`}>
                  <Button className="longbutton">Дэлгэрэнгүй</Button>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Button className="longbutton">Устгах</Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </td>
      </tr>
    </>
  );
}
