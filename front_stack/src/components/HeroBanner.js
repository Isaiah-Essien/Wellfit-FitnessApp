import React from "react"
import { Box, Stack, Typography } from "@mui/material"

import HeroBannerImage from "../assets/images/banner1.jpg"

const HeroBanner = () => (
	<Box
		sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
		position="relative"
		p="20px"
	>
		<Typography color="#008000" fontWeight="600" fontSize="26px">
			WellFit Fitness
		</Typography>
		<Typography
			fontWeight={700}
			sx={{ fontSize: { lg: "44px", xs: "40px" } }}
			mb="23px"
			mt="30px"
		>
			Elevate your <br /> Fitness
		</Typography>
		<Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
			Check out recommended exercises
		</Typography>
		<Stack>
			<a
				href="#exercises"
				style={{
					marginTop: "45px",
					textDecoration: "none",
					width: "200px",
					textAlign: "center",
					background: "#008000",
					padding: "14px",
					fontSize: "22px",
					textTransform: "none",
					color: "white",
					borderRadius: "4px",
				}}
			>
				See Exercises
			</a>
		</Stack>
		<Typography
			fontWeight={600}
			color="#008000"
			sx={{
				opacity: "0.1",
				display: { lg: "block", xs: "none" },
				fontSize: "200px",
			}}
		>
			WellFit
		</Typography>
		<img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
	</Box>
)

export default HeroBanner
