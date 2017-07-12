export interface User{
  name:string,
  image:string,
  id:number,
  bio:string,
  age:number,
  projects:Project[]
}
export interface Project{
  title:string,
  id:number,
  year:string
}
