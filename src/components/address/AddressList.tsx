import React, { useMemo, useState } from "react";
import { Button } from "@mui/material";
import AddAddress from "@/components/address/AddAddress";
import AddressWrapper from "@/components/address/AddressWrapper";
import { AddressDto } from "@/types/Address";
import EditAddress from "@/components/address/EditAddress";

interface Props {
  addresses: AddressDto[] | undefined;
  onSelectAddress: (address: AddressDto) => void;
}

export default function AddressList({ addresses, onSelectAddress }: Props) {
  const [showAddAddress, setShowAddAddress] = useState<boolean>(false);
  const [showEditAddress, setShowEditAddress] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<AddressDto | null>(
    null,
  );

  const handleOpenAdd = () => {
    setShowAddAddress(true);
  };

  const handleCloseAdd = () => {
    setShowAddAddress(false);
  };

  const handleOpenEdit = (address: AddressDto) => {
    setSelectedAddress(address);
    setShowEditAddress(true);
  };

  const handleCloseEdit = () => {
    setShowEditAddress(false);
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
        <EditAddress address={selectedAddress} onClose={handleCloseEdit} />
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
          {sortedAddresses?.map((addr) => (
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
