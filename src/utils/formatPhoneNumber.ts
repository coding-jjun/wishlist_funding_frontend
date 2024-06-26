const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};

export default formatPhoneNumber;
