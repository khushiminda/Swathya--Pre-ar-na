/**
 * =========================================================
 * React - v2.2.0
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)
 *
 * The above copyright notice and this permission notice shall be included in all copies
 * or substantial portions of the Software.
 */

// @mui material components
import Card from "@mui/material/Card";

// React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          User Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="The IT Girl"
            company="Netapp"
            email="khushiminda.smith@cbrnresponse.com"
            vat="Netapp-123456"
          />
          <Bill
            name="The DIVA Girl"
            company="Netapp"
            email="pariminda.smith@cbrnresponse.com"
            vat="Netapp-003456"
          />
          <Bill
            name="The Goth Girl"
            company="Netapp"
            email="sonalminda.smith@cbrnresponse.com"
            vat="Netapp-098734"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
