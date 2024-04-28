import React, { useState } from "react";
import { Button } from "@mui/material";
import AddAddress from "@/components/AddAddress";

export default function AddressList() {
  const [showAddAddress, setShowAddAddress] = useState<boolean>(false);

  const handleOpen = () => {
    setShowAddAddress(true);
  };

  const handleClose = () => {
    setShowAddAddress(false);
  };

  return (
    <div style={{ width: 300, padding: 20, backgroundColor: "white" }}>
      {/*배송지 목록*/}

      {/*배송지 추가*/}
      {showAddAddress ? (
        <AddAddress onClose={handleClose} />
      ) : (
        <Button variant="outlined" onClick={handleOpen}>
          새 배송지 추가
        </Button>
      )}
    </div>
  );
}
