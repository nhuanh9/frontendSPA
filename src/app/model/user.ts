import {Role} from './role';


export interface User {
  id?: number;
  username: string;
  password: string;
  confirmPassword?: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  enabled?: boolean;
  roles?: [Role];
}
