import React, { useState } from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { Card } from "primereact/card";

/**
 * PleaseSignIn Component
 * This component renders a message prompting the user to sign in to access a restricted page.
 *
 * @param {Object} props - Component properties
 * @param {Array} props.breadcrumb - Breadcrumb navigation data
 * @param {string} props.redirectionURL - URL to redirect to after sign-in
 */
export default function PleaseSignIn({ breadcrumb, redirectionURL }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <BaseLayout breadcrumb={[]}>
      <Card className="shadow-3 p-5 text-center w-full max-w-md mx-400">
        <strong>RTI</strong> or <strong>Right to Information Act</strong> is an
        initiative that was taken in 1995 by the Department of Personnel and
        Training, Ministry of Personnel, Public Grievances and Pensions as a
        step forward to ensure the citizen of India have access to Government
        information. Every individual can ask for any information and they are
        rightful to receive a timely response. This is a major step which aims
        to promote transparency in government institutions in India. This
        section of ERLDC website along with other relevant sections contains
        information as required to be published under Section 4 (1) (b) of the
        Act. Compliance under Section 4 (1)(b) of Right to Information Act, 2005
        <br />
        <a
          className="btn btn-primary"
          href="https://erldc.in/wp-content/uploads/2018/07/Information_Available_in_Electronic_Form.pdf"
          target="_blank"
          rel="noopener"
        >
          INFORMATION AVAILABLE IN ELECTRONIC FORM
        </a>
        <br />
        <a
          className="btn btn-primary"
          role="button"
          href="https://erldc.in/wp-content/uploads/2024/04/Emp-List-04.04.2024.pdf"
          target="_blank"
          rel="noopener"
        >
          A DIRECTORY OF ITS OFFICERS EMPLOYEES.
        </a>
        <br />
        <a
          className="btn btn-primary"
          role="button"
          href="https://erldc.in/wp-content/uploads/2019/07/THE-NAMES-DESIGNATIONS-OTHER-PARTICULARS-OF-THE-PUBLIC-INFORMATION-OFFICERS-04th-july.pdf"
          target="_blank"
          rel="noopener"
        >
          THE NAMES, DESIGNATIONS AND OTHER PARTICULARS OF THE PUBLIC
          INFORMATION OFFICERS.
        </a>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          REQUEST AND REPLY UNDER RTI ACT 2005
        </button>
        {isExpanded && (
          <div className="mt-3">
            <a
              href="https://erldc.in/wp-content/uploads/2018/07/RTI-REQUEST-REPLY-2016-17.pdf"
              target="_blank"
              rel="noopener"
              className="d-block"
            >
              RTI REQUEST REPLY 2016-17
            </a>
            <a
              href="https://erldc.in/wp-content/uploads/2018/07/RTI-REQUEST-REPLY-2017-18.pdf"
              target="_blank"
              rel="noopener"
              className="d-block"
            >
              RTI REQUEST REPLY 2017-18
            </a>
            <a
              href="https://erldc.in/wp-content/uploads/2019/07/RTI-Monthly-Report-2018-19.pdf"
              target="_blank"
              rel="noopener"
              className="d-block"
            >
              RTI REQUEST REPLY 2018-19
            </a>
            <a
              href="https://erldc.in/wp-content/uploads/2019/07/RTI-Monthly-Report-2019-20.pdf"
              target="_blank"
              rel="noopener"
              className="d-block"
            >
              RTI REQUEST REPLY 2019-20
            </a>
          </div>
        )}
        <div style={{ height: 220, width: 100, display: "block" }}></div>
        &nbsp;
      </Card>
    </BaseLayout>
  );
}
