export interface AddressDto {
  addrId: number;
  isDef: boolean;
  addrNick: string;
  recvName: string;
  addrZip: string;
  addrRoad: string;
  addrDetl: string;
  recvPhone: string;
  recvReq: string;
}

export interface CreateAddressDto {
  isDef: boolean;
  addrNick: string;
  recvName: string;
  addrZip: string;
  addrRoad: string;
  addrDetl: string;
  recvPhone: string;
  recvReq: string;
}

export interface UpdateAddressDto {
  addrNick: string;
  isDef: boolean;
  recvName: string;
  addrZip: string;
  addrRoad: string;
  addrDetl: string;
  recvPhone: string;
  recvReq: string;
}
