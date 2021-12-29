import React from "react";

import { FilterVintage } from "@material-ui/icons";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

function DevPanels() {
  return (
    <div className="dev-panels">
      
      <Accordion className="accordion">
        <AccordionSummary className="accordion-title" expandIcon={<FilterVintage />}>
          Deep Core Meditation Workshop
        </AccordionSummary>

        <AccordionDetails>
          This is open only to members at a cost of £10 per session and held
          every other week 7.30pm to 9.30pm.
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion">
        <AccordionSummary expandIcon={<FilterVintage />}>
          Angel and Fairy Cards Sessions
        </AccordionSummary>

        <AccordionDetails>
          Using the ancient art of Tarot Cards and updating this to incorporating the
          beautiful, colourful Angel and Fairy Cards. We use the
          cards in our guided layouts to interpret and evoke intuition and
          psychic abilities. You will be surprised at how quickly you adapt to
          this art and how accurate these type of readings become. In a friendly
          and relaxed atmosphere, explore your potential by reading when you are
          ready for our interested sitters.
          <br></br>
          <br></br>
          This will take place the 1st Saturday of every month from 14:00 to
          15:30 and open to non-members at a cost of £5 per session.
          <br></br>
          Please let us know in advance, so we can secure your place.
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion">
        <AccordionSummary expandIcon={<FilterVintage />}>
          Becoming a Healer
        </AccordionSummary>

        <AccordionDetails>
          This takes place every two months and it is open to any previous
          students and future qualifying students.
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion">
        <AccordionSummary expandIcon={<FilterVintage />}>
          Advanced Healing
        </AccordionSummary>

        <AccordionDetails>
          The Lileth offers all its members the opportunity to become fully
          qualified healers with a recognised organisation.
          <br></br>
          <br></br>
          You can only train as a healer if you are a member. Annual
          membership at the Lileth is £50 per annum which also covers your
          insurance. 
          <br></br>
          If only training as a healer, £10 per session held once
          a month on a Wednesday evening. You will also be required to assist as
          often as possible at the Saturday Healing under the guidance of a
          fully qualified healer.
          <br></br>
          <br></br>
          Other costs included for trainee healing are yearly membership of £16
          with the Essex Healers Association (EHA) which is affiliated to The
          Healer Practitioner Association International (HPAI) and a one off £10
          fee for the training manual and personal profile record.
          <br></br>
          <br></br>
          You will find we provide a very balanced programme to qualify as a
          healer at a very reasonable cost.
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion">
        <AccordionSummary expandIcon={<FilterVintage />}>
          Meditation Course
        </AccordionSummary>

        <AccordionDetails>
          What is Meditation?
          <br></br>
          <br></br>
          "Meditation is considered to be a prolonged state of concentration"
          <br></br>
          <br></br>
          There is a misconception that we must clear our mind and not think of
          anything, the brain is mainly a busy thinking organ and therefore can
          never really be empty. This is the reason why so many give up
          meditating, as they try to empty the mind, fail and then label
          meditation to be too hard. Remember you are a living person who
          processes thought every second of your day ,so each of you will fine
          your own pathway to the meditation that suits you.
          <br></br>
          <br></br>
          You will be taught the following:
          <br></br>
          <br></br>
          1. Awareness <br></br>
          2. Concentration <br></br>
          3. Willpower
          <br></br>
          <br></br>
          This is a focus that your brain will find the easiest to absorb and
          therefore meditation will follow in a progressive manner.
          <br></br>
          <br></br>
          The course is designed for people who wish to look inward allowing
          themselves to make changes in their lives that suit them. Through this
          process you'll learn about controlling your awareness, which in turn
          will allow you to direct energy towards manifesting what you need in
          your life.
          <br></br>
          <br></br>
          The duration of the course is for 2 hours a week for 12 weeks If
          you're interested in this course, please contact us via Email.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DevPanels;
