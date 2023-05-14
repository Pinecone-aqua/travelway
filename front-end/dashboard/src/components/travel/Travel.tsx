import { TravelType } from "@/util/types";
import { Button, Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

interface PropType {
  unit: TravelType;
}
export default function Travel(props: PropType): JSX.Element {
  const data = props.unit;
  return (
    <>
      <tr className="border-t-2 border-white">
        <td className="p-4">{data._id.slice(0, 5)}...</td>
        <td>{data.title}</td>
        <td>
          <picture>{data.createdAt}</picture>
        </td>
        <td>...</td>
        <td>
          <div className="z-50">
            <Dropdown>
              <Dropdown.Toggle className="toggle">
                <BsThreeDotsVertical />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={`travel/${data._id}`}>
                  <Button className="button">Дэлгэрэнгүй</Button>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Button className="button">Дэлгэрэнгүй</Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </td>
      </tr>
    </>
  );
}
