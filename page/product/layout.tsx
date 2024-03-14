"use client";
import { LeftSideBar } from "@/components/LeftSideBar";
import { BlackHeader } from "@/components/header/BlackHeader";
import { sideBarLines } from "@/constants";
import { Button, Container, Stack, Typography } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack width={"100vw"}>
      <BlackHeader />
      <Stack>
        <Stack direction={"row"} gap={2} bgcolor={"#ECEDF0"} width={"100%"}>
          <Stack
            paddingTop={3}
            sx={{ backgroundColor: "#fff" }}
            height={"100vh"}
            width={"15%"}
            minWidth={"200px"}
          >
            <LeftSideBar />
          </Stack>
          <Stack width={"85%"} pt={3} px={3} alignItems={"center"}>
            {children}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
