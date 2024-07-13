import { Address } from "@/types/Address";
import { Box, Button, Stack } from "@mui/material";
import AddressHeader from "@/components/address/AddressHeader";
import AddressContent from "@/components/address/AddressContent";
import React from "react";

interface Props {
  address: Address;
  onSelectAddress: (address: Address) => void;
  onEditAddress: (address: Address) => void;
}
export default function AddressWrapper({
  address,
  onSelectAddress,
  onEditAddress,
}: Props) {
  {
    /*TODO: 사용자 기능 추가되면 userId 수정 필요*/
  }
  const { isDef, addrNick, recvName, addrRoad, addrDetl, recvPhone } = address;

  const handleSelect = () => {
    onSelectAddress(address);
  };

  const handleEdit = () => {
    onEditAddress(address);
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      sx={{ pb: 3, width: "100%", position: "relative" }}
    >
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        sx={{ mt: 3, mb: 9 }}
      >
        <div style={{ flexGrow: 9 }} onClick={handleSelect}>
          <AddressHeader addrNick={addrNick} isDef={isDef} />
          <AddressContent
            recvName={recvName}
            addrRoad={addrRoad}
            addrDetl={addrDetl}
            recvPhone={recvPhone}
          />
        </div>
        <Button
          variant="contained"
          sx={{ flexGrow: 1, marginLeft: 1, mt: 2, borderRadius: 25 }}
          onClick={handleEdit}
        >
          수정
        </Button>
      </Box>
    </Stack>
  );
}
