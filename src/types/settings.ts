export interface DeliveryAddress {
  id: number;
  company_name: string;
  org_number: string;
  contact_person: string;
  street: string;
  postal_code: string;
  city: string;
  country: string;
  is_default: boolean;
}

export interface NewAddress {
  company_name: string;
  org_number: string;
  contact_person: string;
  street: string;
  postal_code: string;
  city: string;
  country: string;
}

export interface ProfileFormData {
  username: string;
  email: string;
  phone: string;
  personalNumber: string;
  streetAddress: string;
  postalCode: string;
  city: string;
}

export interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  auctionUpdates: boolean;
  newMessages: boolean;
}

export interface AuctionSettings {
  defaultBidIncrement: string;
  autoBidding: boolean;
  maxAutoBidAmount: string;
  preferredAuctionType: string;
}

export interface EconomySettings {
  paymentMethod: string;
  autoPayment: boolean;
  monthlyBudget: string;
  notifyThreshold: string;
}