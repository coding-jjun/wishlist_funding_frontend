import React, { useMemo, useState } from "react";
import { Button } from "@mui/material";
import AddAddress from "@/components/address/AddAddress";
import AddressWrapper from "@/components/address/AddressWrapper";
import { Address } from "@/types/Address";
import EditAddress from "@/components/address/EditAddress";

interface Props {
  addresses: Address[] | undefined;
  userId: number;
  onSelectAddress: (address: Address) => void;
}

export default function AddressList({
  addresses,
  userId,
  onSelectAddress,
}: Props) {
  const [showAddAddress, setShowAddAddress] = useState<boolean>(false);
  const [showEditAddress, setShowEditAddress] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const handleOpenAdd = () => {
    setShowAddAddress(true);
  };

  const handleCloseAdd = () => {
    setShowAddAddress(false);
  };

  const handleOpenEdit = (address: Address) => {
    setSelectedAddress(address);
    setShowEditAddress(true);
  };

  const handleCloseEdit = () => {
    setShowEditAddress(false);
  };

  return (
    <div
      style={{
        paddingLeft: 25,
        paddingRight: 25,
      }}
    >
      {/*배송지 추가*/}
      {showAddAddress ? (
        <AddAddress onClose={handleCloseAdd} />
      ) : showEditAddress && selectedAddress ? (
        <EditAddress
          userId={userId}
          address={selectedAddress}
          onClose={handleCloseEdit}
        />
      ) : (
        <div>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleOpenAdd}
            sx={{ mb: 3 }}
          >
            새로운 주소 +
          </Button>

          {/*배송지 목록*/}
          {addresses?.map((addr) => (
            <AddressWrapper
              key={addr.addrId}
              address={addr}
              onSelectAddress={onSelectAddress}
              onEditAddress={handleOpenEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
}
