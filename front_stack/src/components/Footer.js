import React from "react"
import { Box, Stack, Typography } from "@mui/material"
import Logo from "../assets/images/Logo.png"

const Footer = () => (
	<Box mt="80px" bgcolor="#DCDCDC">
		<Stack
			gap="40px"
			sx={{ alignItems: "center" }}
			flexWrap="wrap"
			px="40px"
			pt="24px"
		>
			<img src={Logo} alt="logo" style={{ width: "100px", height: "100px" }} />
		</Stack>
		<Typography
			variant="h1"
			sx={{ fontSize: { lg: "12px", xs: "10px" } }}
			mt="41px"
			textAlign="center"
			pb="40px"
		>
			© Isaiah Essien - i.essien@alustudent.com
		</Typography>
	</Box>
)

export default Footer
