import { Funding } from "@/types/Funding";
import { User } from "@/types/User";
import { DonationStatus } from "@/types/DonationStatus";

export interface Donation {
  donId: number;
  funding: Funding;
  user: User;
  donationStatus: DonationStatus;
  orderId: string;
  donAmnt: number;
  regAt: Date;
  delAt: Date;
}
