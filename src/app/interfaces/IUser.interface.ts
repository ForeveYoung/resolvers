import { IAddress } from './IAddress.interface';
import { ICompany } from './ICompany.interface';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
