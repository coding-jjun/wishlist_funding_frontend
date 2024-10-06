"use client";
import { Button, IconButton, Typography } from "@mui/material";
import AddressWrapper from "@/components/address/AddressWrapper";
import React, { useMemo } from "react";
import { AddressDto } from "@/types/Address";
import useAddressesQuery from "@/query/useAddressesQuery";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { TopFixedStack } from "@/components/layout/action-bar/TopFixedStack";
import { useRouter } from "next/navigation";

export default function AddressPage() {
  const { data: addresses } = useAddressesQuery();

  const handleOpenAdd = () => {
    router.push("/setting/address/new");
  };

  const handleOpenEdit = (address: AddressDto) => {
    // setSelectedAddress(address);
    // setShowEditAddress(true);
    router.push(`/setting/address/${address.addrId}`);
  };

  const sortedAddresses = useMemo(() => {
    if (!addresses) return [];

    const defaultAddress = addresses.find((addr) => addr.isDef);
    const otherAddresses = addresses
      .filter((addr) => !addr.isDef)
      .sort((a, b) => b.addrId - a.addrId);

    return defaultAddress
      ? [defaultAddress, ...otherAddresses]
      : otherAddresses;
  }, [addresses]);

  const router = useRouter();

  return (
    <>
      <TopFixedStack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton onClick={() => router.back()}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography
          fontSize="20px"
          fontWeight={700}
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          배송지 관리
        </Typography>
      </TopFixedStack>
      <div style={{ padding: "10px", marginTop: "20px" }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleOpenAdd}
          sx={{ mb: 3 }}
        >
          새로운 주소 +
        </Button>

        {/*배송지 목록*/}
        {sortedAddresses?.map((addr) => (
          <AddressWrapper
            key={addr.addrId}
            address={addr}
            onSelectAddress={(address) => {
              router.push(`/address/${address.addrId}`);
            }}
            onEditAddress={handleOpenEdit}
          />
        ))}
      </div>
    </>
  );
}
