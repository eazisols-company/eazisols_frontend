"use client";
import Image from "next/image";
import { Box, Typography, Container, Link } from "@mui/material";
import culture from "@/app/assets/culture.jpg";
import { useRouter } from "next/navigation";

export default function CultureSection() {
  const router = useRouter();
  return (
    <Container style={{ maxWidth: "1350px" }}>
      <Box component="section" py={10}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="flex-start"
          gap={5}
        >
          {/* Left Section - Text Content */}
          <Box flex={1}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
            {`A Diverse Culture & Teams`}
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
            {`eazisols is a place where innovators come to learn, discover,
              and grow together. We are made up of bold, creative thinkers from
              all walks of life, backgrounds, and experiences. Our strength lies
              in our diversity — of people, perspectives, and ideas. We believe
              that an open, inclusive culture fuels innovation and helps us
              deliver exceptional results for our clients. By fostering an
              environment where everyone feels valued and empowered, we create
              space for collaboration, creativity, and continuous learning. At
              eazisols, diversity isn't just a value — it's how we grow
              stronger, together.`}
            </Typography>

            <Link
              href="/careers"
              underline="none"
              sx={{
                fontWeight: 500,
                fontSize: 16,

                display: "inline-block",
              }}
              onClick={() => router.push("/careers")}
            >
              {`Learn more about our careers with us →`}
            </Link>
          </Box>

          {/* Right Section - Image */}
          <Box
            flex={1}
            sx={{
              width: "100%",
              maxWidth: 700,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src={culture.src}
              alt="Team Culture"
              width={700}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
