import { Delete, Edit, Href, Update } from "@/Constant";
import { AddProjectAndUpload } from "@/Data/Applications/Users";
import { Button } from "reactstrap";

const AddProjectsAndUploadTableBody = () => {
  return (
    <tbody>
      {AddProjectAndUpload.map((data, index) => (
        <tr key={index}>
          <td className="add-project"><a className="text-inherit" href={Href}>Untrammelled Prevents</a></td>
          <td>{data.date}</td>
          <td><span className={`status-icon ${data.statusClass}`} /> {data.status}</td>
          <td>{data.price}</td>
          <td className="text-end">
            <Button color="primary" tag="a" size="sm" href={Href}><i className="fa fa-pencil" /> {Edit}</Button>
            <Button className="mx-2" color="info" tag="a" size="sm" href={Href}><i className="fa fa-link" /> {Update}</Button>
            <Button color="danger" tag="a" size="sm" href={Href}><i className="fa fa-trash" /> {Delete}</Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AddProjectsAndUploadTableBody;
