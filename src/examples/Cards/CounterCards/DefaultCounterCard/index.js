/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultCounterCard({ color, count, title, description, ...rest }) {
  return (
    <MKBox p={0.5} textAlign="center" lineHeight={1}>
      {/* <MKTypography variant="h2" color={color} textGradient>
        {count !== undefined && count !== null ? (
          <CountUp end={count} duration={1} {...rest} />
        ) : (
          <CountUp {...rest} />
        )}
      </MKTypography> */}

      <MKTypography variant="h2" color={color} textGradient>
        {typeof count === "number" ? (
          <CountUp end={count} duration={1} {...rest} />
        ) : (
          count // just show the plain string
        )}
    </MKTypography>


      {title && (
        <MKTypography variant="h5" mt={0} mb={0}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
