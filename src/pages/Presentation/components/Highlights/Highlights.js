// Copyright ERLDC Website
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import sampleMouImage from "assets/images/mou_iit2.jpg";
import { Height } from "@mui/icons-material";

function BuiltByDevelopers() {
  const bgImage = sampleMouImage;
  // "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { gradients },
        }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.7),
            rgba(gradients.dark.state, 0.7)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        
      }
    }
    >
      <Container>
        <Grid container item xs={12} lg={9} sx={{ ml: { xs: 0, lg: 6 }}}>
          <MKTypography variant="h5" color="white" fontWeight="bold">
            Stay tuned with the events and highlights of ERLDC{" "}
          </MKTypography>
          {/* <MKTypography variant="h1" color="white" mb={1}>
            MoU with IIT Bhubaneswar
          </MKTypography> */}
          <MKTypography
            variant="body1"
            color="white"
            opacity={0.8}
            // mb={7}
            // mt={2}
            sx={{fontSize: { xs: "12px", sm: "14px", md: "16px" }, mb: { xs: 5, md: 6.5 },mt: { xs: 1, md: 2.5 } }}
          >
            An MoU has been signed with Indian Institute Of Technology (IIT)
            Bhubaneswar for Research & Development work in the field of Cyber
            Security
          </MKTypography>
          <MKTypography
            component="a"
            href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            See more Highlights{" "}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
