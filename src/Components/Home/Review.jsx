import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaAngleDown } from "react-icons/fa";

const Review = () => {
    return (
        <div className='bg-slate-300'>
          <h3 className='md:text-4xl text-lg text-center font-bold text-red-700 md:pt-6 pt-1'>Frequently Asked Questions (FAQ)</h3>
          <div className='md:p-24 p-4 '>
          <Accordion >
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            
          >
            <Typography>Question 1. Are the animal toys at Kids Heaven suitable for all ages?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes, at Kids Heaven, we offer a wide range of animal toys suitable for children of all ages. Whether you have a toddler, preschooler, or older child, you`ll find toys specifically designed to match their developmental needs and interests.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Question 2. Can I find endangered or rare animal toys at Kids Heaven?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Kids Heaven is committed to promoting wildlife conservation and responsible sourcing. While we do not offer toys representing endangered or rare species, we provide a diverse selection of animal toys that highlight the beauty and wonder of the animal kingdom, helping children develop an appreciation for wildlife and nature.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Question 3. What materials are the animal toys made of at Kids Heaven?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            At Kids Heaven, we prioritize the safety and quality of our toys. Our animal toys are crafted from child-friendly and durable materials such as soft plush fabric, non-toxic plastics, and eco-friendly materials whenever possible. Rest assured that our toys undergo rigorous testing to meet safety standards and ensure a delightful play experience for your child.
            </Typography>
          </AccordionDetails>
        </Accordion>
          </div>
     
      </div>
    );
};

export default Review;