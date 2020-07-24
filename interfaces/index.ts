// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type Ppl = {
  id: number
  username: string
  email: string 
  password: string
  role: string
  status: boolean
  createdAt: string
  updatedAt: string
}

export type Product = {
  id: number
  name: string
}

