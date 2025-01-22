import { Href, ImagePath, JobCancelButton, JobPersonalDetails, JobSubmitButton, JobUIDesigner, JobUploadYourFiles, JobYourEducation, JobYourExperience, StarColorTwo } from "@/Constant";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import PersonalDetail from "./PersonalDetail";
import EducationClass from "./Education";
import ExperienceClass from "./Experience";
import UploadFileClass from "./UploadFile";

const JobApply = () => {
  return (
    <Card>
      <div className='job-search'>
        <CardBody className='pb-0'>
          <div className='d-flex'>
            <img className='img-40 b-r-0 img-fluid  m-r-20' src={`${ImagePath}/job-search/1.png`} alt='' />
            <div className='flex-grow-1'>
              <h6 className='f-w-600'>
                <Link href={Href}>{JobUIDesigner}</Link>
                <span className='pull-right'>
                  <Button color='primary'>
                    <span>
                      <i className='fa fa-check text-white' />
                    </span>{" "}
                    Save this job
                  </Button>
                </span>
              </h6>
              <p>
                Save this job <Rating className='ms-1' fillColor={StarColorTwo} initialValue={Math.random() * 5} size={15} />
              </p>
            </div>
          </div>
          <div className='job-description'>
            <h5 className='mb-0'>{JobPersonalDetails}</h5>
            <PersonalDetail />
            <h5 className='mb-0'>{JobYourEducation}</h5>
            <EducationClass />
            <h5 className='mb-0'>{JobYourExperience}</h5>
            <ExperienceClass />
            <h5 className='mb-0'>{JobUploadYourFiles}</h5>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Button color='primary mx-1'>{JobSubmitButton}</Button>
          <Button color='light'>{JobCancelButton}</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobApply;
